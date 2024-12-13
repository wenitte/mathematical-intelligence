theorem Longest_Reverse_Add_Sequence() {
  define(r(m) := reverse_and_add(m))
  assert(
    ∀m ∈ {x ∈ ℤ: 10 ≤ x ≤ 99} →
    (maxIterations(r, m) ≤ 24) ∧
    (maxIterations(r, m) = 24 ↔ m ∈ {89, 98})
  )
}

proof Longest_Reverse_Add_Sequence() {
  lemma Equivalent_r_Values() {
    setVar(a₁, a₂, b₁, b₂: ℤ) →
    assert(
      (a₁ + a₂ = b₁ + b₂) →
      r([a₁a₂]) = r([b₁b₂]) = 11(a₁ + a₂)
    )
  } →
  
  lemma Digit_Sum_Bounds() {
    setVar(a₁, a₂: ℤ) →
    assert(
      ([a₁a₂] ∈ {x ∈ ℤ: 10 ≤ x ≤ 99}) →
      1 ≤ a₁ + a₂ ≤ 18
    )
  } →
  
  lemma Palindrome_Small_Sum() {
    setVar(a₁, a₂: ℤ) →
    assert(
      (a₁ + a₂ ≤ 9) →
      r([a₁a₂]) is_palindrome()
    )
  } →
  
  setVar(sequence_89 := [89, 187, 968, ..., 8713200023178]) →
  assert(length(sequence_89) = 24) →
  
  assert(
    ∀m ∈ {x ∈ ℤ: 10 ≤ x ≤ 99} \\ {89, 98} →
    ∃k < 24: rᵏ(m) is_palindrome()
  ) →
  
  lemma Equivalence_Class_89() {
    assert({m: m ∼ 89} = {89, 98})
  } →
  
  assert(r(89) = r(98)) →
  assert(maxIterations(r, 89) = maxIterations(r, 98) = 24) →
  conclude()
}