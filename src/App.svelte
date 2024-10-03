<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Card from './routes/Card.svelte';
</script>

<Router>
  <Route path="/cards/:cardId" let:params>
    <Card cardId={params.cardId} />
  </Route> 
</Router>
