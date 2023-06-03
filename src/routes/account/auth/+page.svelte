<script>
    import Form from '$lib/Form.svelte';
    import Button from '$lib/Button.svelte';
   
    /** @type {import('./$types').PageData} */    
    export let data = {};
</script>

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<h1>Log in</h1>

<Button href='/account/new?scope={data.data}'>
    Don't have an account?
</Button>

<Form 
    data={[
        {
            "type": "line",
            "key": "Username",
            "name": "username"
        },
        {
            "type": "line",
            "key": "Password",
            "name": "password"
        }
    ]}
    route='/api/account/auth?scope={data.data}'
    next='{data.next}?scope={data.data}'
    
/>