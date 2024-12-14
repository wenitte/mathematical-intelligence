theorem Unique_Increasing_Mappings() {
  assert(
    ∀S,T(IsToset(S,⪯) ∧ IsToset(T,⪰)) ∧
    ∀f,g(IsIncreasingMap(f,S,T) ∧ IsIncreasingMap(g,S,T)) ∧
    ∃H(H ⊆ S) ∧
    ∀x∈H(f(x) = g(x)) ∧
    let K = f[H] ∧
    ∀u,v∈T(u ≺ v → K ∩ {y∈T: u ≺ y ≺ v} ≠ ∅)
    ⇒ f = g
  )
}

proof Unique_Increasing_Mappings() {
  assume(
    ∀u,v∈T(u ≺ v → K ∩ {y∈T: u ≺ y ≺ v} ≠ ∅)
  ) →
  
  lemma Contradiction() {
    assume(f ≠ g) →
    assert(∃x∈S(f(x) ≠ g(x))) →
    setVar(x: S | f(x) ≺ g(x)) →
    
    assert(∃a,b∈H(a ⪯ x ∧ x ⪯ b)) →
    
    lemma Increasing_Property() {
      assert(IsIncreasingMap(f,S,T) ∧ IsIncreasingMap(g,S,T)) →
      assert(f(a) ⪯ f(x) ∧ g(x) ⪯ g(b))
    } →
    
    assert(K ∩ {y∈T: f(x) ≺ y ≺ g(x)} = ∅) →
    assert(contradiction(
      K ∩ {y∈T: f(x) ≺ y ≺ g(x)} = ∅,
      hypothesis
    ))
  } →
  
  apply(ProofByContradiction(Contradiction())) →
  assert(f = g)
}