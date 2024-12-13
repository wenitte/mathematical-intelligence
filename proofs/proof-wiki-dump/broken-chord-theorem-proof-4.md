theorem BrokenChordTheorem() {
  assert(
    ∀A,C,M,B ∈ Circle ∧
    arcLength(AM) = arcLength(MC) ∧
    B ∈ minorArc(AM) ∧
    ∃D: MD ⊥ BC
    ⇒ AB + BD = DC
  )
} ↔

proof BrokenChordTheorem() {
  setPoint(E: BC | BD = BE) →
  
  lemma CongruentTriangles() {
    assert(BD = ED) →
    assert(MD ⊥ BE) →
    assert(triangle(MBD) ≅ triangle(MED)) by SAS
  } →
  
  apply(CongruentTriangles()) →
  assert(MB = ME) →
  assert(angle(MBE) = angle(MEB)) by IsoscelesTriangle →
  
  lemma EqualArcs() {
    assert(arc(AM) = arc(MC)) →
    assert(angle(MFC) = angle(MBC)) by EqualArcsTheorem →
    assert(angle(AFM) = angle(MBC)) by EqualArcsTheorem →
    assert(angle(MEB) = angle(CEF)) by VerticalAngle
  } →
  
  apply(EqualArcs()) →
  assert(
    angle(MBE) = angle(MEB) = 
    angle(AFM) = angle(MFC) = 
    angle(CEF)
  ) →
  
  assert(triangle(CEF) isIsosceles) →
  assert(CE = CF) →
  assert(angle(AFC) + angle(ECF) = 180°) →
  assert(BC ∥ AF) by SupplementaryAngles →
  assert(AB = CF) by ParallelChordsTheorem →
  assert(AB = CE) →
  assert(AB + BD = DE + EC) →
  assert(AB + BD = DC)
}