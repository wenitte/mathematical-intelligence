theorem Cardinality_Of_Endorelations() {
  assert(
    ∀S: Set ∧ S.isFinite() ∧
    ∃n ∈ ℕ: |S| = n ∧
    ∃ℜ: Set = {R | R.isEndorelation(S)} ⇒
    |ℜ| = 2^(n²)
  )
} ↔

proof Cardinality_Of_Endorelations() {
  setVar(S: Set, n: ℕ, ℜ: Set) →
  assert(Endorelation(S) ↔ Relation(S, S)) →
  
  lemma Relation_Cardinality() {
    assert(
      ∀A,B: Set ⇒
      |Relations(A,B)| = 2^(|A| × |B|)
    )
  } →
  
  apply(Relation_Cardinality()) →
  substitute(A = S, B = S) →
  assert(|ℜ| = 2^(|S| × |S|)) →
  substitute(|S| = n) →
  assert(|ℜ| = 2^(n × n)) →
  assert(|ℜ| = 2^(n²))
}