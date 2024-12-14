theorem Ceva() {
  assert(
    ∀ triangle(ABC) ∧ 
    ∀ points(L,M,N) where (
      L ∈ BC ∧ M ∈ AC ∧ N ∈ AB
    ) ⇒
    concurrent(AL,BM,CN) ↔ (BL/LC × CM/MA × AN/NB = 1)
  )
}

proof Ceva_Necessity() {
  setVar(P: point, concurrent(AL,BM,CN) at P) →
  
  lemma Area_Ratio_1() {
    assert(
      height(ALB,ALC,BC) = height →
      Area(ALB)/Area(ALC) = BL/LC
    )
  } →
  
  lemma Area_Ratio_2() {
    assert(
      height(PLB,PLC,BC) = height →
      Area(PLB)/Area(PLC) = BL/LC
    )
  } →
  
  assert(
    Area(APB) = Area(ALB) - Area(PLB) ∧
    Area(APC) = Area(ALC) - Area(PLC)
  ) →
  
  assert(Area(APB)/Area(APC) = BL/LC) →
  
  lemma Similar_Ratios() {
    assert(
      Area(BPC)/Area(APB) = CM/MA ∧
      Area(APC)/Area(BPC) = AN/NB
    )
  } →
  
  assert(
    (Area(APB)/Area(APC)) × (Area(BPC)/Area(APB)) × (Area(APC)/Area(BPC)) = 
    BL/LC × CM/MA × AN/NB
  ) →
  
  assert(BL/LC × CM/MA × AN/NB = 1)
}

proof Ceva_Sufficiency() {
  assume(BL/LC × CM/MA × AN/NB = 1) →
  setVar(P: point, intersection(AM,CN)) →
  
  assert(Area(BPC)/Area(APB) = CM/MA) →
  assert(Area(APC)/Area(BPC) = AN/NB) →
  
  assert(Area(APC)/Area(APB) = CM/MA × AN/NB) →
  assert(CM/MA × AN/NB = LC/BL) →
  
  lemma Extension_Point() {
    setVar(Z: point, extension(BP,AC)) →
    assert(Area(APC)/Area(APB) = ZC/BZ)
  } →
  
  assert(LC/BL = ZC/BZ) →
  assert(Z = L) →
  assert(collinear(A,P,L))
}