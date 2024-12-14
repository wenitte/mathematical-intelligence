theorem Conditional_Left_Distributive_Conjunction() {
  assert(
    ⊢ ((p ⟹ (q ∧ r)) ⟺ ((p ⟹ q) ∧ (p ⟹ r)))
  )
} ↔

proof Conditional_Left_Distributive_Conjunction() {
  setVar(p, q, r: 𝔹) →
  lemma Truth_Table() {
    assert(
      [p=F, q=F, r=F] → [(p ⟹ (q ∧ r)) ⟺ ((p ⟹ q) ∧ (p ⟹ r))] = T ∧
      [p=F, q=F, r=T] → [(p ⟹ (q ∧ r)) ⟺ ((p ⟹ q) ∧ (p ⟹ r))] = T ∧
      [p=F, q=T, r=F] → [(p ⟹ (q ∧ r)) ⟺ ((p ⟹ q) ∧ (p ⟹ r))] = T ∧
      [p=F, q=T, r=T] → [(p ⟹ (q ∧ r)) ⟺ ((p ⟹ q) ∧ (p ⟹ r))] = T ∧
      [p=T, q=F, r=F] → [(p ⟹ (q ∧ r)) ⟺ ((p ⟹ q) ∧ (p ⟹ r))] = T ∧
      [p=T, q=F, r=T] → [(p ⟹ (q ∧ r)) ⟺ ((p ⟹ q) ∧ (p ⟹ r))] = T ∧
      [p=T, q=T, r=F] → [(p ⟹ (q ∧ r)) ⟺ ((p ⟹ q) ∧ (p ⟹ r))] = T ∧
      [p=T, q=T, r=T] → [(p ⟹ (q ∧ r)) ⟺ ((p ⟹ q) ∧ (p ⟹ r))] = T
    )
  } →
  apply(Truth_Table()) →
  assert(
    ∀ assignments ∈ 𝔹³ → [(p ⟹ (q ∧ r)) ⟺ ((p ⟹ q) ∧ (p ⟹ r))] = T
  )
}