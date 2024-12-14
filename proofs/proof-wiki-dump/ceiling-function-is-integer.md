theorem Ceiling_Function_is_Integer() {
  assert(
    ∀x ∈ ℝ ⇒ ⌈x⌉ ∈ ℤ
  )
} ↔

proof Ceiling_Function_is_Integer() {
  setVar(x: ℝ) →
  apply(Ceiling_Function_Definition()) →
  assert(⌈x⌉ = min{n ∈ ℤ : n ≥ x}) →
  assert(⌈x⌉ ∈ ℤ)
}