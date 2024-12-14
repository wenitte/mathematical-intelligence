theorem Complement_Union_Superset() {
  assert(
    ∀S,T ⊆ 𝕌 ⇒ (S ⊆ T ↔ ℂS ∪ T = 𝕌)
  )
}

proof Complement_Union_Superset() {
  setVar(S,T: Set) →
  
  assert(S ⊆ T) ↔
  assert(S ∩ ℂT = ∅) →  // Intersection with Complement is Empty iff Subset
  
  assert(ℂ(S ∩ ℂT) = 𝕌) →  // Complement of Empty Set is Universal Set
  
  lemma DeMorgans() {
    assert(ℂ(A ∩ B) = ℂA ∪ ℂB)
  } →
  
  apply(DeMorgans()) →
  assert(ℂS ∪ ℂ(ℂT) = 𝕌) →
  
  lemma Double_Complement() {
    assert(ℂ(ℂX) = X)
  } →
  
  apply(Double_Complement()) →
  assert(ℂS ∪ T = 𝕌)
}

corollary Complement_Union_Universe() {
  assert(
    ∀S,T ⊆ 𝕌 ⇒ (S ∪ T = 𝕌 ↔ ℂS ⊆ T)
  )
}