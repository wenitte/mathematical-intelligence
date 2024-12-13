theorem Cantor_Space_Nowhere_Dense() {
  let(T = (C, τ_d): CantorSpace) →
  assert(
    T.isNowhereDense(in: [0,1])
  )
} ↔

proof Cantor_Space_Nowhere_Dense_1() {
  lemma CantorSet_Closed() {
    assert(C.isClosed()) 
  } →
  apply(CantorSet_Closed()) →
  assert(C⁻ = C) →
  
  setVar(a,b: ℝ) →
  assert(0 ≤ a < b ≤ 1) →
  let(I = (a,b)) →
  let(ε = b - a) →
  assert(ε > 0) →
  
  setVar(n: ℕ) →
  assert(3⁻ⁿ < ε) →
  
  assert(∃J: OpenInterval) {
    J ⊆ [0,1] ∧
    J ∩ C = ∅
  } →
  
  assert(¬∃I: OpenInterval) {
    I ⊆ [0,1] ∧
    I ⊆ C⁻
  } →
  
  conclude(T.isNowhereDense([0,1]))
}

proof Cantor_Space_Nowhere_Dense_2() {
  setVar(n: ℕ) →
  let(Sₙ, Cₙ: CantorSetSequence) →
  assert(∀i ∈ Sₙ) {
    length(i) = 3⁻ⁿ
  } →
  
  setVar(a,b: ℝ) →
  assert(0 ≤ a < b ≤ 1) →
  assert((a,b) ⊆ [0,1]) →
  
  setVar(n: ℕ) →
  assert(3⁻ⁿ < b - a) →
  
  assert(¬∃I: Interval) {
    length(I) = b - a ∧
    I ⊆ Cₙ
  } →
  
  assert(C ⊆ Cₙ) →
  assert(¬∃I: OpenInterval) {
    I ⊆ C
  } →
  
  conclude(T.isNowhereDense([0,1]))
}