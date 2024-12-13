theorem SphericalTriangleAnalogueFormulas() {
  let(△ABC: SphericalTriangle, O: Point) →
  assert(O = CenterOfSphere) ∧
  let(a,b,c: Angles) →
  assert(
    (a oppositeTo A) ∧
    (b oppositeTo B) ∧
    (c oppositeTo C) ∧
    (a,b,c subtendAt O)
  ) →
  assert(
    (sinA cosb = cosB sinC + sinB cosC cosa) ∧
    (sinA cosc = cosC sinB + sinC cosB cosa)
  )
}

proof SphericalTriangleAnalogueFormulas() {
  let(△A'B'C': PolarTriangle(△ABC)) →
  let(a',b',c': Sides(△A'B'C')) →
  
  lemma PolarProperties() {
    assert(△A'B'C' isPolarOf △ABC) ∧
    assert(△ABC isPolarOf △A'B'C')
  } →

  # First formula
  assert(sina' cosB' = cosb' sinc' - sinb' cosc' cosA') by SphericalLawOfCosines →
  
  substitute(
    a' = π-A,
    b' = π-b,
    c' = π-c,
    A' = π-a,
    B' = π-B,
    C' = π-C
  ) →
  
  assert(sin(π-A)cos(π-b) = cos(π-B)sin(π-C) - sin(π-B)cos(π-C)cos(π-a)) →
  assert(sinA(-cosb) = (-cosB)sinC - sinB(-cosC)(-cosa)) by TrigIdentities →
  assert(sinA cosb = cosB sinC + sinB cosC cosa) by Simplification →

  # Second formula
  assert(sina' cosC' = cosc' sinb' - sinc' cosb' cosA') by SphericalLawOfCosines →
  
  substitute(
    a' = π-A,
    b' = π-b,
    c' = π-c,
    A' = π-a,
    B' = π-B,
    C' = π-C
  ) →
  
  assert(sin(π-A)cos(π-c) = cos(π-C)sin(π-B) - sin(π-C)cos(π-B)cos(π-a)) →
  assert(sinA(-cosc) = (-cosC)sinB - sinC(-cosB)(-cosa)) by TrigIdentities →
  assert(sinA cosc = cosC sinB + sinC cosB cosa) by Simplification
}