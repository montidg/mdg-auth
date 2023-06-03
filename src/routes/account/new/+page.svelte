<script>
    import Form from '$lib/Form.svelte';

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

<h1>Create an account</h1>

<Form 
    data={[
        {
            "type": "line",
            "key": "Username",
            "name": "username"
        },
        {
            "type": "line",
            "key": "Email",
            "name": "email"
        },
        {
            "type": "line",
            "key": "Password",
            "name": "password"
        },
        {
            "type": "line",
            "key": "Confirm password",
            "name": "password2"
        }
    ]}
    route='/api/account/new'
    next='/account/auth?scope={data.data}'
/>