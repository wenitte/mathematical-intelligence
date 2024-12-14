theorem Circle_Bisection_By_Diameter() {
  assert(
    ∀c ∈ Circle, ∀d ∈ Diameter(c) ⇒
    Area(c₁) = Area(c₂) where {c₁, c₂} = Split(c, d)
  )
} ↔

proof Circle_Bisection_By_Diameter() {
  setVar(ADBE: Circle) →
  setVar(AB: Diameter(ADBE)) →
  setVar(C: Point, Center(ADBE)) →
  
  assert(Contains(AB, C)) by def_diameter →
  
  lemma Contradiction_Setup() {
    assume(¬Bisects(AB, ADBE)) →
    assert(Area(ADBC) > Area(AEBC)) →
    
    setVar(DE: Diameter(ADBE)) →
    assert(Contains(DE, C)) →
    assert(DC ≠ CE)
  } →
  
  lemma Circle_Definition() {
    assert(
      ∀p ∈ Points(ADBE) ⇒
      Distance(p, C) = Radius(ADBE)
    ) by euclid_circle_def
  } →
  
  assert(DC = Radius(ADBE) ∧ CE = Radius(ADBE)) →
  assert(DC = CE) by Circle_Definition() →
  
  contradiction(
    DC = CE,
    DC ≠ CE
  ) →
  
  therefore(Bisects(AB, ADBE))
}