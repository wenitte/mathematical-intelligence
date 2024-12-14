theorem Compact_Idempotent_Finite_Rank() {
  let(H: HilbertSpace) ∧
  let(T: B₀(H)) ∧
  assert(isCompact(T)) ∧
  assert(isIdempotent(T)) →
  assert(T ∈ B₀₀(H))
} ↔

proof Compact_Idempotent_Finite_Rank() {
  let({yₙ}: Sequence(Range(T))) ∧
  assert(isBounded({yₙ})) →
  
  lemma Idempotent_Property() {
    assert(∀n ∈ ℕ: T(yₙ) = yₙ)
  } →
  
  apply(Idempotent_Property()) →
  assert(isCompact(T)) →
  assert(∃{yₙₖ} ⊆ {T(yₙ)}: isConvergent({yₙₖ})) →
  assert({yₙ} = {T(yₙ)}) →
  assert(Range(T).hasBolzanoWeierstrass) →
  
  lemma Finite_Dim_Criterion() {
    assert(
      X.hasUnitSphereCompact ↔ dim(X) < ∞
    )
  } →
  
  apply(Finite_Dim_Criterion()) →
  assert(dim(Range(T)) < ∞) →
  assert(T ∈ B₀₀(H))
}