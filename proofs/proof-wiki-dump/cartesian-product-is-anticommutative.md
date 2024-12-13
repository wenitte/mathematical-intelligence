theorem CartesianProduct_Anticommutative() {
  assert(
    ∀S,T ∈ Set: S,T ≠ ∅ →
    (S × T = T × S ↔ S = T)
  )
}

proof CartesianProduct_Anticommutative() {
  setVar(S,T: Set) →
  assume(S × T = T × S) →
  
  lemma ElementEquivalence() {
    assert(
      ∀x,y: (x ∈ S ∧ y ∈ T) ↔ 
      ⟨x,y⟩ ∈ S × T ↔
      ⟨x,y⟩ ∈ T × S ↔
      (x ∈ T ∧ y ∈ S)
    )
  } →

  apply(ElementEquivalence()) →
  assert(
    x ∈ S ↔ x ∈ T ∧
    y ∈ T ↔ y ∈ S
  ) →
  
  apply(SetEquality_Definition()) →
  assert(S = T)
}

corollary CartesianProduct_Anticommutative_Empty() {
  assert(
    ∀S,T ∈ Set:
    S × T = T × S ↔ (S = T ∨ S = ∅ ∨ T = ∅)
  )
} ↔

proof CartesianProduct_Anticommutative_Empty() {
  setVar(S,T: Set) →
  lemma EmptyCartesian() {
    assert(
      (S = ∅ ∨ T = ∅) →
      S × T = ∅ ∧ T × S = ∅
    )
  } →
  
  apply(EmptyCartesian()) →
  apply(CartesianProduct_Anticommutative()) →
  assert(
    S × T = T × S ↔ (S = T ∨ S = ∅ ∨ T = ∅)
  )
}