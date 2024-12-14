theorem CartesianProductFamily() {
  assert(
    let A_∅ := {∅} ∧
    let A_{∅} := {∅, {∅}} ∧
    (A_∅ × A_{∅} = {⟨∅,∅⟩, ⟨∅,{∅}⟩}) ∧
    (∏_{i ∈ A_{∅}} A_i = {{⟨∅,∅⟩, ⟨{∅},∅⟩}, {⟨∅,∅⟩, ⟨{∅},{∅}⟩}})
  )
} ↔

proof CartesianProductFamily() {
  // First part - Cartesian product
  assert(A_∅ × A_{∅}) →
  equals(set ∅ × {∅, {∅}}) →
  equals({⟨∅,∅⟩, ⟨∅,{∅}⟩}) →

  // Second part - Product of family
  assert(∏_{i ∈ A_{∅}} A_i) →
  equals(∏_{i ∈ {∅,{∅}}} A_i) →
  
  lemma UnionDecomposition() {
    assert(⋃_{i ∈ A_{∅}} A_i) →
    equals(⋃_{i ∈ {∅,{∅}}} A_i) →
    equals(⋃{A_∅, A_{∅}}) →
    equals(⋃{{∅}, {∅,{∅}}}) →
    equals({∅} ∪ {∅,{∅}}) →
    equals({∅,{∅}})
  } →

  apply(UnionDecomposition()) →
  
  assert((⋃_{i ∈ A_{∅}} A_i)^{A_{∅}}) →
  equals({∅,{∅}}^{∅,{∅}}) →
  
  lemma MappingConditions() {
    assert(
      ∀f ∈ (⋃_{i ∈ A_{∅}} A_i)^{A_{∅}} ⇒ (
        (f(∅) = ∅) ∧
        (f({∅}) ∈ {∅,{∅}})
      )
    )
  } →
  
  apply(MappingConditions()) →
  
  assert(
    ∏_{i ∈ A_{∅}} A_i = {{⟨∅,∅⟩, ⟨{∅},∅⟩}, {⟨∅,∅⟩, ⟨{∅},{∅}⟩}}
  )
}