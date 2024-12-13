theorem Cardinality_Even_Odd_Permutations() {
  assume(n ∈ ℕ ∧ n > 0) →
  setVar(S: Set, |S| = n) →
  setVar(Sn: SymmetricGroup(S)) →
  setVar(Re: {σ ∈ Sn | σ is even}) →
  setVar(Ro: {σ ∈ Sn | σ is odd}) →
  assert(
    |Re| = n!/2 ∧ |Ro| = n!/2
  )
} ↔

proof Cardinality_Even_Odd_Permutations() {
  apply(Order_Symmetric_Group) →
  assert(|Sn| = n!) →
  
  assert(|Re| + |Ro| = |Sn|) →
  assert(|Re| + |Ro| = n!) →
  
  lemma Even_Odd_Equivalence() {
    assert(|Re| = |Ro|)
  } →
  
  apply(Even_Odd_Equivalence()) →
  
  let(x = |Re|) →
  assert(x + x = n!) →
  assert(2x = n!) →
  assert(x = n!/2) →
  
  assert(|Re| = n!/2) ∧
  assert(|Ro| = n!/2)
}