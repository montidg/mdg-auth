<script>
    import { onMount } from 'svelte';

    let key = "86a3e25d-bab3-4658-be33-dd03740e1122";

    /** @type {import('./$types').PageData} */
    export let data = {};

    let mounted = false;

    onMount(() => {
        mounted = true;
            if (browser && !sitekey) sitekey = window.sitekey;

            if (browser) {
                window.hcaptchaOnLoad = () => {
                    // consumers can attach custom on:load handlers
                    dispatch("load");
                    loaded = true;
                };

                window.onSuccess = (token) => {
                    dispatch("success", {
                        token: token,
                    });
                };

                window.onError = () => {
                    dispatch("error");
                };

                window.onClose = () => {
                    dispatch("close");
                };

                window.onExpired = () => {
                    dispatch("expired");
                };
            }

            dispatch("mount");
            mounted = true;

        widgetID = hcaptcha.render(`h-captcha`, {
            sitekey,
            hl, // force a specific localisation
            theme,
            callback: "onSuccess",
            "error-callback": "onError",
            "close-callback": "onClose",
            "expired-callback": "onExpired",
            size,
        });
    });
</script>

<svelte:head>
    {#if mounted}
        <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
    {/if}
</svelte:head>

<div id="h-captcha}" />

<form action="/api/captcha/{data.type}" method="POST">
    <div class="h-captcha" data-sitekey={key} />
    <input type="submit" value="Send captcha" />
</form>
