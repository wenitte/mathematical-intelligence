theorem CompactFirstCountableIsSequentiallyCompact() {
  assert(
    ∀T(IsTopologicalSpace(T) ∧ IsCompact(T) ∧ IsFirstCountable(T)) →
    IsSequentiallyCompact(T)
  )
} ↔

proof CompactFirstCountableIsSequentiallyCompact() {
  setVar(T: TopologicalSpace, S: Set) →
  assume(T = ⟨S,τ⟩ ∧ IsCompact(T) ∧ IsFirstCountable(T)) →
  
  letSeq(x_n: ℕ → S) →
  
  byContradiction() {
    assume(¬∃(subseq: ℕ → ℕ)(IsConvergent(x_n ∘ subseq))) →
    
    lemma NoAccumulationPoint() {
      assert(¬∃p ∈ S(IsAccumulationPoint(p, x_n))) →
      apply(AccumulationPointFirstCountableImpliesSubseqLimit())
    } →
    
    ∀x ∈ S(
      ∃U_x ∈ τ(
        x ∈ U_x ∧
        IsFinite({n ∈ ℕ | x_n ∈ U_x})
      )
    ) →
    
    letSet(𝓤 = {U_x | x ∈ S}) →
    assert(IsOpenCover(𝓤, S)) →
    
    byCompactness() {
      ∃m ∈ ℕ(
        ∃{x₁,...,xₘ} ⊆ S(
          S = ⋃ᵢ₌₁ᵐ U_xᵢ
        )
      )
    } →
    
    assert(IsFinite({n ∈ ℕ | x_n ∈ ⋃ᵢ₌₁ᵐ U_xᵢ})) →
    assert(∀n ∈ ℕ(x_n ∈ S)) →
    
    contradiction()
  } →
  
  conclude(IsSequentiallyCompact(T))
}