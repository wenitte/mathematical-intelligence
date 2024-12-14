theorem OpenExtension_Separability() {
  assert(
    ∀T(IsTopologicalSpace(T) ∧ T = ⟨S,τ⟩ ∧
    ∃T*_p̄(IsOpenExtensionSpace(T*_p̄, T) ∧ T*_p̄ = ⟨S*_p,τ*_p̄⟩)) ⇒
    (IsSeparable(T*_p̄) ↔ IsSeparable(T))
  )
} ↔

proof OpenExtension_Separability() {
  // Forward direction
  lemma Forward() {
    assume(IsSeparable(T)) →
    ∃H(IsCountable(H) ∧ H ⊆ S ∧ IsDense(H,T)) →
    assert(H⁻ = S where H⁻ = Closure(H)) →
    assert(S ⊆ H⁻ = S⁻ ⊆ S*_p) →
    assert(H⁻ = S ∨ H⁻ = S ∪ {p} = S*_p) →
    apply(Theorem_TopologicalClosureIsClosed()) →
    assert(IsClosed(H⁻, T*_p̄)) →
    assert(∀C(IsClosed(C,T*_p̄) ↔ ∃U(U ∈ τ ∧ C = S*_p \ U))) →
    assert(p ∉ τ ⇒ ¬IsClosed(S, T*_p̄)) →
    assert(H⁻ = S*_p) →
    conclude(IsSeparable(T*_p̄))
  }

  // Reverse direction
  lemma Reverse() {
    assume(IsSeparable(T*_p̄) ∧ ¬IsSeparable(T)) →
    ∃H(IsCountable(H) ∧ H ⊆ S*_p ∧ IsDense(H,T*_p̄)) →
    assert(H ⊆ S ⇒ H⁻ = S) →
    assert(p ∈ H) →
    setVar(V = H \ {p}) →
    apply(Theorem_TopologicalClosureIsClosed()) →
    assert(IsClosed(V⁻, T*_p̄)) →
    assert(V ∪ {p} = H ⊆ V⁻) →
    apply(Theorem_SetClosureSmallestClosed()) →
    assert(S*_p = H⁻ ⊆ V⁻ ⇒ IsDense(V,T*_p̄)) →
    assert(IsDense(V,T)) →
    apply(Theorem_SubsetOfCountableIsCountable()) →
    assert(IsCountable(V)) →
    assert(IsSeparable(T)) →
    contradiction()
  }

  apply(Forward()) →
  apply(Reverse()) →
  conclude(IsSeparable(T*_p̄) ↔ IsSeparable(T))
}