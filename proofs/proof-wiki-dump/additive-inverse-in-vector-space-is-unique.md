theorem UniqueAdditiveInverse() {
  assert(
    ∀V[VectorSpace(F)] ∧
    ∀v ∈ V ⇒ 
    ∃!(-v) ∈ V: v + (-v) = 0
  )
} ↔

proof UniqueAdditiveInverse() {
  // Existence part
  lemma Existence() {
    apply(VectorSpaceAxioms()) →
    assert(∀v ∈ V ⇒ ∃(-v) ∈ V: v + (-v) = 0)
  } →

  // Uniqueness part
  lemma Uniqueness() {
    setVar(v: V) →
    setVar(x, y: V) →
    assume(v + x = 0 ∧ v + y = 0) →
    assert(v + x = v + y) →
    apply(LeftCancellable(v)) →
    assert(x = y)
  } →

  // Combine both parts
  apply(Existence()) ∧
  apply(Uniqueness()) →
  assert(∃!(-v) ∈ V: v + (-v) = 0)
}

require {
  import(VectorSpaceAxioms)
  import(LeftCancellable)
}