theorem Class_Proper_Bijection_Corollary() {
  let(A: Class, P: Class)
  assume(isProperClass(P))
  assert(
    isProperClass(A) ↔ ∃f(isBijection(f, P, A))
  )
}

proof Class_Proper_Bijection_Corollary() {
  let(A: Class, P: Class) →
  assume(isProperClass(P)) →
  
  lemma Bijection_Existence() {
    assert(
      ∃f(isBijection(f, A, P)) ↔ ∃g(isBijection(g, P, A))
    )
  } →
  
  apply(Biconditional_Transitive()) →
  apply(Class_Proper_Bijection_Main()) →
  apply(Inverse_Bijection_Is_Bijection()) →
  
  assert(
    isProperClass(A) ↔ ∃f(isBijection(f, A, P)) →
    ∃f(isBijection(f, A, P)) ↔ ∃g(isBijection(g, P, A)) →
    ∴ isProperClass(A) ↔ ∃g(isBijection(g, P, A))
  )
}