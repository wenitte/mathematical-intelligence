theorem ComplexDivision() {
  assert(
    (3 - 2i)/(-1 + i) = (-5 - i)/2
  )
} ↔

proof ComplexDivision_Method1() {
  assert((3 - 2i)/(-1 + i)) →
  assert((3 - 2i)(-1 - i)/((-1 + i)(-1 - i))) ∧ 
  comment("multiply numerator and denominator by conjugate -1 - i") →
  assert((-3 - i + 2i²)/(1² + 1²)) ∧
  comment("apply complex multiplication") →
  assert((-5 - i)/2) ∧
  comment("simplify using i² = -1")
}

proof ComplexDivision_Method2() {
  setVar(a: ℝ, b: ℝ) →
  assert((3 - 2i)/(-1 + i) = a + bi) →
  assert(3 - 2i = (-1 + i)(a + bi)) →
  assert(3 - 2i = -a + bi + ai + bi²) ∧
  comment("apply complex multiplication") →
  assert(3 - 2i = -a - b + (a - b)i) ∧
  comment("simplify using i² = -1") →
  
  lemma SystemOfEquations() {
    assert(-a - b = 3) ∧
    assert(a - b = -2)
  } →
  
  solve(SystemOfEquations()) →
  assert(a = -5/2) ∧
  assert(b = -1/2) →
  
  conclude((-5 - i)/2)
}