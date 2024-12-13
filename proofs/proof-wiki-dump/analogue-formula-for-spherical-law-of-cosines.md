theorem SphericalAnalogueFormula() {
  assert(
    ∀ triangle(ABC) ∈ SphereS(O) ∧
    sides(a,b,c) ∝ angles_at_O ∧
    opposite(a,A) ∧ opposite(b,B) ∧ opposite(c,C) ⇒
    [(sin(a)cos(B) = cos(b)sin(c) - sin(b)cos(c)cos(A)) ∧
     (sin(a)cos(C) = cos(c)sin(b) - sin(c)cos(b)cos(A))]
  )
}

proof SphericalAnalogueFormula_Method1() {
  setVar(triangle(ABC): SphereS) →
  assert(sin(c)sin(a)cos(B) = cos(b) - cos(c)cos(a)) by SphericalLawOfCosines →
  assert(cos(a) = cos(b)cos(c) + sin(b)sin(c)cos(A)) by SphericalLawOfCosines →
  substitute(cos(a)) →
  assert(sin(c)sin(a)cos(B) = cos(b)(1 - cos²(c)) - sin(b)sin(c)cos(c)cos(A)) →
  assert(sin(c)sin(a)cos(B) = sin²(c)cos(b) - sin(b)sin(c)cos(c)cos(A)) by SineSquaredPlusCosineSquared →
  conclude(sin(a)cos(B) = sin(c)cos(b) - sin(b)cos(c)cos(A))
}

proof SphericalAnalogueFormula_Method2() {
  assume(c < π/2) →
  setVar(D: ArcPoint) where arc(BA) ∧ length(BD) = π/2 →
  assert(length(AD) = π/2 - c) →
  assert(∠CAD = π - A) →
  setVar(x: ArcLength) where greatCircle(CD) →
  
  lemma DAC_Triangle() {
    apply(SphericalLawOfCosines) →
    assert(cos(x) = sin(c)cos(b) - cos(c)sin(b)cos(A))
  } →
  
  lemma DBC_Triangle() {
    apply(SphericalLawOfCosines) →
    assert(cos(x) = sin(a)cos(B))
  } →
  
  apply(DAC_Triangle()) →
  apply(DBC_Triangle()) →
  conclude(sin(a)cos(B) = sin(c)cos(b) - cos(c)sin(b)cos(A))
}

proof SphericalAnalogueFormula_Method3() {
  setVar(P: Point) on OC →
  construct(PQ ⊥ OA) →
  construct(PR ⊥ OB) →
  construct(QS ⊥ OA, RS ⊥ OB) in plane(OAB) →
  
  assert(∠PQS = sphericalAngle(A)) →
  assert(∠PRS = sphericalAngle(B)) →
  
  lemma RightTriangles() {
    assert(PQ = OP·sin(b)) →
    assert(PR = OP·sin(a)) →
    assert(OQ = OP·cos(b)) →
    assert(OR = OP·cos(a))
  } →
  
  setVar(x = ∠SOQ) →
  apply(RightTriangles()) →
  assert(RS = PR·cos(B) = OP·sin(a)cos(B)) →
  assert(QS = PQ·cos(A) = OP·sin(b)cos(A)) →
  
  conclude(sin(a)cos(B) = cos(b)sin(c) - sin(b)cos(c)cos(A))
}