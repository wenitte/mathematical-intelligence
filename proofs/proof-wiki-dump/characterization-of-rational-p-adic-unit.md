theorem Rational_P_Adic_Unit_Characterization() {
  let(𝔽ₚ: (ℚₚ, ||·||ₚ)) →
  let(ℤₚˣ: p_adic_units) →
  assert(
    ℤₚˣ ∩ ℚ = {a/b ∈ ℚ : p ∤ ab}
  )
} ↔

proof Rational_P_Adic_Unit_Characterization() {
  let(||·||ₚℚ: p_adic_norm_on_rationals) →
  
  assert(ℤₚˣ ∩ ℚ = {a/b ∈ ℚ : ||a/b||ₚ = 1}) →
  
  lemma P_Adic_Unit_Norm() {
    assert(x ∈ ℤₚˣ ↔ ||x||ₚ = 1)
  } →
  
  assert({a/b ∈ ℚ : ||a/b||ₚ = 1} = 
         {a/b ∈ ℚ : ||a/b||ₚ ≤ 1} \ {a/b ∈ ℚ : ||a/b||ₚ < 1}) →
  
  assert(∀x ∈ ℚ: ||x||ₚ = ||x||ₚℚ) →
  
  assert({a/b ∈ ℚ : ||a/b||ₚℚ ≤ 1} \ {a/b ∈ ℚ : ||a/b||ₚℚ < 1} =
         {a/b ∈ ℚ : ||a/b||ₚℚ ≤ 1} \ {a/b ∈ ℚ : p ∤ b ∧ p|a}) →
         
  assert({a/b ∈ ℚ : ||a/b||ₚℚ ≤ 1} = {a/b ∈ ℚ : p ∤ b}) →
  
  assert({a/b ∈ ℚ : p ∤ b} \ {a/b ∈ ℚ : p ∤ b ∧ p|a} = 
         {a/b ∈ ℚ : p ∤ b ∧ p ∤ a}) →
         
  assert({a/b ∈ ℚ : p ∤ b ∧ p ∤ a} = {a/b ∈ ℚ : p ∤ ab})
}