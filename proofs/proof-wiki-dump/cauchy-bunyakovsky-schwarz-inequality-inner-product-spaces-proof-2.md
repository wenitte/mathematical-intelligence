theorem Cauchy_Bunyakovsky_Schwarz_Inequality() {
  assert(
    ∀K ⊂ ℂ, K is_field ∧
    ∀V is_semi_inner_product_space(K) ∧
    ∀x,y ∈ V →
    |⟨x,y⟩|² ≤ ⟨x,x⟩⟨y,y⟩
  )
} ↔

proof Cauchy_Bunyakovsky_Schwarz_Inequality() {
  setContext(K := ℝ) →
  assert(∀x,y ∈ V → ⟨x,y⟩ = ⟨y,x⟩) by(semi_inner_product_prop1) →
  
  define(f_{x,y}: ℝ → ℝ₊) {
    f_{x,y}(λ) := ⟨x - λy, x - λy⟩
  } →
  
  assert(∀λ ∈ ℝ → f_{x,y}(λ) ≥ 0) by(semi_inner_product_prop4) →
  
  expand(f_{x,y}(λ)) {
    f_{x,y}(λ) = ⟨x - λy, x - λy⟩ →
    = ⟨x,x⟩ + ⟨x,-λy⟩ + ⟨-λy,x⟩ + ⟨-λy,-λy⟩ by(semi_inner_product_prop3) →
    = ⟨x,x⟩ - 2λ⟨x,y⟩ + λ²⟨y,y⟩ by(semi_inner_product_prop1_2)
  } →
  
  setVar(
    a := ⟨y,y⟩,
    b := -2⟨x,y⟩,
    c := ⟨x,x⟩
  ) →
  
  assert(f_{x,y} is_quadratic_polynomial ∧ f_{x,y}(λ) ≥ 0) →
  assert(f_{x,y} has_at_most_one_real_root) →
  
  apply(quadratic_discriminant_theorem) →
  assert(Δ = b² - 4ac ≤ 0) →
  
  substitute(discriminant_values) →
  assert(4⟨x,y⟩² - 4⟨x,x⟩⟨y,y⟩ ≤ 0) →
  
  conclude(|⟨x,y⟩|² ≤ ⟨x,x⟩⟨y,y⟩)
}