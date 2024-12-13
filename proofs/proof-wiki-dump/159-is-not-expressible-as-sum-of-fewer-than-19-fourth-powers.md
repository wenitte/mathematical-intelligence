theorem Not_Expressible_159() {
  assert(
    ∀n ∈ ℕ (n < 19) ⇒ 
    ¬∃(x₁,...,xₙ ∈ ℕ): 159 = ∑ᵢ₌₁ⁿ xᵢ⁴
  )
} ↔

proof Not_Expressible_159() {
  assert(4⁴ = 256 > 159) ∧
  assert(3⁴ = 81) ∧
  assert(2⁴ = 16) ∧
  assert(1⁴ = 1) →
  
  lemma Case_No_Three() {
    assert(
      ∀sum(without 3⁴) →
      optimal_form = 9×2⁴ + 15×1⁴ →
      count(powers) = 24 > 19
    )
  } →
  
  lemma Case_With_Three() {
    assert(
      optimal_form = 14×1⁴ + 4×2⁴ + 3⁴ →
      count(powers) = 19
    ) ∧
    assert(2×3⁴ = 162 > 159)
  } →
  
  apply(Case_No_Three()) ∧
  apply(Case_With_Three()) →
  
  conclude(
    min_powers(159) = 19 →
    ¬∃ representation_with_fewer_powers
  )
}