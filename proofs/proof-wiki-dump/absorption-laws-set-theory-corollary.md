theorem Absorption_Laws_Corollary() {
  assert(
    ∀S,T: Set ⇒ 
    (S ∪ (S ∩ T) = S ∩ (S ∪ T))
  )
}

proof Absorption_Laws_Corollary() {
  setVar(S,T: Set) →
  
  assert(S ∪ (S ∩ T) = (S ∪ S) ∩ (S ∪ T)) →
  
  lemma Distribution_Law() {
    assert(
      ∀A,B,C: Set ⇒
      (A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C))
    )
  } →
  
  assert((S ∪ S) ∩ (S ∪ T) = S ∩ (S ∪ T)) →
  
  lemma Set_Union_Idempotent() {
    assert(
      ∀A: Set ⇒ (A ∪ A = A)
    )
  } →
  
  apply(Set_Union_Idempotent()) →
  assert(S ∪ (S ∩ T) = S ∩ (S ∪ T))
}