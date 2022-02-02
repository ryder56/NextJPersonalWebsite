module.exports = {
    // @see https://tailwindcss.com/docs/upcoming-changes
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [
        './src/components/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            padding: {
                '5%': '5%',
                '2.5%': '2.5%',
                '-5%': '-5%'
            },
            margin: {
                '5%': '5%',
                '2.5%': '2.5%'
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
