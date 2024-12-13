theorem AntiLexicographic_Product_Well_Ordered() {
  assert(
    ∀S₁,S₂[
      (well_ordered(⟨S₁,≼₁⟩) ∧ well_ordered(⟨S₂,≼₂⟩)) →
      well_ordered(⟨S₁×S₂,≼ₐ⟩)
    ]
  )
} ↔

proof AntiLexicographic_Product_Well_Ordered() {
  setDef(well_ordered(X) ↔ totally_ordered(X) ∧ well_founded(X)) →
  apply(AntiLex_Product_Totally_Ordered()) →
  assert(totally_ordered(⟨S₁×S₂,≼ₐ⟩)) →
  
  setVar(T: S₁×S₂) →
  setVar(A: P(T), A ≠ ∅) →
  
  define(A₂ := {b ∈ S₂: ∃a[(a,b) ∈ A]}) →
  assert(A₂ ⊆ S₂ ∧ A₂ ≠ ∅) →
  apply(well_ordered(⟨S₂,≼₂⟩)) →
  assert(∃y ∈ A₂[minimal(y,A₂,≼ₐ)]) →
  
  define(Aᵧ := {(a,b) ∈ A: b = y}) →
  define(Aₓ := {a ∈ S₁: (a,y) ∈ A}) →
  assert(Aₓ ⊆ S₁ ∧ Aₓ ≠ ∅) →
  apply(well_ordered(⟨S₁,≼₁⟩)) →
  assert(∃x ∈ Aₓ[minimal(x,Aₓ,≼₁)]) →
  
  assert(minimal((x,y),A,≼ₐ)) →
  
  conclude(
    ∀A ⊆ T[A ≠ ∅ → ∃m ∈ A[minimal(m,A,≼ₐ)]] →
    well_founded(⟨T,≼ₐ⟩) →
    well_ordered(⟨T,≼ₐ⟩)
  )
}