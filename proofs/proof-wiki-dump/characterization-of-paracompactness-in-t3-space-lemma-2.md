theorem Locally_Finite_Closure_Cover() {
  assert(
    ∀T(T = ⟨X,τ⟩ ∧ IsTopologicalSpace(T)) ∧
    ∀𝔸(IsLocallyFiniteCover(𝔸,T)) ∧
    ∃𝔹(𝔹 = {A⁻: A ∈ 𝔸} ∧ IsLocallyFinite(𝔹)) →
    IsCover(𝔹,T) ∧ ∀B∈𝔹(IsClosed(B,T))
  )
} ↔

proof Locally_Finite_Closure_Cover() {
  setVar(x: X) →
  assert(IsCover(𝔸,X)) →
  assert(∃A ∈ 𝔸(x ∈ A)) →
  
  lemma Subset_Of_Closure() {
    assert(∀A(A ⊆ A⁻))
  } →
  
  apply(Subset_Of_Closure()) →
  assert(x ∈ A ∧ A ⊆ A⁻ → x ∈ A⁻) →
  assert(A⁻ ∈ 𝔹) →
  
  forall(x: X) {
    assert(∃B ∈ 𝔹(x ∈ B))
  } →
  
  lemma Closure_Is_Closed() {
    assert(∀S(IsClosure(S⁻) → IsClosed(S⁻)))
  } →
  
  apply(Closure_Is_Closed()) →
  assert(∀B ∈ 𝔹(IsClosed(B,T)))
}