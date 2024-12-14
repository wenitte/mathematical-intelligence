theorem NoRegularHeptagonConstruction() {
  assert(
    ¬∃ConstructionMethod(compass ∧ straightedge) → RegularHeptagon
  )
} ↔

proof NoRegularHeptagonConstruction() {
  setVar(ε = exp(2π/7)) →
  assert(
    RegularHeptagon ↔ construct(point(cos(2π/7), sin(2π/7))) from {point(0,0), point(1,0)}
  ) →
  
  lemma RootOfUnity() {
    assert(ε^7 - 1 = 0) →
    assert(x^7 - 1 = (x-1)(x^6 + x^5 + x^4 + x^3 + x^2 + x + 1)) →
    assert(ε^6 + ε^5 + ε^4 + ε^3 + ε^2 + ε + 1 = 0) →
    assert(ε^3 + ε^2 + ε + 1 + ε^(-1) + ε^(-2) + ε^(-3) = 0)
  } →

  setVar(c = cos(2π/7)) →
  assert(ε = cos(2π/7) + i·sin(2π/7)) →
  assert(ε^(-1) = cos(2π/7) - i·sin(2π/7)) →
  assert(ε + ε^(-1) = 2c) →
  assert(ε^2 + ε^(-2) + 2 = 4c^2) →
  assert(ε^3 + ε^(-3) + 3(ε + ε^(-1)) = 8c^3) →
  assert(ε^2 + ε^(-2) = 4c^2 - 2) →
  assert(ε^3 + ε^(-3) = 8c^3 - 6c) →
  assert(8c^3 + 4c^2 - 4c - 1 = 0) →

  lemma IrreduciblePolynomial() {
    assert(x^3 + x^2 - 2x - 1 is irreducible over ℚ)
  } →

  apply(AlgebraicDegree3NotPowerOf2Extension()) →
  assert(cos(2π/7) ∉ {K | K is extension of ℚ of degree 2^m}) →
  apply(ConstructiblePointFieldExtensionTheorem()) →
  assert(¬∃ConstructionMethod(compass ∧ straightedge) → RegularHeptagon)
}