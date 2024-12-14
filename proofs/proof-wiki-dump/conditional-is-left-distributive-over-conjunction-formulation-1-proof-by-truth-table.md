theorem Conditional_Left_Distributive_Conjunction() {
  assert(
    ∀p,q,r ∈ Bool → 
    (p → (q ∧ r)) ↔ ((p → q) ∧ (p → r))
  )
} ↔

proof Conditional_Left_Distributive_Conjunction() {
  setVar(p,q,r: Bool) →
  lemma Truth_Table() {
    assert(
      evalTruthTable([
        (F,F,F) → eval(p → (q ∧ r)) = eval((p → q) ∧ (p → r)),
        (F,F,T) → eval(p → (q ∧ r)) = eval((p → q) ∧ (p → r)),
        (F,T,F) → eval(p → (q ∧ r)) = eval((p → q) ∧ (p → r)),
        (F,T,T) → eval(p → (q ∧ r)) = eval((p → q) ∧ (p → r)),
        (T,F,F) → eval(p → (q ∧ r)) = eval((p → q) ∧ (p → r)),
        (T,F,T) → eval(p → (q ∧ r)) = eval((p → q) ∧ (p → r)),
        (T,T,F) → eval(p → (q ∧ r)) = eval((p → q) ∧ (p → r)),
        (T,T,T) → eval(p → (q ∧ r)) = eval((p → q) ∧ (p → r))
      ])
    )
  } →
  apply(Truth_Table()) →
  assert(∀p,q,r ∈ Bool → (p → (q ∧ r)) ↔ ((p → q) ∧ (p → r)))
}