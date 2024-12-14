theorem Complement_Operation_Isomorphism() {
  define(S: Set) →
  define(𝒫(S): PowerSet(S)) →
  define(ℂ: 𝒫(S) → 𝒫(S), X ↦ S∖X) →
  assert(
    (∀X ∈ 𝒫(S) → ℂ(X) = S∖X) ∧
    IsOrderedSemigroup(⟨𝒫(S),∩,⊆⟩) ∧
    IsOrderedSemigroup(⟨𝒫(S),∩,⊇⟩) ∧
    IsOrderedSemigroup(⟨𝒫(S),∪,⊆⟩) ∧
    IsOrderedSemigroup(⟨𝒫(S),∪,⊇⟩) →
    (IsIsomorphism(ℂ: ⟨𝒫(S),∩,⊆⟩ → ⟨𝒫(S),∪,⊇⟩) ∧
     IsIsomorphism(ℂ: ⟨𝒫(S),∩,⊇⟩ → ⟨𝒫(S),∪,⊆⟩))
  )
} ↔

proof Complement_Operation_Isomorphism() {
  lemma Structures_Are_OrderedSemigroups() {
    assert(
      IsOrderedSemigroup(⟨𝒫(S),∩,⊆⟩) ∧
      IsOrderedSemigroup(⟨𝒫(S),∩,⊇⟩) ∧
      IsOrderedSemigroup(⟨𝒫(S),∪,⊆⟩) ∧
      IsOrderedSemigroup(⟨𝒫(S),∪,⊇⟩)
    )
  } →

  lemma Complement_Is_Bijective() {
    assert(IsBijective(ℂ))
  } →

  lemma Complement_Is_Involution() {
    assert(∀X ∈ 𝒫(S) → ℂ(ℂ(X)) = X)
  } →

  lemma DeMorgans_Laws() {
    assert(∀T₁,T₂ ∈ 𝒫(S) →
      (ℂ(T₁ ∩ T₂) = ℂ(T₁) ∪ ℂ(T₂)) ∧
      (ℂ(T₁ ∪ T₂) = ℂ(T₁) ∩ ℂ(T₂))
    )
  } →

  lemma Complement_Inverts_Order() {
    assert(∀A,B ∈ 𝒫(S) →
      (A ⊆ B ↔ ℂ(A) ⊇ ℂ(B))
    )
  } →

  apply(Complement_Is_Bijective()) →
  apply(DeMorgans_Laws()) →
  apply(Complement_Inverts_Order()) →
  
  assert(
    IsIsomorphism(ℂ: ⟨𝒫(S),∩,⊆⟩ → ⟨𝒫(S),∪,⊇⟩) ∧
    IsIsomorphism(ℂ: ⟨𝒫(S),∩,⊇⟩ → ⟨𝒫(S),∪,⊆⟩)
  )
}