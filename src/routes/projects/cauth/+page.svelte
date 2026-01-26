<script>
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
</script>

<section id="header" class="flex flex-col items-center justify-center gap-4 p-4 text-white">
	<h1 class="text-7xl sm:text-8xl">C-Auth</h1>
	<p class="text-center">An authentication service</p>
</section>
<section class="flex flex-col gap-4 items-center justify-center p-4">
	<div class="border rounded-lg p-4 w-full max-w-[1000px] flex flex-col gap-4 bg-background">
		<h1>The Idea</h1>
		<p>
			The idea for C-Auth came to me in 2020. While working on web projects I often had to implement
			authentication. Having to implement the same stuff over and over again, I thought it would be
			a good idea to create a service, that handles authentication for me. This way I would only
			have to implement the client-side of the authentication process once and could reuse it for
			all my projects.
		</p>
		<p>
			Also during that time I noticed over and over again how many accounts get hacked, because of
			weak or leaked passwords. I thought for a while about how to solve this problem and came to
			the conclusion, that the best way to solve this problem would be to not use passwords at all.
			<br />
			So i tried to figure out a way to authenticate users without passwords. During that time I worked
			on some projects that used asynchronous cryptography using the RSA algorithm. This brought me to
			the idea of using public-key cryptography for authentication.
		</p>
		<p>The concept was born and a phrase ran through my head:</p>
		<p class="py-2 mt-0 text-center italic font-bold text-2xl">
			Authentication should be proof-of-ownership, not proof-of-knowledge.
		</p>
	</div>
	<div class="border rounded-lg p-4 w-full max-w-[1000px] flex flex-col gap-4 bg-background">
		<h1>The Start</h1>
		<p>
			In late 2020 I started implementing a backend API for C-Auth in Java. The original Idea was,
			that the User would have to install a program on their device, that would generate a keypair
			and store the private key on the device. The public key would then be sent to the server,
			where it would be stored. When the user wants to authenticate, the server would send a
			challenge to the client, which would be signed using the private key and sent back to the
			server. The server would then verify the signature and authenticate the user.
		</p>
		<p>
			I had a working prototype of this system by the mid of 2020. But I was not totally happy with
			the way it worked. The user had to install a program on their device, which was not very
			user-friendly. The project came to a halt.
		</p>
	</div>
	<div class="border rounded-lg p-4 w-full max-w-[1000px] flex flex-col gap-4 bg-background">
		<h1>The Revolution</h1>
		<p>
			In late 2021 I stumbled upon the <Button
				variant="link"
				size="link"
				href="https://www.w3.org/TR/webauthn/">
				webauthn standard
			</Button>. This standard was exactly what I was looking for. It provided a way to authenticate
			users using public-key cryptography, without the need for the user to install any software on
			their device. The only thing the user needs is a device with a modern browser.
		</p>
		<p>
			After some planning and conceptualizing I started all over again. This time I decided to use
			NodeJS for the backend, because it is much easier to work with than Java. At first I tried to
			use Firebase as a database, but I later realized, that it was not flexible enough for my
			needs. It was expensive at scale and too complex to use. I like to have full control and
			wanted to host everything myself.
		</p>
		<p>
			Then in late 2022 Fireship released <Button
				variant="link"
				size="link"
				href="https://www.youtube.com/watch?v=C7WFwgDRStM">
				this video
			</Button> about
			<Button variant="link" size="link" href="https://surrealdb.com">SurrealDB</Button>. This was
			EXACTLY what I was looking for. It was a simple, easy to use, open-source database, that I
			could host myself. I immediately started to learn how to use SurrealDB. And then, in mid 2022,
			I started all over again. This time working with SurrealDB as a database. And it worked
			PERFECTLY. My dreams became reality.
		</p>
	</div>
	<div class="border rounded-lg p-4 w-full max-w-[1000px] flex flex-col gap-4 bg-background">
		<h1>The State</h1>
		<p>
			At this point in time, C-Auth is stable and ready to use. It is still not finished, but is
			free for everyone to use. I am currently evaluating wether further development is worth it.
		</p>
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
