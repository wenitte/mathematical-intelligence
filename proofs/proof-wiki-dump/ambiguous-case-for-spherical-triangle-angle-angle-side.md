theorem SphericalTriangle_AmbiguousCase_AAS() {
  let(△ABC: SphericalTriangle, O: Point) →
  assert(O.isCenter ∧ △ABC.isOnSphere) →
  assert(∃ a,b,c: Angles, A,B,C: Points) →
  assert(a.subtendedAt(O) ∧ b.subtendedAt(O) ∧ c.subtendedAt(O)) →
  assert(a.opposite(A) ∧ b.opposite(B) ∧ c.opposite(C)) →
  assert(known(∠A) ∧ known(∠B) ∧ known(b)) →
  prove(¬determinable(a))
} ↔

proof SphericalTriangle_AmbiguousCase_AAS() {
  apply(SphericalLawOfSines) →
  assert(sin(a)/sin(A) = sin(b)/sin(B) = sin(c)/sin(C)) →
  
  derive(sin(a) = (sin(b)×sin(A))/sin(B)) →
  
  lemma SineConstraints() {
    assert(0 < sin(a) ≤ 1)
  } →
  
  lemma SineSymmetry() {
    assert(∀x ∈ ℝ → sin(x) = sin(π - x))
  } →
  
  apply(SineSymmetry()) →
  assert(a ≠ π/2 → ∃{a, π-a}: ValidSolutions) →
  assert(|ValidSolutions| > 1 → ¬determinable(a)) →
  conclude(¬determinable(a))
}