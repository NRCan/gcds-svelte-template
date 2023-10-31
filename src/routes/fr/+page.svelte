<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { oppositeRoute } from "$lib/stores";

    oppositeRoute.set("/en");
    
    onMount(() => {
        goto(`/fr/page-francais`);
    });
</script>