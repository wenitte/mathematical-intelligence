theorem Independence_Product_Expectation_Converse() {
  assert(
    ∀(Ω,Σ,Pr: ProbabilitySpace) ∧
    ∀(X,Y: DiscreteRandomVariable) ∧
    (E[XY] = E[X]E[Y]) ⇏
    (X,Y are independent)
  )
} ↔

proof Independence_Product_Expectation_Converse() {
  construct Counterexample() {
    setVar(X: DiscreteRandomVariable) →
    define(P(X=-1) = 1/3) ∧
    define(P(X=0) = 1/3) ∧
    define(P(X=1) = 1/3) →
    
    setVar(Y: DiscreteRandomVariable) →
    define(Y = {
      0 if X=0,
      1 if X≠0
    }) →
    
    assert(P(X=0,Y=1) = 0) ∧
    assert(P(X=0)P(Y=1) = (1/3)(2/3) = 2/9) →
    conclude(X,Y are dependent) →
    
    compute E[XY]() {
      assert(E[XY] = ∑(x,y) xy P(X=x,Y=y)) →
      assert(E[XY] = (-1)(1/3) + 0(1/3) + 1(1/3)) →
      conclude(E[XY] = 0)
    } →
    
    compute E[X]E[Y]() {
      assert(E[X]E[Y] = 0(2/3)) →
      conclude(E[X]E[Y] = 0)
    } →
    
    assert(E[XY] = E[X]E[Y] = 0) ∧
    assert(X,Y are dependent) →
    conclude(E[XY] = E[X]E[Y] ⇏ independence)
  }
}