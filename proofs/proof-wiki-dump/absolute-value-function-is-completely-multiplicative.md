theorem Absolute_Value_Multiplicative() {
  assert(
    ∀x,y ∈ ℝ ⇒ |xy| = |x||y|
  )
} ↔

proof Absolute_Value_Multiplicative() {
  // Case 1: Zero case
  lemma Zero_Case() {
    assert((x = 0 ∨ y = 0) ⇒ |x||y| = 0 = xy = |xy|)
  } →

  // Case 2: Both positive
  lemma Positive_Case() {
    assert((x > 0 ∧ y > 0) ⇒ {
      xy > 0 →
      |xy| = xy →
      |x| = x ∧ |y| = y →
      |x||y| = xy = |xy|
    })
  } →

  // Case 3: Both negative
  lemma Negative_Case() {
    assert((x < 0 ∧ y < 0) ⇒ {
      xy > 0 →
      |xy| = xy →
      |x| = -x ∧ |y| = -y →
      |x||y| = (-x)(-y) = xy = |xy|
    })
  } →

  // Case 4: Opposite signs
  lemma Mixed_Signs_Case() {
    assert((x < 0 ∧ y > 0) ⇒ {
      xy < 0 →
      |xy| = -(xy) →
      |x| = -x ∧ |y| = y →
      |x||y| = (-x)y = -(xy) = |xy|
    })
  } →

  apply(Zero_Case()) ∧
  apply(Positive_Case()) ∧
  apply(Negative_Case()) ∧
  apply(Mixed_Signs_Case()) →
  assert(∀x,y ∈ ℝ ⇒ |xy| = |x||y|)
}

// Alternative algebraic proof
proof Absolute_Value_Multiplicative_Algebraic() {
  setVar(x,y: ℝ) →
  assert(|xy| = √((xy)²)) →
  assert(√((xy)²) = √(x²y²)) →
  assert(√(x²y²) = √(x²)√(y²)) →
  assert(√(x²)√(y²) = |x||y|)
}