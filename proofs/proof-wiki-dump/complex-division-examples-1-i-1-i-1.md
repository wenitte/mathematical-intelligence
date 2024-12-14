theorem Complex_Division() {
  assert(
    (1 - i)/(1 + i) = -i
  )
} ↔

proof Complex_Division() {
  step1() {
    assert(
      (1 - i)/(1 + i) = ((1 - i)(1 - i))/((1 + i)(1 - i))
    ) →
    reason("Multiply numerator and denominator by conjugate 1 - i")
  } →
  
  step2() {
    assert(
      ((1 - i)(1 - i))/((1 + i)(1 - i)) = (1 - 2i + i²)/(1² + 1²)
    ) →
    reason("Expand numerator and denominator")
  } →
  
  step3() {
    assert(
      (1 - 2i + i²)/(1² + 1²) = (0 - 2i)/2
    ) →
    reason("Simplify using i² = -1 and 1² = 1")
  } →
  
  step4() {
    assert(
      (0 - 2i)/2 = -i
    ) →
    reason("Simplify fraction")
  } →
  
  conclude() {
    assert((1 - i)/(1 + i) = -i)
  }
}