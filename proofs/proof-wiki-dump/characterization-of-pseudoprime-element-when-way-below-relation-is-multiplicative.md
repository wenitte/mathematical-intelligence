theorem Pseudoprime_Characterization() {
  assert(
    let L = ⟨S, ∨, ∧, ≼⟩ be a bounded below continuous lattice ∧
    ≪ is multiplicative relation ∧
    p ∈ S ⇒
    (p is pseudoprime ↔ ∀a,b ∈ S: (a ∧ b ≪ p → (a ≼ p ∨ b ≼ p)))
  )
}

proof Pseudoprime_Characterization() {
  // Sufficient Condition
  block Sufficient() {
    assume(p is pseudoprime) →
    setVar(a,b ∈ S) →
    assume(a ∧ b ≪ p) →
    assert(inf{a,b} ≪ p) by(def_meet) →
    apply(Characterization_Pseudoprime_Finite_Infima) →
    assert(∃c ∈ {a,b}: c ≼ p) →
    conclude(a ≼ p ∨ b ≼ p)
  }

  // Necessary Condition
  block Necessary() {
    assume(∀a,b ∈ S: a ∧ b ≪ p → (a ≼ p ∨ b ≼ p)) →
    assume(¬(p is pseudoprime)) for contradiction →
    apply(Prime_is_Pseudoprime) →
    assert(¬(p is prime)) →
    assert(∃x,y ∈ S: x ∧ y ≼ p ∧ x ⊁ p ∧ y ⊁ p) by(def_prime) →
    
    lemma Continuous_Properties() {
      assert(∀z ∈ S: z≪ is directed) ∧
      assert(L satisfies axiom of approximation)
    } →
    
    apply(Axiom_Approximation_Up_Complete) →
    assert(∃u ∈ S: u ≪ x ∧ u ⊁ p) →
    assert(∃v ∈ S: v ≪ y ∧ v ⊁ p) →
    
    assert(≪ is auxiliary relation) by(Way_Below_Auxiliary) →
    assert(u ∧ v ≪ x ∧ y) by(Multiplicative_Auxiliary_Congruent) →
    assert(u ∧ v ≪ p) by(transitivity) →
    apply(initial_assumption) →
    assert(u ≼ p ∨ v ≼ p) →
    assert(contradiction with u ⊁ p ∧ v ⊁ p)
  }
}