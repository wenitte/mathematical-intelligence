theorem Biconditional_Introduction() {
  assert(
    (p → q) ∧ (q → p) ⊢ (p ↔ q)
  )
} ↔

proof Biconditional_Introduction() {
  lemma Truth_Table() {
    assert(
      ∀(p,q) ∈ 𝔹² → 
      ((p → q) ∧ (q → p)) = T ↔ (p ↔ q) = T
    )
  } →
  
  def Truth_Values() {
    case1: (F,F) → ((T ∧ T) = T) ∧ (T = T)
    case2: (F,T) → ((T ∧ F) = F) ∧ (F = F)
    case3: (T,F) → ((F ∧ T) = F) ∧ (F = F)
    case4: (T,T) → ((T ∧ T) = T) ∧ (T = T)
  } →
  
  apply(Truth_Table()) →
  apply(Truth_Values()) →
  
  assert(
    ∀ valuations →
    ((p → q) ∧ (q → p)) ⊢ (p ↔ q)
  )
}