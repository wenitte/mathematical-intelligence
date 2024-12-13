theorem Triangle_Altitude_Median_Bisector() {
  assert(
    ∀ABC ∈ Triangle(ℝ²) ⇔ (
      isAltitude(CD, AB, C) ∧
      isMedian(CD, AB, C) ∧
      isPerpendicularBisector(CD, AB)
    ) ↔ isIsosceles(ABC, AB)
  )
}

proof Triangle_Altitude_Median_Bisector() {
  // Forward direction
  setVar(ABC: Triangle(ℝ²)) →
  assume(isIsosceles(ABC, AB)) →
  setPoint(D: midpoint(AB)) →
  assert(AC = BC) by(isoscelesDefinition) →
  assert(AD = DB) by(midpointDefinition) →
  assert(CD common) →
  
  lemma trianglesCongruent1() {
    assert(triangle(ACD) = triangle(BCD)) by(SSS)
  } →
  
  assert(∠ADC + ∠BDC = 2π) by(straightLineAngles) →
  assert(∠ADC = ∠BDC) by(trianglesCongruent1) →
  assert(∠ADC = ∠BDC = π/2) →
  assert(isPerpendicularBisector(CD, AB)) →
  assert(isMedian(CD, AB, C)) by(midpointDefinition) →
  assert(isAltitude(CD, AB, C)) by(perpendicularDefinition) →

  // Reverse direction
  setVar(ABC: Triangle(ℝ²)) →
  assume(AC ≠ BC) →
  setPoint(D: footOfAltitude(C, AB)) →
  assert(∠CAB ≠ ∠CBA) by(isoscelesContrapositive) →
  assert(triangle(ACD) ≠ triangle(BCD)) →
  
  setPoint(E: midpoint(AB)) →
  setLine(EF: perpendicularBisector(AB)) →
  
  lemma contradictionProof() {
    assume(D = E) →
    assert(AD = BD) →
    assert(AC = BC) →
    assert(CD common) →
    assert(triangle(ACD) = triangle(BCD)) by(SSS) →
    assert(∠CAB = ∠CBA) →
    contradiction(∠CAB ≠ ∠CBA)
  } →
  
  assert(D ≠ E) by(contradictionProof) →
  assert(CD ≠ CE ∧ CE ≠ EF ∧ CD ≠ EF)
}