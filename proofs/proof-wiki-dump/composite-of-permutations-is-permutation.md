theorem Composite_of_Permutations_is_Permutation() {
  assert(
    ∀S: Set ∧ ∀f,g: Permutation(S) ⇒
    (g ∘ f) ∈ Permutation(S)
  )
} ↔

proof Composite_of_Permutations_is_Permutation() {
  setVar(S: Set) →
  setVar(f,g: Permutation(S)) →
  
  lemma Permutation_is_Bijection() {
    assert(
      ∀p: Permutation(S) ⇒ p ∈ Bijection(S,S)
    )
  } →
  
  apply(Permutation_is_Bijection()) →
  assert(f ∈ Bijection(S,S)) ∧
  assert(g ∈ Bijection(S,S)) →
  
  lemma Composite_of_Bijections() {
    assert(
      ∀X,Y,Z: Set ∧ ∀h: Bijection(X,Y) ∧ ∀k: Bijection(Y,Z) ⇒
      (k ∘ h) ∈ Bijection(X,Z)
    )
  } →
  
  apply(Composite_of_Bijections(), X=S, Y=S, Z=S, h=f, k=g) →
  assert((g ∘ f) ∈ Bijection(S,S)) →
  assert((g ∘ f) ∈ Permutation(S))
}