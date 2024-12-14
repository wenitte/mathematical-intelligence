theorem Openness_Net_Characterization() {
  assert(
    ∀X[TopologicalSpace(X)] ∧ ∀U[U ⊆ X] ↔
    (U ∈ τ ↔ 
      ∀x[x ∈ U] ∧ 
      ∀Λ[DirectedSet(Λ, ≼)] ∧
      ∀{xλ}[Net({xλ}, Λ) ∧ Converges({xλ}, x)] →
      ∃λ[λ ∈ Λ ∧ xλ ∈ U])
  )
}

proof Openness_Net_Characterization() {
  // Necessary Condition
  lemma Necessary() {
    assume(U ∈ τ) →
    setVar(x ∈ U) →
    setVar(Λ: DirectedSet) →
    setVar({xλ}: Net(Λ)) →
    assume(Converges({xλ}, x)) →
    apply(NetConvergenceDef()) →
    assert(∃λ₀[λ₀ ∈ Λ ∧ ∀λ[λ₀ ≼ λ → xλ ∈ U]]) →
    conclude(∃λ[λ ∈ Λ ∧ xλ ∈ U])
  }

  // Sufficient Condition
  lemma Sufficient() {
    assume(
      ∀x[x ∈ U] ∧
      ∀Λ[DirectedSet(Λ)] ∧
      ∀{xλ}[Net({xλ}, Λ) ∧ Converges({xλ}, x)] →
      ∃λ[λ ∈ Λ ∧ xλ ∈ U]
    ) →
    contradict(U ∉ τ) →
    assert(X∖U not closed) →
    apply(ClosedSetClosure()) →
    assert(cl(X∖U) ≠ X∖U) →
    setVar(x ∈ cl(X∖U) ∩ U) →
    apply(PointClosureLimitNet()) →
    assert(∃Λ,{xλ}[
      DirectedSet(Λ) ∧
      Net({xλ}, Λ) ∧
      ∀λ[xλ ∈ X∖U] ∧
      Converges({xλ}, x)
    ]) →
    apply(hypothesis) →
    assert(∃λ[xλ ∈ U]) →
    assert(contradiction(xλ ∈ U ∧ xλ ∈ X∖U))
  }

  apply(Necessary()) ∧ apply(Sufficient())
}