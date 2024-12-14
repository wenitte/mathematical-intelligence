theorem CompactSubspaceIsSequentiallyCompact() {
  assert(
    ∀M[MetricSpace(M) ∧ M = (A,d)] ∧
    ∀C[C ⊆ M ∧ Compact(C)] →
    SequentiallyCompact(C)
  )
} ↔

proof CompactSubspaceIsSequentiallyCompact() {
  setVar(C: MetricSpace) →
  setVar({xₙ}: Sequence(C)) →
  let(S = Range({xₙ})) →
  assert(S ⊆ C) →
  
  case FiniteRange() {
    assert(Finite(S)) →
    apply(InfinitePigeonholePrinciple()) →
    assert(∃x ∈ S: InfiniteOccurrences(x, {xₙ})) →
    let(subsequence = OccurrencesOf(x, {xₙ})) →
    assert(Converges(subsequence, x))
  } ∨
  
  case InfiniteRange() {
    assert(Infinite(S)) →
    
    lemma ByContradiction() {
      assume(¬∃p ∈ C: LimitPoint(p, S)) →
      assert(∀x ∈ C: ∃ε > 0: 
        [Bₑ(x) ∩ S = {x} ∨ Bₑ(x) ∩ S = ∅]
      ) →
      let(𝔹 = {Bₑ(x): x ∈ C}) →
      apply(CompactnessProperty(C)) →
      assert(∃𝔹ᶠ ⊂ 𝔹: FiniteSubcover(𝔹ᶠ, C)) →
      assert(∀B ∈ 𝔹: |B ∩ S| ≤ 1) →
      assert(|Union(𝔹ᶠ) ∩ S| < ∞) →
      contradiction(Infinite(S))
    } →
    
    assert(∃p ∈ C: LimitPoint(p, S)) →
    apply(SequenceWithLimitPointHasConvergentSubsequence()) →
    assert(SequentiallyCompact(C))
  }
}