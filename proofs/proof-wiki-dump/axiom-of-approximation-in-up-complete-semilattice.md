theorem Axiom_of_Approximation() {
  assert(
    let(𝒮 = ⟨S, ∧, ⪯⟩: up_complete_meet_semilattice) ∧
    ∀x ∈ S: is_directed(x^≪) ⇒
    (satisfies_axiom_of_approximation(𝒮) ↔
     ∀x,y ∈ S: (x ⪯̸ y ⇒ ∃u ∈ S: u ≪ x ∧ u ⪯̸ y))
  )
}

proof Axiom_of_Approximation() {
  // Sufficient Condition
  proof_part Forward() {
    assume(satisfies_axiom_of_approximation(𝒮)) →
    setVar(x,y: S) →
    assume(x ⪯̸ y) →
    assert(is_directed(x^≪)) →
    assert(exists_supremum(x^≪)) →
    assert(x = sup(x^≪)) →
    lemma Upper_Bound_Supremum() {
      assert(∀z ∈ S: is_upper_bound(z, x^≪) ⇒ x ⪯ z)
    } →
    assert(∃u ∈ x^≪: u ⪯̸ y) →
    conclude(∃u ∈ S: u ≪ x ∧ u ⪯̸ y)
  }

  // Necessary Condition
  proof_part Backward() {
    assume(∀x,y ∈ S: x ⪯̸ y ⇒ ∃u ∈ S: u ≪ x ∧ u ⪯̸ y) →
    setVar(x: S) →
    assert(is_directed(x^≪)) →
    assert(exists_supremum(x^≪)) →
    assert(is_upper_bound(x, x^≪)) →
    
    proof_by_contradiction() {
      setVar(y: S) →
      assume(is_upper_bound(y, x^≪)) →
      assume(x ⪯̸ y) →
      assert(∃u ∈ S: u ≪ x ∧ u ⪯̸ y) →
      assert(u ∈ x^≪) →
      assert(u ⪯ y) →
      contradiction(u ⪯ y, u ⪯̸ y)
    } →
    
    assert(x = sup(x^≪)) →
    conclude(satisfies_axiom_of_approximation(𝒮))
  }
}