theorem Independence_Expectation_Product() {
  let(Ω, Σ, Pr: ProbabilitySpace)
  let(X, Y: DiscreteRandomVariable(Ω, Σ, Pr))
  assert(
    (X,Y are independent) ↔ 
    ∀g,h: ℝ→ℝ ⇒ (E[g(X)h(Y)] = E[g(X)]E[h(Y)])
  )
}

proof Independence_Expectation_Product() {
  // Sufficient Condition
  proof_by_contradiction() {
    assume(¬(X,Y are independent)) →
    assert(∃a,b ∈ ℝ: Pr(X=a,Y=b) ≠ Pr(X=a)Pr(Y=b)) →
    
    define(g(x) := {
      1 if x = a
      0 if x ≠ a
    }) →
    define(h(y) := {
      1 if y = b
      0 if y ≠ b
    }) →
    
    compute(E[g(X)h(Y)] = Pr(X=a,Y=b)) →
    compute(E[g(X)]E[h(Y)] = Pr(X=a)Pr(Y=b)) →
    
    assert(contradiction: Pr(X=a,Y=b) = Pr(X=a)Pr(Y=b) ∧ 
                         Pr(X=a,Y=b) ≠ Pr(X=a)Pr(Y=b))
  }

  // Necessary Condition
  assume(X,Y are independent) →
  let(g,h: ℝ→ℝ) →
  assert(
    E[g(X)h(Y)] 
    = ∑_{x,y} g(x)h(y)Pr(X=x,Y=y)
    = ∑_{x,y} g(x)h(y)Pr(X=x)Pr(Y=y)    // by independence
    = (∑_x g(x)Pr(X=x))(∑_y h(y)Pr(Y=y))
    = E[g(X)]E[h(Y)]
  )
}

corollary Independence_Product() {
  let(Ω, Σ, Pr: ProbabilitySpace)
  let(X, Y: DiscreteRandomVariable(Ω, Σ, Pr))
  assert(
    (X,Y are independent) → E[XY] = E[X]E[Y]
  )
} ↔
apply(Independence_Expectation_Product()) // with g(x)=x, h(y)=y