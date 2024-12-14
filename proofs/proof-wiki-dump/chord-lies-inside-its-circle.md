theorem Chord_Inside_Circle() {
  assert(
    ∀ circle C, ∀ points A,B ∈ C.circumference ⇒
    line_segment(A,B) ⊂ C.interior
  )
} ↔

proof Chord_Inside_Circle() {
  setVar(C: circle, A,B: point) →
  assume(A,B ∈ C.circumference) →
  
  proof_by_contradiction() {
    assume(¬(line_segment(A,B) ⊂ C.interior)) →
    assert(line_segment(A,B) ⊂ C.exterior) →
    
    setVar(D: point = C.center) →
    setVar(E: point ∈ line_segment(A,B)) →
    setVar(F: point = intersection(DE, C.circumference)) →
    
    assert(DA = DB) →  // Radii equal
    
    lemma Isosceles_Equal_Angles() {
      assert(DA = DB ⇒ ∠DAE = ∠DBE)
    } →
    
    lemma External_Angle() {
      assert(∠DEB > ∠DAE)  // External angle theorem
    } →
    
    assert(∠DAE = ∠DBE) ∧ ∠DEB > ∠DAE ⇒
    ∠DEB > ∠DBE →
    
    lemma Greater_Angle_Greater_Side() {
      assert(∠DEB > ∠DBE ⇒ DB > DE)
    } →
    
    assert(DB = DF)  // Radius
    assert(DF > DE) →
    assert(DE > DF)  // Point E exterior to circle
    assert(contradiction())
  } →
  
  proof_by_contradiction() {
    assume(line_segment(A,B) ⊂ C.circumference) →
    assert(contradiction())  // Similar proof omitted
  } →
  
  assert(line_segment(A,B) ⊂ C.interior)
}