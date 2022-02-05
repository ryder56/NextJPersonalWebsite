module.exports = {
    // @see https://tailwindcss.com/docs/upcoming-changes
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    content: [
        './components/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            padding: {
                '5%': '5%',
                '2.5%': '2.5%',
                '-5%': '-5%',
                '25%': '25%'
            },
            margin: {
                '5%': '5%',
                '2.5%': '2.5%',
                '25%': '25%',
                '50%': '50%'
            },
            width: {
                '5%': '5%',
                '90%': '90%'
            }
        },
    },
    variants: {},
    plugins: [
        require( 'tailwindcss' ),
        require( 'precss' ),
        require( 'autoprefixer' )
    ]
};
