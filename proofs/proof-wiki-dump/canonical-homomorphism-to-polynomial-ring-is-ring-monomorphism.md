theorem CanonicalHomomorphismMonomorphism() {
  let(R: CommutativeRingWithUnity) →
  let(ι: R → R[X]) →
  assert(
    ∀R ⇒ ι is_a RingMonomorphism
  )
} ↔

proof CanonicalHomomorphismMonomorphism() {
  let(id: R → R) →
  assert(id = IdentityMapping) →
  let(1: Unity(R)) →
  
  lemma IdIsRingHomomorphism() {
    assert(id is_a RingHomomorphism)
  } →
  apply(IdentityMappingIsRingAutomorphism()) →
  
  lemma ExistsH() {
    let(h: R[X] → R) →
    assert(
      ∃h: (h ∘ ι = id) ∧ 
      (h is_a RingHomomorphism)
    )
  } →
  apply(UniversalPropertyOfPolynomialRing()) →
  
  lemma IdIsInjective() {
    assert(id is_a Injection)
  } →
  apply(IdentityMappingIsInjection()) →
  
  lemma IotaIsInjective() {
    assert(h ∘ ι = id) ∧
    assert(id is_a Injection) →
    assert(ι is_a Injection)
  } →
  apply(InjectionIfCompositeIsInjection()) →
  
  conclude(
    (ι is_a RingHomomorphism) ∧
    (ι is_a Injection) →
    (ι is_a RingMonomorphism)
  )
}