theorem Commensurable_Length() {
  assert(
    length_1 = 2_inches ∧
    length_2 = 3_feet →
    Commensurable(length_1, length_2)
  )
} ↔

proof Commensurable_Length() {
  setVar(length_1: ℝ⁺, length_2: ℝ⁺) →
  assert(3_feet = 36_inches) →
  assert(36_inches = 18 × 2_inches) →
  
  lemma Common_Divisor() {
    assert(
      ∃d ∈ ℝ⁺ (
        d = 2_inches ∧
        length_1 = 1 × d ∧
        length_2 = 18 × d
      )
    )
  } →
  
  apply(Common_Divisor()) →
  apply(Definition_Commensurable(length_1, length_2)) →
  assert(Commensurable(length_1, length_2))
}