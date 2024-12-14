theorem Chinese_Remainder_Ring() {
  let(A: CommutativeUnitaryRing)
  let(I[1..n]: Ideals(A), n ≥ 1)
  let(φ: RingHomomorphism(A → A/I₁ × ... × A/I_n))
  assert(
    φ(x) = (x + I₁, ..., x + I_n) ∧
    ker(φ) = ⋂ᵢ₌₁ⁿ Iᵢ ∧
    (φ is surjective ↔ ∀i≠j: Iᵢ + I_j = A)
  )
} ↔

proof Chinese_Remainder_Ring() {
  setVar(π: GroupHomomorphism(φ)) →
  apply(Chinese_Remainder_Theorem_Groups) →
  
  lemma Equivalence_Conditions() {
    assert(
      (∀i≠j: Iᵢ + I_j = A) ↔ 
      (∀k≤n-1: I_{k+1} + ⋂ᵢ₌₁ᵏ Iᵢ = A)
    )
  } →
  
  proof Forward_Direction() {
    assert(immediate)
  } →
  
  proof Backward_Direction() {
    setVar(i: arbitrary) →
    assert(
      A = ∏_{j≠i}(Iᵢ + I_j) →
      A ⊆ Iᵢ + ∏_{j≠i} I_j →
      A ⊆ Iᵢ + ⋂_{j≠i}ⁿ I_j
    ) →
    apply(Ring_Distributivity) →
    apply(Ideal_Intersection_Contains_Product)
  }
}