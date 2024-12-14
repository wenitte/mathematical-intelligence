theorem InfiniteJoinDistributive() {
  assert(
    ∀L = ⟨S,⪯⟩ [L is complete Brouwerian lattice] ⇒
    [L satisfies infinite join distributive law]
  )
} ↔

proof InfiniteJoinDistributive() {
  setVar(A ⊆ S) →
  setVar(a ∈ S) →

  lemma Lemma1() {
    assert(sup{a ∧ b : b ∈ A} ⪯ a ∧ sup A) →
    proof {
      assert(∀b ∈ A : a ∧ b ⪯ a ∧ a ∧ b ⪯ b) →
      assert(a is upper bound for {a ∧ b : b ∈ A}) →
      apply(DefinitionOfSupremum) →
      assert(sup{a ∧ b : b ∈ A} ⪯ a) →
      apply(FinerSupremumPrecedesSupremum) →
      assert(sup{a ∧ b : b ∈ A} ⪯ sup A) →
      apply(DefinitionOfMeet) →
      assert(sup{a ∧ b : b ∈ A} ⪯ a ∧ sup A)
    }
  } →

  lemma Lemma2() {
    assert(a ∧ sup A ⪯ sup{a ∧ b : b ∈ A}) →
    proof {
      assert(∀b ∈ A : a ∧ b ⪯ sup{a ∧ b : b ∈ A}) →
      apply(RelativePseudocomplementPreservesOrder) →
      assert(∀b ∈ A : a → a ∧ b ⪯ a → sup{a ∧ b : b ∈ A}) →
      apply(DefinitionOfSupremum) →
      assert(sup{a → a ∧ b : b ∈ A} ⪯ a → sup{a ∧ b : b ∈ A}) →
      apply(BrouwerianLatticeInequality) →
      assert(∀b ∈ A : b ⪯ a → a ∧ b) →
      apply(FinerSupremumPrecedesSupremum) →
      assert(sup A ⪯ sup{a → a ∧ b : b ∈ A}) →
      apply(OrderingAntisymmetry) →
      assert(sup A ⪯ a → sup{a ∧ b : b ∈ A}) →
      apply(BrouwerianLatticeInequality) →
      assert(a ∧ sup A ⪯ sup{a ∧ b : b ∈ A})
    }
  } →

  apply(OrderingReflexivity) →
  assert(a ∧ sup A = sup{a ∧ b : b ∈ A}) →
  assert(∀A ⊆ S, a ∈ S : a ∧ sup A = sup{a ∧ b : b ∈ A}) →
  assert([L satisfies infinite join distributive law])
}