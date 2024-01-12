<script>
    import { Button } from "$lib/components/ui/button";
    import { Badge } from "$lib/components/ui/badge";
</script>

<section id="header" class="flex flex-col items-center justify-center gap-4 p-4 text-white">
    <h1 class="text-7xl sm:text-8xl">Tracy</h1>
    <p class="text-center">
        a monitoring-management tool
    </p>
</section>
<section class="flex flex-col gap-4 items-center justify-center p-4">
    <div class="border rounded-lg p-4 w-full max-w-[1000px] flex flex-col gap-4 bg-background">
        <h1>Big Brother is watching you</h1>
        <p>
            I have a lot of services running on my server. I want to know, if they are still running and if they are healthy.
            I also want to collect some metrics, of which tools and which features are used and how often.
            Thats what I'm building Tracy for. It is still in a very early stage, so there is not much to show or talk about yet.
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