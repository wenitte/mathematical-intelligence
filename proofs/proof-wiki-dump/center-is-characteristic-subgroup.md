theorem Center_Is_Characteristic() {
  assert(
    ∀G[Group] → (Z(G) isCharacteristic G)
  )
} ↔

proof Center_Is_Characteristic() {
  setGroup(G) →
  lemma Auth_Exists() {
    assert(∃φ[Automorphism(G)])
  } →
  
  let(φ: Automorphism(G)) →
  let(x ∈ Z(G)) →
  let(y ∈ G) →
  
  chain_eq(φ(x)y) {
    = φ(x)φ(φ⁻¹(y))    [by bijection_property(φ)] →
    = φ(x·φ⁻¹(y))      [by homomorphism_def(φ)] →
    = φ(φ⁻¹(y)·x)      [by center_def(Z(G))] →
    = φ(φ⁻¹(y))·φ(x)   [by homomorphism_def(φ)] →
    = y·φ(x)           [by bijection_property(φ)]
  } →

  assert(φ(x) ∈ Z(G)) →
  assert(φ[Z(G)] ⊆ Z(G)) →
  
  lemma Inverse_Auth() {
    assert(φ⁻¹[Z(G)] ⊆ Z(G))
  } →
  
  chain_subset() {
    Z(G) = φ[φ⁻¹[Z(G)]]   [by bijection_property(φ)] →
    ⊆ φ[Z(G)]             [by Inverse_Auth()]
  } →
  
  assert(Z(G) = φ[Z(G)]) →
  assert(Z(G) isCharacteristic G)
}