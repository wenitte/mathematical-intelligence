theorem Cantor_Set_Zero_Measure() {
  let(C: CantorSet, λ: LebesgueMeasure, 𝔹(ℝ): BorelSigmaAlgebra) →
  assert(
    C ∈ 𝔹(ℝ) ∧ λ(C) = 0
  )
} ↔

proof Cantor_Set_Zero_Measure() {
  let(Sₙ: Collection(DisjointClosedIntervals)) →
  let(Cₙ := ⋃Sₙ) →
  
  lemma Measurability() {
    assert(∀n ∈ ℕ, Sₙ ∈ 𝔹(ℝ)) by(ClosedSetMeasurable) →
    assert(Sₙ.isFinite()) →
    assert(Cₙ ∈ 𝔹(ℝ)) by(SigmaAlgebraUnionClosure) →
    assert(C = ⋂_{n∈ℕ} Cₙ) →
    assert(C ∈ 𝔹(ℝ)) by(SigmaAlgebraIntersectionClosure)
  } →

  lemma MeasureComputation() {
    assert({Cₙ} isDecreasingSequence ∧ lim(Cₙ) = C) →
    assert(λ(C) = lim_{n→∞} λ(Cₙ)) by(CharacterizationOfMeasures) →
    assert(∀n ∈ ℕ, λ(Cₙ) = (2/3)ⁿ) →
    assert(lim_{n→∞} (2/3)ⁿ = 0) by(SequencePowersLessThanOne)
  } →

  apply(Measurability()) →
  apply(MeasureComputation()) →
  assert(λ(C) = 0)
}