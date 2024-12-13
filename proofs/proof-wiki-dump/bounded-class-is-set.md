theorem Bounded_Class_Is_Set() {
  assert(
    ∀B,V,x [
      (IsClass(B) ∧ 
       IsSubclass(B,V) ∧ 
       IsBasicUniverse(V) ∧
       IsBoundedBy(B,x) ∧
       IsSet(x)) →
      IsSet(B)
    ]
  )
} ↔

proof Bounded_Class_Is_Set() {
  setVar(B: Class, V: Class, x: Set) →
  assert(∀b ∈ B → b ⊆ x) →
  assert(∀b ∈ B → b ∈ 𝒫(x)) →
  assert(B ⊆ 𝒫(x)) →
  
  lemma PowerSet_Is_Set() {
    assert(IsSet(x) → IsSet(𝒫(x)))
  } →
  
  apply(PowerSet_Is_Set()) →
  assert(𝒫(x) ∈ V) →
  
  lemma Swelled_Class_Property() {
    assert(
      IsBasicUniverse(V) ∧ 
      IsSet(𝒫(x)) →
      ∀C[C ⊆ 𝒫(x) → C ∈ V]
    )
  } →
  
  apply(Swelled_Class_Property()) →
  assert(B ∈ V) →
  assert(B ∈ V → IsSet(B)) →
  conclude(IsSet(B))
}