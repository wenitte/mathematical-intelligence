theorem Quotient_Rule_Continuity() {
  assert(
    ∀f,g: ℝ → ℝ ∧
    ∀S ⊆ ℝ [S is open] ∧
    continuous(f,S) ∧ continuous(g,S) ⇒
    continuous(f/g, S\{x ∈ S: g(x) = 0})
  )
} ↔

proof Quotient_Rule_Continuity() {
  setVar(f,g: ℝ → ℝ) →
  setVar(S: subset(ℝ)) →
  assert(continuous(f,S) ↔ ∀c ∈ S: lim[x→c] f(x) = f(c)) →
  assert(continuous(g,S) ↔ ∀c ∈ S: lim[x→c] g(x) = g(c)) →
  
  lemma Limit_Values() {
    setVar(c ∈ S) →
    assert(lim[x→c] f(x) = l) ∧
    assert(lim[x→c] g(x) = m)
  } →

  lemma Quotient_Limit_Rule() {
    assert(
      ∀l,m ∈ ℝ ∧ m ≠ 0 ⇒
      lim[x→c] (f(x)/g(x)) = l/m
    )
  } →

  apply(Limit_Values()) →
  apply(Quotient_Limit_Rule()) →
  
  assert(
    ∀x ∈ S: g(x) ≠ 0 ⇒
    lim[x→c] (f(x)/g(x)) = f(c)/g(c)
  ) →
  
  assert(continuous(f/g, S\{x ∈ S: g(x) = 0}))
}