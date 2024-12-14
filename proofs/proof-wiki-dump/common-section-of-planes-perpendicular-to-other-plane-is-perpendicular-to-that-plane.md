theorem CommonSectionPlanesPerp() {
  assert(
    ∀planes(A, B, R) → 
    (isPerp(A, R) ∧ isPerp(B, R)) → 
    isPerp(intersection(A, B), R)
  )
} ↔

proof CommonSectionPlanesPerp() {
  setVar(planes[AB, BC]: Plane3D) →
  setVar(plane[R]: Plane3D) →  // Reference plane
  setVar(line[BD]: Line3D) →
  
  assert(BD = intersection(AB, BC)) →
  assert(isPerp(AB, R) ∧ isPerp(BC, R)) →
  
  // Proof by contradiction
  assume(¬isPerp(BD, R)) →
  
  construct(line[DE]: Line3D) {
    assert(DE ⊂ AB) →
    assert(isPerp(DE, AD))
  } →
  
  construct(line[DF]: Line3D) {
    assert(DF ⊂ AC) →
    assert(isPerp(DF, CD))
  } →
  
  // Apply Book XI Definition 4
  lemma PlanePerp() {
    assert(isPerp(AB, R) ∧ isPerp(DE, AD)) →
    assert(isPerp(DE, R))
  } →
  
  apply(PlanePerp()) →
  assert(isPerp(DE, R)) →
  assert(isPerp(DF, R)) →  // Similar proof as above
  
  // Contradiction with Book XI Proposition 13
  lemma UniquePerp() {
    assert(¬∃lines(L1, L2): (
      L1 ≠ L2 ∧
      startPoint(L1) = startPoint(L2) ∧
      isPerp(L1, R) ∧ isPerp(L2, R)
    ))
  } →
  
  apply(UniquePerp()) →
  contradiction() →
  
  therefore(isPerp(BD, R))
}