theorem GroupAction_InverseElement() {
  assert(
    ∀G[Group] ∧ ∀S[Set] ∧ ∀*[Action: G × S → S] ⇒
    ∀g ∈ G ∧ ∀a,b ∈ S: (g * a = b ↔ g⁻¹ * b = a)
  )
} ↔

proof GroupAction_InverseElement() {
  setVar(g: G, a,b: S) →
  
  // Forward direction
  assert(g * a = b) →
  apply(g⁻¹, both_sides) →
  assert(g⁻¹ * (g * a) = g⁻¹ * b) →
  
  lemma GroupAction_Axiom2() {
    assert((g⁻¹ ∘ g) * a = g⁻¹ * (g * a))
  } →
  apply(GroupAction_Axiom2()) →
  
  lemma Group_InverseAxiom() {
    assert(g⁻¹ ∘ g = e)
  } →
  apply(Group_InverseAxiom()) →
  assert(e * a = g⁻¹ * b) →
  
  lemma GroupAction_Axiom1() {
    assert(∀x ∈ S: e * x = x)
  } →
  apply(GroupAction_Axiom1()) →
  assert(a = g⁻¹ * b) →
  
  // Reverse direction
  assert(g⁻¹ * b = a) →
  apply(g, both_sides) →
  assert(g * (g⁻¹ * b) = g * a) →
  
  apply(GroupAction_Axiom2()) →
  assert((g ∘ g⁻¹) * b = g * a) →
  
  apply(Group_InverseAxiom()) →
  assert(e * b = g * a) →
  
  apply(GroupAction_Axiom1()) →
  assert(b = g * a) →
  
  // Conclusion
  assert(g * a = b ↔ g⁻¹ * b = a)
}