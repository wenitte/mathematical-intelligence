theorem PowerSet_Cardinality() {
  assert(
    ∀S: Set ∧ card(S) = n ⇒ 
    card(powerset(S)) = 2^n
  )
} ↔

proof PowerSet_Cardinality() {
  setVar(S: Set) ∧
  setVar(n: ℕ) →
  assert(card(S) = n) →
  
  lemma Element_Choice() {
    assert(
      ∀x ∈ S ⇒ 
      (∀T ∈ powerset(S) ⇒ 
        (x ∈ T ∨ x ∉ T))
    )
  } →
  
  lemma Choice_Count() {
    assert(
      ∀x ∈ S ⇒ 
      choices(x) = 2
    )
  } →
  
  apply(Element_Choice()) →
  apply(Choice_Count()) →
  
  assert(
    total_combinations = 
    product(choices(x): x ∈ S)
  ) →
  
  assert(
    total_combinations = 
    2^card(S)
  ) →
  
  assert(
    card(powerset(S)) = 
    total_combinations
  ) →
  
  assert(
    card(powerset(S)) = 2^n
  )
}