theorem Closure_Union_Contains_Union_Closures(T: TopologicalSpace) {
  let(S: Set, τ: Topology) →
  assert(T = ⟨S,τ⟩) ∧
  let(H: Set) →
  assert(H ⊆ P(S)) →
  assert(
    ∪{cl(h) | h ∈ H} ⊆ cl(∪{h | h ∈ H})
  )
} ↔

proof Closure_Union_Contains_Union_Closures() {
  let(K = ∪{cl(h) | h ∈ H}) →
  let(L = ∪{h | h ∈ H}) →
  
  assert(∀h ∈ H ⇒ h ⊆ L) →
  
  lemma Closure_Subset_Property() {
    assert(
      ∀A,B ⊆ S: A ⊆ B ⇒ cl(A) ⊆ cl(B)
    )
  } →
  
  apply(Closure_Subset_Property()) →
  assert(∀h ∈ H ⇒ cl(h) ⊆ cl(L)) →
  
  lemma Union_Smallest_Superset() {
    assert(
      ∀A,B: (∀x ∈ A ⇒ x ⊆ B) ⇒ ∪A ⊆ B
    )
  } →
  
  apply(Union_Smallest_Superset()) →
  assert(K ⊆ cl(L))
}