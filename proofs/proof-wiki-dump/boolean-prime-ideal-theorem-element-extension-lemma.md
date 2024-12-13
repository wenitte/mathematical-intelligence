theorem Element_Extension() {
  assert(
    ∀B(Boolean_Lattice(B) ∧ 
    ∃F⊆B(Filter(F) ∧
    ∃a,x∈B(a∉F → 
    ((a∨x)∉F ∨ (a∨¬x)∉F))))
  )
}

proof Element_Extension() {
  setVars(B: Boolean_Lattice, F: Filter, a,x: Element) →
  assume(contradiction: ((a∨x)∈F ∧ (a∨¬x)∈F)) →
  
  assert((a∨x)∈F ∧ (a∨¬x)∈F) →
  assert(((a∨x)∧(a∨¬x))∈F) by(Filter_Closed_Under_Meet) →
  
  assert(((a∨x)∧(a∨¬x)) = 
         (a∧(a∨¬x))∨(x∧(a∨¬x))) by(Distributive_Lattice_Axiom1) →
         
  assert((a∧(a∨¬x))∨(x∧(a∨¬x)) = 
         a∨((x∧a)∨(x∧¬x))) by(Meet_Absorbs_Join, Distributive_Lattice_Axiom1) →
         
  assert(a∨((x∧a)∨(x∧¬x)) = 
         a∨((a∧x)∨⊥)) by(Meet_Commutative, Complement_Definition) →
         
  assert(a∨((a∧x)∨⊥) = a) by(Bottom_Definition, Join_Absorbs_Meet) →
  
  assert(a∈F) by(previous_steps) →
  assert(contradiction(a∉F, a∈F)) →
  
  conclude((a∨x)∉F ∨ (a∨¬x)∉F)
}