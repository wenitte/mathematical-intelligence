theorem BeppoLevi() {
  assert(
    ∀(X,Σ,μ) [MeasureSpace(X,Σ,μ) ∧
    ∀{fn}n∈ℕ ∈ MM̄ℝ+ [
      Increasing({fn}n∈ℕ) ∧
      ΣMeasurable({fn}n∈ℕ) ∧
      Positive({fn}n∈ℕ)
    ]] ⇒
    ∫sup(n∈ℕ)fn dμ = sup(n∈ℕ)∫fn dμ
  )
} ↔

proof BeppoLevi() {
  # Part 1: Show ≥ inequality
  setVar(m: ℕ) →
  assert(sup(n∈ℕ)fn ≥ fm) →
  assert(∫sup(n∈ℕ)fn dμ ≥ ∫fm dμ) →
  assert(∫sup(n∈ℕ)fn dμ ≥ sup(m∈ℕ)∫fm dμ) →

  # Part 2: Show ≤ inequality
  lemma SimpleFunction() {
    setVar(s: Function) →
    assert(s = ∑(i=1)^k λi χEi ∧ s ≤ sup(n∈ℕ)fn) →
    setVar(νs: Σ→[0,∞]) →
    assert(νs(E) = ∫χEs dμ) →
    
    setVar(ε: ℝ+) →
    assert(0 < ε < 1) →
    setVar(Am = {x∈X: fm(x) ≥ (1-ε)s(x)}) →
    assert(X = ∪(m∈ℕ)Am) →
    assert(Am↑X as m→∞) →
    
    assert(∫fm dμ ≥ ∫χAm fm dμ ≥ (1-ε)∫χAm s dμ = (1-ε)νs(Am)) →
    apply(MonotoneConvergence()) →
    assert(sup(m∈ℕ)∫fm dμ = lim(m→∞)∫fm dμ ≥ lim(m→∞)(1-ε)νs(Am) = (1-ε)νs(X) = (1-ε)∫s dμ)
  } →
  
  apply(SimpleFunction()) →
  assert(sup(m∈ℕ)∫fm dμ ≥ ∫s dμ) →
  assert(∀ε>0 [sup(m∈ℕ)∫fm dμ ≥ ∫sup(n∈ℕ)fn dμ]) →
  conclude(∫sup(n∈ℕ)fn dμ = sup(n∈ℕ)∫fn dμ)
}