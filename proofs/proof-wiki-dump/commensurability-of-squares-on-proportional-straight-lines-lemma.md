theorem Squares_On_Proportional_Lines_Lemma() {
  assert(
    ∀AB,C ∈ Lines ∧ AB > C →
    ∃DB ∈ Lines : AB² = C² + DB²
  )
} ↔

proof Squares_On_Proportional_Lines_Lemma() {
  setVar(AB,C: Lines) →
  assume(AB > C) →
  
  construct(
    semicircle(ADB, diameter: AB)
  ) →
  
  lemma Fitting_Chord() {
    assert(
      ∃AD ∈ Lines : AD = C ∧
      AD ⊂ semicircle(ADB)
    )
  } →
  
  apply(Fitting_Chord()) →
  construct(line(DB)) →
  
  lemma Angle_In_Semicircle() {
    assert(
      ∀X,Y,Z ∈ Points :
      arc(XYZ) = semicircle →
      angle(XYZ) = 90°
    )
  } →
  
  apply(Angle_In_Semicircle()) →
  assert(angle(ADB) = 90°) →
  
  lemma Pythagoras() {
    assert(
      angle(ADB) = 90° →
      AB² = AD² + DB²
    )
  } →
  
  apply(Pythagoras()) →
  substitute(AD = C) →
  assert(AB² = C² + DB²) →
  assert(AB² - C² = DB²)
}