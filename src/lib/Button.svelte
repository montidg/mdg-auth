<style>
    .main {
        border-radius: 30px;
        min-width: 150px;
        height: 30px;
        padding: 5px 20px 5px 20px;
        margin: 5px;
        text-align: center;
        background: var(--red-1);
        color: white;
        font-weight: bold;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        display: block;
    }
</style>

<script>
    export let href = '#';
</script>

<a href={href}>
    <div class='main'>
        <slot />
    </div>
</a>
