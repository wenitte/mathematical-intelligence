theorem Absolute_Value_Of_Absolutely_Convergent_Product() {
  assert(
    ∀K(ValuedField(K)) ∧
    ∀{aₙ}(Sequence(K)) ∧
    ∀a∈K(
      (∏ₙ₌₁^∞ aₙ).convergesAbsolutely(a) →
      (∏ₙ₌₁^∞ ‖aₙ‖).convergesAbsolutely(‖a‖)
    )
  )
}

proof Absolute_Value_Of_Absolutely_Convergent_Product() {
  setVar(K: ValuedField) →
  setVar({aₙ}: Sequence(K)) →
  setVar(a: K) →
  
  assert((∏ₙ₌₁^∞ aₙ).convergesAbsolutely(a)) →
  
  lemma Series_Convergence() {
    assert(
      (∏ₙ₌₁^∞ aₙ).convergesAbsolutely(a) ↔
      (∑ₙ₌₁^∞ (aₙ - 1)).convergesAbsolutely()
    )
  } →

  lemma Triangle_Inequality() {
    assert(
      ∀n(‖‖aₙ‖ - 1‖ ≤ ‖aₙ - 1‖)
    )
  } →

  apply(Series_Convergence()) →
  apply(Triangle_Inequality()) →
  apply(ComparisonTest()) →
  assert((∏ₙ₌₁^∞ ‖aₙ‖).convergesAbsolutely()) →
  
  lemma Value_Continuity() {
    assert(
      ‖·‖.isContinuous() →
      lim(∏ₙ₌₁^∞ ‖aₙ‖) = ‖lim(∏ₙ₌₁^∞ aₙ)‖
    )
  } →
  
  apply(Value_Continuity()) →
  assert((∏ₙ₌₁^∞ ‖aₙ‖).convergesAbsolutely(‖a‖))
}