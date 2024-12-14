theorem Circle_Group_Is_Group() {
  assert(
    ∀z ∈ K: struct(K, ×) is_group
  )
} ↔

proof Circle_Group_Is_Group() {
  // Identity element exists
  assert(1 + 0i ∈ K) →
  assert(K ≠ ∅) →

  // Polar form representation
  lemma Polar_Form() {
    assert(
      ∀z ∈ K ∃θ ∈ [0, 2π]:
      z = exp(iθ) ∧
      z = cos(θ) + i·sin(θ) ∧
      |z| = 1
    )
  } →

  // Complex exponential property
  lemma Exp_Property() {
    assert(
      ∀a,b ∈ ℂ:
      exp(a + b) = exp(a)·exp(b)
    )
  } →

  // Closure under inverse multiplication
  setVar(x,y ∈ K) →
  ∃s,t ∈ [0,2π]: 
    x = exp(is) ∧
    y = exp(it) →

  // Inverse existence
  assert(
    exp(it)·exp(-it) = exp(i(t-t)) = exp(0) = 1
  ) →
  assert(y⁻¹ = exp(-it) ∈ K) →

  // Closure under multiplication
  assert(
    x·y⁻¹ = exp(is)·exp(-it) = exp(i(s-t)) ∈ K
  ) →

  apply(Two_Step_Subgroup_Test) →
  assert(K ≤ ℂ under ×) →
  assert(struct(K, ×) is_group)
}