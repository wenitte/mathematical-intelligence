theorem CevasTheorem() {
  let triangle(ABC) ∧ 
  let points(L ∈ BC, M ∈ AC, N ∈ AB) →
  assert(
    concurrent(AL, BM, CN) ↔ (BL/LC × CM/MA × AN/NB = 1)
  )
}

proof CevasTheorem() {
  // Necessary Condition
  lemma NecessaryCondition() {
    let P = intersection(AL, BM, CN) →
    assert(
      // Area ratios for triangles with same altitude
      Area(ALB)/Area(ALC) = BL/LC ∧
      Area(PLB)/Area(PLC) = BL/LC
    ) →
    assert(
      Area(APB) = Area(ALB) - Area(PLB) ∧
      Area(APC) = Area(ALC) - Area(PLC)
    ) →
    derive(Area(APB)/Area(APC) = BL/LC) →
    derive(Area(BPC)/Area(APB) = CM/MA) →
    derive(Area(APC)/Area(BPC) = AN/NB) →
    assert(
      Area(APB)/Area(APC) × Area(BPC)/Area(APB) × Area(APC)/Area(BPC) = 
      BL/LC × CM/MA × AN/NB
    ) →
    conclude(BL/LC × CM/MA × AN/NB = 1)
  }

  // Sufficient Condition
  lemma SufficientCondition() {
    assume(BL/LC × CM/MA × AN/NB = 1) →
    let P = intersection(AM, CN) →
    assert(Area(BPC)/Area(APB) = CM/MA) →
    assert(Area(APC)/Area(BPC) = AN/NB) →
    derive(Area(APC)/Area(APB) = CM/MA × AN/NB) →
    given(BL/LC × CM/MA × AN/NB = 1) →
    derive(CM/MA × AN/NB = LC/BL) →
    assert(CM/MA × AN/NB = Area(APC)/Area(APB)) →
    letPoint(Z = extension(BP, AC)) →
    assert(Area(APC)/Area(APB) = ZC/BZ) →
    derive(LC/BL = ZC/BZ) →
    conclude(Z = L ∧ collinear(A, P, L))
  }

  apply(NecessaryCondition()) ∧
  apply(SufficientCondition()) →
  conclude(
    concurrent(AL, BM, CN) ↔ (BL/LC × CM/MA × AN/NB = 1)
  )
}