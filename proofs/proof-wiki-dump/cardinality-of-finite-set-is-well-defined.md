theorem Finite_Set_Cardinality_Uniqueness() {
  assert(
    ∀S: Set, (isFinite(S) ⇒ 
      ∃!n ∈ ℕ: (S ∼ ℕ_n)
    )
  where
    ℕ_n := {x ∈ ℕ | 0 ≤ x < n}
  )
} ↔

proof Finite_Set_Cardinality_Uniqueness() {
  setVar(S: Set) →
  assume(isFinite(S)) →
  
  lemma Existence() {
    apply(DefinitionFiniteSet) →
    assert(∃n ∈ ℕ: S ∼ ℕ_n)
  } →
  
  lemma Uniqueness() {
    setVar(n,m: ℕ) →
    assume(S ∼ ℕ_n ∧ S ∼ ℕ_m) →
    apply(SetEquivalenceTransitive) →
    assert(ℕ_n ∼ ℕ_m) →
    apply(EqualityOfNaturalNumbers) →
    assert(n = m)
  } →
  
  apply(Existence()) →
  apply(Uniqueness()) →
  assert(∃!n ∈ ℕ: S ∼ ℕ_n)
}