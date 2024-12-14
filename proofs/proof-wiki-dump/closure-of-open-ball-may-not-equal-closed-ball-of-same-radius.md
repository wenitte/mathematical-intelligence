theorem Closure_Open_Ball_Not_Equal_Closed_Ball() {
  assert(
    ∀M(MetricSpace(M) ∧ M = ⟨A,d⟩ ∧ 
    ∀x∈A ∧ 
    ∀ε∈ℝ₊ ∧
    B_ε(x) = {y∈A : d(x,y) < ε} ∧
    B⁻_ε(x) = {y∈A : d(x,y) ≤ ε}) ⇏
    cl(B_ε(x)) = B⁻_ε(x)
  )
}

proof Closure_Open_Ball_Not_Equal_Closed_Ball() {
  setVar(M: MetricSpace) →
  assert(M = ⟨A,d⟩ where d is standard discrete metric) →
  
  lemma Discrete_Metric_Properties() {
    assert(
      ∀x,y∈A → (
        d(x,y) = 0 ↔ x = y ∧
        d(x,y) = 1 ↔ x ≠ y
      )
    )
  } →

  setVar(ε = 1) →
  setVar(x∈A) →
  
  assert(cl(B_1(x)) = {x}) →
  assert(B⁻_1(x) = {y∈A : d(x,y) ≤ 1}) →
  
  lemma Discrete_Ball_Property() {
    assert(
      ∀y∈A → d(x,y) ≤ 1
    )
  } →
  
  apply(Discrete_Ball_Property()) →
  assert(B⁻_1(x) = A) →
  assert(cl(B_1(x)) ≠ B⁻_1(x)) →
  conclude({x} ≠ A)
}