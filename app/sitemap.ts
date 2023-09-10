import type { MetadataRoute } from 'next';
import { baseUrl } from '../lib/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = ['', 'hydron', 'kmzero', 'laundry', 'produtos', 'purificadoragua'];

    return routes.map((route) => ({
        url: `${baseUrl}/${route}`,
        lastModified: new Date().toISOString(),
    }));
}
