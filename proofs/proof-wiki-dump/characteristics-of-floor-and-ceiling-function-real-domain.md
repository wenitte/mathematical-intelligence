theorem Function_Characteristics() {
  assert(
    ∀f: ℝ → ℤ ⇒ [
      (∀x ∈ ℝ: f(x+1) = f(x)+1) ∧
      (∀n ∈ ℤ₊, x ∈ ℝ: f(x) = f(f(nx)/n)) ⇏
      ((∀x ∈ ℝ: f(x) = ⌊x⌋) ∨ (∀x ∈ ℝ: f(x) = ⌈x⌉))
    ]
  )
} ↔

proof Function_Characteristics() {
  setVar(h: ℝ → ℝ) →
  assert(∀x,y ∈ ℝ: h(1) = 1) →  // Property (3)
  assert(∀x,y ∈ ℝ: h(x) + h(y) = h(x+y)) →  // Property (4)
  
  define(f: ℝ → ℤ, f(x) := ⌊h(x)⌋) →
  
  lemma Property_1() {
    assert(h(x+1) = h(x) + h(1)) →
    assert(h(x+1) = h(x) + 1) →
    assert(f(x+1) = ⌊h(x+1)⌋) →
    assert(⌊h(x+1)⌋ = ⌊h(x) + 1⌋) →
    assert(⌊h(x) + 1⌋ = ⌊h(x)⌋ + 1) →
    assert(f(x+1) = f(x) + 1)
  } →

  lemma Property_2() {
    assert(h is additive) →
    assert(∀x ∈ ℚ: h(x) = x) →  // Property (5)
    setVar(α := ⌊h(x)⌋ = f(x)) →
    setVar(β := h(x) - α) →
    assert(0 ≤ β < 1) →
    assert(0 ≤ nβ < n) →
    assert(0 ≤ ⌊nβ⌋ ≤ n-1) →
    assert(f(f(nx)/n) = f(x))
  } →
  
  lemma Counter_Example() {
    assert({1, √2} is linearly independent in ℝ over ℚ) →
    assert(∃B: basis of ℝ with 1,√2 ∈ B) →
    define(f: ℝ → ℤ, f(x) = Σᵢ f(bᵢ)xᵢ where x = Σᵢ bᵢxᵢ) →
    assert(f(1) = 1) →
    assert(f(√2) = 4) →
    assert(f satisfies properties (1) and (2)) →
    assert(f(√2) ∉ {1,2})
  } →
  
  apply(Counter_Example()) →
  conclude()
}