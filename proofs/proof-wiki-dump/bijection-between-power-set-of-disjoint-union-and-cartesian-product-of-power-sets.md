theorem PowerSet_DisjointUnion_Bijection() {
  assert(
    ∀S,T: (S ∩ T = ∅) →
    ∃φ: (𝒫(S ∪ T) ↔ 𝒫(S) × 𝒫(T))
  )
}

proof PowerSet_DisjointUnion_Bijection() {
  setVar(S: Set, T: Set) →
  assume(S ∩ T = ∅) →
  
  define(φ: 𝒫(S) × 𝒫(T) → 𝒫(S ∪ T)) {
    ∀A ∈ 𝒫(S), ∀B ∈ 𝒫(T): φ(A,B) = A ∪ B
  } →

  lemma LeftTotal() {
    assert(∀A ⊆ S, ∀B ⊆ T: (A,B) ∈ dom(φ)) →
    by(Definition_PowerSet ∧ Definition_CartesianProduct)
  } →

  lemma ManyToOne() {
    assert(
      ∀A₁,A₂ ⊆ S, ∀B₁,B₂ ⊆ T:
      φ(A₁,B₁) = φ(A₂,B₂) → (A₁,B₁) = (A₂,B₂)
    ) →
    assume(φ(A₁,B₁) = φ(A₂,B₂)) →
    assert(A₁ ∪ B₁ = A₂ ∪ B₂) →
    by(S ∩ T = ∅ → A₁ = A₂ ∧ B₁ = B₂)
  } →

  lemma Surjective() {
    assert(
      ∀C ∈ 𝒫(S ∪ T): ∃A ∈ 𝒫(S), ∃B ∈ 𝒫(T):
      φ(A,B) = C
    ) →
    let(A = C ∩ S, B = C ∩ T) →
    by(S ∩ T = ∅ → C = (C ∩ S) ∪ (C ∩ T))
  } →

  lemma Injective() {
    assert(
      ∀A₁,A₂ ∈ 𝒫(S), ∀B₁,B₂ ∈ 𝒫(T):
      (A₁,B₁) ≠ (A₂,B₂) → φ(A₁,B₁) ≠ φ(A₂,B₂)
    ) →
    assume((A₁,B₁) ≠ (A₂,B₂)) →
    case(A₁ ⊈ A₂) {
      ∃x: (x ∈ A₁ ∧ x ∉ A₂) →
      x ∈ φ(A₁,B₁) ∧ x ∉ φ(A₂,B₂) →
      φ(A₁,B₁) ≠ φ(A₂,B₂)
    }
  } →

  apply(LeftTotal() ∧ ManyToOne() ∧ Surjective() ∧ Injective()) →
  conclude(φ is_bijection)
}