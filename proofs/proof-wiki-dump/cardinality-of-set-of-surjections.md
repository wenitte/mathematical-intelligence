theorem Surjection_Cardinality() {
  assert(
    ∀S,T: Set, finite(S) ∧ finite(T) ∧
    |S| = m ∧ |T| = n ∧
    C = |{f: S→T | f is surjective}| ⇒
    C = n! * S(m,n)  // where S(m,n) is Stirling number of second kind
  )
} ↔

proof Surjection_Cardinality() {
  setVar(S,T: Set, f: S→T) →
  assert(surjective(f)) →
  
  lemma Quotient_Theorem() {
    assert(∃Rf: Equivalence(S) ∧ ∃r: S/Rf→T ∧ ∃qRf: S→S/Rf) →
    assert(f = r ∘ qRf) ∧
    assert(bijective(r))
  } →
  
  apply(Quotient_Theorem()) →
  
  lemma Equivalence_Partition() {
    assert(Rf induces partition on S) ∧
    assert(|partition(Rf)| = m) ∧
    assert(|ways_to_partition(m,n)| = S(m,n))
  } →
  
  lemma Bijection_Count() {
    assert(|{r: S/Rf→T | bijective(r)}| = n!)
  } →
  
  apply(Equivalence_Partition()) →
  apply(Bijection_Count()) →
  
  assert(C = |ways_to_partition(m,n)| * |bijections(S/Rf,T)|) →
  assert(C = S(m,n) * n!)
}

lemma Special_Case_n_Plus_1() {
  assert(m = n + 1 ⇒ C = (n(n+1)!)/2)
}

lemma Special_Case_n_Plus_2() {
  assert(m = n + 2 ⇒ C = (n(3n+1)(n+2)!)/24)
}