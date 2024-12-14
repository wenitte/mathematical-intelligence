theorem Ceiling_Root_Ceiling_Equals_Ceiling_Root() {
  assert(
    ∀x ∈ ℝ₊ ⇒ ⌈√⌈x⌉⌉ = ⌈√x⌉
  )
} ↔

proof Ceiling_Root_Ceiling_Equals_Ceiling_Root() {
  setContext(√: ℝ₊ → ℝ₊) →
  assert(√ is_strictly_increasing) →
  assert(√ is_continuous) →

  lemma McEliece_Integer_Functions() {
    assert(
      ∀f,x(f(x) ∈ ℤ ⇒ x ∈ ℤ) ↔ ⌈f(x)⌉ = ⌈f(⌈x⌉)⌉
    )
  } →

  lemma Root_Integer_Implies_Input_Integer() {
    setVar(y: ℝ₊) →
    assume(y = √x ∧ y ∈ ℤ) →
    assert(x = y²) →
    apply(Integer_Multiplication_Closed) →
    conclude(x ∈ ℤ)
  } →

  apply(McEliece_Integer_Functions, f = √) →
  apply(Root_Integer_Implies_Input_Integer) →
  conclude(⌈√⌈x⌉⌉ = ⌈√x⌉)
}