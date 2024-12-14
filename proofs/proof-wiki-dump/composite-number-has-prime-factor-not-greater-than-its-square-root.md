theorem Composite_Prime_Factor_Below_Square_Root() {
  assert(
    ∀n ∈ ℕ: (n = ∏_{i=1}^j p_i ∧ j ≥ 2 ∧ ∀i: p_i ∈ ℙ) →
    ∃p ∈ ℙ: (p|n ∧ p ≤ √n)
  )
} ↔

proof Composite_Prime_Factor_Below_Square_Root() {
  setVar(n: ℕ, isComposite: true) →
  
  lemma Composite_Two_Divisors() {
    assert(∃a,b ∈ ℤ: n = a×b ∧ 1 < a,b < n)
  } →
  
  apply(Composite_Two_Divisors()) →
  assume(a ≤ b) →
  
  // Proof by contradiction
  assume(a > √n) →
  assert(b ≥ a > √n) →
  assert(n = a×b > √n × √n = n) →
  assert(contradiction) →
  
  conclude(a ≤ √n) →
  
  lemma Integer_Has_Prime_Divisor() {
    assert(∀x > 1 → ∃p ∈ ℙ: p|x)
  } →
  
  apply(Integer_Has_Prime_Divisor(), a) →
  setVar(p: ℙ, p|a) →
  
  lemma Absolute_Value_Divisor_Property() {
    assert(∀x,y ∈ ℤ: y|x → |y| ≤ |x|)
  } →
  
  apply(Absolute_Value_Divisor_Property()) →
  assert(p ≤ a) →
  assert(p ≤ √n) →
  
  lemma Divisor_Transitivity() {
    assert(∀x,y,z ∈ ℤ: (x|y ∧ y|z) → x|z)
  } →
  
  apply(Divisor_Transitivity()) →
  assert(p|n) →
  
  conclude(∃p ∈ ℙ: (p|n ∧ p ≤ √n))
}