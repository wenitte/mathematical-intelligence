theorem Closure_Subset_Indiscrete() {
  let(T = ⟨S, {∅, S}⟩) →
  assert(
    [T is indiscrete topological space] ∧
    [∅ ⊂ H ⊆ S]
  ) ⇒
  assert(
    H⁻ = H⁻° = H⁻°⁻ = S
  )
}

proof Closure_Subset_Indiscrete() {
  lemma Limit_Points() {
    assert(∀p ∈ S ⇒ p is limit point of H)
  } →
  
  apply(Definition_Closure) →
  assert(H ≠ ∅ → H⁻ = S) →
  
  lemma Open_Set_Axioms() {
    assert(S is open in T)
  } →
  
  apply(Interior_Open_Set) →
  assert(S° = S) →
  
  lemma Clopen_Set() {
    assert(S is closed in T)
  } →
  
  apply(Closed_Set_Closure) →
  assert(S⁻ = S) →
  
  conclude(
    H⁻ = S ∧
    S° = S ∧
    S⁻ = S ⇒
    H⁻ = H⁻° = H⁻°⁻ = S
  )
}