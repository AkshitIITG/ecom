export const multiSelectFlters = [
    {
        id: "color",
        label: "Color",
        options: [
            { value: "white", label: "White"},
            { value: "blue", label: "Blue"},
            { value: "red", label: "Red"},
            { value: "brown", label: "Brown"},
            { value: "purple", label: "Purple"},
            { value: "yellow", label: "Yellow"},
            { value: "green", label: "Green"}
        ]
    },
    {
        id: "size",
        label: "Size",
        options: [
            { value: "s", label: "Small"},
            { value: "m", label: "Medium"},
            { value: "l", label: "Large"}
        ]
    }
];

export const singleSelectFilters = [
    {
        id: "price",
        label: "Price",
        options: [
            { value: "99-399", label: "₹99 to ₹399"},
            { value: "399-999", label: "₹399 to ₹999"},
            { value: "999-1999", label: "₹999 to ₹1999"},
            { value: "1999-2999", label: "₹1999 to ₹2999"},
            { value: "2999-3999", label: "₹2999 to ₹3999"},
            { value: "3999-4999", label: "₹3999 to ₹4999"},
        ]
    },
    {
        id: "availability",
        label: "Availability",
        options: [
            {value: "in_stock", label: "In Stock"},
            {value: "out_of_stock", label: "Out Of Stock"}
        ]
    },
    {
        id: "discount",
        label: "Discount Range",
        options: [
            { value: "10", label: "Above 10%"},
            { value: "20", label: "Above 20%"},
            { value: "30", label: "Above 30%"},
            { value: "40", label: "Above 40%"},
            { value: "50", label: "Above 50%"},
            { value: "60", label: "Above 60%"},
            { value: "70", label: "Above 70%"},
            { value: "80", label: "Above 80%"},
        ]
    }
]