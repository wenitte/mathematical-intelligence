theorem Biconditional_Disjunction_Implies_Conjunction() {
  assert(
    ∀p,q ∈ 𝔹 ⇒ (p ⟺ q) ⟺ ((p ∨ q) → (p ∧ q))
  )
}

proof Biconditional_Disjunction_Implies_Conjunction() {
  setVar(p: 𝔹, q: 𝔹) →
  
  lemma Truth_Table() {
    assert(
      TruthTable[
        (F,F,F,T,F,F,F),
        (F,T,T,F,F,F,T),
        (T,F,F,F,T,F,F),
        (T,T,T,T,T,T,T)
      ]
    )
  } →
  
  lemma Forward_Implication() {
    assert((p ⟺ q) → ((p ∨ q) → (p ∧ q)))
  } →
  
  lemma Reverse_Implication() {
    assert(((p ∨ q) → (p ∧ q)) → (p ⟺ q))
  } →
  
  apply(Truth_Table()) →
  apply(Forward_Implication()) →
  apply(Reverse_Implication()) →
  
  assert(
    (p ⟺ q) ⟺ ((p ∨ q) → (p ∧ q))
  )
}