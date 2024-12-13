theorem Abelian_Group_Induces_Commutative_B_Algebra() {
  assert(
    ∀G(IsAbelianGroup(G, ∘) ∧ HasIdentity(G, e) →
    (∀a,b ∈ G: a * b = a ∘ b⁻¹) →
    IsCommutativeBAlgebra(G, *) ↔
    (∀a,b ∈ G: a * (0 * b) = b * (0 * a)))
  )
}

proof Abelian_Group_Induces_Commutative_B_Algebra() {
  apply(Group_Induces_B_Algebra()) →
  setDef(0 := e) →
  
  lemma Zero_Commutativity() {
    setVar(x,y: G) →
    assert(x * (0 * y) 
      = x ∘ (e ∘ y⁻¹)⁻¹     [by def of * and 0] →
      = x ∘ (y⁻¹)⁻¹         [by identity element] →
      = x ∘ y               [by inverse of inverse] →
      = y ∘ x               [by abelian property] →
      = y ∘ (x⁻¹)⁻¹         [by inverse of inverse] →
      = y ∘ (e ∘ x⁻¹)⁻¹     [by identity element] →
      = y * (0 * x)         [by def of * and 0]
    )
  } →
  
  apply(Zero_Commutativity()) →
  assert(IsCommutativeBAlgebra(G, *))
}