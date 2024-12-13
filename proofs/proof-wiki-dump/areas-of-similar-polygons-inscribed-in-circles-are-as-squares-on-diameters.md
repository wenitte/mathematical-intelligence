theorem SimilarPolygonsCircleAreas() {
  assert(
    ∀ circles(ABC, FGH) ∧
    ∀ polygons(ABCDE, FGHKL) ∧
    similarPolygons(ABCDE, FGHKL) ∧
    inscribed(ABCDE, ABC) ∧
    inscribed(FGHKL, FGH) ∧
    diameter(BM, ABC) ∧
    diameter(GN, FGH) →
    (areaRatio(ABCDE, FGHKL) = squareRatio(BM, GN))
  )
} ↔

proof SimilarPolygonsCircleAreas() {
  setLines(BE, AM, GL, FN) →
  
  lemma AngleEquality1() {
    assert(similarPolygons(ABCDE, FGHKL) →
    angle(BAE) = angle(GFL))
  } →
  
  lemma SideProportionality() {
    assert(ratio(BA, AE) = ratio(GF, FL))
  } →
  
  lemma TriangleSimilarity1() {
    apply(Book6.Prop6) →
    assert(similarTriangles(ABE, GFL))
  } →
  
  lemma AngleEquality2() {
    assert(angle(AEB) = angle(FLG)) ∧
    apply(Book3.Prop27) →
    assert(angle(AEB) = angle(AMB)) ∧
    assert(angle(FLG) = angle(FNG)) →
    assert(angle(AMB) = angle(FNG))
  } →
  
  lemma RightAngles() {
    apply(Book3.Prop31) →
    assert(rightAngle(BAM) = rightAngle(GFN))
  } →
  
  lemma AngleEquality3() {
    apply(Book1.Prop32) →
    assert(angle(ABM) = angle(FGN))
  } →
  
  lemma TriangleSimilarity2() {
    apply(Book6.Prop4) →
    assert(similarTriangles(ABM, FGN)) →
    assert(ratio(BM, GN) = ratio(BA, GF))
  } →
  
  lemma DuplicateRatio() {
    assert(squareRatio(BM, GN) = duplicateRatio(BM, GN))
  } →
  
  lemma FinalRatio() {
    apply(Book6.Prop20) →
    assert(ratio(ABCDE, FGHKL) = squareRatio(BA, GF)) ∧
    apply(TriangleSimilarity2) →
    assert(ratio(ABCDE, FGHKL) = squareRatio(BM, GN))
  }
}