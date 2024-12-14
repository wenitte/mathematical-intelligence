theorem Ceiling_Plus_Integer() {
  assert(
    ∀n ∈ ℤ, ∀x ∈ ℝ ⇒ ⌈x⌉ + n = ⌈x + n⌉
  )
} ↔

proof Ceiling_Plus_Integer() {
  setVar(n: ℤ) →
  setVar(x: ℝ) →
  
  lemma Ceiling_Property() {
    assert(∀a ∈ ℝ ⇒ a - 1 < ⌈a⌉ ≤ a)
  } →
  
  apply(Ceiling_Property(), x + n) →
  assert(⌈x + n⌉ - 1 < x + n ≤ ⌈x + n⌉) →
  
  transform(
    subtract(n) from all_terms,
    ⌈x + n⌉ - n - 1 < x ≤ ⌈x + n⌉ - n
  ) →
  
  apply(Ceiling_Property(), x) →
  assert(⌈x⌉ - 1 < x ≤ ⌈x⌉) →
  
  compare(inequalities) →
  assert(⌈x⌉ = ⌈x + n⌉ - n) →
  
  transform(
    add(n) to both_sides,
    ⌈x⌉ + n = ⌈x + n⌉
  )
}