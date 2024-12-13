theorem Pearson_Correlation_Absolute_Value() {
  let(X: RandomVariable, Y: RandomVariable)
  assume(exists(Var(X)) ∧ isFinite(Var(X)))
  assume(exists(Var(Y)) ∧ isFinite(Var(Y)))
  assert(|ρ(X,Y)| ≤ 1)
} ↔

proof Pearson_Correlation_Absolute_Value() {
  step1: {
    assert(
      (ρ(X,Y))² = (Cov(X,Y)/(√(Var(X)Var(Y))))²
    ) →
    apply(PearsonCorrelationDefinition)
  } →
  
  step2: {
    assert(
      (Cov(X,Y)/(√(Var(X)Var(Y))))² = (Cov(X,Y))²/(Var(X)Var(Y))
    ) →
    apply(AlgebraicSimplification)
  } →
  
  step3: {
    assert(
      (Cov(X,Y))²/(Var(X)Var(Y)) ≤ 1
    ) →
    apply(CovarianceVarianceInequality)
  } →
  
  conclusion: {
    assert(
      (ρ(X,Y))² ≤ 1 ↔ |ρ(X,Y)| ≤ 1
    ) →
    apply(SquareRootProperty)
  }
}