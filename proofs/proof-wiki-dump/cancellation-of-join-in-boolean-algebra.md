theorem Cancellation_Join_Boolean_Algebra() {
  assert(
    ∀S:BooleanAlgebra, ∀a,b,c ∈ S ⇒
    ((a ∨ c = b ∨ c) ∧ (a ∨ ¬c = b ∨ ¬c)) → (a = b)
  )
}

proof Cancellation_Join_Boolean_Algebra() {
  setVar(S: BooleanAlgebra) →
  setVar(a,b,c: S) →
  
  assert(a = a ∨ ⊥) by(BA1_3) →
  assert(a ∨ ⊥ = a ∨ (c ∧ ¬c)) by(BA1_4) →
  assert(a ∨ (c ∧ ¬c) = (a ∨ c) ∧ (a ∨ ¬c)) by(BA1_2) →
  
  assert((a ∨ c) ∧ (a ∨ ¬c) = (b ∨ c) ∧ (b ∨ ¬c)) by(hypothesis) →
  
  assert((b ∨ c) ∧ (b ∨ ¬c) = b ∨ (c ∧ ¬c)) by(BA1_2) →
  assert(b ∨ (c ∧ ¬c) = b ∨ ⊥) by(BA1_4) →
  assert(b ∨ ⊥ = b) by(BA1_3) →
  
  lemma Transitivity() {
    assert(
      (a = a ∨ ⊥) ∧ 
      (a ∨ ⊥ = a ∨ (c ∧ ¬c)) ∧ 
      (a ∨ (c ∧ ¬c) = (a ∨ c) ∧ (a ∨ ¬c)) ∧
      ((a ∨ c) ∧ (a ∨ ¬c) = (b ∨ c) ∧ (b ∨ ¬c)) ∧
      ((b ∨ c) ∧ (b ∨ ¬c) = b) →
      (a = b)
    )
  } →
  
  apply(Transitivity()) →
  assert(a = b)
}