theorem Closure_is_Closed() {
  let(S: Set) ∧
  let(𝒫(S): PowerSet(S)) ∧
  let(cl: 𝒫(S) → 𝒫(S)) ∧ 
  let(T ⊆ S) →
  assert(
    cl is_closure_operator ∧
    cl(T) is_closed_wrt cl
  )
} ↔

proof Closure_is_Closed() {
  lemma Closure_Idempotent() {
    assert(
      cl is_closure_operator →
      ∀X ⊆ S: cl(cl(X)) = cl(X)
    )
  } →
  apply(Closure_Idempotent()) →
  setVar(X := T) →
  assert(cl(cl(T)) = cl(T)) →
  assert(
    cl(cl(T)) = cl(T) →
    cl(T) is_closed_wrt cl
  ) →
  conclude(cl(T) is_closed_wrt cl)
}