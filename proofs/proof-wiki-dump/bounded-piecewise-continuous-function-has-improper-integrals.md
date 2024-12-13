theorem BoundedPiecewiseContinuousImproperIntegrals() {
  assert(
    ∀f: ℝ → ℝ,
    ∀[a,b]: ClosedInterval,
    (a < b) ∧
    IsPiecewiseContinuous(f, [a,b]) ∧
    IsBounded(f, [a,b]) 
    ⇒ HasImproperIntegrals(f)
  )
}

proof BoundedPiecewiseContinuousImproperIntegrals() {
  setVar(f: ℝ → ℝ) →
  setVar([a,b]: ClosedInterval) →
  assert(IsPiecewiseContinuous(f, [a,b]) ∧ IsBounded(f, [a,b])) →
  
  lemma SufficientCondition() {
    assert(
      ∀i ∈ {1,...,n}: ∃∫[xi-1+,xi-] f(x)dx
      ⇒ HasImproperIntegrals(f)
    )
  } →
  
  setVar(i ∈ {1,...,n}) →
  setVar(c ∈ (xi-1, xi)) →
  
  lemma ImproperIntegralExists() {
    assert(
      ∃(lim[γ→xi-1+] ∫[γ,c] f(x)dx) ∧
      ∃(lim[γ→xi-] ∫[c,γ] f(x)dx)
      ⇔ ∃∫[xi-1+,xi-] f(x)dx
    )
  } →
  
  apply(DarbouxIntegrableTheorem) →
  assert(IsDarbouxIntegrable(f, [a,b])) →
  
  setVar(B: ℝ | |f(x)| ≤ B ∀x ∈ [a,b]) →
  
  lemma LeftLimitExists() {
    assert(
      |∫[γ1,c] f(x)dx - ∫[xi-1,c] f(x)dx| ≤ B|γ1 - xi-1|
      ∧ lim[γ1→xi-1+] B|γ1 - xi-1| = 0
      ⇒ ∃(lim[γ→xi-1+] ∫[γ,c] f(x)dx)
    )
  } →
  
  lemma RightLimitExists() {
    assert(
      |∫[c,xi] f(x)dx - ∫[c,γ2] f(x)dx| ≤ B|xi - γ2|
      ∧ lim[γ2→xi-] B|xi - γ2| = 0
      ⇒ ∃(lim[γ→xi-] ∫[c,γ] f(x)dx)
    )
  } →
  
  apply(LeftLimitExists()) →
  apply(RightLimitExists()) →
  apply(ImproperIntegralExists()) →
  apply(SufficientCondition()) →
  
  assert(HasImproperIntegrals(f))
}