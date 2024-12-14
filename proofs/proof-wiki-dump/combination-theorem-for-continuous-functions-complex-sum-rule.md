theorem ComplexFunctionSumContinuity() {
  assert(
    ∀f,g: (ℂ → ℂ) ∧ ∀S ⊆ ℂ [open(S)] ∧
    continuous(f,S) ∧ continuous(g,S) ⇒
    continuous(f+g,S)
  )
} ↔

proof ComplexFunctionSumContinuity() {
  setVar(f,g: ℂ → ℂ) →
  setVar(S: set[ℂ], open(S)) →
  
  lemma ContinuityF() {
    assert(
      continuous(f,S) ↔ 
      ∀c ∈ S: lim[z→c](f(z)) = f(c)
    )
  } →

  lemma ContinuityG() {
    assert(
      continuous(g,S) ↔ 
      ∀c ∈ S: lim[z→c](g(z)) = g(c)
    )
  } →

  setVar(c: ℂ, c ∈ S) →
  setVar(l,m: ℂ) →
  assert(lim[z→c](f(z)) = l) →
  assert(lim[z→c](g(z)) = m) →

  lemma ComplexLimitSum() {
    assert(
      lim[z→c](f(z) + g(z)) = lim[z→c](f(z)) + lim[z→c](g(z))
    )
  } →

  apply(ComplexLimitSum()) →
  assert(lim[z→c](f(z) + g(z)) = l + m) →
  assert(l + m = f(c) + g(c)) →
  assert(continuous(f+g,S))
}