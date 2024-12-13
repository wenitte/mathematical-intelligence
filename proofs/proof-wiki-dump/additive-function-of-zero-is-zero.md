theorem Zero_Additive_Function() {
  assert(
    ∀f: ℝ → ℝ,
    isAdditive(f) ⇒ f(0) = 0
  )
} ↔

proof Zero_Additive_Function() {
  setVar(f: ℝ → ℝ) →
  assume(isAdditive(f)) →
  assert(f(1) = f(0 + 1)) →
  lemma RealAddIdentity() {
    assert(0 + 1 = 1)
  } →
  apply(RealAddIdentity()) →
  assert(f(1) = f(0) + f(1)) →
  assert(f(1) - f(1) = f(0)) →
  assert(0 = f(0))
}