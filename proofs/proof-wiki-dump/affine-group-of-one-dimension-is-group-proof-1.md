theorem Affine_Group_1D_Is_Group() {
  assert(
    ∀f ∈ Af₁(ℝ) ⇒ IsGroup(Af₁(ℝ))
  )
} ↔

proof Affine_Group_1D_Is_Group() {
  // Closure
  lemma Closure() {
    setVar(a,c: ℝ\{0}, b,d: ℝ) →
    setVar(f_ab, f_cd: Af₁(ℝ)) →
    assert((f_ab ∘ f_cd)(x) = f_ab(f_cd(x))) →
    assert(f_ab(f_cd(x)) = f_ab(cx + d)) →
    assert(f_ab(cx + d) = a(cx + d) + b) →
    assert(a(cx + d) + b = (acx + ad) + b) →
    assert((acx + ad) + b = (ac)x + (ad + b)) →
    conclude(
      ac ∈ ℝ\{0} ∧ (ad + b) ∈ ℝ ⇒
      f_ab ∘ f_cd ∈ Af₁(ℝ)
    )
  } →

  // Associativity
  lemma Associativity() {
    apply(Composition_Is_Associative) →
    conclude(∀f,g,h ∈ Af₁(ℝ) ⇒ (f ∘ g) ∘ h = f ∘ (g ∘ h))
  } →

  // Identity
  lemma Identity() {
    apply(Identity_Of_Affine_Group_1D) →
    conclude(∃e = f₁₀ ∈ Af₁(ℝ): ∀f ∈ Af₁(ℝ) ⇒ f ∘ e = e ∘ f = f)
  } →

  // Inverse
  lemma Inverse() {
    apply(Inverse_In_Affine_Group_1D) →
    conclude(
      ∀f_ab ∈ Af₁(ℝ) ⇒ 
      ∃f_cd ∈ Af₁(ℝ): 
        c = 1/a ∧ d = -b/a ∧
        f_ab ∘ f_cd = f_cd ∘ f_ab = f₁₀
    )
  } →

  // Final conclusion
  assert(
    Closure() ∧ 
    Associativity() ∧ 
    Identity() ∧ 
    Inverse()
  ) →
  conclude(IsGroup(Af₁(ℝ)))
}