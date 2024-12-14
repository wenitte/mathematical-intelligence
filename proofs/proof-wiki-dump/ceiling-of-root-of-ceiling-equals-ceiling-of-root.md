theorem Ceiling_Root_Ceiling(x: ℝ) {
  assert(
    x ≥ 0 ⇒ ⌈√⌈x⌉⌉ = ⌈√x⌉
  )
}

proof Ceiling_Root_Ceiling_1() {
  setVar(n: ℤ) →
  assert(n = ⌈√x⌉) →
  
  lemma Integer_Ceiling_Equivalence() {
    assert(n = ⌈y⌉ ↔ n-1 < y ≤ n)
  } →
  
  apply(Integer_Ceiling_Equivalence()) →
  assert(n-1 < √x ≤ n) →
  
  lemma Square_Preserves_Order() {
    assert(∀a,b ∈ ℝ⁺: a < b ↔ a² < b²)
  } →
  
  apply(Square_Preserves_Order()) →
  assert((n-1)² < x ≤ n²) →
  
  lemma Ceiling_Integer_Bound() {
    assert(x ≤ k ∧ k ∈ ℤ ↔ ⌈x⌉ ≤ k)
  } →
  
  apply(Ceiling_Integer_Bound()) →
  assert((n-1)² < ⌈x⌉ ≤ n²) →
  
  apply(Square_Preserves_Order()) →
  assert(n-1 < √⌈x⌉ ≤ n) →
  
  apply(Integer_Ceiling_Equivalence()) →
  assert(n = ⌈√⌈x⌉⌉) →
  
  conclude(⌈√⌈x⌉⌉ = ⌈√x⌉)
}

proof Ceiling_Root_Ceiling_2() {
  lemma McEliece_Integer_Functions() {
    assert(∀x ∈ A: (f(x) ∈ ℤ ⇒ x ∈ ℤ) ↔ ⌈f(x)⌉ = ⌈f(⌈x⌉)⌉)
  } →
  
  lemma Square_Root_Integer_Property() {
    setVar(y: ℝ) →
    assert(y = √x ∧ y ∈ ℤ ⇒ x = y² ∧ y² ∈ ℤ)
  } →
  
  assert(Square_Root_is_Strictly_Increasing) →
  assert(Square_Root_is_Continuous) →
  
  apply(McEliece_Integer_Functions()) →
  apply(Square_Root_Integer_Property()) →
  
  conclude(⌈√⌈x⌉⌉ = ⌈√x⌉)
}