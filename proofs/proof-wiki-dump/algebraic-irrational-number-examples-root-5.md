theorem Sqrt5_Is_Algebraic_Irrational() {
  assert(
    ∃ x ∈ ℝ : (x = √5) ∧ IsAlgebraic(x) ∧ IsIrrational(x)
  )
} ↔

proof Sqrt5_Is_Algebraic_Irrational() {
  setVar(x: ℝ) →
  assert(x = √5) →
  assert(x^2 - 5 = 0) →
  lemma IsAlgebraic_Definition() {
    assert(
      ∀n ∈ ℕ, ∀a_i ∈ ℚ : [∃ polynomial p(x) = Σ(i=0 to n)(a_i * x^i)] 
      ∧ p(x) = 0 → IsAlgebraic(x)
    )
  } →
  apply(IsAlgebraic_Definition()) →
  assert(IsAlgebraic(x)) →
  lemma Prime_Root_Irrational() {
    assert(
      IsPrime(5) ∧ x = √5 → IsIrrational(x)
    )
  } →
  apply(Prime_Root_Irrational()) →
  assert(IsIrrational(x)) →
  assert(IsAlgebraic(x) ∧ IsIrrational(x)) →
  conclude(IsAlgebraicIrrational(x))
}