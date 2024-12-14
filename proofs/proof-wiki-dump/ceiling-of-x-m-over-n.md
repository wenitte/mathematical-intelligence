theorem Ceiling_Fraction_With_Integer() {
  assert(
    ∀m,n ∈ ℤ ∧ n > 0 ∧ ∀x ∈ ℝ ⇒
    ⌈(x + m)/n⌉ = ⌈(⌈x⌉ + m)/n⌉
  )
} ↔

proof Ceiling_Fraction_With_Integer_Proof1() {
  setVar(m,n: ℤ, x: ℝ) →
  assume(n > 0) →
  
  assert(⌈(x + m)/n⌉ = -⌊-(x + m)/n⌋) →
  apply(Floor_Of_Negative_Rule()) →
  
  assert(-⌊-(x + m)/n⌋ = -⌊(-x - m)/n⌋) →
  apply(Fraction_Negative_Rule()) →
  
  assert(-⌊(-x - m)/n⌋ = -⌊(⌊-x⌋ - m)/n⌋) →
  apply(Floor_Property()) →
  
  assert(-⌊(⌊-x⌋ - m)/n⌋ = -⌊(-⌈x⌉ - m)/n⌋) →
  apply(Floor_Ceiling_Negative_Rule()) →
  
  assert(-⌊(-⌈x⌉ - m)/n⌋ = -⌊-(⌈x⌉ + m)/n⌋) →
  apply(Negative_Distribution()) →
  
  assert(-⌊-(⌈x⌉ + m)/n⌋ = ⌈(⌈x⌉ + m)/n⌉) →
  apply(Floor_Of_Negative_Rule())
} ∧

proof Ceiling_Fraction_With_Integer_Proof2() {
  setVar(m,n: ℤ, x: ℝ) →
  assume(n > 0) →
  
  define(f: ℝ → ℝ, f(x) = (x + m)/n) →
  assert(isStrictlyIncreasing(f) ∧ isContinuous(f)) →
  
  lemma Integer_Image_Property() {
    assume((x + m)/n ∈ ℤ) →
    assert(∃s ∈ ℤ: (x + m)/n = s) →
    assert(x + m = ns) →
    assert(x = ns - m) →
    assert(x ∈ ℤ)
  } →
  
  assert(∀x ∈ ℝ: f(x) ∈ ℤ ⇒ x ∈ ℤ) →
  apply(McEliece_Integer_Functions_Theorem()) →
  assert(⌈f(x)⌉ = ⌈f(⌈x⌉)⌉)
}

corollary Ceiling_Fraction_Simple() {
  assert(
    ∀n ∈ ℤ ∧ n > 0 ∧ ∀x ∈ ℝ ⇒
    ⌈x/n⌉ = ⌈⌈x⌉/n⌉
  )
}