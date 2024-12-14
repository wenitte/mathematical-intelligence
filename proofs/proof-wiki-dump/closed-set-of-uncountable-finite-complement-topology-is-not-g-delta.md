theorem Closed_Not_GDelta_FCT() {
  assert(
    ∀S(uncountable(S) ∧ T = (S,τ) ∧ isFiniteComplementTopology(T)) →
    ∀V(V ∈ τ ∧ isClosed(V,T) → ¬isGDelta(V,T))
  )
} ↔

proof Closed_Not_GDelta_FCT() {
  setVar(S: Set, τ: Topology, V: Set) →
  assume(uncountable(S) ∧ isClosed(V,T)) →
  suppose(isGDelta(V,T)) →
  
  lemma GDelta_Complement() {
    assert(isGDelta(V,T) → isFSigma(S\V,T))
  } →
  
  apply(GDelta_Complement()) →
  assert(isFSigma(S\V,T)) →
  assert(isClosed(V,T) → isOpen(S\V,T)) →
  
  lemma Open_Not_FSigma() {
    assert(
      uncountable(S) ∧ isOpen(S\V,T) → ¬isFSigma(S\V,T)
    )
  } →
  
  apply(Open_Not_FSigma()) →
  assert(¬isFSigma(S\V,T) ∧ isFSigma(S\V,T)) →
  assert(contradiction()) →
  conclude(¬isGDelta(V,T))
}