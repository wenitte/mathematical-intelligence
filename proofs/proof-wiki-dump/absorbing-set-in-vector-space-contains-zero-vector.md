theorem AbsorbingSetContainsZero() {
  let(GF: {ℝ, ℂ}) →
  let(X: VectorSpace(GF)) →
  let(A: SubsetOf(X)) →
  assert(isAbsorbing(A, X)) →
  assert(
    𝟎_X ∈ A
  )
} ↔

proof AbsorbingSetContainsZero() {
  apply(defAbsorbingSet) →
  assert(∃t ∈ ℝ_{>0}: 𝟎_X ∈ tA) →
  lemma ZeroScaling() {
    assert(∀s ∈ ℝ_{>0}, ∀v ∈ X: sv = 𝟎_X ↔ v = 𝟎_X)
  } →
  apply(ZeroScaling()) →
  assert(𝟎_X ∈ A)
}