theorem Closure_Operator_Infimum() {
  let(L: OrderedSet(S, ⪯)) ∧
  let(c: Function(S → S)) ∧
  let(X: Subset(c[S])) ∧
  assert(
    IsClosureOperator(c, L) ∧
    HasInfimum(X)
    ⇒ inf(X) = c(inf(X))
  )
}

proof Closure_Operator_Infimum() {
  // First show c(inf(X)) is lower bound for X
  setVar(x: X) →
  assert(x ∈ c[S]) →
  assert(∃y ∈ S: x = c(y)) →
  
  lemma Idempotent() {
    assert(x = c(x))
  } →
  
  lemma InfIsLowerBound() {
    assert(inf(X) ⪯ x)
  } →
  
  lemma ClosureIncreasing() {
    assert(
      inf(X) ⪯ x 
      ⇒ c(inf(X)) ⪯ x
    )
  } →
  
  // Show equality using antisymmetry
  lemma ClosureInfBound() {
    assert(c(inf(X)) ⪯ inf(X))
  } →
  
  lemma ClosureInflationary() {
    assert(inf(X) ⪯ c(inf(X)))
  } →
  
  apply(Antisymmetry(
    c(inf(X)) ⪯ inf(X),
    inf(X) ⪯ c(inf(X))
  )) →
  
  assert(c(inf(X)) = inf(X))
}