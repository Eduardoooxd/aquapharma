import LogoImage from '@/assets/images/logo/logo.jpg';
import Image from 'next/image';

export default function InitialLoadingBar() {
    return (
        <div className="relative z-[9999] grid min-h-screen place-items-center bg-white">
            <div className="h-96 w-96 transform animate-loadingSpinner rounded-full"></div>
            <Image
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src={LogoImage}
                alt="Aquapharma Logo"
                width={200}
                priority
            />
        </div>
    );
}
