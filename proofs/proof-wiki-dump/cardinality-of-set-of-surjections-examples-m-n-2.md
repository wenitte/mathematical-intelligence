theorem Surjection_Cardinality() {
  assert(
    ∀S,T: Set, ∀m,n,C ∈ ℕ ⇒
    (|S| = m ∧ |T| = n ∧ m = n + 2 ∧
     C = |{f: S → T | f is surjective}|) ⇒
    C = (n(3n + 1)(n + 2)!)/24
  )
}

proof Surjection_Cardinality() {
  setVar(S,T: Set) →
  setVar(m,n,C: ℕ) →
  assume(|S| = m ∧ |T| = n ∧ m = n + 2) →
  
  lemma Surjection_Formula() {
    assert(C = n!⋅{n + 1 ⟨n⟩})
    // where {n + 1 ⟨n⟩} is Stirling number of second kind
  } →
  
  apply(Surjection_Formula()) →
  assert(C = n!⋅{n + 2 ⟨n⟩}) →
  
  lemma Stirling_Number() {
    assert({n + 2 ⟨n⟩} = (n+3 choose 4) + 2(n+2 choose 4))
  } →
  
  apply(Stirling_Number()) →
  assert(C = n!⋅((n+3 choose 4) + 2(n+2 choose 4))) →
  
  lemma Binomial_Expansion() {
    assert(
      n!⋅((n+3 choose 4) + 2(n+2 choose 4)) = 
      n!⋅(n(3n + 1)(n + 1)(n + 2))/24
    )
  } →
  
  apply(Binomial_Expansion()) →
  assert(C = n!⋅(n(3n + 1)(n + 1)(n + 2))/24) →
  assert(C = (n(3n + 1)(n + 2)!)/24)
}