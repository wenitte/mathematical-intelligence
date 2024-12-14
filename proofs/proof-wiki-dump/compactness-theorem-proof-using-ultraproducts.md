theorem Compactness_Theorem() {
  assert(
    ∀L(Language) ∧ ∀T(Set_of_L_Sentences) ⇒
    (T is satisfiable ↔ T is finitely_satisfiable)
  )
}

proof Compactness_Theorem() {
  // Focus on non-trivial direction
  assert(finitely_satisfiable(T) → satisfiable(T)) →
  
  // Define key sets
  setVar(Σ := {S | S ⊆ T ∧ S is finite}) →
  setVar(F_Σ₀ := {Δ ∈ Σ | Σ₀ ⊆ Δ}) →
  setVar(F := {F_Σ₀ | Σ₀ ∈ Σ}) →

  lemma Finite_Intersection_Property() {
    assert(
      ∀{F_Σₖ}ₖ₌₁ⁿ ⊆ F ⇒
      (S := ⋃ₖ₌₁ⁿ Σₖ ∈ Σ) ∧
      (S ∈ ⋂ₖ₌₁ⁿ F_Σₖ) ∧
      (⋂ₖ₌₁ⁿ F_Σₖ = F_S)
    )
  } →

  apply(Ultrafilter_Lemma) →
  assert(∃U(Ultrafilter_on_Σ) ⊇ F) →
  
  // Construct ultraproduct
  setVar(∀Σ₀∈Σ ⇒ ∃A_Σ₀(Model) ⊨ Σ₀) →
  setVar(A := (∏_Σₖ∈Σ A_Σₖ)/U) →

  // Verify A models T
  assert(
    ∀φ∈T ⇒ (
      F_{φ} ∈ U ∧
      (Φ := {Σ₀∈Σ | A_Σ₀ ⊨ φ}) ⇒
      F_{φ} ⊆ Φ ∧ Φ ∈ U
    )
  ) →

  apply(Los_Theorem) →
  assert(∀φ∈T ⇒ A ⊨ φ) →
  assert(A ⊨ T)
}

note Dependencies() {
  assert(requires(Axiom_of_Choice)) →
  assert(requires(Los_Theorem)) →
  assert(requires(Ultrafilter_Lemma))
}