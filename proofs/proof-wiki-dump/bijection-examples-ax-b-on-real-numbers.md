theorem BijectionAxPlusB() {
  assert(
    ∀a,b ∈ ℝ, a ≠ 0 →
    let f: ℝ → ℝ where f(x) = ax + b →
    isBijection(f)
  )
} ↔

proof BijectionAxPlusB() {
  setVar(a,b: ℝ, a ≠ 0) →
  def(f: ℝ → ℝ, f(x) = ax + b) →
  
  // Prove injection
  lemma Injection() {
    setVar(x₁,x₂: ℝ) →
    assert(f(x₁) = f(x₂)) →
    assert(ax₁ + b = ax₂ + b) →
    assert(ax₁ = ax₂) →
    assert(x₁ = x₂) by(a ≠ 0) →
    conclude(isInjective(f))
  } →

  // Prove surjection
  lemma Surjection() {
    setVar(y: ℝ) →
    def(x = (y-b)/a) →
    assert(x ∈ ℝ) by(a ≠ 0) →
    assert(f(x) = a((y-b)/a) + b = y) →
    conclude(isSurjective(f))
  } →

  // Combine results
  apply(Injection()) ∧
  apply(Surjection()) →
  conclude(isBijection(f))
}