import NextTopLoader from 'nextjs-toploader';
import { Suspense } from 'react';
import Footer from '../components/Footer';
import GoToTopButton from '../components/GoToTopButton';
import Navbar from '../components/Navbar';
import { siteConfig } from '../lib/websiteConfig';
import '../styles/globals.css';

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | Aquapharma`,
    },
    description: siteConfig.description,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    robots: {
        follow: true,
        index: true,
    },
};

export default async function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="PT">
            <body>
                <Navbar />
                <NextTopLoader />
                <Suspense>
                    <main className="min-h-screen">{children}</main>
                </Suspense>
                <GoToTopButton />
                <Footer />
            </body>
        </html>
    );
}
