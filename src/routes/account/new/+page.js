/** @type {import('./$types').PageLoad} */
export function load({ url }) {
    return {data: url.searchParams.get('scope') || 'default'};
}