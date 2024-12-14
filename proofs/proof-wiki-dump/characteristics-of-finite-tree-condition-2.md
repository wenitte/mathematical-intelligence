theorem Tree_Characterization_EdgeCount() {
  assert(
    ∀T: Graph ∧ isFinite(T) ∧ isSimple(T) ∧ order(T) = n →
    (isTree(T) ↔ (|E(T)| = n-1 ∧ isConnected(T)))
  )
} ↔

proof Tree_Characterization_EdgeCount() {
  lemma Connected_Graph_Tree() {
    assert(
      ∀G: Graph ∧ isFinite(G) ∧ isConnected(G) ∧ isSimple(G) →
      (isTree(G) ↔ |E(G)| = order(G)-1)
    )
  } →
  apply(Connected_Graph_Tree(), T) →
  assert(conclusion)
}