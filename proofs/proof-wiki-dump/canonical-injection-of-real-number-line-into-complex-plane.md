theorem Canonical_Injection_Complex_Plane() {
  let(ℂ, +: AdditiveGroup) ∧
  let(ℝ, +: AdditiveGroup) ∧
  let(f: ℝ → ℂ) ∧
  assert(
    ∀x ∈ ℝ ⇒ f(x) = x + 0i
  ) →
  assert(
    f: (ℝ, +) → (ℂ, +) is_monomorphism
  )
} ↔

proof Canonical_Injection_Complex_Plane() {
  let(g: ℂ → ℝ) ∧
  assert(
    ∀z ∈ ℂ ⇒ g(z) = Re(z)
  ) →
  
  lemma Real_Part_Endomorphism() {
    assert(
      g: (ℂ, +) → (ℝ, +) is_projection
    )
  } →
  
  apply(Real_Part_Endomorphism()) →
  
  lemma Right_Inverse_Property() {
    assert(
      ∀x ∈ ℝ ⇒ g(f(x)) = x
    ) ∧
    assert(
      f is_right_inverse_of g
    )
  } →
  
  apply(Right_Inverse_Property()) →
  assert(f is_monomorphism)
}