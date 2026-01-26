<script>
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
</script>

<section id="header" class="flex flex-col items-center justify-center gap-4 p-4 text-white">
	<h1 class="text-7xl sm:text-8xl">MoneyMan</h1>
	<p class="text-center">a money-management tool</p>
</section>
<section class="flex flex-col gap-4 items-center justify-center p-4">
	<div class="border rounded-lg p-4 w-full max-w-[1000px] flex flex-col gap-4 bg-background">
		<h1>The side-project that evolved</h1>
		<p>
			As a student, money is always tight. It was always hard for me to keep track of my finances. I
			was always aware that there were tools out there, that could help me with that...
			<br />
		</p>
		<p class="py-2 mt-0 text-center italic font-bold text-2xl">
			But I'm a DEVELOPER! I can do that myself!
		</p>
		<p>
			So, at the end of 2022, I started working on a tool to help me keep track of my finances. It
			was a simple web-app, that allowed me to keep track of my expenses and income. It was a simple
			CRUD app, that allowed me to add, edit and delete transactions.
			<br />
			The project got very usefull very fast. I was able to keep track of my finances and see where my
			money went. I was able to add recurring transactions, like rent or my netflix abo.
			<br />
			By tagging individual transactions, I was able to group them and see how much money I spent on
			certain things.
		</p>
		<p>
			I was very happy with the result but it had one big flaw: I had to add every transaction
			manually. This was very time consuming and I often forgot to add transactions. So I decided to
			add a feature, that would allow me to import transactions from my bank account. By using the
			gocardless API, I was able to import transactions from my bank account. This was a huge
			improvement, because I did not have to add transactions manually anymore.
		</p>
		<p>
			Over the time I added more and more features and at the current point, I am very proud of what
			I have achieved.
		</p>
	</div>
	<div class="border rounded-lg p-4 w-full max-w-[1000px] flex flex-col gap-4 bg-background">
		<h1>Features</h1>
		<ul>
			<li>Manage multiple wallets</li>
			<li>Add and manage transactions</li>
			<li>Link bank account to automatically add booked transactions</li>
			<li>Monthly and Yearly Finance reports</li>
			<li>Manual and automatic tagging of transactions</li>
		</ul>
	</div>
</section>

<style lang="postcss">
	#header {
		background-image: linear-gradient(
			to right bottom,
			#c2886a,
			#ae7a66,
			#9a6c61,
			#84605b,
			#6e5453,
			#634d4e,
			#574649,
			#4c4043,
			#483c41,
			#43383e,
			#3e353c,
			#39313a
		);
		min-height: 40vh;
	}
</style>
