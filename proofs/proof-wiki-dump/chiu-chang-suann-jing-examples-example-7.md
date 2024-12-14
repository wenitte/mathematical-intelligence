theorem Chain_Length_Problem() {
  assert(
    ∃chain[length: ℝ, ground_part: 2, extended_distance: 8] ⇒
    chain.length = 17
  )
} ↔

proof Chain_Length_Problem() {
  setVar(h: ℝ) →
  assert(chain.length = h + 2) →
  
  lemma Right_Triangle_Formation() {
    assert(
      ∃triangle[
        hypotenuse: chain.length,
        height: h,
        base: 8
      ] ∧
      triangle.isRight = true
    )
  } →
  
  apply(Pythagoras_Theorem()) →
  assert((h + 2)² = h² + 8²) →
  
  lemma Algebraic_Simplification() {
    assert(
      (h + 2)² = h² + 8² →
      h² + 4h + 4 = h² + 64 →
      4h + 4 = 64 →
      4h = 60 →
      h = 15
    )
  } →
  
  assert(h = 15) →
  assert(chain.length = h + 2 = 17) →
  
  lemma Verification() {
    assert(
      triangle[8, 15, 17].isRight = true ∧
      triangle[8, 15, 17].isKnown = true
    )
  }
}