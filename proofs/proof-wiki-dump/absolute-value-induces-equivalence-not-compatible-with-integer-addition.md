theorem AbsValue_Not_Congruence() {
  assert(
    let ℤ: SetOfIntegers ∧
    let R: Relation(ℤ × ℤ) ∧
    ∀x,y ∈ ℤ: (x,y) ∈ R ↔ |x| = |y| →
    ¬IsCongruenceRelation(R, IntegerAddition)
  )
} ↔

proof AbsValue_Not_Congruence() {
  apply(AbsValueInducesEquivalence()) →
  assert(IsEquivalenceRelation(R)) →
  
  lemma CounterExample() {
    assert(|-1| = |1|) →
    assert((-1,1) ∈ R) ∧
    assert(|2| = |2|) →
    assert((2,2) ∈ R) ∧
    
    setVar(sum1: ℤ = -1 + 2) →
    assert(sum1 = 1) ∧
    setVar(sum2: ℤ = 1 + 2) →
    assert(sum2 = 3) ∧
    
    assert(|1| ≠ |3|) →
    assert((1,3) ∉ R) →
    assert(¬PreservesOperation(R, IntegerAddition))
  } →
  
  apply(CounterExample()) →
  apply(ProofByCounterexample()) →
  assert(¬IsCongruenceRelation(R, IntegerAddition))
}