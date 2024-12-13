theorem AlgebraDefinedByRingHomomorphismIsUnitary() {
  let(R: CommutativeRing) ∧
  let(S: RingWithUnity) ∧
  let(f: R → S, RingHomomorphism) ∧
  let(S_R: Algebra, DefinedBy(f)) →
  assert(
    IsUnitaryAlgebra(S_R)
  )
} ↔

proof AlgebraDefinedByRingHomomorphismIsUnitary() {
  assert(
    Multiplication(S_R) = RingProduct(S)
  ) →
  lemma RingWithUnityImpliesUnitaryAlgebra() {
    assert(
      HasUnity(S) → IsUnitaryAlgebra(S_R)
    )
  } →
  apply(RingWithUnityImpliesUnitaryAlgebra()) →
  assert(IsUnitaryAlgebra(S_R))
}