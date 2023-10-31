<script>
</script>

<gcds-container size="full">
	<div class="my-300">
		<p class="font-h1">Pricing Strategies</p>
		<hr />
		<div class="mt-300">
			<gcds-grid columns="repeat(3, 1fr)" gap={200}>
				<div class="section-1">
					<p class="font-h2 mb-300">Absorption pricing</p>
					<p>
						Method of pricing in which all costs are recovered. The price of the product includes
						the variable cost of each item plus a proportionate amount of the fixed costs.
					</p>
				</div>
				<div class="section-2">
					<p class="font-h2 mb-300">Contribution margin-based pricing</p>
                    <p>Contribution margin-based pricing maximizes the profit derived from an individual product, based on the difference between the product's price and variable costs (the product's contribution margin per unit), and on one's assumptions regarding the relationship between the product's price and the number of units that can be sold at that price.</p>
                </div>
				<div class="section-3">
					<p class="font-h2 mb-300">Cost plus pricing</p>
                    <p>Cost plus pricing is a cost-based method for setting the prices of goods and services. Under this approach, the direct material cost, direct labor cost, and overhead costs for a product are added up and added to a markup percentage (to create a profit margin) in order to derive the price of the product.</p>
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
