theorem Bottom_Relation_Bottom_In_Aux() {
  assert(
    ∀L(L = ⟨S,∨,⪯⟩ ∧ isBoundedBelowJoinSemilattice(L) ∧
    Aux(L) = {R: isAuxiliaryRelation(R,L)} ∧
    P = ⟨Aux(L),⪯⟩ ∧
    ⪯ = ⊆|_(Aux(L)×Aux(L)) ∧
    B = {⟨⊥_L,x⟩: x ∈ S}) →
    B = ⊥_P
  )
}

proof Bottom_Relation_Bottom_In_Aux() {
  lemma Bottom_Relation_Is_Auxiliary() {
    assert(B ∈ Aux(L))
  } →
  
  assert(isUpperBound(B,∅,P)) →
  
  assert(
    ∀R ∈ Aux(L) → 
    (isUpperBound(R,∅,P) → B ⪯ R)
  ) →
  
  setVar(R: Aux(L)) →
  
  lemma Auxiliary_Relation_Property() {
    assert(
      R ∈ Aux(L) → B ⊆ R
    )
  } →
  
  apply(Auxiliary_Relation_Property()) →
  assert(B ⪯ R) →
  
  lemma Supremum_Definition() {
    assert(B = sup_P(∅))
  } →
  
  apply(Supremum_Empty_Is_Bottom) →
  assert(B = ⊥_P)
}