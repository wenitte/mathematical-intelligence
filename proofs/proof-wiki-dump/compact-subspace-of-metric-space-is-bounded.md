theorem CompactSubspaceBounded() {
  assert(
    ∀M(M = (A,d) ∧ isMetricSpace(M)) ∧
    ∀C(C ⊆ M) →
    (isCompact(C) → isBounded(C))
  )
} ↔

proof CompactSubspaceBounded() {
  setVar(a ∈ M) →
  setVar(n ∈ ℕ>0) →
  define(Bn(a) := {x ∈ M : d(x,a) < n}) →
  assert(
    C ⊆ ⋃n∈ℕ Bn(a)
  ) →
  lemma CoverExists() {
    assert(
      ∀x ∈ C → ∃n ∈ ℕ(d(x,a) < n)
    )
  } →
  assert(
    {Bn(a) : n ∈ ℕ} isOpenCover(C)
  ) →
  apply(CompactHasFiniteSubcover(C)) →
  assert(
    ∃{n1,...,nr} ⊆ ℕ(
      C ⊆ Bn₁(a) ∪ ... ∪ Bnᵣ(a)
    )
  ) →
  setVar(N := max{n1,...,nr}) →
  assert(
    C ⊆ ⋃i=1ʳ Bnᵢ(a) ⊆ BN(a)
  ) →
  apply(BoundedDefinition(C,a,N)) →
  conclude(isBounded(C))
}