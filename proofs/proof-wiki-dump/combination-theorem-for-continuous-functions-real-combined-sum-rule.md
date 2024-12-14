theorem LinearCombination_Continuous() {
  assert(
    ∀f,g: (ℝ → ℝ) ∧
    ∀S ⊆ ℝ (S is open) ∧
    ∀λ,μ ∈ ℝ ∧
    Continuous(f,S) ∧ 
    Continuous(g,S) ⇒
    Continuous(λf + μg, S)
  )
} ↔

proof LinearCombination_Continuous() {
  setVar(f,g: ℝ → ℝ) →
  setVar(S: open subset of ℝ) →
  setVar(λ,μ: ℝ) →
  
  assert(Continuous(f,S) ↔ 
    ∀c ∈ S: lim[x→c] f(x) = f(c)) →
  assert(Continuous(g,S) ↔ 
    ∀c ∈ S: lim[x→c] g(x) = g(c)) →
    
  setVar(c: S) →
  setVar(l: ℝ = lim[x→c] f(x)) →
  setVar(m: ℝ = lim[x→c] g(x)) →
  
  lemma CombinedSumRule() {
    assert(
      lim[x→c] (λf(x) + μg(x)) = 
      λ·lim[x→c] f(x) + μ·lim[x→c] g(x)
    )
  } →
  
  apply(CombinedSumRule()) →
  assert(lim[x→c] (λf(x) + μg(x)) = λl + μm) →
  assert(λl + μm = λf(c) + μg(c)) →
  assert(Continuous(λf + μg, S))
}