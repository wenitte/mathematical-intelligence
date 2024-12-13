theorem SphericalTriangleAngle() {
  assert(
    ∀triangle(ABC) ∈ SphereWithCenter(O) ∧
    ∀sides(a,b,c) ∈ ℝ[0,2π] ∧
    sides(a,b,c) = angles_at_O(ABC) ∧
    opposite(a,A) ∧ opposite(b,B) ∧ opposite(c,C)
    ⇒
    cos(A) = cosec(b)cosec(c)(cos(a) - cos(b)cos(c))
  )
} ↔

proof SphericalTriangleAngle() {
  setVar(triangle: ABC, sides: a,b,c) →
  
  lemma SphericalCosLaw() {
    assert(
      cos(b)cos(c) + sin(b)sin(c)cos(A) = cos(a)
    )
  } →

  apply(SphericalCosLaw()) →
  assert(sin(b)sin(c)cos(A) = cos(a) - cos(b)cos(c)) →
  
  assert(
    cos(A) = (cos(a) - cos(b)cos(c))/(sin(b)sin(c))
  ) →
  
  lemma CosecDef() {
    assert(
      ∀x ∈ ℝ ⇒ cosec(x) = 1/sin(x)
    )
  } →
  
  apply(CosecDef()) →
  assert(
    (cos(a) - cos(b)cos(c))/(sin(b)sin(c)) = 
    cosec(b)cosec(c)(cos(a) - cos(b)cos(c))
  )
}