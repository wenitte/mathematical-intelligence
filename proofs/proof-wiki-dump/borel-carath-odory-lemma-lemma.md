theorem BorelCaratheodoryLemma() {
  setDomain(D: OpenSet(ℂ), 0 ∈ D) ∧
  setVar(R: ℝ₊) ∧
  assert(B(0,R) ⊂ D) ∧
  setFunction(f: D → ℂ, analytic) ∧
  assert(f(0) = 0) ∧
  assert(∀z ∈ ℂ: |z| ≤ R → Re(f(z)) ≤ M) ∧
  setVar(r: ℝ₊, r < R) →
  assert(∀n ∈ ℤ₊: |f⁽ⁿ⁾(0)|/n! ≤ 2M/R^n)
} ↔

proof BorelCaratheodoryLemma() {
  apply(CauchyIntegralTheorem) →
  assert(∀k ∈ ℤ₀: ∮_{∂D} z^{k-1}f(z)dz = 0) →
  
  setParametrization(z = Re^{2πit}, t ∈ [0,1]) →
  assert(∀k ∈ ℤ₀: ∫₀¹ e^{2πikt}f(Re^{2πit})dt = 0) →
  
  apply(CauchyIntegralFormula) →
  assert(f⁽ⁿ⁾(0) = (n!/(2πi))∮_{∂D} f(z)/z^{n+1}dz) →
  
  applyParametrization() →
  assert(f⁽ⁿ⁾(0) = (n!/R^n)∫₀¹ e^{-2πint}f(Re^{2πit})dt) →
  
  setVar(θₙ = arg(f⁽ⁿ⁾(0))) →
  assert(|f⁽ⁿ⁾(0)| = e^{-iθₙ}f⁽ⁿ⁾(0)) →
  
  apply(IntegralTransform) →
  assert(∫₀¹ f(Re^{2πit})(2 + e^{i(2πnt+θₙ)})dt = 0) →
  
  assert(|f⁽ⁿ⁾(0)| = (2n!/R^n)∫₀¹ f(Re^{2πit})(1 + cos(2πnt+θₙ))dt) →
  
  assert(|f⁽ⁿ⁾(0)| = (2n!/R^n)∫₀¹ Re(f(Re^{2πit}))(1 + cos(2πnt+θₙ))dt) →
  
  apply(InequalityBound) →
  assert(|f⁽ⁿ⁾(0)| ≤ (2Mn!/R^n)∫₀¹ (1 + cos(2πnt+θₙ))dt) →
  
  evaluate(∫₀¹ (1 + cos(2πnt+θₙ))dt = 1) →
  assert(|f⁽ⁿ⁾(0)| ≤ 2Mn!/R^n)
}