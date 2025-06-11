(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_tools_PackingChecklist_tsx_9a60aa._.js", {

"[project]/src/components/tools/PackingChecklist.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>PackingChecklist
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const packingItems = [
    // Beach Essentials
    {
        id: 'sunscreen',
        name: 'Sunscreen (SPF 30+)',
        category: 'Beach Essentials',
        essential: true
    },
    {
        id: 'swimwear',
        name: 'Swimwear',
        category: 'Beach Essentials',
        essential: true
    },
    {
        id: 'beach-towels',
        name: 'Beach Towels',
        category: 'Beach Essentials',
        essential: true
    },
    {
        id: 'sunglasses',
        name: 'Sunglasses',
        category: 'Beach Essentials',
        essential: true
    },
    {
        id: 'hat',
        name: 'Sun Hat/Cap',
        category: 'Beach Essentials',
        essential: true
    },
    {
        id: 'flip-flops',
        name: 'Flip-flops/Sandals',
        category: 'Beach Essentials',
        essential: true
    },
    {
        id: 'water-bottle',
        name: 'Reusable Water Bottle',
        category: 'Beach Essentials',
        essential: true
    },
    // Camping Gear
    {
        id: 'tent',
        name: 'Tent (if not renting trailer)',
        category: 'Camping Gear',
        essential: true
    },
    {
        id: 'sleeping-bag',
        name: 'Sleeping Bag',
        category: 'Camping Gear',
        essential: true
    },
    {
        id: 'pillow',
        name: 'Pillow/Inflatable Pillow',
        category: 'Camping Gear',
        essential: true
    },
    {
        id: 'flashlight',
        name: 'Flashlight/Headlamp',
        category: 'Camping Gear',
        essential: true
    },
    {
        id: 'camping-chairs',
        name: 'Camping Chairs',
        category: 'Camping Gear',
        essential: false
    },
    {
        id: 'cooler',
        name: 'Cooler with Ice',
        category: 'Camping Gear',
        essential: false
    },
    {
        id: 'portable-grill',
        name: 'Portable Grill (if allowed)',
        category: 'Camping Gear',
        essential: false
    },
    // Clothing
    {
        id: 'casual-clothes',
        name: 'Casual Clothes',
        category: 'Clothing',
        essential: true
    },
    {
        id: 'warm-jacket',
        name: 'Warm Jacket (evenings)',
        category: 'Clothing',
        essential: true
    },
    {
        id: 'rain-gear',
        name: 'Rain Jacket/Poncho',
        category: 'Clothing',
        essential: false,
        seasonal: true
    },
    {
        id: 'extra-underwear',
        name: 'Extra Underwear',
        category: 'Clothing',
        essential: true
    },
    {
        id: 'comfortable-shoes',
        name: 'Comfortable Walking Shoes',
        category: 'Clothing',
        essential: true
    },
    // Food & Drinks
    {
        id: 'snacks',
        name: 'Snacks',
        category: 'Food & Drinks',
        essential: false
    },
    {
        id: 'drinking-water',
        name: 'Drinking Water',
        category: 'Food & Drinks',
        essential: true
    },
    {
        id: 'coffee-tea',
        name: 'Coffee/Tea',
        category: 'Food & Drinks',
        essential: false
    },
    {
        id: 'cooking-supplies',
        name: 'Basic Cooking Supplies',
        category: 'Food & Drinks',
        essential: false
    },
    // Personal Care
    {
        id: 'toiletries',
        name: 'Toiletries',
        category: 'Personal Care',
        essential: true
    },
    {
        id: 'medications',
        name: 'Personal Medications',
        category: 'Personal Care',
        essential: true
    },
    {
        id: 'first-aid',
        name: 'Basic First Aid Kit',
        category: 'Personal Care',
        essential: false
    },
    {
        id: 'insect-repellent',
        name: 'Insect Repellent',
        category: 'Personal Care',
        essential: false
    },
    // Electronics & Documents
    {
        id: 'phone-charger',
        name: 'Phone Charger',
        category: 'Electronics',
        essential: true
    },
    {
        id: 'camera',
        name: 'Camera',
        category: 'Electronics',
        essential: false
    },
    {
        id: 'power-bank',
        name: 'Portable Power Bank',
        category: 'Electronics',
        essential: false
    },
    {
        id: 'passport-id',
        name: 'Passport/ID',
        category: 'Documents',
        essential: true
    },
    {
        id: 'travel-insurance',
        name: 'Travel Insurance',
        category: 'Documents',
        essential: false
    },
    {
        id: 'emergency-contacts',
        name: 'Emergency Contact List',
        category: 'Documents',
        essential: true
    }
];
const categories = [
    'Beach Essentials',
    'Camping Gear',
    'Clothing',
    'Food & Drinks',
    'Personal Care',
    'Electronics',
    'Documents'
];
function PackingChecklist() {
    _s();
    const [checkedItems, setCheckedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [showEssentialOnly, setShowEssentialOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleItem = (itemId)=>{
        const newCheckedItems = new Set(checkedItems);
        if (newCheckedItems.has(itemId)) {
            newCheckedItems.delete(itemId);
        } else {
            newCheckedItems.add(itemId);
        }
        setCheckedItems(newCheckedItems);
    };
    const getFilteredItems = ()=>{
        return showEssentialOnly ? packingItems.filter((item)=>item.essential) : packingItems;
    };
    const getItemsByCategory = (category)=>{
        return getFilteredItems().filter((item)=>item.category === category);
    };
    const getCompletionStats = ()=>{
        const filteredItems = getFilteredItems();
        const totalItems = filteredItems.length;
        const checkedCount = filteredItems.filter((item)=>checkedItems.has(item.id)).length;
        const percentage = totalItems > 0 ? Math.round(checkedCount / totalItems * 100) : 0;
        return {
            totalItems,
            checkedCount,
            percentage
        };
    };
    const stats = getCompletionStats();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-lg p-6 border border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-green-100 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "📋"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-gray-900",
                                        children: "Packing Checklist"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Don't forget the essentials for your beach trip"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-green-600",
                                children: [
                                    stats.percentage,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-500",
                                children: [
                                    stats.checkedCount,
                                    "/",
                                    stats.totalItems,
                                    " items"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-gray-200 rounded-full h-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "bg-green-500 h-3 rounded-full",
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: `${stats.percentage}%`
                        },
                        transition: {
                            duration: 0.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "flex items-center space-x-2 cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: showEssentialOnly,
                            onChange: (e)=>setShowEssentialOnly(e.target.checked),
                            className: "rounded border-gray-300 text-green-600 focus:ring-green-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-700",
                            children: "Show essentials only"
                        }, void 0, false, {
                            fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-500",
                            children: "(recommended for first-time visitors)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: categories.map((category)=>{
                    const categoryItems = getItemsByCategory(category);
                    if (categoryItems.length === 0) return null;
                    const categoryChecked = categoryItems.filter((item)=>checkedItems.has(item.id)).length;
                    const categoryTotal = categoryItems.length;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "border border-gray-200 rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-medium text-gray-900",
                                        children: category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            categoryChecked,
                                            "/",
                                            categoryTotal
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: categoryItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].label, {
                                        className: `flex items-center space-x-3 p-2 rounded cursor-pointer transition-colors duration-200 ${checkedItems.has(item.id) ? 'bg-green-50 text-green-800' : 'hover:bg-gray-50'}`,
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: checkedItems.has(item.id),
                                                onChange: ()=>toggleItem(item.id),
                                                className: "rounded border-gray-300 text-green-600 focus:ring-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                                lineNumber: 186,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex-1 text-sm ${checkedItems.has(item.id) ? 'line-through' : ''}`,
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                                lineNumber: 192,
                                                columnNumber: 21
                                            }, this),
                                            item.essential && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full",
                                                children: "Essential"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                                lineNumber: 198,
                                                columnNumber: 23
                                            }, this),
                                            item.seasonal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full",
                                                children: "Seasonal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                                lineNumber: 203,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                        lineNumber: 176,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this)
                        ]
                    }, category, true, {
                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                        lineNumber: 161,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            stats.percentage === 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                className: "mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl mb-2",
                        children: "🎉"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-green-800 font-medium",
                        children: "Congratulations! You're all packed and ready for your beach adventure!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                lineNumber: 217,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "font-medium text-blue-900 mb-2",
                        children: "💡 Packing Tips"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "text-sm text-blue-800 space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Pack light - you can buy basics in Ensenada if needed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Bring layers - coastal weather can change quickly"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Don't forget your passport for border crossing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Consider bringing Mexican pesos for local purchases"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tools/PackingChecklist.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tools/PackingChecklist.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(PackingChecklist, "ZFLXaJ/dGd5sUxdtppU9zGluYi0=");
_c = PackingChecklist;
var _c;
__turbopack_refresh__.register(_c, "PackingChecklist");

})()),
}]);

//# sourceMappingURL=src_components_tools_PackingChecklist_tsx_9a60aa._.js.map