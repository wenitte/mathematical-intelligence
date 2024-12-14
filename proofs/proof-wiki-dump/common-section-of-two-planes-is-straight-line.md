theorem Common_Section_Two_Planes() {
  assert(
    ∀(plane₁, plane₂) | plane₁ ≠ plane₂ ∧ plane₁ ∩ plane₂ ≠ ∅ 
    ⇒ ∃L | L = plane₁ ∩ plane₂ ∧ isLine(L)
  )
} ↔

proof Common_Section_Two_Planes() {
  setVar(AB: plane, BC: plane | AB ≠ BC) →
  setVar(DB: set | DB = AB ∩ BC) →
  
  lemma Contradiction() {
    assume(¬isLine(DB)) →
    setVar(DEB: lineSegment | DEB ⊂ AB) →
    setVar(DFB: lineSegment | DFB ⊂ BC) →
    assert(endpoints(DEB) = endpoints(DFB)) →
    assert(DEB ≠ DFB) →
    assert(∃area | enclosed(DEB, DFB, area)) →
    assert(contradiction(∃area))
  } →
  
  apply(Contradiction()) →
  assert(¬(¬isLine(DB))) →
  assert(isLine(DB)) →
  assert(∀(plane₁, plane₂) | plane₁ ≠ plane₂ ∧ plane₁ ∩ plane₂ ≠ ∅ 
         ⇒ ∃L | L = plane₁ ∩ plane₂ ∧ isLine(L))
}