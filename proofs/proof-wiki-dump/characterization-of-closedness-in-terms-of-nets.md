theorem Closedness_Net_Characterization() {
  setContext(X: TopologicalSpace, τ: Topology(X)) →
  assert(
    ∀E ⊆ X ⇒
    (isClosed(E) ↔
      (∀x ∈ X ⇒
        (x ∈ E ↔
          ∃Λ,≼ (isDirectedSet(⟨Λ,≼⟩) ∧
            ∃(x_λ)_λ∈Λ (
              isNet(x_λ) ∧
              ∀λ(x_λ ∈ E) ∧
              convergesTo(x_λ, x)
            )
          )
        )
      )
    )
  )
}

proof Closedness_Net_Characterization() {
  setContext(X: TopologicalSpace, τ: Topology(X)) →
  setVar(E ⊆ X) →
  
  lemma Closed_Closure_Equivalence() {
    assert(isClosed(E) ↔ (∀x ∈ X ⇒ (x ∈ E ↔ x ∈ cl(E))))
  } →
  
  lemma Closure_Net_Characterization() {
    assert(
      ∀x ∈ X ⇒
      (x ∈ cl(E) ↔
        ∃Λ,≼ (isDirectedSet(⟨Λ,≼⟩) ∧
          ∃(x_λ)_λ∈Λ (
            isNet(x_λ) ∧
            ∀λ(x_λ ∈ E) ∧
            convergesTo(x_λ, x)
          )
        )
      )
    )
  } →
  
  apply(Closed_Closure_Equivalence()) →
  apply(Closure_Net_Characterization()) →
  assert(conclusion)
}