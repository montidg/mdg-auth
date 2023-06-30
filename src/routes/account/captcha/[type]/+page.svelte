
<script>
    let key = '86a3e25d-bab3-4658-be33-dd03740e1122';

    /** @type {import('./$types').PageData} */
    export let data = {};
</script>

<form action="/api/captcha/{data.type}" method="POST">
    <div class="h-captcha" data-sitekey={key}></div>
    <input type="submit" value="Send captcha" />
</form>