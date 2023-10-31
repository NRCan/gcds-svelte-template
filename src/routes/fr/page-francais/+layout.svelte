<script>
	import { oppositeRoute } from '$lib/stores';
	$: route = $oppositeRoute ?? '/en/page-english';
</script>

<gcds-header lang-href={route} skip-to-href="" lang="fr">
	<gcds-topic-menu slot="menu" lang="fr" />
	<gcds-search slot="search" lang="fr" />
</gcds-header>

<div class="container-xl mx-auto mb-200 px-300">
	<gcds-breadcrumbs lang="fr">
		<gcds-breadcrumbs-item href="#">Natural Resources Canada</gcds-breadcrumbs-item>
		<gcds-breadcrumbs-item href="#">Lands and Minerals</gcds-breadcrumbs-item>
	</gcds-breadcrumbs>
</div>
<main class="container-xl mx-auto xl:px-0 sm:px-500 px-300 general-layout">
	<slot />
</main>

<gcds-footer display="full" />
