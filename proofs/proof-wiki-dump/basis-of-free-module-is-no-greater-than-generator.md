theorem BasisNotGreaterThanGenerator() {
  assert(
    ∀R: CommutativeRing ∧ ∀M: RModule ∧ ∀B,S: Set ∧
    isUnityRing(R) ∧ 
    isFreeModule(M, R) ∧
    isBasis(B, M) ∧
    isGeneratingSet(S, M) ⇒
    ∃f: Function(B → S) ∧ isInjective(f)
  )
} ↔

proof BasisNotGreaterThanGenerator() {
  setVar(R: CommutativeRing, M: RModule, B,S: Set) →
  
  lemma SurjectiveHomomorphism() {
    assert(∃φ: Homomorphism(R^(S) → M) ∧ isSurjective(φ)) →
    assert(∃ψ: Isomorphism(R^(B) → M)) →
    let(f = ψ^(-1) ∘ φ: R^(S) → R^(B)) →
    assert(isSurjective(f))
  } →

  lemma KrullReduction() {
    assert(∃M: MaximalIdeal(R)) →
    let(k = R/M: Field) →
    let(π: R → k) →
    assert(∃f̄: Homomorphism(k^(S) → k^(B))) →
    assert(π^B ∘ f = f̄ ∘ π^S) →
    assert(isSurjective(f̄))
  } →

  lemma CardinalityChain() {
    let(C: CanonicalBasis(k^(S))) →
    let(D: CanonicalBasis(k^(B))) →
    assert(|B| = |D|) →
    assert(|D| ≤ |f̄(C)|) →
    assert(|f̄(C)| ≤ |C|) →
    assert(|C| = |S|)
  } →

  apply(SurjectiveHomomorphism()) →
  apply(KrullReduction()) →
  apply(CardinalityChain()) →
  assert(|B| ≤ |S|) →
  assert(∃f: Function(B → S) ∧ isInjective(f))
}