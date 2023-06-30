<style>    
    #content {
        height: 100vh;
        width: 100vw;
        padding-top: 0px;

        display: flex;
        flex-direction: column;
        align-items: center;

        overflow-y: auto;
    }
    
    :global(input[type=submit]) {
        border: none;
        background: var(--dark-2);
        padding: 5px;
        text-align: center;
    }

    :global(form) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    :global(:root) {
        --dark-1: #2b2f36;
        --dark-2: #d8d8d8;

        --primary-1: #498aec;

        --light-1: #ffffff;
        --light-2: #f8f8f8;

        --red-1: rgb(192, 54, 54);
        --green-1: rgb(37, 201, 110);

        --border-1: solid var(--dark-2) 5px;
        font-family: 'Open Sans';
    }

    :global(a) {
        color: var(--green-1);
        text-decoration: none;
    }

</style>

<slot />
