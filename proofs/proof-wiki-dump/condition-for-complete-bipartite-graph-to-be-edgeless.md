theorem CompleteGraphEdgeless() {
  assert(
    ∀G(G = K_{m,n} ∧ G = struct{A|B,E} ∧ |A|=m ∧ |B|=n) ⇒
    (IsEdgeless(G) ↔ (m=0 ∨ n=0))
  )
}

proof CompleteGraphEdgeless() {
  // First direction: ⇒
  lemma NonZeroHasEdge() {
    setVar(m > 0 ∧ n > 0) →
    assert(∃u ∈ A, ∃v ∈ B: {u,v} ∈ E) →
    assert(¬IsEdgeless(K_{m,n}))
  } →

  // Second direction: ⇐
  lemma ZeroIsEdgeless() {
    assert((m = 0 ∨ n = 0) ⇒ 
      (∃X ∈ {A,B}: X = ∅)) →
    assert(∀v ∈ (A ∪ B): 
      ¬∃w ∈ (A ∪ B): {v,w} ∈ E) →
    assert(IsEdgeless(K_{m,n}))
  } →

  apply(NonZeroHasEdge()) →
  apply(ZeroIsEdgeless()) →
  assert(IsEdgeless(K_{m,n}) ↔ (m=0 ∨ n=0))
}