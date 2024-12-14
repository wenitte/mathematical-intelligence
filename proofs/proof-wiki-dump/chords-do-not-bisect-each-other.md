theorem Chords_Not_Bisect() {
  assert(
    ∀c ∈ Circle, ∀ch₁,ch₂ ∈ Chord(c) ⇒
    (¬isDiameter(ch₁) ∧ ¬isDiameter(ch₂) ∧ intersect(ch₁,ch₂)) →
    ¬(bisects(ch₁,ch₂) ∧ bisects(ch₂,ch₁))
  )
} ↔

proof Chords_Not_Bisect() {
  setVar(c: Circle) →
  setVar(AC,BD: Chord(c)) →
  assert(¬isDiameter(AC) ∧ ¬isDiameter(BD)) →
  setVar(E: Point) →
  assert(E = intersect(AC,BD)) →
  
  lemma Contradiction() {
    assume(bisects(AC,BD) ∧ bisects(BD,AC)) →
    assert(AE = EC ∧ BE = ED) →
    setVar(F: Point) →
    assert(F = center(c)) →
    assert(FE = line(F,E)) →
    
    apply(Diameter_Perpendicular_Bisector) →
    assert(FE ⊥ AC) →
    assert(∠FEA = 90°) →
    
    apply(Diameter_Perpendicular_Bisector) →
    assert(FE ⊥ BD) →
    assert(∠FEB = 90°) →
    
    assert(∠FEA = ∠FEB) →
    assert(∠FEA ≠ ∠FEB) →
    derive(false)
  } →
  
  apply(Contradiction()) →
  assert(¬(bisects(AC,BD) ∧ bisects(BD,AC)))
}