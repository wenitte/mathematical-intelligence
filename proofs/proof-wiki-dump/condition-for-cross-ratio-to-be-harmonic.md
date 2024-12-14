theorem HarmonicCrossRatioEquality() {
  assert(
    ∀A,B,C,D ∈ Line →
    (CrossRatio(A,B,C,D) = -1) →
    CrossRatio(A,B,C,D) = CrossRatio(B,A,C,D)
  )
} ↔

proof HarmonicCrossRatioEquality() {
  setVar(A,B,C,D: Line) →
  assert(CrossRatio(A,B,C,D) = -1) →
  
  lemma CrossRatioDefinition() {
    assert(CrossRatio(A,B,C,D) = (AC·DB)/(AD·CB))
  } →
  
  apply(CrossRatioDefinition()) →
  assert((AC·DB)/(AD·CB) = -1) →
  
  lemma DirectedSegments() {
    assert(AC = -CA ∧ DB = -BD ∧ AD = -DA ∧ CB = -BC)
  } →
  
  apply(DirectedSegments()) →
  assert((-CA·-BD)/(-DA·-BC) = -1) →
  assert((CA·BD)/(DA·BC) = -1) →
  
  lemma Reciprocal() {
    assert(x = -1 ↔ 1/x = -1)
  } →
  
  apply(Reciprocal()) →
  assert((DA·BC)/(CA·BD) = -1) →
  
  lemma Commutative() {
    assert((DA·BC) = (BC·DA))
  } →
  
  apply(Commutative()) →
  assert((BC·DA)/(BD·CA) = -1) →
  
  apply(CrossRatioDefinition()) →
  assert(CrossRatio(B,A,C,D) = -1) →
  
  assert(CrossRatio(A,B,C,D) = CrossRatio(B,A,C,D))
}