theorem BoundedSequenceConvergence() {
  assert(
    ∀{xᵢ}ᵢ∈ℕ ∈ ℝⁿ ∧ 
    (∃M ∈ ℝ)(∀i ∈ ℕ)(||xᵢ|| ≤ M) ⇒
    ∃{xᵢₖ}ₖ∈ℕ ⊆ {xᵢ}ᵢ∈ℕ: lim(k→∞)xᵢₖ exists
  )
}

proof BoundedSequenceConvergence_1() {
  setMetric(d: ℝⁿ×ℝⁿ→ℝ) →
  assert(∃v ∈ ℝⁿ)(∃ε > 0)(∀i ∈ ℕ: d(v,xᵢ) < ε) →
  let(S = B⁻ₑ(v)) →
  lemma ClosedBallCompact() {
    assert(S is compact)
  } →
  apply(ClosedBallCompact()) →
  lemma CompactSequentiallyCompact() {
    assert(
      S compact ⇒ 
      ∃{xᵢₖ}ₖ∈ℕ ⊆ {xᵢ}ᵢ∈ℕ: lim(k→∞)xᵢₖ exists
    )
  } →
  apply(CompactSequentiallyCompact()) →
  assert(∃{xᵢₖ}ₖ∈ℕ ⊆ {xᵢ}ᵢ∈ℕ: lim(k→∞)xᵢₖ exists)
}

proof BoundedSequenceConvergence_2() {
  let(S = range({xᵢ}ᵢ∈ℕ)) →
  lemma ClosureBounded() {
    assert(cl(S) is bounded)
  } →
  lemma ClosureIsClosed() {
    assert(cl(S) is closed)
  } →
  apply(HeineBorelTheorem(cl(S))) →
  assert(cl(S) is compact) →
  apply(CompactSequentiallyCompact()) →
  assert(∃{xᵢₖ}ₖ∈ℕ ⊆ {xᵢ}ᵢ∈ℕ: lim(k→∞)xᵢₖ exists)
}

proof BoundedSequenceConvergence_3() {
  beginInduction(n: ℕ) {
    base(n=1) {
      apply(BolzanoWeierstrassTheorem())
    } →
    
    hypothesis(n) {
      assert(
        ∀{xᵢ}ᵢ∈ℕ bounded in ℝⁿ ⇒ 
        ∃{xᵢₖ}ₖ∈ℕ ⊆ {xᵢ}ᵢ∈ℕ: convergent
      )
    } →
    
    step(n+1) {
      let(xₙ = (αₙ,βₙ) where αₙ ∈ ℝⁿ, βₙ ∈ ℝ) →
      assert(||αₙ||₂ ≤ ||xₙ||₂) →
      apply(hypothesis(n)) →
      assert(∃{αₙₖ}ₖ∈ℕ: convergent to α) →
      assert(|βₙ| ≤ ||xₙ||₂) →
      apply(BolzanoWeierstrassTheorem()) →
      assert(∃{βₙₖ}ₖ∈ℕ: convergent to β) →
      assert(lim(k→∞)xₙₖ = (α,β))
    }
  }
}