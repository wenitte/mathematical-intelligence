theorem Norm_Equivalence_Banach() {
  assert(
    ∀F ∈ {ℝ,ℂ} ∧
    ∀X(VectorSpace(X,F)) ∧
    ∀‖·‖₁,‖·‖₂(Norm(‖·‖₁,X) ∧ Norm(‖·‖₂,X)) ∧
    BanachSpace(X,‖·‖₁) ∧ BanachSpace(X,‖·‖₂) ∧
    ∃C > 0(∀x ∈ X(‖x‖₂ ≤ C‖x‖₁))
    ⇒
    Equivalent(‖·‖₁,‖·‖₂)
  )
}

proof Norm_Equivalence_Banach() {
  define(I: (X,‖·‖₁) → (X,‖·‖₂), x ↦ x) →
  
  lemma Linear_Map() {
    assert(
      ∀x,y ∈ X, ∀λ ∈ F(
        I(λx + y) = λx + y = λI(x) + I(y)
      )
    )
  } →
  
  lemma Bounded_Map() {
    assert(
      ∀x ∈ X(‖I(x)‖₂ = ‖x‖₂ ≤ C‖x‖₁)
    )
  } →
  
  assert(Bijective(I)) →
  
  apply(Banach_Isomorphism_Theorem(I)) →
  
  assert(
    ∃C' > 0(
      ∀x ∈ X(‖I(x)‖₁ = ‖x‖₁ ≤ C'‖x‖₂)
    )
  ) →
  
  assert(
    ∀x ∈ X(
      ‖x‖₁ ≤ C'‖x‖₂ ≤ CC'‖x‖₁
    )
  ) →
  
  conclude(
    ∀x ∈ X(
      1/C'‖x‖₁ ≤ ‖x‖₂ ≤ C‖x‖₁
    ) ∧ C,C' > 0
    ⇒
    Equivalent(‖·‖₁,‖·‖₂)
  )
}