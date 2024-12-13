theorem Affine_Group_One_Dimension_Semidirect() {
  let(Af₁(ℝ): 1_dim_affine_group) ∧
  let(ℝ⁺: additive_reals) ∧
  let(ℝˣ: multiplicative_reals) ∧
  let(φ: ℝˣ → Aut(ℝ⁺)) ∧
  assert(
    ∀b ∈ ℝˣ ⇒ φ(b) = (a ↦ ab)
  ) →
  assert(
    Af₁(ℝ) ≅ ℝ⁺ ⋊_φ ℝˣ
  )
} ↔

proof Affine_Group_One_Dimension_Semidirect() {
  define(S = {f_ab: x ↦ ax + b | a ∈ ℝ\{0}, b ∈ ℝ}) →
  let(ψ: Af₁(ℝ) → ℝ⁺ ⋊_φ ℝˣ) ∧
  assert(ψ(f_ab) = (b,a)) →
  
  lemma Homomorphism_Check() {
    let(f_ab, f_cd ∈ Af₁(ℝ)) →
    assert(
      (f_ab ∘ f_cd)(x) 
      = f_ab(f_cd(x))                   [by composition_def] →
      = f_ab(cx + d)                    [by affine_group_def] →
      = a(cx + d) + b                   [by affine_group_def] →
      = (ac)x + (ad) + b               [by distributive_law] →
      = (ac)x + (ad + b)               [by associative_law] →
      = f_(ac)(ad+b)(x)                 [by affine_group_def]
    )
  } →

  lemma Semidirect_Product_Check() {
    let((b,a), (d,c) ∈ ℝ⁺ ⋊_φ ℝˣ) →
    assert(
      (b,a)(d,c) 
      = (b + φ(a)(d), ac)              [by semidirect_product_def] →
      = (b + ad, ac)                    [by φ_def] →
      = (ad + b, ac)                    [by commutative_law]
    )
  } →

  apply(Homomorphism_Check()) ∧
  apply(Semidirect_Product_Check()) →
  assert(
    ψ(f_ab)ψ(f_cd) = ψ(f_ab ∘ f_cd)    [by previous_lemmas]
  ) →
  conclude(ψ_is_isomorphism)
}