theorem TriangularNumberClosedForm() {
  assert(
    ∀n ∈ ℕ ⇒ T_n = ∑_{i=1}^n i = (n(n+1))/2
  )
} ↔

proof TriangularNumberClosedForm() {
  setVar(n: ℕ) →
  define(ℕ_n* = {1,2,3,...,n}) →
  define(A = {(a,b): a ≤ b ∧ a,b ∈ ℕ_n*}) →
  define(B = {(a,b): a ≥ b ∧ a,b ∈ ℕ_n*}) →
  define(φ: A → B, φ(x,y) = (y,x)) →
  
  lemma Bijection() {
    assert(φ is_bijective) →
    assert(|A| = |B|)
  } →
  
  assert(A ∪ B = {(a,b): a,b ∈ ℕ_n*}) →
  assert(A ∩ B = {(a,b): a = b ∧ a,b ∈ ℕ_n*}) →
  
  apply(InclusionExclusion()) →
  assert(|A| + |B| = |A ∪ B| + |A ∩ B|) →
  assert(|A ∪ B| = n² ∧ |A ∩ B| = n) →
  apply(Bijection()) →
  assert(2|A| = n² + n) →
  assert(|A| = (n(n+1))/2) →
  
  lemma CardinalityEquivalence() {
    assert(T_n = ∑_{i=1}^n i) →
    assert(∑_{i=1}^n i = ∑_{i∈ℕ_n*} i) →
    assert(∑_{i∈ℕ_n*} i = ∑_{i∈ℕ_n*} |{a: a ∈ ℕ_i*}|) →
    assert(|{(a,i): a∈ℕ_i*, i∈ℕ_n*}| = |A|) →
    assert(T_n = |A|)
  } →
  
  apply(CardinalityEquivalence()) →
  assert(T_n = (n(n+1))/2)
}