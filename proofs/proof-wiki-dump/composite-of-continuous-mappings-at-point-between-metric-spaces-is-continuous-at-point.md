theorem Composite_Continuous_Mappings() {
  assert(
    ∀M₁,M₂,M₃[
      (M₁ = ⟨X₁,d₁⟩ ∧ M₂ = ⟨X₂,d₂⟩ ∧ M₃ = ⟨X₃,d₃⟩) ∧
      (f: M₁ → M₂) ∧ (g: M₂ → M₃) ∧
      (a ∈ X₁) ∧
      isContinuous(f, a) ∧
      isContinuous(g, f(a))
    ] ⇒
    isContinuous(g ∘ f, a)
  )
} ↔

proof Composite_Continuous_Mappings() {
  setVar(ε ∈ ℝ₊) →
  
  lemma Continuity_G() {
    assert(
      ∃η ∈ ℝ₊[
        ∀y ∈ X₂[
          d₂(y, f(a)) < η ⇒ d₃(g(y), g(f(a))) < ε
        ]
      ]
    )
  } →

  lemma Continuity_F() {
    assert(
      ∀η ∈ ℝ₊[
        ∃δ ∈ ℝ₊[
          ∀x ∈ X₁[
            d₁(x, a) < δ ⇒ d₂(f(x), f(a)) < η
          ]
        ]
      ]
    )
  } →

  apply(Continuity_G()) →
  apply(Continuity_F()) →
  
  assert(
    ∃δ ∈ ℝ₊[
      ∀x ∈ X₁[
        d₁(x, a) < δ ⇒ d₃(g(f(x)), g(f(a))) < ε
      ]
    ]
  ) →
  
  conclude(isContinuous(g ∘ f, a))
}