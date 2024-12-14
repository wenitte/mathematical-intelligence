theorem SubclassUniversal() {
  assert(
    ∀A ∈ Class ⇒ A ⊆ V
    where V := UniversalClass
  )
} ↔

proof SubclassUniversal() {
  setVar(A: Class) →
  setVar(V: UniversalClass) →
  
  lemma ClassDef() {
    assert(A = {x | x ∈ Sets})
  } →
  
  lemma UniversalDef() {
    assert(V = {x | x ∈ Sets})
  } →
  
  setVar(x: Set) →
  assume(x ∈ A) →
  
  apply(UniversalDef()) →
  assert(x ∈ V) →
  
  conclude(x ∈ A → x ∈ V) →
  
  apply(SubclassDef(A, V)) →
  assert(A ⊆ V)
}