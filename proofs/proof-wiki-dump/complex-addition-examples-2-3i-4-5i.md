theorem Complex_Addition_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ : z₁ = (2 + 3i) ∧ z₂ = (4 - 5i) ⇒ 
    z₁ + z₂ = 6 - 2i
  )
}

proof Complex_Addition_Example() {
  // Algebraic Proof
  proof_method = algebraic →
  setVar(z₁: (2 + 3i), z₂: (4 - 5i)) →
  assert(
    (2 + 3i) + (4 - 5i) = 
    (2 + 4) + (3 - 5)i
  ) by(ComplexAdditionDef) →
  assert(
    (2 + 4) + (3 - 5)i = 
    6 + (-2)i
  ) by(RealArithmetic) →
  assert(
    6 + (-2)i = 6 - 2i
  ) by(StandardForm)
} ∧

proof Complex_Addition_Example_Geometric() {
  // Geometric Proof
  proof_method = geometric →
  setVar(P₁: (2,3), P₂: (4,-5)) →
  construct(
    parallelogram(O,P₁,P₂,P)
  ) →
  apply(
    GeometricComplexAddition(P₁,P₂,P)
  ) →
  assert(
    P.coordinates = (6,-2)
  ) →
  assert(
    P represents 6 - 2i
  ) by(ComplexPlaneRepresentation)
}