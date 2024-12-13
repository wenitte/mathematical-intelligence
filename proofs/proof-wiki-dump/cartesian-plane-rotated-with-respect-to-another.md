theorem CartesianPlaneRotation() {
  assert(
    ∀r ∈ ℝ² ∧ ∀φ ∈ ℝ ∧
    let C be Cartesian_plane(origin: O) ∧
    let C' = rotate(C, φ, anticlockwise) ∧
    let (x,y) = components(r, C) ∧
    let (x',y') = components(r, C') ⇒
    (x' = x·cos(φ) + y·sin(φ) ∧
     y' = -x·sin(φ) + y·cos(φ))
  )
}

proof CartesianPlaneRotation() {
  setVar(r: ℝ², φ: ℝ) →
  
  lemma VectorRepresentation() {
    assert(r = directed_segment(O, P))
  } →
  
  lemma ComponentDecomposition() {
    assert(x' = OA + BP) ∧
    assert(y' = xB - xA)
    where(
      OA = x·cos(φ),
      BP = y·sin(φ),
      xB = y·cos(φ),
      xA = x·sin(φ)
    )
  } →
  
  apply(VectorRepresentation()) →
  apply(ComponentDecomposition()) →
  
  assert(x' = OA + BP) →
  assert(x' = x·cos(φ) + y·sin(φ)) →
  
  assert(y' = xB - xA) →
  assert(y' = y·cos(φ) - x·sin(φ)) →
  
  assert(y' = -x·sin(φ) + y·cos(φ)) →
  
  conclude((x' = x·cos(φ) + y·sin(φ) ∧
           y' = -x·sin(φ) + y·cos(φ)))
}