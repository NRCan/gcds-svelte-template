<script>
</script>

<gcds-container size="full">
	<div class="my-300">
		<p class="font-h1">Politique de prix</p>
		<hr />
		<div class="mt-300">
			<gcds-grid columns="repeat(3, 1fr)" gap={200}>
				<div class="section-1">
					<p class="font-h2 mb-300">Tarification d'absorption</p>
					<p>
                        Méthode de tarification dans laquelle tous les coûts sont récupérés. Le prix du produit comprend le coût variable de chaque élément majoré d’un montant proportionnel des coûts fixes.					</p>
				</div>
				<div class="section-2">
					<p class="font-h2 mb-300">Tarification basée sur la marge de contribution.</p>
                    <p>La tarification basée sur la marge de contribution maximise le profit dérivé d'un produit individuel, sur la base de la différence entre le prix du produit et les coûts variables (la marge de contribution du produit par unité), et sur les hypothèses de chacun concernant la relation entre le prix du produit et le nombre d'unités. qui peut être vendu à ce prix.</p>
                </div>
				<div class="section-3">
					<p class="font-h2 mb-300">Coût plus prix</p>
                    <p>La tarification au coût majoré est une méthode basée sur les coûts pour fixer les prix des biens et des services. Selon cette approche, le coût direct des matériaux, le coût direct de la main-d'œuvre et les frais généraux d'un produit sont additionnés et ajoutés à un pourcentage de majoration (pour créer une marge bénéficiaire) afin d'en dériver le prix du produit.</p>
				</div>
			</gcds-grid>
		</div>
	</div>
</gcds-container>

<style>
	.section-1 {
		grid-area: 1 / 1 / 4 / 2;
	}

	.section-2 {
		grid-area: 1 / 2 / 4 / 3;
	}

	.section-3 {
		grid-area: 1 / 3 / 4 / 4;
	}
</style>
