theorem Product_Rule_Continuity() {
  assert(
    ∀f,g: ℝ→ℝ ∧ ∀S ⊆ ℝ where S is open ∧
    (continuous(f,S) ∧ continuous(g,S)) →
    continuous(f·g, S)
  )
} ↔

proof Product_Rule_Continuity() {
  setVar(f,g: ℝ→ℝ) →
  setVar(S: open subset of ℝ) →
  setVar(c ∈ S) →
  
  lemma Continuity_Definition() {
    assert(
      continuous(f,S) ↔ ∀c∈S: lim[x→c](f(x)) = f(c) ∧
      continuous(g,S) ↔ ∀c∈S: lim[x→c](g(x)) = g(c)
    )
  } →
  
  setVar(l,m: ℝ) →
  assert(
    lim[x→c](f(x)) = l ∧
    lim[x→c](g(x)) = m
  ) →
  
  lemma Product_Rule_Limits() {
    assert(
      lim[x→c](f(x)·g(x)) = lim[x→c](f(x)) · lim[x→c](g(x))
    )
  } →
  
  apply(Product_Rule_Limits()) →
  assert(lim[x→c](f(x)·g(x)) = l·m) →
  assert(l = f(c) ∧ m = g(c)) →
  assert(lim[x→c](f(x)·g(x)) = f(c)·g(c)) →
  apply(Continuity_Definition()) →
  assert(continuous(f·g, S))
}