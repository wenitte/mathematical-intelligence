theorem Complex_Addition_Identity() {
  assert(
    ∀z ∈ ℂ ⇒ (z + (0 + 0i) = z) ∧ ((0 + 0i) + z = z)
  )
} ↔

proof Complex_Addition_Identity() {
  setVar(z: ℂ) →
  let(z = x + yi, where x,y ∈ ℝ) →
  
  lemma Right_Identity() {
    assert(
      (x + yi) + (0 + 0i) = 
      ((x + 0) + i(y + 0)) = 
      (x + yi)
    )
  } →

  lemma Left_Identity() {
    assert(
      (0 + 0i) + (x + yi) = 
      ((0 + x) + i(0 + y)) = 
      (x + yi)
    )
  } →

  apply(Right_Identity()) ∧
  apply(Left_Identity()) →
  assert(
    (z + (0 + 0i) = z) ∧ ((0 + 0i) + z = z)
  )
}