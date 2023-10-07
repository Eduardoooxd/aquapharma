/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                'aquapharma-blue': 'var(--light-blue)',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            dropShadow: {
                'xl-aquapharma-blue': '0 5px 15px var(--light-blue)',
                'text-outline': '0 1.5px 1.5px rgba(0 , 0, 0, 0.9)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                translateUpwards: {
                    '0%': { transform: 'translateY(10%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                zoomIn: {
                    '100%': { transform: 'scale(1)' },
                },
                loaderSpinner: {
                    '0%': {
                        transform: 'rotate(0deg)',
                        'box-shadow': '1px 5px 2px var(--light-blue)',
                    },
                    '50%': {
                        transform: 'rotate(180deg)',
                        'box-shadow': '1px 5px 2px var(--light-blue)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                        'box-shadow': '1px 5px 2px var(--light-blue)',
                    },
                },
            },
            fontFamily: {
                Montserrat: ['Montserrat', 'sans-serif'],
                Epilogue: ['Epilogue', 'sans-serif'],
            },
            aspectRatio: {
                '3/2': '3 / 2',
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                translateUpwards: 'translateUpwards 6s linear forwards',
                zoomIn: 'zoomIn 6s linear infinite',
                loadingSpinner: 'loaderSpinner 5s linear infinite',
            },
            gridTemplateColumns: {
                'responsiveness-250px-columns': 'repeat(auto-fit, minmax(250px, 1fr))',
                'responsiveness-350px-columns': 'repeat(auto-fit, minmax(350px, 1fr))',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
