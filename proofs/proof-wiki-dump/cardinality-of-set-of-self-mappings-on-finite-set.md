theorem Cardinality_Self_Mappings() {
  assert(
    ∀S: Set ∧ isFinite(S) ∧
    let n = |S| →
    |S^S| = n^n
  )
} ↔

proof Cardinality_Self_Mappings() {
  setVar(S: Set) →
  assume(isFinite(S)) →
  let n = |S| →
  
  lemma Cardinality_All_Mappings() {
    assert(
      ∀A,B: Set ∧ isFinite(A) ∧ isFinite(B) →
      |B^A| = |B|^|A|
    )
  } →
  
  apply(Cardinality_All_Mappings(), A=S, B=S) →
  assert(|S^S| = |S|^|S|) →
  substitute(|S| = n) →
  assert(|S^S| = n^n)
}