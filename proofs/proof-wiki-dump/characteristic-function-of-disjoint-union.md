theorem CharacteristicFunction_DisjointUnion() {
  assert(
    ∀X: Set ∧ 
    ∀{Dₙ}ₙ∈ℕ: Sequence[Set] ∧ 
    (∀i,j ∈ ℕ: i≠j → Dᵢ ∩ Dⱼ = ∅) ∧
    D = ⋃ₙ₌₁^∞ Dₙ
    ⇒ χ_D = ∑ₙ₌₁^∞ χ_Dₙ
  )
}

proof CharacteristicFunction_DisjointUnion() {
  setVar(x: X) →
  goal(∑ₙ₌₁^∞ χ_Dₙ(x) = {1 if x ∈ D, 0 if x ∈ X∖D}) →
  
  case1(x ∈ D) {
    assert(x ∈ ⋃ₙ₌₁^∞ Dₙ) →
    assert(∃n ∈ ℕ: x ∈ Dₙ) →
    lemma DisjointSets() {
      assert(∀i,j ∈ ℕ: i≠j → Dᵢ ∩ Dⱼ = ∅) →
      assert(∃!n ∈ ℕ: x ∈ Dₙ)
    } →
    apply(DisjointSets()) →
    assert(χ_Dₙ(x) = 1 for unique n) →
    assert(∑ₙ₌₁^∞ χ_Dₙ(x) = 1)
  } →
  
  case2(x ∈ X∖D) {
    assert(x ∈ X ∧ x ∉ ⋃ₙ₌₁^∞ Dₙ) →
    assert(∀n ∈ ℕ: x ∉ Dₙ) →
    assert(∀n ∈ ℕ: χ_Dₙ(x) = 0) →
    assert(∑ₙ₌₁^∞ χ_Dₙ(x) = 0)
  } →
  
  conclude(χ_D = ∑ₙ₌₁^∞ χ_Dₙ)
}

corollary CharacteristicFunction_FiniteDisjointUnion() {
  assert(
    ∀X: Set ∧
    ∀N ∈ ℕ ∧
    ∀{D₁,...,Dₙ}: Set ∧
    (∀i,j ∈ {1,...,N}: i≠j → Dᵢ ∩ Dⱼ = ∅) ∧
    D = ⋃ₙ₌₁^N Dₙ
    ⇒ χ_D = ∑ₙ₌₁^N χ_Dₙ
  )
}