theorem EulerianGraphSufficientCondition() {
  assert(
    ∀G(Graph) ∧ isFinite(G) ∧ isConnected(G) ∧
    (∀v ∈ vertices(G) → isEven(degree(v))) →
    isEulerian(G)
  )
} ↔

proof EulerianGraphSufficientCondition() {
  setVar(G: Graph) →
  assume(isFinite(G) ∧ isConnected(G) ∧ 
         ∀v ∈ vertices(G)(isEven(degree(v)))) →
  
  lemma GraphWithEvenVerticesPartitionsIntoCycles() {
    assert(∃S = {C₁, C₂, ..., Cₖ} where S is partition of G into cycles)
  } →
  
  apply(GraphWithEvenVerticesPartitionsIntoCycles()) →
  setVar(v: vertex ∈ C₁) →
  
  constructCircuit() {
    traverse(C₁) until (∃u ∈ vertices(C₁) ∧ u ∈ vertices(C₂)) →
    traverse(C₂) →
    resume(C₁) →
    repeat(for all encountered cycles) →
    assert(returnTo(v))
  } →
  
  setVar(circuit₁: Circuit) →
  
  if (covers(circuit₁, S)) {
    assert(isEulerianCircuit(circuit₁))
  } else {
    while (∃Cᵢ ∈ S: ¬covered(Cᵢ)) {
      traverse(circuit₁) →
      when(encounter(new_cycle)) {
        traverse(new_cycle)
      } →
      assert(allCyclesCovered(S))
    }
  } →
  
  assert(∃circuit: isEulerianCircuit(circuit)) →
  conclude(isEulerian(G))
}