<script>
    import { onMount } from 'svelte';
    /** @type {import('./$types').PageData} */
    export let data = {};

    let mounted = false;

    let key = "86a3e25d-bab3-4658-be33-dd03740e1122";

    onMount(() => {
        mounted = true;
    });
</script>

<svelte:head>
    {#if mounted}
        <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
    {/if}
</svelte:head>

<form action="/api/captcha/{data.type}" method="POST">
    <div class="h-captcha" data-sitekey={key} />
    <input type="submit" value="Send captcha" />
</form>
