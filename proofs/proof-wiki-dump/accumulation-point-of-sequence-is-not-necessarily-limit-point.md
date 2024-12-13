theorem AccumulationPoint_NotNecessarilyLimit() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ isTopologicalSpace(T)) ∧
    ∀{aₙ}(isSequence({aₙ}, T)) ∧
    ∀q(q ∈ S ∧ isAccumulationPoint(q, {aₙ})) ⇏
    isLimitPoint(q, {aₙ})
  )
} ↔

proof AccumulationPoint_NotNecessarilyLimit() {
  setCounterexample() →
  let(T = ⟨ℝ,τ_d⟩) →
  assert(isTopologicalSpace(T) ∧ isEuclideanTopology(τ_d)) →
  
  defineSequence({aₙ}: ℕ → ℝ) {
    aₙ = match(n) {
      case isOdd(n): 1
      case isEven(n): n/2
    }
  } →
  
  assert(sequenceForm({aₙ}) = ⟨1,1,1,2,1,3,1,4,...⟩) →
  
  lemma SingleAccumulationPoint() {
    assert(
      ∃!p(isAccumulationPoint(p, {aₙ})) ∧
      p = 1
    )
  } →
  
  lemma NoLimit() {
    assert(¬∃l(isLimit(l, {aₙ})))
  } →
  
  apply(SingleAccumulationPoint()) →
  apply(NoLimit()) →
  
  conclude(
    isAccumulationPoint(1, {aₙ}) ∧
    ¬isLimit(1, {aₙ})
  )
}