// NOAA Tides & Currents API Service - NO API KEY REQUIRED
interface NOAATideResponse {
  predictions: Array<{
    t: string; // Time in YYYY-MM-DD HH:MM format
    v: string; // Height value
    type: string; // 'H' for high, 'L' for low
  }>;
}

export interface TideData {
  time: string;
  height: number;
  type: 'High' | 'Low';
  timestamp: number;
}

export interface TideInfo {
  currentTide: {
    status: 'Rising' | 'Falling';
    nextTide: TideData;
    timeToNext: string;
  };
  todayTides: TideData[];
  tomorrowTides: TideData[];
  lastUpdated: number;
  location: string;
}

class TidesService {
  private readonly baseUrl = 'https://api.tidesandcurrents.noaa.gov/api/prod/datagetter';
  private readonly stationId = '9410230'; // Ensenada, Mexico
  private readonly location = 'Ensenada, Baja California';

  async getTideData(): Promise<TideInfo> {
    try {
      // Get today's and tomorrow's tides
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const todayStr = this.formatDateForAPI(today);
      const tomorrowStr = this.formatDateForAPI(tomorrow);

      // Fetch tide predictions for today and tomorrow
      const url = `${this.baseUrl}?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=${todayStr}&end_date=${tomorrowStr}&datum=MLLW&station=${this.stationId}&time_zone=lst_ldt&units=metric&interval=hilo&format=json`;

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`NOAA API error: ${response.status}`);
      }

      const data: NOAATideResponse = await response.json();

      if (!data.predictions || data.predictions.length === 0) {
        throw new Error('No tide data available');
      }

      // Process the tide data
      const allTides = data.predictions.map(prediction => ({
        time: this.formatTime(prediction.t),
        height: parseFloat(prediction.v),
        type: prediction.type === 'H' ? 'High' as const : 'Low' as const,
        timestamp: new Date(prediction.t).getTime()
      }));

      // Separate today's and tomorrow's tides
      const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
      const tomorrowStart = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate()).getTime();

      const todayTides = allTides.filter(tide => 
        tide.timestamp >= todayStart && tide.timestamp < tomorrowStart
      );

      const tomorrowTides = allTides.filter(tide => 
        tide.timestamp >= tomorrowStart
      );

      // Calculate current tide status
      const currentTide = this.calculateCurrentTideStatus(allTides);

      return {
        currentTide,
        todayTides,
        tomorrowTides,
        lastUpdated: Date.now(),
        location: this.location
      };

    } catch (error) {
      console.error('Error fetching tide data:', error);
      return this.getSimulatedTideData();
    }
  }

  private calculateCurrentTideStatus(tides: TideData[]): TideInfo['currentTide'] {
    const now = Date.now();
    
    // Find the next tide
    const futureTides = tides.filter(tide => tide.timestamp > now);
    const pastTides = tides.filter(tide => tide.timestamp <= now);

    if (futureTides.length === 0) {
      // Fallback if no future tides
      return {
        status: 'Rising',
        nextTide: tides[0] || this.getSimulatedTideData().todayTides[0],
        timeToNext: 'Unknown'
      };
    }

    const nextTide = futureTides[0];
    const lastTide = pastTides[pastTides.length - 1];

    // Determine if tide is rising or falling
    let status: 'Rising' | 'Falling' = 'Rising';
    
    if (lastTide) {
      // If last tide was high, we're falling; if low, we're rising
      status = lastTide.type === 'High' ? 'Falling' : 'Rising';
    } else {
      // If no past tide, determine by next tide type
      status = nextTide.type === 'High' ? 'Rising' : 'Falling';
    }

    // Calculate time to next tide
    const timeToNext = this.calculateTimeToNext(nextTide.timestamp);

    return {
      status,
      nextTide,
      timeToNext
    };
  }

  private calculateTimeToNext(timestamp: number): string {
    const now = Date.now();
    const diff = timestamp - now;
    
    if (diff <= 0) return 'Now';

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
  }

  private formatDateForAPI(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }

  private formatTime(timeString: string): string {
    const date = new Date(timeString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  private getSimulatedTideData(): TideInfo {
    // Fallback simulated data for Ensenada area
    const now = new Date();
    const todayTides: TideData[] = [
      {
        time: '6:30 AM',
        height: 0.2,
        type: 'Low',
        timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 30).getTime()
      },
      {
        time: '12:45 PM',
        height: 1.9,
        type: 'High',
        timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 45).getTime()
      },
      {
        time: '6:15 PM',
        height: 0.4,
        type: 'Low',
        timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 15).getTime()
      },
      {
        time: '11:50 PM',
        height: 1.7,
        type: 'High',
        timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 50).getTime()
      }
    ];

    const tomorrowTides: TideData[] = [
      {
        time: '7:15 AM',
        height: 0.3,
        type: 'Low',
        timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 7, 15).getTime()
      },
      {
        time: '1:30 PM',
        height: 1.8,
        type: 'High',
        timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 13, 30).getTime()
      },
      {
        time: '7:00 PM',
        height: 0.5,
        type: 'Low',
        timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 19, 0).getTime()
      }
    ];

    // Find next tide for current status
    const allTides = [...todayTides, ...tomorrowTides];
    const nextTide = allTides.find(tide => tide.timestamp > Date.now()) || todayTides[0];
    
    return {
      currentTide: {
        status: 'Rising',
        nextTide,
        timeToNext: this.calculateTimeToNext(nextTide.timestamp)
      },
      todayTides,
      tomorrowTides,
      lastUpdated: Date.now(),
      location: `${this.location} (Simulated)`
    };
  }

  getTideHeight(height: number): string {
    return `${height.toFixed(1)}m`;
  }

  getTideAdvice(currentStatus: 'Rising' | 'Falling', nextTide: TideData): string {
    if (currentStatus === 'Rising' && nextTide.type === 'High') {
      return 'Great time for swimming and water sports! 🏊‍♀️';
    } else if (currentStatus === 'Falling' && nextTide.type === 'Low') {
      return 'Perfect for tide pooling and beach walks! 🐚';
    } else if (nextTide.type === 'Low') {
      return 'Good fishing conditions ahead! 🎣';
    } else {
      return 'Ideal conditions for beach activities! 🏖️';
    }
  }

  isDataFresh(timestamp: number, maxAgeMinutes: number = 30): boolean {
    const now = Date.now();
    const ageMinutes = (now - timestamp) / (1000 * 60);
    return ageMinutes <= maxAgeMinutes;
  }
}

export const tidesService = new TidesService();
