theorem SphericalTriangleAmbiguousCase() {
  let(Triangle ABC: SphericalTriangle),
  let(O: Point, Center(Sphere)),
  let(a,b,c: Angles, subtendedAt(O)),
  let(A,B,C: Angles, oppositeOf(a,b,c)),
  assume(
    known(a) ∧ known(b) ∧ known(B)
  ) →
  assert(
    ¬determinable(A)
  )
} ↔

proof SphericalTriangleAmbiguousCase() {
  apply(SphericalLawOfSines()) →
  assert(
    (sin(a)/sin(A) = sin(b)/sin(B) = sin(c)/sin(C))
  ) →
  
  solve(forSinA) →
  assert(
    sin(A) = (sin(a)*sin(B))/sin(b)
  ) →
  
  assert(
    0 < sin(A) ≤ 1
  ) →
  
  lemma TrigIdentity() {
    assert(
      sin(A) = sin(π - A)
    )
  } →
  
  apply(TrigIdentity()) →
  assert(
    ∀A ∈ ℝ: (A ≠ π/2) →
    ∃(A₁,A₂ ∈ ℝ): (
      A₁ ≠ A₂ ∧
      sin(A₁) = sin(A₂) ∧
      (A₁ = A ∨ A₁ = π - A) ∧
      (A₂ = A ∨ A₂ = π - A)
    )
  ) →
  
  conclude(
    ¬determinable(A)
  )
}