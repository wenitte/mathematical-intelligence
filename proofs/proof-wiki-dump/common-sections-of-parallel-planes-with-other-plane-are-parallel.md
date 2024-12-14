theorem Parallel_Plane_Sections() {
  assert(
    ∀planes[A,B,C,D] ∀plane[EFGH] (
      (isParallel(planeAB, planeCD) ∧
       intersects(EFGH, planeAB) ∧
       intersects(EFGH, planeCD)) →
      isParallel(intersection(EFGH,planeAB), intersection(EFGH,planeCD))
    )
  )
} ↔

proof Parallel_Plane_Sections() {
  setVar(planeAB, planeCD: Plane) →
  setVar(EFGH: Plane) →
  assert(isParallel(planeAB, planeCD)) →
  setVar(EF: Line = intersection(EFGH, planeAB)) →
  setVar(GH: Line = intersection(EFGH, planeCD)) →
  
  proof_by_contradiction() {
    assume(¬isParallel(EF, GH)) →
    assert(∃K: Point (intersect(extend(EF), extend(GH), K))) →
    
    lemma Lines_In_Planes() {
      assert(∀p ∈ EFK: p ∈ planeAB) →
      assert(K ∈ EFK → K ∈ planeAB) →
      assert(∀p ∈ GHK: p ∈ planeCD) →
      assert(K ∈ GHK → K ∈ planeCD)
    } →
    
    apply(Lines_In_Planes()) →
    assert(K ∈ planeAB ∧ K ∈ planeCD) →
    assert(intersect(planeAB, planeCD)) →
    assert(contradiction(
      intersect(planeAB, planeCD),
      isParallel(planeAB, planeCD)
    )) →
    
    assert(¬intersect(extend(EF), extend(GH))) →
    apply(ParallelDef) →
    assert(isParallel(EF, GH))
  }
}