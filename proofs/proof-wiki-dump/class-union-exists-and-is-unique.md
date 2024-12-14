theorem Class_Union_Exists_Unique() {
  assert(
    ∀V(BasicUniverse(V) ∧ 
    ∀A(A ⊆ V → 
    ∃!B(B = ⋃A)))
  )
} ↔

proof Class_Union_Exists_Unique() {
  setVar(V: Universe) →
  setVar(A: Class, A ⊆ V) →
  
  // Existence proof
  lemma Union_Exists() {
    apply(Axiom_Specification) →
    assert(∃B(B = {x | ∃y(x ∈ y ∧ y ∈ A)})) →
    assert(B = ⋃A)
  } →

  // Uniqueness proof
  lemma Union_Unique() {
    setVar(B: Class, B = ⋃A) →
    setVar(C: Class, C = ⋃A) →
    
    assert(∀x(x ∈ B ↔ ∃y(y ∈ A ∧ x ∈ y))) →
    assert(∀x(x ∈ C ↔ ∃y(y ∈ A ∧ x ∈ y))) →
    
    apply(Biconditional_Commutative) →
    apply(Biconditional_Transitive) →
    assert(∀x(x ∈ B ↔ x ∈ C)) →
    
    apply(Axiom_Extension) →
    assert(B = C)
  } →
  
  apply(Union_Exists()) →
  apply(Union_Unique()) →
  assert(∃!B(B = ⋃A))
}