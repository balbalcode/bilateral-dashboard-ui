module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    important: true,
    purge: [],
    theme: {
        backgroundColor: {
            dark: "#1D1C2F",
            secondary: "#F88A28",
            transparent: 'transparent',
            white: 'white',
            "gray": "#ECF1F3",
            "soft-gray": "#EBECED",
            "light-gray": "#F5F8FA",
            danger: "#FF3E3E",
            success:"#1abc9c"
        },
        borderColor: {
            "soft-gray": "#EBECED",
            danger: "#FF3E3E"
        },
        colors: {
            dark: "#1D1C2F",
            default: "#333333",
            gray: "#777777",
            white: "#FFFFFF",
            secondary: "#F88A28",
            "light-gray": "#666666",
            "soft-gray": "#A9ACBC",
            danger: "#FF3E3E",
            success:"#1abc9c"
        },
        container: {
            padding: "37px",
        },
        fontFamily: {
            proxima: "Proxima-Regular",
            "proxima-semi-bold": "Proxima-SemiBold",
            "proxima-bold": "Proxima-Bold",
            "proxima-light": "Proxima-Light",
        },
        extend: {
            margin: {
                '-72': '-18rem',
                '72': '18rem',
            },
            width: {
                '72': '18rem',
                '96': '22rem',
            }
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/custom-forms")],
};
