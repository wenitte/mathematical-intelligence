theorem EulerianGraphSufficientCondition() {
  assert(
    ∀G(Graph) ∧ isFinite(G) ∧ isConnected(G) ∧
    (∀v ∈ vertices(G) → isEven(degree(v))) →
    isEulerian(G)
  )
} ↔

proof EulerianGraphSufficientCondition() {
  setVar(G: Graph) →
  assume(isFinite(G) ∧ isConnected(G) ∧ ∀v ∈ vertices(G)(isEven(degree(v)))) →
  
  lemma NonTrivialGraphProperty() {
    assert(|vertices(G)| > 1 → ∀v ∈ vertices(G)(degree(v) > 0))
  } →
  
  setVar(v: Vertex ∈ vertices(G)) →
  
  lemma EvenVerticesCycleProperty() {
    assert(∃cycle(C)(v ∈ vertices(C)))
  } →
  
  constructSequence() {
    setVar(v₁: Vertex) →
    assert(∃edge({v,v₁}) ∈ edges(G)) →
    setVar(v₂: Vertex) →
    assert(v₂ ≠ v₁ ∧ ∃edge({v₁,v₂}) ∈ edges(G)) →
    assert(forms_trail(v,v₁,v₂))
  } →
  
  extend_to_circuit(C₁) →
  
  if(covers_all_edges(C₁,G)) {
    conclude(isEulerian(G))
  } else {
    setVar(G₀: Graph = G - edges(C₁)) →
    assert(∃u ∈ (vertices(G₀) ∩ vertices(C₁))) →
    construct_circuit(C₂, u) →
    combine_circuits(C₁, C₂, u) →
    
    while(¬covers_all_edges(current_circuit,G)) {
      extend_circuit()
    } →
    
    assert(isFinite(G) → process_terminates()) →
    assert(∃final_circuit(isEulerian(final_circuit)))
  }
  
  conclude(isEulerian(G))
}