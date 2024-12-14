theorem Cosine_Coefficients_Trigonometric_Series() {
  assert(
    ∀f: ℝ → ℝ, ∀α ∈ ℝ, ∀{an, bn} ∈ ℝ ⇒
    (f(x) = a₀/2 + ∑(m=1 → ∞)[am cos(mx) + bm sin(mx)] on (α, α+2π)) →
    (∀n ∈ ℤ≥0: an = (1/π)∫[α → α+2π] f(x)cos(nx)dx)
  )
} ↔

proof Cosine_Coefficients_Trigonometric_Series() {
  setVar(f(x): ℝ → ℝ) →
  assert(f(x) = a₀/2 + ∑(m=1 → ∞)[am cos(mx) + bm sin(mx)]) →
  
  lemma Integration_Step() {
    assert(∫[α → α+2π] f(x)cos(nx)dx = 
           ∫[α → α+2π] (a₀/2 + ∑(m=1 → ∞)[am cos(mx) + bm sin(mx)])cos(nx)dx)
  } →
  
  apply(Integration_Step()) →
  apply(Linearity_Of_Integration()) →
  assert(= (a₀/2)∫[α → α+2π]cos(nx)dx + 
         ∑(m=1 → ∞)[∫[α → α+2π](am cos(mx) + bm sin(mx))cos(nx)dx]) →
  
  lemma Cosine_Integral() {
    assert(∫[α → α+2π]cos(nx)dx = 2πδn0)
    where(δn0 = {1 if n=0, 0 if n≠0})
  } →
  
  apply(Cosine_Integral()) →
  assert(= a₀πδn0 + ∑(m=1 → ∞)[am∫cos(mx)cos(nx)dx + bm∫sin(mx)cos(nx)dx]) →
  
  lemma Orthogonality_Relations() {
    assert(∫[α → α+2π]sin(mx)cos(nx)dx = 0) ∧
    assert(∫[α → α+2π]cos(mx)cos(nx)dx = πδmn)
    where(δmn = {π if m=n, 0 if m≠n})
  } →
  
  apply(Orthogonality_Relations()) →
  assert(= a₀πδn0 + ∑(m=1 → ∞)[amπδmn]) →
  assert(= πan) →
  
  conclude(an = (1/π)∫[α → α+2π]f(x)cos(nx)dx)
}