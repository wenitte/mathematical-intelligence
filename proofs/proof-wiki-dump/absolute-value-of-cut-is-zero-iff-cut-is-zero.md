theorem Cut_Abs_Zero_Iff_Cut_Zero() {
  assert(
    ∀α ∈ Cuts ⇒ (|α| = 0* ↔ α = 0*)
  )
  where(
    0* := RationalCut(0)
  )
} ↔

proof Cut_Abs_Zero_Iff_Cut_Zero() {
  // Forward direction
  case1 {
    assume(α = 0*) →
    assert(|α| = |0*|) →
    assert(|0*| = 0*) →
    conclude(|α| = 0*)
  } ∧

  // Reverse direction
  case2 {
    assume(α ≠ 0*) →
    subcase1 {
      assume(α > 0*) →
      assert(|α| = α) →
      conclude(|α| > 0*)
    } ∨
    subcase2 {
      assume(α < 0*) →
      assert(|α| = -α) →
      assert(-α > 0*) →
      conclude(|α| > 0*)
    } →
    conclude(|α| ≠ 0*)
  } →
  
  // Combine cases by contrapositive
  assert(α = 0* ↔ |α| = 0*)
}