theorem BernoulliInequality() {
  assert(
    ∀x ∈ ℝ: x > -1 ∧
    ∀n ∈ ℤ≥0 ⇒
    (1 + x)^n ≥ 1 + nx
  )
}

proof BernoulliInequality_Inductive() {
  let P(n) := "(1 + x)^n ≥ 1 + nx" →
  
  // Base case
  assert(P(0)) {
    (1 + x)^0 = 1 ≥ 1 + 0x = 1
  } →
  
  // Inductive step
  setVar(k ∈ ℤ≥0) →
  assume(P(k)) {
    (1 + x)^k ≥ 1 + kx
  } →
  
  prove(P(k+1)) {
    (1 + x)^(k+1) = 
    (1 + x)^k * (1 + x) ≥
    (1 + kx)(1 + x) =
    1 + (k+1)x + kx^2 ≥
    1 + (k+1)x
  } →
  
  apply(MathematicalInduction(P)) →
  conclude()
}

proof BernoulliInequality_Algebraic() {
  setVar(y := 1 + x) →
  assert(y ≥ 0) →
  
  case y ≥ 1 {
    apply(GeometricSequenceSum) →
    assert(
      y^n - 1 = (y-1)∑[k=0 to n-1](y^k) ≥
      n(y-1) = nx
    )
  } →
  
  case y < 1 {
    apply(GeometricSequenceSum) →
    assert(
      y^n - 1 = -(1-y)∑[k=0 to n-1](y^k) ≥
      -n(1-y) = nx
    )
  } →
  
  conclude((1 + x)^n = 1 + (y^n - 1) ≥ 1 + nx)
}