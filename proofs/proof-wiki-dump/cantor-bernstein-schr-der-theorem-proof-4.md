theorem Cantor_Bernstein_Schroeder() {
  assert(
    ∀S,T: (T ∼ S₁ ⊆ S ∧ S ∼ T₁ ⊆ T) → (S ∼ T)
  )
} ↔

proof Cantor_Bernstein_Schroeder() {
  setVar(S,T: Set) →
  setVar(f: S → T₁) →
  setVar(g: T → S₁) →
  
  lemma Construct_Sequences() {
    ∀a ∈ S →
    define(
      a₀ = a ∧
      a₁ = f(a₀) ∧
      a₂ = g(a₁) ∧
      ∀n≥1: a₂ₙ₋₁ = f(a₂ₙ₋₂) ∧
      ∀n≥1: a₂ₙ = g(a₂ₙ₋₁) ∧
      ∀n≥1: a₋₂ₙ₊₁ = g⁻¹(a₋₂ₙ₊₂) [if exists] ∧
      ∀n≥1: a₋₂ₙ = f⁻¹(a₋₂ₙ₊₁) [if exists]
    )
  } →

  define(
    [a]S = {...,a₋₂ₙ,...,a₋₂,a₀,a₂,...,a₂ₙ,...} ⊆ S ∧
    [a]T = {...,a₋₂ₙ₊₁,...,a₋₁,a₁,...,a₂ₙ₋₁,...} ⊆ T
  ) →

  lemma Partition_Property() {
    assert(
      AS = {[a]S: a ∈ S} partitions S ∧
      AT = {[a]T: a ∈ T} partitions T
    )
  } →

  lemma Bijection_Cases() {
    case1(¬∃m,n: a₂ₘ = a₂ₙ ∧ m≠n) → 
      assert([a]S and [a]T countably infinite) →
      assert(∃h: [a]S ↔ [a]T)
    
    case2(∃m,n: a₂ₘ = a₂ₙ ∧ m≠n) →
      assert(
        ∀k≥0: a₂ₘ₊ₖ = a₂ₙ₊ₖ ∧
        ∀k≥0: a₂ₘ₋ₖ = a₂ₙ₋ₖ [where exist]
      ) →
      define(
        h: [a]S → [a]T,
        h(a₂ᵢ) = a₂ᵢ₊₁ for i∈[m,n-1]
      ) →
      assert(h bijective)
  } →

  construct(
    H: S → T,
    H|[a]S = h[a]S for each partition element
  ) →
  
  assert(H bijective) →
  conclude(S ∼ T)
}