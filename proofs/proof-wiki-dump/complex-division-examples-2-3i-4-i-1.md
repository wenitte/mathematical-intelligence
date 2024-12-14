theorem Complex_Division() {
  assert(
    (2 - 3i)/(4 - i) = 11/17 - (10/17)i
  )
} ↔

proof Complex_Division() {
  setExpr(original: (2 - 3i)/(4 - i)) →
  
  lemma Conjugate_Multiply() {
    assert(
      (2 - 3i)/(4 - i) = ((2 - 3i)(4 + i))/((4 - i)(4 + i))
    )
  } →
  
  apply(Conjugate_Multiply()) →
  
  lemma Numerator_Expansion() {
    assert(
      (2 - 3i)(4 + i) = 8 - 12i + 2i - 3i² ∧
      i² = -1 →
      (2 - 3i)(4 + i) = 11 - 10i
    )
  } →
  
  lemma Denominator_Expansion() {
    assert(
      (4 - i)(4 + i) = 4² + 1² = 17
    )
  } →
  
  apply(Numerator_Expansion()) →
  apply(Denominator_Expansion()) →
  
  assert(
    (2 - 3i)/(4 - i) = (11 - 10i)/17 = 11/17 - (10/17)i
  )
}