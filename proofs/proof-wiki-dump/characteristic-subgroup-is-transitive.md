theorem Characteristic_Subgroup_Transitive() {
  assert(
    ∀G[Group] ∧ ∀H[Subgroup] ∧ ∀K[Subgroup] ⇒
    (isCharacteristic(H,G) ∧ isCharacteristic(K,H)) →
    isCharacteristic(K,G)
  )
} ↔

proof Characteristic_Subgroup_Transitive() {
  setVar(G: Group) →
  setVar(H: Subgroup(G)) →
  setVar(K: Subgroup(H)) →
  assume(isCharacteristic(H,G)) →
  assume(isCharacteristic(K,H)) →
  
  setVar(φ: Automorphism(G)) →
  
  lemma CharacteristicPreservation() {
    assert(isCharacteristic(H,G) → φ[H] = H)
  } →
  
  lemma RestrictionIsAutomorphism() {
    assert(φ[H] = H → φ|H ∈ Automorphism(H))
  } →
  
  apply(CharacteristicPreservation()) →
  apply(RestrictionIsAutomorphism()) →
  
  lemma KPreservation() {
    assert(
      isCharacteristic(K,H) ∧ φ|H ∈ Automorphism(H) →
      (φ|H)[K] = K
    )
  } →
  
  lemma RestrictionEquivalence() {
    assert((φ|H)[K] = K ↔ φ[K] = K)
  } →
  
  apply(KPreservation()) →
  apply(RestrictionEquivalence()) →
  
  conclude(isCharacteristic(K,G))
}