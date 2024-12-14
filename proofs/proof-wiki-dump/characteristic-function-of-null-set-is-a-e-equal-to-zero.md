theorem CharacteristicNull() {
  given(
    struct(X, Σ, μ) ∈ MeasureSpace,
    N ⊆ X: μ(N) = 0
  )
  assert(
    χ_N = 0 μ-a.e.
  )
} ↔

theorem CharacteristicComplement() {
  given(
    struct(X, Σ, μ) ∈ MeasureSpace,
    N ⊆ X: μ(N) = 0
  )
  assert(
    χ_(X∖N) = 1 μ-a.e.
  )
} ↔

proof CharacteristicNull() {
  setVar(x ∈ X) →
  assume(χ_N(x) ≠ 0) →
  assert(χ_N(x) ∈ {0,1}) →
  conclude(χ_N(x) = 1) →
  lemma CharFuncDef() {
    assert(
      χ_N(x) = 1 ↔ x ∈ N
    )
  } →
  apply(CharFuncDef()) →
  conclude(x ∈ N) →
  construct(
    E = {x ∈ X: χ_N(x) ≠ 0}
  ) →
  assert(E ⊆ N) →
  given(μ(N) = 0) →
  conclude(μ(E) = 0) →
  conclude(χ_N = 0 μ-a.e.)
}