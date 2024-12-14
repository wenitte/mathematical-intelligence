theorem Closure_is_Closed() {
  assert(
    ∀S(OrderedSet(S)) ∧
    ∀cl: S → S(ClosureOperator(cl)) ∧
    ∀x ∈ S ⇒
    IsClosed(cl(x), cl)
  )
} ↔

proof Closure_is_Closed() {
  setVar(S: OrderedSet) →
  setVar(cl: S → S, ClosureOperator) →
  setVar(x: S) →
  
  lemma Idempotent_Property() {
    assert(
      ClosureOperator(cl) ⇒
      Idempotent(cl)
    )
  } →
  
  apply(Idempotent_Property()) →
  assert(cl(cl(x)) = cl(x)) →
  
  lemma Closed_Definition() {
    assert(
      ∀y ∈ S(
        IsClosed(y, cl) ↔ cl(y) = y
      )
    )
  } →
  
  apply(Closed_Definition()) →
  assert(IsClosed(cl(x), cl))
}

theorem Closure_PowerSet_Version() {
  assert(
    ∀S(Set(S)) ∧
    ∀cl: 𝒫(S) → 𝒫(S)(ClosureOperator(cl)) ∧
    ∀T ⊆ S ⇒
    IsClosed(cl(T), cl)
  )
}