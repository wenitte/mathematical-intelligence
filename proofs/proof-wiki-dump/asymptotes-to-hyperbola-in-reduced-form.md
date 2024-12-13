theorem Hyperbola_Asymptotes() {
  assert(
    ∀K(hyperbola), a,b ∈ ℝ+ ⇒
    [(x²/a² - y²/b² = 1) ∈ K] →
    [∃ asymptotes: y = ±(b/a)x]
  )
} ↔

proof Hyperbola_Asymptotes() {
  setVar(K: hyperbola, a,b: ℝ+) →
  assert(K: x²/a² - y²/b² = 1) →
  
  lemma PolarForm() {
    assert(
      ∀θ,r ∈ ℝ ⇒ 
      [cos²θ/a² - sin²θ/b² = 1/r²]
    )
  } →

  apply(PolarForm()) →
  
  assert(θ = 0 → r = a) →
  assert(θ ↑ → cos²θ ↓ ∧ sin²θ ↑) →
  assert(1/r² ↓ → r ↑) →
  
  lemma AsymptoticCondition() {
    assert(
      cos²θ/a² - sin²θ/b² = 0 ↔
      tan²θ = b²/a² ↔
      y²/x² = b²/a²
    )
  } →
  
  apply(AsymptoticCondition()) →
  
  assert(b²x² - a²y² = 0) →
  
  lemma HomogeneousQuadratic() {
    assert(
      ∀a',b',h' ∈ ℝ ⇒
      [a'x² + 2h'xy + b'y² = 0] ∧
      [h' = 0 ∧ a' = b² ∧ b' = -a²] →
      [∃ lines: y = ±(b/a)x]
    )
  } →
  
  apply(HomogeneousQuadratic()) →
  assert(asymptotes: y = ±(b/a)x)
}