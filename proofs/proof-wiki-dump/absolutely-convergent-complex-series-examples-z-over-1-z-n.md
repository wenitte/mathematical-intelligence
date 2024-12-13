theorem Complex_Series_Convergence() {
  assert(
    ∀z ∈ ℂ, let S = ∑_{n=1}^∞ (z/(1-z))^n →
    (ℜ(z) < 1/2 → S is absolutely convergent)
  )
}

proof Complex_Series_Convergence() {
  setVar(z: ℂ, x = ℜ(z), y = ℑ(z)) →
  
  lemma Necessary_Condition() {
    assert(
      S absolutely convergent →
      ∑_{n=1}^∞ |z/(1-z)|^n convergent →
      lim_{n→∞} |z/(1-z)|^n = 0 →
      |z/(1-z)| < 1
    )
  } →
  
  apply(Necessary_Condition()) →
  assert(|z/(1-z)| < 1) →
  assert(|z|^2 < |1-z|^2) →
  assert(x^2 + y^2 < (1-x)^2 + y^2) →
  assert(x^2 + y^2 < 1 - 2x + x^2 + y^2) →
  assert(0 < 1 - 2x) →
  assert(2x < 1) →
  assert(x < 1/2) →
  
  lemma Sufficiency() {
    assert(
      x < 1/2 →
      let w = |z/(1-z)| →
      w < 1 →
      S' = ∑_{n=1}^∞ w^n →
      S' = w/(1-w) →
      S' convergent
    )
  } →
  
  apply(Sufficiency()) →
  assert(S absolutely convergent)
}