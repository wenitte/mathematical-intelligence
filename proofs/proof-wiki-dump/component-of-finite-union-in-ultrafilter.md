theorem Component_Finite_Union_Ultrafilter() {
  let(S: Set, S ≠ ∅) ∧
  let(𝒰: Ultrafilter(S)) ∧
  let({Y₁,...,Yₙ}: SetOf(Subsets(S))) ∧
  assert(∀i,j ∈ {1,...,n}, i≠j ⇒ Yᵢ ∩ Yⱼ = ∅) ∧
  assert(S = Y₁ ∪ ... ∪ Yₙ) →
  assert(∃!k ∈ {1,...,n}: Yₖ ∈ 𝒰)
} ↔

proof Component_Finite_Union_Ultrafilter() {
  assume(∀k ∈ {1,...,n}: Yₖ ≠ ∅) →
  
  subproof Uniqueness() {
    assume(∃j,k ∈ {1,...,n}: j≠k ∧ Yⱼ ∈ 𝒰 ∧ Yₖ ∈ 𝒰) →
    assert(Yⱼ ∩ Yₖ = ∅) →
    apply(UltrafilterProperty.FiniteIntersection(𝒰)) →
    assert(Yⱼ ∈ 𝒰 ∧ Yₖ ∈ 𝒰 ⇒ Yⱼ ∩ Yₖ ∈ 𝒰) →
    assert(∅ ∈ 𝒰) →
    contradiction()
  } →
  
  subproof Existence() {
    assume(∀k ∈ {1,...,n}: Yₖ ∉ 𝒰) →
    assert(∀i ∈ {1,...,n}: Yᵢᶜ = ∪{Yₖ: k≠i}) →
    apply(UltrafilterProperty.Complement(𝒰)) →
    assert(∀i ∈ {1,...,n}: Yᵢᶜ ∈ 𝒰) →
    assert(∩ᵢ₌₁ⁿ ∪{Yₖ: k≠i} = ∅) →
    apply(UltrafilterProperty.FiniteIntersection(𝒰)) →
    assert(∅ ∈ 𝒰) →
    contradiction()
  } →
  
  conclude(∃!k ∈ {1,...,n}: Yₖ ∈ 𝒰)
}