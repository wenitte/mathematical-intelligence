theorem Cardinality_Master_Code() {
  assert(
    ∀n,p ∈ ℕ: V(n,p) = MasterCode(n,p) ⇒ |V(n,p)| = p^n
  )
} ↔

proof Cardinality_Master_Code() {
  setVar(n,p: ℕ) →
  setVar(V: MasterCode(n,p)) →
  
  lemma Sequence_Terms() {
    assert(
      ∀i ∈ [1..n]: |PossibleValues(V[i])| = p
    )
  } →
  
  lemma Independent_Terms() {
    assert(
      ∀i,j ∈ [1..n], i ≠ j ⇒ Choice(V[i]) ⊥ Choice(V[j])
    )
  } →
  
  apply(Multiplication_Principle) →
  assert(
    |V(n,p)| = product(i=1 to n)(|PossibleValues(V[i])|)
  ) →
  assert(
    |V(n,p)| = product(i=1 to n)(p)
  ) →
  assert(
    |V(n,p)| = p^n
  )
}