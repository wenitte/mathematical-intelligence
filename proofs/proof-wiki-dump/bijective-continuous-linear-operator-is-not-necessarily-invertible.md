theorem NotNecessarilyInvertible() {
  assert(
    ∀X[NormedVectorSpace(X) ∧ 
    ∀A∈CL(X)[Bijective(A) ⇏ Invertible(A)]]
  )
} ↔

proof NotNecessarilyInvertible() {
  setVar(F: {ℝ,ℂ}) →
  setVar(c₀₀: AlmostZeroSequences(F)) →
  setVar(x: c₀₀) →
  
  define(A: c₀₀ → c₀₀) {
    ∀(x₁,x₂,x₃,...) ∈ c₀₀: A(x) = (x₁,x₂/2,x₃/3,...)
  } →
  
  lemma LinearOperator() {
    assert(
      ∀x,y∈c₀₀,∀λ∈F: A(x) + λA(y) = A(x + λy)
    )
  } →

  lemma ContinuousOperator() {
    setVar(‖·‖: SupremumNorm) →
    assert(
      ‖A‖ = sup{1/i: i∈ℕ₊} = 1 ∧
      ∀x∈c₀₀: ‖A(x)‖_∞ ≤ ‖x‖_∞
    )
  } →

  lemma Injective() {
    assert(
      ∀x,y∈c₀₀: A(x) = A(y) → x = y
    )
  } →

  lemma Surjective() {
    assert(
      ∀y∈c₀₀,∃x∈c₀₀: A(x) = y ∧
      x = (y₁,2y₂,3y₃,...)
    )
  } →

  lemma NotInvertible() {
    assume(∃B∈CL(c₀₀): B = A⁻¹) →
    setVar(eₘ: (0,...,0,1,0,...)) →
    assert(
      ∀m∈ℕ₊: 1 = ‖eₘ‖_∞ = ‖B(A(eₘ))‖_∞ ≤ ‖B‖·(1/m)
    ) →
    assert(∀m∈ℕ₊: m ≤ ‖B‖) →
    assert(‖B‖ = ∞) →
    contradiction(
      ‖B‖ ∈ ℝ by SupremumOperatorNormDefinition
    )
  } →
  
  apply(LinearOperator()) →
  apply(ContinuousOperator()) →
  apply(Injective()) →
  apply(Surjective()) →
  apply(NotInvertible()) →
  assert(Bijective(A) ∧ ¬Invertible(A))
}