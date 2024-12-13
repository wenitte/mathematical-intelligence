theorem Basic_Universe_Is_Inductive() {
  assert(
    ∀V[IsBasicUniverse(V) → IsInductiveClass(V)]
  )
} ↔

proof Basic_Universe_Is_Inductive() {
  setVar(V: Class) →
  assert(IsBasicUniverse(V) → ContainsAllSets(V)) →
  
  lemma Empty_Set_In_V() {
    assert(∃∅[IsSet(∅)]) by AxiomEmptySet() →
    assert(∅ ∈ V) by ContainsAllSets(V)
  } →
  
  lemma Power_Set_Closure() {
    assert(∀x[IsSet(x) → IsSet(𝒫(x))]) by AxiomPowers() →
    assert(∀x[IsSet(x) → x ⊆ 𝒫(x)])
  } →
  
  lemma Singleton_Is_Set() {
    assert(∀x[IsSet(x) → IsSet({x})]) by AxiomSwelledness()
  } →
  
  lemma Union_Is_Set() {
    assert(∀x[IsSet(x) → IsSet(⋃x)]) by AxiomUnions() →
    assert(∀x[IsSet(x) → IsSet(x ∪ {x})])
  } →
  
  apply(Empty_Set_In_V()) ∧
  apply(Power_Set_Closure()) ∧
  apply(Singleton_Is_Set()) ∧
  apply(Union_Is_Set()) →
  
  assert(
    (∅ ∈ V) ∧
    (∀x[x ∈ V → x ∪ {x} ∈ V]) →
    IsInductiveClass(V)
  )
}