theorem CompactLinearTransformation_is_Bounded() {
  let(H: HilbertSpace, K: HilbertSpace)
  let(⟨·,·⟩_H: InnerProduct(H), ⟨·,·⟩_K: InnerProduct(K))
  let(B₀: Space(CompactLinearTransformation(H,K)))
  let(B: Space(BoundedLinearTransformation(H,K)))
  assert(
    ∀T ∈ B₀ ⇒ T ∈ B
  ) ↔
  assert(B₀ ⊆ B)
}

proof CompactLinearTransformation_is_Bounded() {
  let(T: LinearTransformation(H,K))
  let(∥·∥_H: InnerProductNorm(H))
  let(∥·∥_K: InnerProductNorm(K)) →
  
  contrapositive(
    assert(T ∉ B ⇒ T ∉ B₀)
  ) →
  
  assume(T ∉ B) →
  assert(¬∃c > 0: ∀h ∈ H (∥Th∥_K ≤ c∥h∥_H)) →
  
  assert(
    ∀n ∈ ℕ ∃xₙ ∈ H: ∥Txₙ∥_K > n∥xₙ∥_H
  ) →
  
  define(sequence(hₙ) := xₙ/∥xₙ∥_H) →
  assert(∀n ∈ ℕ: ∥hₙ∥_H = 1) →
  assert(∀n ∈ ℕ: ∥Thₙ∥_K > n) →
  
  lemma UnboundedSubsequence() {
    assert(
      ∀(nⱼ: IncreasingSequence(ℕ)): ∥Thₙⱼ∥_K > nⱼ ∧ lim(nⱼ) = ∞
    )
  } →
  
  apply(UnboundedSubsequence()) →
  apply(theorem ConvergentSequence_is_Bounded()) →
  assert(
    ¬∃(nⱼ: Subsequence(ℕ)): sequence(Thₙⱼ) converges
  ) →
  
  assert(
    sequence(hₙ) is_bounded ∧
    ¬∃(nⱼ: Subsequence(ℕ)): sequence(Thₙⱼ) converges
  ) →
  
  conclude(T ∉ B₀)
}