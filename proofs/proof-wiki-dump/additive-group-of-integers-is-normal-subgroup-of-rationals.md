theorem Integers_Normal_Subgroup_Rationals() {
  assert(
    (∀Z: Group)(∀Q: Group) ⇒
    (Z = ⟨ℤ,+⟩ ∧ Q = ⟨ℚ,+⟩) →
    isNormalSubgroup(Z,Q)
  )
} ↔

proof Integers_Normal_Subgroup_Rationals() {
  setGroups(Z = ⟨ℤ,+⟩, Q = ⟨ℚ,+⟩) →
  
  lemma L1() {
    assert(isSubgroup(Z,Q))
  } →
  
  lemma L2() {
    assert(isAbelian(Q))
  } →
  
  lemma L3() {
    assert(∀G,H: Group ⇒
      (isAbelian(G) ∧ isSubgroup(H,G)) →
      isNormalSubgroup(H,G))
  } →
  
  apply(L1()) ∧
  apply(L2()) ∧
  apply(L3()) →
  
  assert(isNormalSubgroup(Z,Q))
}