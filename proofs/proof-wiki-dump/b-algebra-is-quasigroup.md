theorem BAlgebra_Is_Quasigroup() {
  assert(
    ∀X ∀∘ [isBalgebra(X,∘)] → [isQuasigroup(X,∘)]
  )
} ↔

proof BAlgebra_Is_Quasigroup() {
  setDef(Quasigroup, "∀x∈X: λx and ρx are permutations on X") →
  setDef(Permutation, "bijective mapping") →
  
  lemma Regular_Representations() {
    assert(
      [isMagma(X,∘)] →
      ∀x∈X: [codomain(λx)=X ∧ codomain(ρx)=X]
    )
  } →
  
  lemma Cancellability() {
    assert(
      [isBalgebra(X,∘)] →
      [isLeftCancellable(X,∘) ∧ isRightCancellable(X,∘)]
    )
  } →
  
  lemma Cancellable_Implies_Injective() {
    assert(
      ∀x∈X: [isCancellable(x)] →
      [isInjective(λx) ∧ isInjective(ρx)]
    )
  } →
  
  lemma BAlgebra_Regular_Surjective() {
    assert(
      [isBalgebra(X,∘)] →
      ∀x∈X: [isSurjective(λx) ∧ isSurjective(ρx)]
    )
  } →
  
  apply(Cancellability()) →
  apply(Cancellable_Implies_Injective()) →
  apply(BAlgebra_Regular_Surjective()) →
  
  assert(
    ∀x∈X: [isInjective(λx) ∧ isSurjective(λx) ∧
           isInjective(ρx) ∧ isSurjective(ρx)]
  ) →
  
  assert(
    ∀x∈X: [isBijective(λx) ∧ isBijective(ρx)]
  ) →
  
  conclude(
    [isQuasigroup(X,∘)]
  )
}