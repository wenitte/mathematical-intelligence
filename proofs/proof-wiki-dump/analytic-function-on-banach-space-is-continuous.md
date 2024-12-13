theorem Analytic_Function_Continuous() {
  assert(
    ∀U ⊆ ℂ [U is open] ∧
    ∀X [X is Banach space over ℂ] ∧
    ∀f: U → X [f is analytic] →
    [f is continuous]
  )
} ↔

proof Analytic_Function_Continuous() {
  setVar(x ∈ U) →
  assert(
    lim[y→x](f(y) - f(x))/(y - x) = f'(x)
  ) →
  
  lemma Norm_Step() {
    assert(
      ‖f(y) - f(x)‖ = |y - x| ‖(f(y) - f(x))/(y - x)‖
    )
  } →
  apply(Norm_Axiom_N2) →
  
  lemma Limit_Norm() {
    assert(
      lim[y→x]‖(f(y) - f(x))/(y - x)‖ = ‖f'(x)‖
    )
  } →
  apply(Modulus_of_Limit_NVS) →
  
  assert(
    lim[y→x]|y - x| = 0
  ) →
  
  lemma Product_Limit() {
    assert(
      lim[y→x]‖f(y) - f(x)‖ = lim[y→x](|y - x| ‖(f(y) - f(x))/(y - x)‖) = 0
    )
  } →
  apply(Product_Rule_Complex_Sequences) →
  
  assert(
    [f is continuous at x]
  ) →
  
  assert(
    ∀x ∈ U → [f is continuous at x] →
    [f is continuous]
  )
}