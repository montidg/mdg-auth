
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    return {type: params.type};
}