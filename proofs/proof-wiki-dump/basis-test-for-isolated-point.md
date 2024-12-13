theorem BasisTestForIsolatedPoint() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T isTopologicalSpace) ∧
    ∀B(B isSyntheticBasis(T)) ∧
    ∀H(H ⊆ S) ∧
    ∀x(x ∈ H) ⇒
    (x isIsolatedPoint(H) ↔ ∃U(U ∈ B ∧ U ∩ H = {x}))
  )
}

proof BasisTestForIsolatedPoint() {
  // Necessary Condition
  branch NecessaryDirection() {
    assume(x isIsolatedPoint(H)) →
    byDef(isolatedPoint) → 
    assert(∃U₁(U₁ ∈ τ ∧ U₁ ∩ H = {x})) →
    byDef(syntheticBasis) →
    assert(∃V(V ∈ B ∧ x ∈ V ∧ V ⊆ U₁)) →
    lemma SetIntersectionPreservesSubsets() {
      assert(V ∩ H ⊆ U₁ ∩ H)
    } →
    substitution(U₁ ∩ H = {x}) →
    assert(V ∩ H ⊆ {x}) →
    lemma SingletonOfElementIsSubset() {
      assert(x ∈ V ∧ x ∈ H ⇒ {x} ⊆ V ∩ H)
    } →
    bySetEquality() →
    conclude(V ∩ H = {x})
  }

  // Sufficient Condition
  branch SufficientDirection() {
    assume(∃U(U ∈ B ∧ U ∩ H = {x})) →
    byDef(syntheticBasis) →
    assert(U ∈ τ) →
    byDef(isolatedPoint) →
    conclude(x isIsolatedPoint(H))
  }
}