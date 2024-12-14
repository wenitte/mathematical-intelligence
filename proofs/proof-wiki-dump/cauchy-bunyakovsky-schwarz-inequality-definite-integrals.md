theorem Cauchy_Bunyakovsky_Schwarz_Integral() {
  assert(
    ∀f,g: [a,b] → ℝ | continuous(f) ∧ continuous(g) ⇒
    (∫[a,b] f(t)g(t)dt)² ≤ (∫[a,b] (f(t))²dt)(∫[a,b] (g(t))²dt)
  )
} ↔

proof Cauchy_Bunyakovsky_Schwarz_Integral() {
  setVar(x: ℝ) →
  assert(∀t ∈ [a,b]: (xf(t) + g(t))² ≥ 0) →
  
  lemma Integral_NonNegative() {
    assert(∫[a,b] (xf(t) + g(t))²dt ≥ 0)
  } →
  
  expand(Integral_NonNegative()) →
  assert(∫[a,b] (x²(f(t))² + 2xf(t)g(t) + (g(t))²)dt ≥ 0) →
  
  setVar(A = ∫[a,b] (f(t))²dt) →
  setVar(B = ∫[a,b] f(t)g(t)dt) →
  setVar(C = ∫[a,b] (g(t))²dt) →
  
  rewrite(∫[a,b] (x²(f(t))² + 2xf(t)g(t) + (g(t))²)dt = Ax² + 2Bx + C) →
  
  lemma Quadratic_NonNegative() {
    assert(∀x ∈ ℝ: Ax² + 2Bx + C ≥ 0 ⇒ 4AC - (2B)² ≥ 0)
  } →
  
  apply(Quadratic_NonNegative()) →
  assert(4AC - 4B² ≥ 0) →
  assert(B² ≤ AC) →
  
  substitute(A,B,C) →
  assert((∫[a,b] f(t)g(t)dt)² ≤ (∫[a,b] (f(t))²dt)(∫[a,b] (g(t))²dt))
}