theorem BoundedComplexValuedContinuousFunctionsFormCStarAlgebra() {
  let(X: TopologicalSpace) ∧
  let(C_b(X): BoundedContinuousFunctions(X → ℂ)) ∧
  let(‖·‖_∞: SupremumNorm(C_b(X))) ∧
  let(f̄(x) := conj(f(x)), ∀f ∈ C_b(X), ∀x ∈ X) →
  assert(
    ⟨C_b(X), ‖·‖_∞⟩ is_a UnitalCStarAlgebra
  )
} ↔

proof BoundedComplexValuedContinuousFunctionsFormCStarAlgebra() {
  lemma BanachSpaceProperty() {
    assert(⟨C_b(X), ‖·‖_∞⟩ is_a BanachSpace(ℂ))
  } →
  
  lemma ContinuityProperty() {
    ∀f,g ∈ C_b(X) →
    assert(f·g is_continuous) ∧
    assert(f·g is_bounded)
  } →
  
  lemma NormInequality() {
    ∀f,g ∈ C_b(X), ∀x ∈ X →
    assert(|f(x)·g(x)| = |f(x)|·|g(x)|) →
    assert(‖f·g‖_∞ ≤ ‖f‖_∞·‖g‖_∞)
  } →
  
  lemma UnityElement() {
    let(𝟙: X → ℂ, x ↦ 1) →
    assert(∀f ∈ C_b(X), ∀x ∈ X: f(x)·𝟙(x) = 𝟙(x)·f(x) = f(x)) ∧
    assert(𝟙 is_continuous) ∧
    assert(∀x ∈ X: |𝟙(x)| = 1) ∧
    assert(‖𝟙‖_∞ = 1)
  } →
  
  lemma InvolutionProperty() {
    apply(ComplexNumbersFormUnitalCStarAlgebra()) →
    assert(¯ is_involution_on C_b(X))
  } →
  
  lemma CStarIdentity() {
    ∀f ∈ C_b(X), ∀x ∈ X →
    assert(|f(x)·f̄(x)| = |f(x)|²) →
    assert(‖f·f̄‖_∞ = ‖f‖²_∞)
  } →
  
  apply(BanachSpaceProperty()) ∧
  apply(ContinuityProperty()) ∧
  apply(NormInequality()) ∧
  apply(UnityElement()) ∧
  apply(InvolutionProperty()) ∧
  apply(CStarIdentity()) →
  conclude(⟨C_b(X), ‖·‖_∞⟩ is_a UnitalCStarAlgebra)
}