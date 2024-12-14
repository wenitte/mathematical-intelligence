theorem Circuit_Subset_Exists() {
  let S: Set[Finite]
  let C: Set[Set[S]] where C.nonEmpty()
  
  assume(CircuitAxioms(C)) where {
    C1: ∅ ∉ C,
    C2: ∀C₁,C₂ ∈ C ⇒ (C₁ ≠ C₂ → C₁ ⊈ C₂),
    C4: ∀C₁,C₂ ∈ C ⇒ (C₁ ≠ C₂ ∧ z ∈ C₁ ∩ C₂ ∧ w ∈ C₁\C₂ → 
        ∃C₃ ∈ C: w ∈ C₃ ⊆ (C₁ ∪ C₂)\{z})
  }

  define(θ(x₁,...,xₖ): Tuple → Tuple) where {
    ∀i ∈ {1,...,k}: θ(x₁,...,xₖ)ᵢ = {
      0 if ∃C ∈ C: xᵢ ∈ C ⊆ {x₁,...,xᵢ}
      1 otherwise
    }
  }

  define(t(x₁,...,xₖ)) where {
    t = Σᵢ₌₁ᵏ θ(x₁,...,xₖ)ᵢ
  }

  define(ρ: P(S) → ℤ) where {
    ∀A ⊆ S: ρ(A) = {
      0 if A = ∅
      t(x₁,...,xₖ) if A = {x₁,...,xₖ}
    }
  }

  let M = (S,I) where M.isMatroid() ∧ M.rankFunction = ρ
  let Cₘ = M.circuits()

  assert(
    ∀C ∈ C ⇒ ∃C' ∈ Cₘ: C' ⊆ C
  )
} ↔

proof Circuit_Subset_Exists() {
  let C ∈ C →
  apply(C1) → 
  assert(∃y ∈ C) →
  assert(C ⊆ (C\{y}) ∪ {y}) →

  lemma Rank_Union_Property() {
    assert(
      ∀X ⊆ S, y ∈ S\X ⇒ 
      (ρ(X ∪ {y}) = ρ(X) ↔ ∃C ∈ C: y ∈ C ⊆ X ∪ {y})
    )
  } →

  assert(ρ(C) = ρ(C\{y})) →
  apply(Rank_Bounds_Theorem()) →
  assert(ρ(C\{y}) ≤ |C\{y}|) →
  assert(|C\{y}| < |C|) →
  apply(Independent_Set_Rank_Theorem()) →
  assert(C ∉ I) →
  apply(Dependent_Contains_Circuit_Theorem()) →
  assert(∃C' ∈ Cₘ: C' ⊆ C)
}