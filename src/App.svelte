<script>
  import { onMount } from 'svelte';
  import { getCard } from './api.js'; // Assuming you have api.js in the same directory

  let cardId = 1;  // You can change this dynamically as needed
  let card = null;
  let error = null;

  // Fetch card details when the component is mounted
  onMount(async () => {
    try {
      card = await getCard(cardId);
    } catch (err) {
      error = "Error fetching card: " + err.message;
    }
  });
</script>

<main>
  {#if error}
    <p>{error}</p>
  {:else if !card}
    <p>Loading card details...</p>
  {:else}
    <h1>{card.turkish_word} - {card.english_word}</h1>
    <p>Type: {card.type}</p>
    <p>Turkish sentence: {card.turkish_sentence}</p>
    <p>English sentence: {card.english_sentence}</p>
  {/if}
</main>

<style>
  main {
    padding: 20px;
  }
</style>
