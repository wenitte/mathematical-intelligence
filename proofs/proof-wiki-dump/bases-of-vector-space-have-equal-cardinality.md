theorem Bases_Equal_Cardinality() {
  let(R: DivisionRing) ∧
  let(V: VectorSpace(R)) ∧
  let(X,Y: Basis(V)) →
  assert(X ≅ Y)  // X and Y have same cardinality
}

proof Bases_Equal_Cardinality() {
  // First establish injection X → Y
  lemma Unique_Linear_Combination() {
    ∀x ∈ X →
    ∃!Cₓ ⊆ (R × Y) : (
      x = ∑{(r,v)∈Cₓ}(r·v) ∧
      ∀(r,v) ∈ Cₓ → r ≠ 0_R
    )
  } →

  define(Φ: X → ℘(Y)) {
    Φ(x) := img(Cₓ)
  } →

  lemma Marriage_Condition() {
    ∀F ⊆ X : isFinite(F) →
    |F| ≤ |⋃{x∈F}Φ(x)| ∧
    assert(isLinearIndependent(F)) ∧  // X is basis
    assert(F ⊆ span(⋃{x∈F}Φ(x))) ∧
    assert(isFinite(⋃{x∈F}Φ(x)))
  } →

  apply(Halls_Marriage_Theorem) →
  assert(∃f: X ↪ Y) →  // Injection exists from X to Y

  // Symmetric argument for Y → X
  lemma Reverse_Injection() {
    apply(Marriage_Condition, swap(X,Y)) →
    assert(∃g: Y ↪ X)
  } →

  apply(Cantor_Bernstein_Schroeder) →
  assert(X ≅ Y)
}

note Dependencies() {
  requires(Boolean_Prime_Ideal_Theorem) ∧
  requires(Halls_Marriage_Theorem)
}