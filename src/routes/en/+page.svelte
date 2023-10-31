<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { oppositeRoute } from "$lib/stores";

    oppositeRoute.set("/fr");

    onMount(() => {
        goto(`/en/page-english`);
    });
</script>