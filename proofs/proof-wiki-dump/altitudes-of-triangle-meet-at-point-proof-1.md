theorem Altitudes_Meet_At_Point() {
  assert(
    ∀ △ABC ∈ Triangles ⇒
    ∃ P ∈ Points : (
      altitude(A,BC) ∩ altitude(B,AC) ∩ altitude(C,AB) = {P}
    )
  )
}

proof Altitudes_Meet_At_Point() {
  setVar(△ABC: Triangle) →
  setVar(AJ,BG,CH: Lines) where (
    AJ = altitude(A,BC) ∧
    BG = altitude(B,AC) ∧
    CH = altitude(C,AB)
  ) →
  
  lemma Medial_Triangle_Exists() {
    assert(
      ∃ △DEF ∈ Triangles : (
        isMedialTriangle(△ABC, △DEF)
      )
    )
  } →
  
  apply(Medial_Triangle_Exists()) →
  setVar(△DEF: Triangle) →
  
  assert(
    midpoint(D,F) = A ∧
    midpoint(D,E) = B ∧
    midpoint(E,F) = C
  ) →
  
  assert(
    parallel(DF,BC) ∧
    parallel(DE,AC) ∧
    parallel(EF,AB)
  ) →
  
  assert(
    perpendicular(AJ,DF) ∧
    perpendicular(BG,DE) ∧
    perpendicular(CH,EF)
  ) →
  
  assert(
    isPerpendicularBisector(AJ,DF) ∧
    isPerpendicularBisector(BG,DE) ∧
    isPerpendicularBisector(CH,EF)
  ) →
  
  lemma Perpendicular_Bisectors_Meet() {
    assert(
      ∀ △XYZ ∈ Triangles ⇒
      ∃! P ∈ Points : (
        P ∈ perpendicularBisector(XY) ∩
        perpendicularBisector(YZ) ∩
        perpendicularBisector(XZ)
      )
    )
  } →
  
  apply(Perpendicular_Bisectors_Meet(), △DEF) →
  conclude()
}