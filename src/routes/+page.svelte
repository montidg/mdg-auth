<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .wrapper {
        width: min(100vw,500px);
    }

    .button-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>

<script>
    import Button from '$lib/Button.svelte';
</script>

<div class='wrapper'>
    <h1>All your accounts in one place</h1>
    <p>
        MDG Auth is a centralized registration service primarily for applications under <a href='https://montidg.net/'>MontiDG</a>. 
        When an account is configured here, it is available globally throughout all services opting into the API.
    </p>
    <div class='button-wrapper'>
        <Button href='/account/new'>
            Register
        </Button>
    </div>
</div>

