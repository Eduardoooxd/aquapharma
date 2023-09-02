// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            animation: {
                translateUpwards: 'translateUpwards 6s linear forwards',
                zoomOut: 'zoomOut 6s linear infinite',
            },
            colors: {
                'aquapharma-blue': '#48dbfb',
            },
            fontFamily: {
                Montserrat: ['Montserrat', 'sans-serif'],
                Epilogue: ['Epilogue', 'sans-serif'],
            },
            aspectRatio: {
                '3/2': '3 / 2',
            },
            keyframes: {
                translateUpwards: {
                    '0%': { transform: 'translateY(10%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                zoomOut: {
                    '100%': { transform: 'scale(1)' },
                },
            },
            gridTemplateColumns: {
                'responsiveness-250px-columns': 'repeat(auto-fit, minmax(250px, 1fr))',
                'responsiveness-350px-columns': 'repeat(auto-fit, minmax(350px, 1fr))',
            },
        },
    },
    plugins: [],
};
