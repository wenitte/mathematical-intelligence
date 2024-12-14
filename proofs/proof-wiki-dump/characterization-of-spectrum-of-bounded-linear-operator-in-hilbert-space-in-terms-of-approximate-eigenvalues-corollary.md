theorem Spectrum_Approx_Eigenval_SelfAdjoint() {
  assert(
    ∀H(HilbertSpace(H) ∧ BaseField(H) = ℂ) ∧
    ∀T:H→H(SelfAdjoint(T) ∧ Bounded(T) ∧ Linear(T)) ∧
    ∀λ∈ℂ(λ ∈ σ(T) ↔ ApproxEigenval(T,λ))
  )
} ↔

proof Spectrum_Approx_Eigenval_SelfAdjoint() {
  lemma Adjoint_Involutive() {
    assert(T** = T)
  } →
  
  lemma Spectrum_Char() {
    assert(
      ∀λ∈ℂ(λ ∈ σ(T) ↔ (ApproxEigenval(T,λ) ∨ ApproxEigenval(T,λ̄)))
    )
  } →
  
  lemma SelfAdj_Spectrum_Real() {
    assert(σ(T) ⊆ ℝ)
  } →
  
  apply(SelfAdj_Spectrum_Real()) →
  assert(∀λ∈σ(T) ⇒ λ = λ̄) →
  
  lemma Eigenval_Is_ApproxEigenval() {
    assert(
      ∀λ∈ℂ(Eigenval(T,λ) ⇒ ApproxEigenval(T,λ))
    )
  } →
  
  apply(Spectrum_Char()) →
  apply(Eigenval_Is_ApproxEigenval()) →
  
  assert(
    ∀λ∈ℂ(λ ∈ σ(T) ↔ ApproxEigenval(T,λ))
  )
}