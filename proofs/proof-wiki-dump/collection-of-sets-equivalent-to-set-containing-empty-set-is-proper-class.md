theorem SetEquivToSingletonIsProper() {
  assert(
    let S = {∅} ∧
    let C = {x | ∃y: x ≅ S} →
    IsProperClass(C)
  )
} ↔

proof SetEquivToSingletonIsProper() {
  assert(C = {x | ∃y: x = {y}}) → // by definition of cardinality
  
  lemma DefineSurjection() {
    setMap(f: C → V) →
    assert(∀x ∈ C: f({x}) = x)
  } →
  
  apply(DefineSurjection()) →
  
  lemma SurjectionProof() {
    assert(∀y ∈ V →
      {y} ∈ C ∧
      f({y}) = y →
      ∃x ∈ C: f(x) = y
    )
  } →
  
  apply(SurjectionProof()) →
  
  lemma UniversalClassIsProper() {
    assert(IsProperClass(V))
  } →
  
  apply(UniversalClassIsProper()) →
  
  theorem SurjectionToProperImpliesProper() {
    assert(
      ∀A,B: (∃f: A ↠ B) ∧ IsProperClass(B) →
      IsProperClass(A)
    )
  } →
  
  apply(SurjectionToProperImpliesProper()) →
  assert(IsProperClass(C))
}