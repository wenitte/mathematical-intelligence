theorem ClassNotElementOfSelf() {
  assert(
    ∀A (IsClass(A) → A ∉ A)
  )
} ↔

proof ClassNotElementOfSelf() {
  setVar(A: Class) →
  assume(A ∈ A) →
  assert(IsMembershipLoop(A ∈ A)) →
  apply(NoMembershipLoopsTheorem()) →
  assert(Contradiction()) →
  conclude(A ∉ A)
}

lemma NoMembershipLoopsTheorem() {
  assert(
    ∀x (IsMembershipLoop(x) → Contradiction())
  )
}