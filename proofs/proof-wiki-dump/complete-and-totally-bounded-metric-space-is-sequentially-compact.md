theorem CompleteTotallyBoundedIsSequentiallyCompact() {
  assert(
    ∀M(MetricSpace(M) ∧ Complete(M) ∧ TotallyBounded(M) → SequentiallyCompact(M))
  )
} ↔

proof CompleteTotallyBoundedIsSequentiallyCompact() {
  setVar(M: MetricSpace) →
  assume(Complete(M) ∧ TotallyBounded(M)) →
  
  letSeq({xₘ}ₘ∈ℕ: Sequence(M)) →
  
  lemma GetFiniteNets() {
    assert(∀n∈ℕ ∃Fₙ(FiniteSet(Fₙ) ∧ is2⁻ⁿNet(Fₙ, M)))
  } →
  
  apply(CountableChoice()) →
  
  letFun(Sₙ(y) := {m∈ℕ : d(xₘ,y) < 2⁻ⁿ}) →
  assert(∀n∈ℕ: ℕ = ⋃_{y∈Fₙ} Sₙ(y)) →
  
  letSet(Gₙ := {y∈Fₙ : |Sₙ(y)| = ∞}) →
  assert(∀n∈ℕ: Gₙ ≠ ∅) →
  
  letFun(Tₙ(y) := {z∈Gₙ₊₁ : |Sₙ(y) ∩ Sₙ₊₁(z)| = ∞}) →
  
  lemma InfiniteIntersection() {
    assert(∀n∈ℕ ∀y∈Gₙ: Tₙ(y) ≠ ∅)
  } →
  
  constructSeq({mₖ}ₖ∈ℕ: StrictlyIncreasingSequence(ℕ)) →
  letSeq({x̂ₖ}ₖ∈ℕ := {xₘₖ}ₖ∈ℕ) →
  
  assert(∀i,j∈ℕ(i<j → d(x̂ᵢ,x̂ⱼ) < 2^{2-i})) →
  assert(CauchySequence({x̂ₖ}ₖ∈ℕ)) →
  
  apply(Complete(M)) →
  assert(Convergent({x̂ₖ}ₖ∈ℕ)) →
  assert(SubsequenceOf({x̂ₖ}ₖ∈ℕ, {xₘ}ₘ∈ℕ)) →
  
  conclude(SequentiallyCompact(M))
}

// Note: This represents Proof 1 from the source. Additional proofs could be similarly formatted but would require separate theorem/proof blocks.