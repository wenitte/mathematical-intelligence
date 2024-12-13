theorem BesselInequalityCorollary2() {
  assert(
    ∀V(InnerProductSpace(V) ∧ 
    ∀E(OrthonormalSet(E, V) ∧
    ∀h ∈ V ⇒
    ∑_{e∈E} |⟨h,e⟩|^2 ≤ ‖h‖^2))
  )
} ↔

proof BesselInequalityCorollary2() {
  setVar(V: InnerProductSpace) →
  setVar(E: OrthonormalSet(V)) →
  setVar(h: V) →
  
  lemma CountableNonZero() {
    assert(
      {e ∈ E : ⟨h,e⟩ ≠ 0} is countable
    )
  } →
  
  apply(CountableNonZero()) →
  setVar(X := {e ∈ E : ⟨h,e⟩ ≠ 0}) →
  assert(∃{e_k}_{k∈ℕ}(X = {e_k : k ∈ ℕ})) →
  setVar(X_n := {e_k : k ≤ n}) →
  
  apply(BesselInequality()) →
  assert(∑_{k=1}^∞ |⟨h,e_k⟩|^2 converges) ∧
  assert(∑_{k=1}^∞ |⟨h,e_k⟩|^2 ≤ ‖h‖^2) →
  
  lemma ConvergenceEquality() {
    setVar(ε > 0) →
    assert(∃N_ε ∈ ℕ(
      ∀F(F finite ∧ F ⊇ X_{N_ε} ⇒
      |∑_{e∈F} |⟨h,e⟩|^2 - ∑_{k=1}^∞ |⟨h,e_k⟩|^2| < ε)
    ))
  } →
  
  apply(ConvergenceEquality()) →
  assert(∑_{e∈E} |⟨h,e⟩|^2 = ∑_{k=1}^∞ |⟨h,e_k⟩|^2) →
  
  conclude(∑_{e∈E} |⟨h,e⟩|^2 ≤ ‖h‖^2)
}