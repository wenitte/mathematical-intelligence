theorem ClosureOperatorUniqueness() {
  assert(
    ∀S(OrderedSet(S) ∧
    ∀f,g: S→S(
      ClosureOperator(f) ∧ 
      ClosureOperator(g) ∧
      (∀e∈S(Closed(e,f) ↔ Closed(e,g)))
      → f = g
    ))
  )
}

proof ClosureOperatorUniqueness() {
  setVar(S: OrderedSet) →
  setVar(f,g: S→S) →
  assume(ClosureOperator(f) ∧ ClosureOperator(g)) →
  assume(∀e∈S(Closed(e,f) ↔ Closed(e,g))) →
  
  letVar(x: S) →
  define(C := {e∈S | Closed(e,f) ∧ x ⪯ e}) →
  define(UpperClosure := {y∈S | x ⪯ y}) →
  
  lemma SmallestClosedSuccessor() {
    assert(
      f(x) = min(C ∩ UpperClosure) ∧
      g(x) = min(C ∩ UpperClosure)
    )
  } →
  
  lemma UniqueMinimum() {
    assert(
      ∀A⊆S(∃!m∈A(∀y∈A(m ⪯ y)))
    )
  } →
  
  apply(SmallestClosedSuccessor()) →
  apply(UniqueMinimum()) →
  assert(f(x) = g(x)) →
  
  generalize(∀x∈S(f(x) = g(x))) →
  apply(EqualityOfMappings()) →
  conclude(f = g)
}