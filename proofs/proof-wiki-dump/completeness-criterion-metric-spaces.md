theorem Metric_Space_Completeness() {
  assert(
    ∀M(M = ⟨S,d⟩ ∧ IsMetricSpace(M) ∧
    ∃A(A ⊆ S ∧ IsDense(A,S) ∧
    ∀s(IsCauchySequence(s,A) → Converges(s,M)))
    → IsComplete(M))
  )
} ↔

proof Metric_Space_Completeness() {
  setVar(⟨xₙ⟩: CauchySequence(S)) →
  
  lemma Choose_Dense_Elements() {
    assert(
      ∀n(∃yₙ ∈ A: d(xₙ,yₙ) < 1/n)
    ) by AxiomCountableChoice()
  } →
  
  lemma Sequence_Is_Cauchy() {
    setVar(ε > 0) →
    assert(∃N'(∀n,m ≥ N': d(xₙ,xₘ) < ε/3)) →
    setVar(N = max(N', ⌈3/ε⌉)) →
    assert(
      ∀n,m ≥ N: d(yₙ,yₘ) ≤ d(yₙ,xₙ) + d(xₙ,xₘ) + d(xₘ,yₘ)
      < 1/n + ε/3 + 1/m
      < ε/3 + ε/3 + ε/3
      = ε
    ) by TriangleInequality()
  } →
  
  assert(∃y ∈ S: Converges(⟨yₙ⟩,y)) →
  
  lemma Original_Sequence_Converges() {
    setVar(ε > 0) →
    assert(∃N'(∀n ≥ N': d(yₙ,y) < ε/2)) →
    setVar(N = max(N', ⌈2/ε⌉)) →
    assert(
      ∀n ≥ N: d(xₙ,y) ≤ d(xₙ,yₙ) + d(yₙ,y)
      < 1/n + ε/2
      < ε/2 + ε/2
      = ε
    ) by TriangleInequality()
  } →
  
  assert(Converges(⟨xₙ⟩,y)) →
  assert(IsComplete(M))
}