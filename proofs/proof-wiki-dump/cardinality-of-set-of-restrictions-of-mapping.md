theorem Cardinality_Of_Restrictions() {
  assert(
    ∀S,T: Set ∧
    ∀f: S → T ∧
    |S| = n ∧
    F = {g | g is restriction of f to subset of S} →
    |F| = 2^n
  )
} ↔

proof Cardinality_Of_Restrictions() {
  setVar(A: Subset(S)) →
  setVar(g: A → T) →
  assert(
    g is restriction of f to A ↔
    ∀x ∈ A: g(x) = f(x)
  ) →
  
  lemma Unique_Restriction() {
    assert(
      ∀A ⊆ S →
      ∃!g: A → T where g is restriction of f
    )
  } →
  
  lemma Bijection_To_PowerSet() {
    assert(
      F ↔ P(S) where
      P(S) = {A | A ⊆ S}
    )
  } →
  
  apply(Unique_Restriction()) →
  apply(Bijection_To_PowerSet()) →
  apply(Cardinality_of_Power_Set_of_Finite_Set) →
  
  assert(
    |F| = |P(S)| ∧
    |P(S)| = 2^n →
    |F| = 2^n
  )
}