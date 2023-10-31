<script>
	import { oppositeRoute } from '$lib/stores';
	$: route = $oppositeRoute ?? '/fr/page-francais';
</script>

<gcds-header lang-href={route} skip-to-href="" lang="en">
	<gcds-topic-menu slot="menu" lang="en" />
	<gcds-search slot="search" lang="en" />
</gcds-header>

<div class="container-xl mx-auto mb-200 px-300">
	<gcds-breadcrumbs lang="en">
		<gcds-breadcrumbs-item href="#">Natural Resources Canada</gcds-breadcrumbs-item>
		<gcds-breadcrumbs-item href="#">Lands and Minerals</gcds-breadcrumbs-item>
	</gcds-breadcrumbs>
</div>
<main class="container-xl mx-auto xl:px-0 sm:px-500 px-300 general-layout">
	<slot />
</main>

<gcds-footer display="full" />
