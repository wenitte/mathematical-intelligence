theorem TrivialRelation_Mapping() {
  assert(
    ∀S,T[sets] ∧ (R = S×T) ∧ (R: trivial_relation(S,T)) →
    [R is_mapping ↔ (card(S)=0 ∨ card(T)=1)]
  )
}

proof TrivialRelation_Mapping() {
  setDef(R = {(s,t) | s∈S ∧ t∈T}) →
  
  case_1: card(S)=0 {
    assert(S=∅) →
    assert(R=∅) →
    apply(Empty_Mapping_is_Mapping) →
    conclude(R is_mapping)
  } →

  case_2: card(S)≠0 {
    assert(S≠∅) →
    
    subcase_2a: card(T)=0 {
      assert(T=∅) →
      apply(Relation_to_Empty_Set_Mapping_iff_Domain_Empty) →
      conclude(¬(R is_mapping))
    } →
    
    subcase_2b: card(T)=1 {
      setVar(T={t}) →
      assert(R={(s,t) | s∈S}) →
      ∀s∈S(∃!t∈T((s,t)∈R)) →
      conclude(R is_mapping)
    } →
    
    subcase_2c: card(T)>1 {
      assert(∃t₁,t₂∈T(t₁≠t₂)) →
      assert(∃s∈S) →
      assert((s,t₁)∈R ∧ (s,t₂)∈R ∧ t₁≠t₂) →
      conclude(¬(R is_mapping))
    }
  } →
  
  conclude(
    R is_mapping ↔ (card(S)=0 ∨ card(T)=1)
  )
}