theorem Biconditional_Associativity() {
  assert(
    ∀p,q,r ∈ Bool ⇒ (p ↔ (q ↔ r)) ≡ ((p ↔ q) ↔ r)
  )
} ↔

proof Biconditional_Associativity() {
  setVar(p,q,r: Bool) →
  
  lemma Truth_Table_Cases() {
    assert(
      [(F,F,F) → (F ↔ (F ↔ F)) ≡ ((F ↔ F) ↔ F)] ∧
      [(F,F,T) → (F ↔ (F ↔ T)) ≡ ((F ↔ F) ↔ T)] ∧
      [(F,T,F) → (F ↔ (T ↔ F)) ≡ ((F ↔ T) ↔ F)] ∧
      [(F,T,T) → (F ↔ (T ↔ T)) ≡ ((F ↔ T) ↔ T)] ∧
      [(T,F,F) → (T ↔ (F ↔ F)) ≡ ((T ↔ F) ↔ F)] ∧
      [(T,F,T) → (T ↔ (F ↔ T)) ≡ ((T ↔ F) ↔ T)] ∧
      [(T,T,F) → (T ↔ (T ↔ F)) ≡ ((T ↔ T) ↔ F)] ∧
      [(T,T,T) → (T ↔ (T ↔ T)) ≡ ((T ↔ T) ↔ T)]
    )
  } →
  
  apply(Truth_Table_Cases()) →
  
  assert(
    ∀valuations[p,q,r] → 
    eval(p ↔ (q ↔ r)) ≡ eval((p ↔ q) ↔ r)
  ) →
  
  conclude(
    (p ↔ (q ↔ r)) ≡ ((p ↔ q) ↔ r)
  )
}