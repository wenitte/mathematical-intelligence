theorem Metric_Space_Completeness() {
  define(M = ⟨S,d⟩: MetricSpace) ∧
  define(A ⊆ S: Set) ∧
  assert(
    isDense(A,S) ∧
    ∀seq∈CauchySequences(A) → convergesIn(seq,M)
    ⇒ isComplete(M)
  )
} ↔

proof Metric_Space_Completeness() {
  let(⟨xₙ⟩: CauchySequence(M)) →
  
  lemma Choose_Dense_Points() {
    apply(AxiomCountableChoice) →
    assert(∀n∃yₙ∈A: d(xₙ,yₙ) < 1/n)
  } →

  lemma Y_Sequence_Is_Cauchy() {
    let(ε > 0) →
    assert(∃N'∈ℕ: ∀n,m≥N' → d(xₙ,xₘ) < ε/3) →
    let(N = max(N', ⌈3/ε⌉)) →
    
    assert(n,m≥N ⇒ (
      n,m≥N' ∧
      1/n,1/m ≤ 1/N < ε/3
    )) →
    
    assert(
      d(yₙ,yₘ) ≤ d(yₙ,xₙ) + d(xₙ,xₘ) + d(xₘ,yₘ) ∧
      d(yₙ,yₘ) < 1/n + ε/3 + 1/m ∧
      d(yₙ,yₘ) < ε/3 + ε/3 + ε/3 = ε
    )
  } →

  assert(∃y∈S: convergesTo(⟨yₙ⟩,y)) →

  lemma X_Sequence_Converges_To_Y() {
    let(ε > 0) →
    assert(∃N'∈ℕ: ∀n≥N' → d(yₙ,y) < ε/2) →
    let(N = max(N', ⌈2/ε⌉)) →
    
    assert(n≥N ⇒ (
      n≥N' ∧
      1/n ≤ 1/N < ε/2
    )) →
    
    assert(
      d(xₙ,y) ≤ d(xₙ,yₙ) + d(yₙ,y) ∧
      d(xₙ,y) < 1/n + ε/2 ∧
      d(xₙ,y) < ε/2 + ε/2 = ε
    )
  } →
  
  conclude(isComplete(M))
}