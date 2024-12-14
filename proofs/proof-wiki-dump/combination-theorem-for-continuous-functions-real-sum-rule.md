theorem Continuous_Functions_Sum_Rule() {
  assert(
    ∀f,g: (ℝ → ℝ) ∧ ∀S ⊆ ℝ: Open(S) ∧
    (∀x ∈ S: Continuous(f,x) ∧ Continuous(g,x)) ⇒
    (∀x ∈ S: Continuous(f+g,x))
  )
} ↔

proof Continuous_Functions_Sum_Rule() {
  setVar(f,g: ℝ → ℝ) →
  setVar(S ⊆ ℝ: Open(S)) →
  setVar(c ∈ S) →
  
  lemma Continuity_Definition() {
    assert(
      Continuous(f,c) ↔ lim[x→c](f(x)) = f(c) ∧
      Continuous(g,c) ↔ lim[x→c](g(x)) = g(c)
    )
  } →
  
  setVar(l = lim[x→c](f(x))) →
  setVar(m = lim[x→c](g(x))) →
  
  lemma Sum_Rule_Limits() {
    assert(
      lim[x→c](f(x) + g(x)) = lim[x→c](f(x)) + lim[x→c](g(x))
    )
  } →
  
  apply(Sum_Rule_Limits()) →
  assert(lim[x→c](f(x) + g(x)) = l + m) →
  assert(l = f(c) ∧ m = g(c)) →
  assert(lim[x→c](f(x) + g(x)) = f(c) + g(c)) →
  apply(Continuity_Definition()) →
  assert(Continuous(f+g,c))
}