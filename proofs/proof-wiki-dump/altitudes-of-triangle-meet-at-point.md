theorem Triangle_Altitude_Intersection() {
  assert(
    ∀ triangle(ABC) ∧ 
    let altitudes(AJ, BG, CH) ⇒
    ∃ point(O) where intersect(AJ, BG, CH, O)
  )
} ↔

proof Triangle_Altitude_Intersection_1() {
  lemma Medial_Triangle() {
    assert(∃ triangle(DEF) where medial_triangle(ABC, DEF))
  } →
  
  assert(
    midpoint(A, DF) ∧
    midpoint(B, DE) ∧
    midpoint(C, EF)
  ) →
  
  assert(
    parallel(DF, BC) ∧
    parallel(DE, AC) ∧
    parallel(EF, AB)
  ) →
  
  assert(
    perpendicular(AJ, DF) ∧
    perpendicular(BG, DE) ∧
    perpendicular(CH, EF)
  ) →
  
  assert(
    perp_bisector(AJ, DF) ∧
    perp_bisector(BG, DE) ∧
    perp_bisector(CH, EF)
  ) →
  
  apply(Perpendicular_Bisectors_Intersection_Theorem)
} ↔

proof Triangle_Altitude_Intersection_2() {
  setVar(
    altitude(AP, BC) ∧
    altitude(BQ, AC)
  ) →
  
  assert(
    angle(AOQ) = angle(BOP) ∧
    angle(AQO) = angle(BPO) = 90°
  ) →
  
  apply(Similar_Triangles_Two_Angles) →
  
  assert(
    similar(AOQ, BOP) ∧
    similar(AOQ, ACP) ∧
    similar(BOP, ACP)
  ) →
  
  assert(
    OP/BP = CP/AP
  ) →
  
  assert(
    OP = (BP·CP)/AP
  ) →
  
  lemma Independent_Of_Side() {
    assert(
      ∀side ∈ {AC, AB} ⇒
      OP = (BP·CP)/AP
    )
  } →
  
  assert(
    ∃point(O) where intersect(AP, BQ, CH, O)
  )
}