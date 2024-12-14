theorem NonCancellableMonoidCongruence() {
  assert(
    ∀M: Monoid ∧ ¬Cancellable(M) ∧
    (∀R: CongruenceRelation(M) → 
      (¬Trivial(R) → ∃N: NormalSubgroup(M) ∧ InducedBy(R,N))) →
    ¬(IsGroup(M))
  )
} ↔

proof NonCancellableMonoidCongruence() {
  let Z3 = MultiplicativeMonoidMod3() →
  assert(HasCayleyTable(Z3, [
    [0,0,0],
    [0,1,2],
    [0,2,1]
  ])) →
  
  lemma NotCancellable() {
    assert(0 ×₃ 1 = 0) ∧
    assert(0 ×₃ 2 = 0) ∧
    assert(¬Cancellable(Z3))
  } →

  lemma HasIdentity() {
    assert(∃e ∈ Z3: e = 1 ∧ Identity(e))
  } →

  lemma CongruenceRelations() {
    let R1 = {{0},{1},{2}} ∧ isDiagonal(R1) →
    let R2 = {{0,1,2}} ∧ isTrivial(R2) →
    let R3 = {{0,1},{2}} ∧ ¬isCongruence(R3) →
    let R4 = {{0,2},{1}} ∧ ¬isCongruence(R4) →
    let R5 = {{0},{1,2}} ∧ InducedByNormalSubgroup(R5,{0})
  } →

  apply(NotCancellable()) →
  apply(GroupIsCancellableMonoid()) →
  assert(¬IsGroup(Z3)) ∧
  assert(SatisfiesTheorem(Z3))
}