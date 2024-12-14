theorem Pointwise_Minimum_Characterization() {
  assert(
    ∀S ∀f,g: S → ℝ ⇒
    (f ∧ g = (1/2)(f + g - |f - g|))
    where
    (f ∧ g)(s) := min{f(s), g(s)} ∧
    (f + g)(s) := f(s) + g(s) ∧
    (f - g)(s) := f(s) - g(s) ∧
    |f - g|(s) := |f(s) - g(s)|
  )
} ↔

proof Pointwise_Minimum_Characterization() {
  setVar(s: S) →
  assert((f ∧ g)(s) = min{f(s), g(s)}) →
  lemma Min_Real_Numbers() {
    assert(∀x,y ∈ ℝ ⇒ min{x,y} = (1/2)(x + y - |x - y|))
  } →
  apply(Min_Real_Numbers()) →
  assert((f ∧ g)(s) = (1/2)(f(s) + g(s) - |f(s) - g(s)|)) →
  assert((f ∧ g)(s) = (1/2)(f(s) + g(s) - |(f - g)(s)|)) →
  assert((f ∧ g)(s) = (1/2)(f(s) + g(s) - |f - g|(s))) →
  assert((f ∧ g)(s) = (1/2)((f + g)(s) - |f - g|(s))) →
  assert((f ∧ g)(s) = ((1/2)(f + g - |f - g|))(s)) →
  applyDef(Function_Equality()) →
  assert(f ∧ g = (1/2)(f + g - |f - g|))
}