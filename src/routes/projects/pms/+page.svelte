<script>
    import { Button } from "$lib/components/ui/button";
    import { Badge } from "$lib/components/ui/badge";
</script>

<section id="header" class="flex flex-col items-center justify-center gap-4 p-4 text-white">
    <h1 class="text-7xl sm:text-8xl">PMS</h1>
    <p class="text-center">
        a project-management tool
    </p>
</section>
<section class="flex flex-col gap-4 items-center justify-center p-4">
    <div class="border rounded-lg p-4 w-full max-w-[1000px] flex flex-col gap-4">
        <h1>Emptying my head</h1>
        <p>
            My Mind is always full of ideas. I have a lot of ideas for projects, that I want to work on. But sometimes I forget about some of them.
            A good friend of mine had the same problem and asked me to build a tool, that would allow him to keep track of his ideas and projects.
            I quickly put together a small tool, that allows to write them down. It is still very minimal, but we have a lot of ideas for new features.
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