theorem ArensFortSigmaCompact() {
  assert(
    ∀T(T = (S, τ) ∧ IsArensfortSpace(T) → IsSigmaCompact(T))
  )
} ↔

proof ArensFortSigmaCompact() {
  setVar(T: TopologicalSpace) →
  setVar(S: Set) →
  setVar(τ: Topology) →
  setVar(τ_d: DiscreteTopology) →
  setVar(I_S: Function) →

  apply(ArensfortSpaceIsCountable()) →
  assert(IsCountablyInfinite(S)) →

  define(τ_d := DiscreteTopology(S)) →
  define(I_S := IdentityFunction(S, τ_d, τ)) →

  lemma ContinuousIdentity() {
    apply(MappingFromDiscreteSpaceIsContinuous()) →
    assert(IsContinuous(I_S))
  } →

  lemma SurjectiveIdentity() {
    apply(IdentityMappingIsSurjection()) →
    assert(IsSurjective(I_S))
  } →

  assert(IsSigmaCompact((S, τ_d))) by CountableDiscreteSpaceIsSigmaCompact() →
  assert(IsSigmaCompact((S, τ))) by SigmaCompactnessPreservedUnderContinuousSurjection(
    IsSigmaCompact((S, τ_d)) ∧
    IsContinuous(I_S) ∧
    IsSurjective(I_S)
  ) →
  
  assert(IsSigmaCompact(T))
}