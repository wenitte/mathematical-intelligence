theorem QuotientSetSurjection() {
  assert(
    ∀S,T: Set ∧ 
    ∀R: EquivalenceRelation(S) ∧
    ∀f: Mapping(S,T) ∧
    ∀q_R: QuotientMapping(S, S/R) ∧
    ∀φ: Mapping(S/R, T) ∧
    (φ ∘ q_R = f) ∧ isWellDefined(φ) ⇒
    (isSurjection(φ) ↔ isSurjection(f))
  )
} ↔

proof QuotientSetSurjection() {
  setVar(S,T: Set) →
  setVar(R: EquivalenceRelation(S)) →
  setVar(f: Mapping(S,T)) →
  setVar(q_R: QuotientMapping(S, S/R)) →
  setVar(φ: Mapping(S/R, T)) →
  
  assert(φ ∘ q_R = f) →
  assert(isWellDefined(φ)) →
  
  lemma QuotientMappingSurjective() {
    assert(isSurjection(q_R))
  } →

  proof Forward() {
    assume(isSurjection(φ)) →
    apply(CompositeOfSurjectionsIsSurjection(φ, q_R)) →
    assert(isSurjection(φ ∘ q_R)) →
    assert(isSurjection(f))
  } →

  proof Backward() {
    assume(isSurjection(f)) →
    assert(f = φ ∘ q_R) →
    apply(SurjectionIfCompositeIsSurjection(φ, q_R, f)) →
    assert(isSurjection(φ))
  } →

  conclude(isSurjection(φ) ↔ isSurjection(f))
}