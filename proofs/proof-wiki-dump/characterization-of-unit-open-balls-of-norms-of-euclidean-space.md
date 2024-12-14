theorem CharacterizationUnitOpenBalls() {
  let(ℝⁿ, ∥·∥: EuclideanSpace) →
  let(K ⊆ ℝⁿ: OpenSet) →
  assert(
    ∃(∥·∥*: ℝⁿ → ℝ) ↔ {
      {x ∈ ℝⁿ : ∥x∥* < 1} = K ↔
      (K.isBounded() ∧ K.isConvex() ∧ K.isSymmetric())
    }
  )
}

proof CharacterizationUnitOpenBalls() {
  // Necessary Condition
  proofNecessary() {
    // Proof of boundedness
    proof1() {
      assume(∃∥·∥*: {x ∈ ℝⁿ : ∥x∥* < 1} = K) →
      apply(NormsEquivalence()) →
      assert(∃M > 0: ∀x ∈ ℝⁿ(∥x∥ ≤ M∥x∥*)) →
      assert(∀x ∈ K(∥x∥ < M)) →
      conclude(K.isBounded())
    }

    // Proof of convexity
    proof2() {
      apply(OpenBallIsConvex()) →
      conclude(K.isConvex())
    }

    // Proof of symmetry
    proof3() {
      let(x ∈ K) →
      assert(∥x∥* < 1) →
      assert(∥-x∥* = |-1|∥x∥* = ∥x∥* < 1) →
      assert(-x ∈ K) →
      conclude(K.isSymmetric())
    }
  }

  // Sufficient Condition
  proofSufficient() {
    assume(K.isBounded() ∧ K.isConvex() ∧ K.isSymmetric()) →
    
    // Show 0 ∈ K
    lemma ZeroInK() {
      let(x ∈ K) →
      assert(-x ∈ K) by(K.isSymmetric()) →
      assert(1/2·x + 1/2·(-x) = 0 ∈ K) by(K.isConvex())
    }

    // Define Minkowski functional
    let(pₖ: MinkowskiFunctional(K)) →
    
    // Show pₖ is a norm
    assert(∃c > 0: ∀x ∈ ℝⁿ(pₖ(x) ≥ c∥x∥)) →
    assert(∀x,y ∈ ℝⁿ(pₖ(x+y) ≤ pₖ(x) + pₖ(y))) →
    assert(∀λ≥0,x ∈ ℝⁿ(pₖ(λx) = λpₖ(x))) →
    
    // Verify remaining norm properties
    assert(pₖ(x) = 0 ↔ x = 0) →
    assert(∀λ<0,x ∈ ℝⁿ(pₖ(λx) = |λ|pₖ(x))) →
    
    // Define norm ∥·∥*
    let(∥·∥* := pₖ) →
    assert({x ∈ ℝⁿ : ∥x∥* < 1} = K)
  }
}