theorem Not_Expressible_319() {
  assert(
    319 ∈ ℕ ∧ 
    ∀k < 19 ∈ ℕ ⇒ ¬∃(x₁,...,xₖ ∈ ℕ: 319 = ∑ᵢxᵢ⁴)
  )
} ↔

proof Not_Expressible_319() {
  assert(5⁴ = 625 > 319) →
  assert(2×4⁴ = 512 > 319) →
  
  lemma Upper_Bounds() {
    assert(
      ∀n ≥ 5 ∈ ℕ ⇒ n⁴ > 319 ∧
      ∀expr(319 = ∑ᵢxᵢ⁴) ⇒ count(4⁴) ≤ 1
    )
  } →
  
  lemma Efficiency() {
    assert(
      16×1⁴ > 2⁴ ⇒
      min_terms(using 2⁴) < min_terms(using 16×1⁴)
    )
  } →
  
  setVar(valid_expressions = {
    319 = 4⁴ + 3×2⁴ + 15×1⁴,
    319 = 3×3⁴ + 4×2⁴ + 12×1⁴,
    319 = 2×3⁴ + 9×2⁴ + 13×1⁴,
    319 = 1×3⁴ + 14×2⁴ + 14×1⁴,
    319 = 0×3⁴ + 19×2⁴ + 15×1⁴
  }) →
  
  assert(
    ∀expr ∈ valid_expressions: 
    count_terms(expr) ≥ 19
  ) →
  
  assert(
    min(count_terms(expr) for expr ∈ valid_expressions) = 19
  )
}