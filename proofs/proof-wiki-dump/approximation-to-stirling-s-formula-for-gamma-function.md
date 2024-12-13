theorem ApproximationStirlingGamma() {
  let(Dϵ: {z ∈ ℂ: |Arg(z)| < π - ϵ, |z| > 1})
  let(ϵ: ℝ>0)
  assert(
    ∀z ∈ Dϵ ⇒ Γ(z) = √(2π/z)(z/e)^z(1 + O(z^(-1)))
  )
} ↔

proof ApproximationStirlingGamma() {
  setVar(y: ℝ, 0 < y ≤ 1) →
  setVar(n: ℕ) →
  
  lemma BoundInequality() {
    assert((y + n)^y n! ≤ Γ(y + n + 1) ≤ (n + 1)^y n!)
  } →
  
  setVar(x: ℝ≥1) →
  let(n + 1 = ⌊x⌋) →
  let(x = y + n + 1) →
  
  assert(
    Γ(x)/(√(2π)x^x x^(-1/2)e^(-x)) ≤ 
    (n + 1)^y n!/(√(2π)x^x x^(-1/2)e^(-x))
  ) →
  
  apply(StirlingFormula()) →
  assert(
    ∼ ((n + 1)^y n!√(2π)n^n n^(1/2)e^(-n))/(√(2π)x^x x^(-1/2)e^(-x))
  ) →
  
  simplify() →
  assert(
    = ((n + 1)/(y + n + 1))^y * (n/(y + n + 1))^(1/2) * 
      (1 + (y + 1)/n)^(-n) * e^(y + 1)
  ) →
  
  limitAs(n → ∞) →
  assert(→ 1) →
  
  extend(ComplexDomain()) →
  conclude()
}

notes() {
  warn("Proof is incomplete for full complex domain Dϵ")
  warn("Only proven for real x ≥ 1")
}