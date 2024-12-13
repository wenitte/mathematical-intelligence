theorem GammaBound() {
  assert(
    ∀z ∈ ℂ, z = s + it, b ∈ ℝ, (|b| ≤ |t|) ⇒ 
    |Γ(s + it)| ≤ (|s + ib|/|s + it|)|Γ(s + ib)|
  )
} ↔

proof GammaBound() {
  setVar(z: ℂ, s,t,b: ℝ) →
  lemma EulerGamma() {
    assert(
      |Γ(s + it)| = lim[M→∞](1/|s + it|)∏[n=1→M](|(1 + 1/n)^s|/|1 + (s + it)/n|)
    )
  } →
  
  lemma ModulusExp() {
    assert(|(1 + 1/n)^(it)| = 1)
  } →
  
  lemma InequalityChain() {
    assert(|b| ≤ |t|) →
    assert(b²/n² ≤ t²/n²) →
    assert((1 + s/n)² + (b/n)² ≤ (1 + s/n)² + (t/n)²) →
    assert(|1 + (s + ib)/n| ≤ |1 + (s + it)/n|) →
    assert(1/|1 + (s + ib)/n| ≥ 1/|1 + (s + it)/n|)
  } →

  apply(EulerGamma()) →
  apply(ModulusExp()) →
  apply(InequalityChain()) →
  
  assert(
    |Γ(s + it)| = lim[M→∞](1/|s + it|)∏[n=1→M](|(1 + 1/n)^s|/|1 + (s + it)/n|) →
    |Γ(s + it)| ≤ lim[M→∞](1/|s + it|)∏[n=1→M](|(1 + 1/n)^s|/|1 + (s + ib)/n|) →
    |Γ(s + it)| ≤ (|s + ib|/|s + it|)|Γ(s + ib)|
  )
}