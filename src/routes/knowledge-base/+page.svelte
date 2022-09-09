<script>
	import { page } from '$app/stores';
	const search = $page.url.searchParams.get('search');
</script>

{#if search}
	<div id="search-results" class="content">
		<h1>Search Results:</h1>
		<span class="stats">
			<!-- Found <b><?=count($search->getResults())?></b> results in <?=$search->getExecutionTime()?>s. -->
		</span>
		<!-- <?php
      foreach($search->getResults() as $result){
        ?>
        <div class="search-result">
          <h1>
              <a href="/knowledge-base/<?=$result->getFilename()?>"><?=$result->getFilename()?></a>
          </h1>
          <span><?=$result->getContent()?></span>
        </div>
        <?php
      }
    ?> -->
		<span class="stats right">
			<!-- Highest word-match percentage: <?=((int)$search->getBestMatch()[0])?>% -->
			<!-- Most similar word: <?=$search->getBestMatch()[1]?> -->
		</span>
		<div class="clear" />
	</div>
{/if}
