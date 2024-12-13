theorem Specification_from_Replacement_and_Empty() {
  assert(
    (AxiomOfReplacement ∧ AxiomOfEmptySet) → AxiomOfSpecification
  )
} ↔

proof Specification_from_Replacement_and_Empty() {
  setVar(A: Set) →
  setVar(P(x): PropFunction) →
  
  assert(∀A: ∃B: ∀y: (y ∈ B ⟺ (y ∈ A ∧ P(y)))) →
  
  lemma Case_No_Elements() {
    assert(¬∃y ∈ A: P(y)) →
    setVar(B = ∅) →
    assert(y ∈ B → (y ∈ A ∧ P(y))) →
    assert((y ∈ A ∧ P(y)) → y ∈ B) →
    assert(y ∈ B ⟺ (y ∈ A ∧ P(y)))
  } →

  lemma Case_Some_Elements() {
    assert(∃y ∈ A: P(y)) →
    setVar(w ∈ A: P(w)) →
    
    lemma Q_Mapping() {
      setVar(Q(x,z): PropFunction) →
      assert(Q(x,z) ⟺ ((P(x) ∧ z = x) ∨ (¬P(x) ∧ z = w))) →
      assert(∀x: ∃a: ∀z: (Q(x,z) ⟺ a = z))
    } →
    
    apply(AxiomOfReplacement) →
    assert(∀A: ∃B: ∀y: (y ∈ B ⟺ ∃x ∈ A: Q(x,y))) →
    
    assert(y ∈ B → (y ∈ A ∧ P(y))) →
    assert((y ∈ A ∧ P(y)) → y ∈ B) →
    assert(y ∈ B ⟺ (y ∈ A ∧ P(y)))
  } →
  
  apply(Case_No_Elements()) →
  apply(Case_Some_Elements()) →
  assert(∀A: ∃B: ∀y: (y ∈ B ⟺ (y ∈ A ∧ P(y))))
}