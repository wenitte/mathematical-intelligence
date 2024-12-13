theorem BesselInequalityCorollary() {
  assert(
    ∀V(IsInnerProductSpace(V) ∧
    ∀E(IsOrthonormalSubset(E,V) →
    ∀h∈V(IsCountable({e∈E : ⟨h,e⟩≠0}))))
  )
} ↔

proof BesselInequalityCorollary() {
  setVar(V: InnerProductSpace) →
  setVar(E: OrthonormalSubset(V)) →
  setVar(h: V) →
  
  define(X := {e∈E : ⟨h,e⟩≠0}) →
  define(∀n∈ℕ, Xₙ := {e∈E : |⟨h,e⟩| > 1/n}) →
  assert(X = ⋃_{n=1}^∞ Xₙ) →
  
  lemma FiniteXn() {
    assume(∃m∈ℕ, ¬IsFinite(Xₘ)) →
    assert(∃{eₖ: k∈ℕ}⊆Xₘ(IsOrthonormal({eₖ}) ∧ ∀k(|⟨h,eₖ⟩| > 1/m))) →
    apply(BesselInequality()) →
    assert(∑_{k=1}^∞ |⟨h,eₖ⟩|² ≤ ‖h‖²) →
    assert(∀n∈ℕ(∑_{k=1}^n |⟨h,eₖ⟩|² > n/m²)) →
    assert(∃n∈ℕ(n > m²‖h‖² → ∑_{k=1}^n |⟨h,eₖ⟩|² > ‖h‖²)) →
    contradiction()
  } →
  
  apply(FiniteXn()) →
  assert(∀n∈ℕ(IsFinite(Xₙ))) →
  apply(CountableUnionOfFiniteSets()) →
  assert(IsCountable(X))
}