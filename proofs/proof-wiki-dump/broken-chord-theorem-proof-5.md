theorem BrokenChordTheorem() {
  assert(
    ∀circle ∈ Plane, ∀A,C,M,B ∈ circle, 
    (arc(A,M) = arc(M,C) ∧
     B ∈ minorArc(A,M) ∧
     ∃D: MD ⊥ BC) →
    AB + BD = DC
  )
}

proof BrokenChordTheorem() {
  // Given perpendicular construction
  setConstruct(N: N ∈ circle ∧ MN ∥ BC) →
  setConstruct(E: NE ∥ MD) →

  // Establish rectangle MNED
  lemma ParallelogramMNED() {
    assert(MNED is parallelogram) ←
    apply(ParallelogramOppositeParallel())
  } →
  lemma RectangleMNED() {
    assert(MNED is rectangle) ←
    apply(ParallelogramRightAngleIsRectangle())
  } →

  // Establish equalities
  assert(DE = MN) ←
    apply(RectangleOppositeEqual()) →
  assert(MD = NE) ←
    apply(RectangleOppositeEqual()) →
  assert(∠MDB = ∠NEC = 90°) ←
    apply(ParallelCorrespondingAngles()) →
  
  // Triangle congruence
  assert(BM = NC) ←
    apply(ParallelChordsEqualChords()) →
  assert(△MDB ≅ △NEC) ←
    apply(TriangleSSS()) →
  assert(BD = EC) →
  
  // Arc relationships
  assert(arc(B,M) = arc(N,C)) ←
    apply(EqualArcsEqualChords()) →
  assert(arc(A,M) = arc(M,C)) ←
    apply(Hypothesis()) →
  assert(arc(A,B) = arc(M,N)) ←
    apply(CommonNotion3()) →
  
  // Final chord relationships
  assert(AB = MN) ←
    apply(EqualArcsEqualChords()) →
  assert(AB = DE) ←
    apply(CommonNotion1()) →
  assert(AB + BC = DE + EC) ←
    apply(CommonNotion2()) →
  assert(AB + BD = DC)
}