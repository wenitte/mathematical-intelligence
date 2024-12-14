theorem Complex_Function_Continuity() {
  assert(
    ∀f,g: S → ℂ,
    ∀λ,μ ∈ ℂ,
    ∀S ⊆ ℂ where S is open,
    (continuous(f,S) ∧ continuous(g,S)) →
    continuous(λf + μg, S)
  )
} ↔

proof Complex_Function_Continuity() {
  setVar(f,g: S → ℂ) →
  setVar(λ,μ ∈ ℂ) →
  setVar(S ⊆ ℂ, open(S)) →
  
  def_continuous(f,S) ↔ {
    assert(∀c ∈ S: lim[z→c] f(z) = f(c))
  } →
  
  def_continuous(g,S) ↔ {
    assert(∀c ∈ S: lim[z→c] g(z) = g(c))
  } →
  
  setVar(c ∈ S) →
  setVar(l = lim[z→c] f(z)) →
  setVar(m = lim[z→c] g(z)) →
  
  lemma Complex_Sum_Rule() {
    assert(
      lim[z→c] (λf(z) + μg(z)) = λl + μm
    )
  } →
  
  apply(Complex_Sum_Rule()) →
  
  assert(lim[z→c] (λf(z) + μg(z)) = λf(c) + μg(c)) →
  assert(continuous(λf + μg, S))
}