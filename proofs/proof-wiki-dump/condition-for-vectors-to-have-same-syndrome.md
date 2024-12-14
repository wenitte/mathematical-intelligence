theorem VectorsSameSyndrome() {
  assert(
    ∀C: LinearCode(n,k),
    ∀G: GeneratorMatrix(C),
    ∀P: ParityCheckMatrix(C),
    ∀u,v ∈ V(n,p) ⇒
    (S(u) = S(v) ↔ ∃c ∈ C: u-v = c)
  )
} ↔

proof VectorsSameSyndrome() {
  setVar(u,v: V(n,p)) →
  setVar(S: Function(V(n,p) → V(n-k,p))) →
  
  assert(S(u) = S(v)) ↔
  
  lemma SyndromeDefinition() {
    assert(∀x ∈ V(n,p): S(x) = Px^T)
  } →
  apply(SyndromeDefinition()) →
  
  assert(Pu^T = Pv^T) ↔
  
  assert(P(u^T - v^T) = 0) ↔
  
  assert(P(u-v)^T = 0) →
  
  lemma SyndromeZeroIffCodeword() {
    assert(∀x ∈ V(n,p): (Px^T = 0 ↔ x ∈ C))
  } →
  apply(SyndromeZeroIffCodeword()) →
  
  assert(u-v ∈ C) ↔
  
  lemma CosetEquivalence() {
    assert(∀x,y ∈ V(n,p): (x-y ∈ C ↔ x,y in same coset of C))
  } →
  apply(CosetEquivalence()) →
  
  assert(u,v in same coset of C)
}