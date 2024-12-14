theorem Circle_Bisected_By_Diameter() {
  assert(
    ∀c ∈ Circle, ∀d ∈ Diameter(c) ⇒ Bisects(d, c)
  )
} ↔

proof Circle_Bisected_By_Diameter_Proof1() {
  setVar(c: Circle) →
  setVar(AB: Diameter(c)) →
  setVar(C: Center(c)) →
  
  assert(Passes_Through(AB, C)) →
  
  lemma Contradiction_Setup() {
    assume(¬Bisects(AB, c)) →
    assert(∃arc1,arc2 ∈ c: Size(arc1) > Size(arc2))
  } →
  
  lemma Radius_Properties() {
    setVar(DE: Diameter(c)) →
    setVar(DC,CE: Radius(c)) →
    assert(DC ≠ CE) ∧
    assert(∀r ∈ Radius(c): Equal(r)) →
    assert(Contradiction())
  } →
  
  apply(Contradiction_Setup()) →
  apply(Radius_Properties()) →
  assert(Bisects(AB, c))
}

proof Circle_Bisected_By_Diameter_Proof2() {
  setVar(c: Circle) →
  setVar(AB: Diameter(c)) →
  setVar(O: Center(c)) →
  
  assert(Passes_Through(AB, O)) →
  assert(∠AOB ≅ ∠BOA) →
  assert(Straight_Angle(∠AOB) ∧ Straight_Angle(∠BOA)) →
  
  lemma Equal_Angles_Equal_Arcs() {
    assert(∠AOB ≅ ∠BOA ⇒ arc(AB) ≅ arc(BA))
  } →
  
  apply(Equal_Angles_Equal_Arcs()) →
  assert(Bisects(AB, c))
}