theorem Affine_Group_One_Dim_Is_Group() {
  assert(
    let Af₁(ℝ) be_1D_affine_group_on(ℝ) →
    Af₁(ℝ) is_group()
  )
} ↔

proof Affine_Group_One_Dim_Is_Group() {
  # Closure
  lemma G0_Closure() {
    setVar(a,c: ℝ\{0}) ∧ setVar(b,d: ℝ) →
    let f_ab, f_cd ∈ Af₁(ℝ) →
    assert(
      (f_ab ∘ f_cd)(x) = f_ab(f_cd(x)) →
      f_ab(f_cd(x)) = f_ab(cx + d) →
      f_ab(cx + d) = a(cx + d) + b →
      a(cx + d) + b = (acx + ad) + b →
      (acx + ad) + b = (ac)x + (ad + b)
    ) →
    assert(ac ∈ ℝ\{0} ∧ (ad + b) ∈ ℝ) →
    conclude(f_ab ∘ f_cd ∈ Af₁(ℝ))
  }

  # Associativity
  lemma G1_Associativity() {
    apply(Composition_Of_Mappings_Is_Associative()) →
    conclude(∀f,g,h ∈ Af₁(ℝ): (f ∘ g) ∘ h = f ∘ (g ∘ h))
  }

  # Identity
  lemma G2_Identity() {
    apply(Identity_Of_Affine_Group_One_Dim()) →
    conclude(∃e = f_{1,0} ∈ Af₁(ℝ): ∀f ∈ Af₁(ℝ): f ∘ e = e ∘ f = f)
  }

  # Inverse
  lemma G3_Inverse() {
    apply(Inverse_In_Affine_Group_One_Dim()) →
    conclude(∀f_{a,b} ∈ Af₁(ℝ): ∃f_{1/a,-b/a} ∈ Af₁(ℝ): f_{a,b} ∘ f_{1/a,-b/a} = f_{1,0})
  }

  apply(G0_Closure()) ∧
  apply(G1_Associativity()) ∧
  apply(G2_Identity()) ∧
  apply(G3_Inverse()) →
  conclude(Af₁(ℝ) is_group())
}

# Alternative proof using semidirect product
proof Affine_Group_One_Dim_Is_Group_Alt() {
  apply(Affine_Group_One_Dim_As_Semidirect_Product()) ∧
  apply(Semidirect_Product_Of_Groups_Is_Group()) →
  conclude(Af₁(ℝ) is_group())
}