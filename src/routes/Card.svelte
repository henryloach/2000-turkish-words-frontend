<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { getCard } from "../api"; // Adjust based on your actual import
  export let cardId;

  let card;
  let error;

  // Fetch card details when the cardId changes
  $: if (cardId) {
    (async () => {
      try {
        card = await getCard(cardId);
        error = null; // Clear previous errors
      } catch (err) {
        error = "Error fetching card: " + err.message;
      }
    })();
  }

  // Functions to navigate to the next and previous cards
  function goToNextCard() {
    if (parseInt(cardId) < 2000) {
      navigate(`/cards/${parseInt(cardId) + 1}`);
    }
  }

  function goToPreviousCard() {
    if (parseInt(cardId) > 1) {
      navigate(`/cards/${parseInt(cardId) - 1}`);
    }
  }
</script>

{#if card}
  <h2>Card: {card.turkish_word} - {card.english_word}</h2>
  <p>Type: {card.type}</p>
  <p>Sentence: {card.turkish_sentence}</p>
  <button on:click={goToPreviousCard} disabled={parseInt(cardId) <= 1}
    >Previous</button
  >
  <button on:click={goToNextCard} disabled={parseInt(cardId) >= 2000}
  >Previous</button
>
{:else if error}
  <p>Error: {error}</p>
{/if}
