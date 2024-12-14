theorem Centralizer_in_Subgroup() {
  setType(G: Group) ∧
  setVar(H: Subgroup(G)) ∧
  assert(
    ∀x ∈ G ⇒ C_H(x) = C_G(x) ∩ H
  )
} ↔

proof Centralizer_in_Subgroup() {
  setVar(x: G) →
  setVar(g: G) →
  
  lemma Centralizer_Equivalence() {
    assert(
      g ∈ C_H(x) ↔ (g ∈ C_G(x) ∧ g ∈ H)
    )
  } →
  
  lemma Set_Intersection_Definition() {
    assert(
      ∀a,b,z: z ∈ (a ∩ b) ↔ (z ∈ a ∧ z ∈ b)
    )
  } →
  
  apply(Centralizer_Equivalence()) →
  apply(Set_Intersection_Definition()) →
  
  assert(
    C_H(x) = C_G(x) ∩ H
  )
}