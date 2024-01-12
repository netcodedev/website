<script>
    import { Button } from "$lib/components/ui/button";
    import { Badge } from "$lib/components/ui/badge";
</script>

<section id="header" class="flex flex-col items-center justify-center gap-4 p-4 text-white">
    <h1 class="text-7xl sm:text-8xl">OpenNetLib</h1>
    <p class="text-center">
        a Java Networking library
    </p>
</section>
<section class="flex flex-col gap-4 items-center justify-center p-4">
    <div class="border rounded-lg p-4 w-full max-w-[1000px] flex flex-col gap-4 bg-background">
        <h1>Simplifying server-client development</h1>
        <p>
            I built this library in collaboration with ThatsNasu. We wanted to build a simple library, that would allow us to easily
            build server-client applications. We wanted to be able to send and receive data, without having to reimpliment the same
            code over and over again.
        </p>
        <p>
            It is pretty rebust and simple to use. I even used it once, to build a simple HTTP-Server.
        </p>
    </div>
    <div class="border rounded-lg p-4 w-full max-w-[1000px] flex flex-col gap-4 bg-background">
        <h1>Features</h1>
        <ul>
            <li>Byte-based socket communication</li>
            <li>Data-pre- and -post-processing</li>
            <li>Eventlisteners</li>
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