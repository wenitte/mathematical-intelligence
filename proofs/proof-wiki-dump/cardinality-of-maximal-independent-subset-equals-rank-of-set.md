theorem Cardinality_Max_Independent_Equals_Rank() {
  assert(
    ∀M[matroid(M) ∧ M = ⟨S,𝓘⟩] ∧
    ∀A[A ⊆ S] ∧
    ∀X[maximal_independent_subset(X,A)] ⇒
    |X| = ρ(A)
  )
} ↔

proof Cardinality_Max_Independent_Equals_Rank() {
  setVar(M: matroid, A: set, X: set) →
  
  lemma Independent_Subset_Containment() {
    assert(
      ∃Y[Y ∈ 𝓘 ∧ X ⊆ Y ⊆ A ∧ |Y| = ρ(A)]
    )
  } →
  
  apply(Independent_Subset_Containment()) →
  
  assert(maximal_independent_subset(X,A)) →
  assert(X = Y) →
  
  conclude(|X| = ρ(A))
}