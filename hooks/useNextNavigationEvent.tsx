'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export const usePrevious = <T,>(value: T) => {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

interface NavigationEvents {
    routeChangedCallback: () => void;
}

export const useNextNavigationEvent = ({ routeChangedCallback }: NavigationEvents) => {
    const pathname = usePathname();
    const prevPathname = usePrevious(pathname);

    const searchParams = useSearchParams();
    const prevSearchParams = usePrevious(searchParams);

    const [route, setRoute] = useState({ pathname, searchParams });

    useEffect(() => {
        if (
            searchParams?.toString() !== prevSearchParams?.toString() ||
            pathname !== prevPathname
        ) {
            setRoute({ pathname, searchParams });
            routeChangedCallback();
        }
    }, [pathname, prevPathname, prevSearchParams, routeChangedCallback, searchParams]);

    return { route };
};
