theorem LocallyFiniteClosures() {
  let T = ⟨S, τ⟩  // topological space
  let 𝔸 = {A ⊆ T}  // set of subsets
  assert(
    isLocallyFinite(𝔸, T) ⇒ 
    isLocallyFinite({A⁻ : A ∈ 𝔸}, T)
  )
} ↔

proof LocallyFiniteClosures() {
  let ℬ = {A⁻ : A ∈ 𝔸} →
  
  forall(x ∈ S) {
    // By locally finite definition
    exists(Uₓ ∈ τ) {
      assert(x ∈ Uₓ) ∧
      let 𝔸ₓ = {A ∈ 𝔸 : A ∩ Uₓ ≠ ∅} ∧
      assert(isFinite(𝔸ₓ))
    } →
    
    let ℬₓ = {A⁻ ∈ ℬ : A⁻ ∩ Uₓ ≠ ∅} →
    
    forall(A⁻ ∈ ℬₓ) {
      lemma OpenSetDisjointClosure() {
        assert(
          (Uₓ ∩ A ≠ ∅) ⇒ A ∈ 𝔸ₓ
        )
      } →
      apply(OpenSetDisjointClosure()) →
      assert(A ∈ 𝔸ₓ)
    } →
    
    assert(|ℬₓ| ≤ |𝔸ₓ|) →
    assert(isFinite(ℬₓ))
  } →
  
  // By locally finite definition
  assert(
    ∀x ∈ S, ∃Uₓ ∈ τ : (x ∈ Uₓ ∧ isFinite({A⁻ ∈ ℬ : A⁻ ∩ Uₓ ≠ ∅}))
  ) →
  
  assert(isLocallyFinite(ℬ, T))
}