theorem Ceiling_Root_Equals_Root_Ceiling() {
  assert(
    ∀x ∈ ℝ⁺ ⇒ ⌈√⌈x⌉⌉ = ⌈√x⌉
  )
} ↔

proof Ceiling_Root_Equals_Root_Ceiling() {
  setVar(n: ℤ) →
  assert(n = ⌈√x⌉) →
  
  lemma Integer_Ceiling_Equivalence() {
    assert(n = ⌈√x⌉ ↔ n-1 < √x ≤ n)
  } →
  apply(Integer_Ceiling_Equivalence()) →
  
  lemma Square_Order_Preservation() {
    assert(∀a,b ∈ ℝ⁺ ⇒ (a < b ↔ a² < b²))
  } →
  apply(Square_Order_Preservation()) →
  assert((n-1)² < x ≤ n²) →
  
  lemma Ceiling_Integer_Bound() {
    assert(∀y ∈ ℝ, k ∈ ℤ ⇒ (y ≤ k ↔ ⌈y⌉ ≤ k))
  } →
  apply(Ceiling_Integer_Bound()) →
  assert((n-1)² < ⌈x⌉ ≤ n²) →
  
  apply(Square_Order_Preservation()) →
  assert(n-1 < √⌈x⌉ ≤ n) →
  
  apply(Integer_Ceiling_Equivalence()) →
  assert(n = ⌈√⌈x⌉⌉) →
  
  conclude(⌈√⌈x⌉⌉ = ⌈√x⌉)
}