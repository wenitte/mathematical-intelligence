theorem Surjection_Cardinality() {
  let(S: Set, T: Set) ∧
  let(|S| = m: ℕ, |T| = n: ℕ) ∧
  let(C: ℕ) ∧
  assert(
    (C = |{f: S → T | f is surjective}|) ∧
    (m = n + 1)
    ⇒ C = (n(n+1)!)/2
  )
} ↔

proof Surjection_Cardinality() {
  setVar(S: Set, T: Set) →
  setVar(m: ℕ, n: ℕ) →
  assert(m = n + 1) →
  
  lemma Surjection_Formula() {
    assert(C = n!⟨n+1,n⟩)
    where ⟨n+1,n⟩ is Stirling number of second kind
  } →
  
  apply(Surjection_Formula()) →
  assert(C = n!⟨n+1,n⟩) →
  
  lemma Stirling_Simplification() {
    assert(⟨n+1,n⟩ = (n(n+1))/2)
  } →
  
  apply(Stirling_Simplification()) →
  assert(C = n!((n(n+1))/2)) →
  
  simplify() →
  assert(C = (n(n+1)!)/2)
}