theorem Cartesian_Product_Equivalence_Relations() {
  let(A: Set, B: Set)
  let(R: EquivRelation(A), S: EquivRelation(B))
  let(T: Relation(A×B))
  assert(
    ∀⟨u,v⟩,⟨x,y⟩ ∈ A×B: ⟨u,v⟩ T ⟨x,y⟩ ↔ (u R x ∧ v S y)
    → T is_equivalence_relation_on A×B
    → ∀a∈A,b∈B: [a,b]_T = {⟨x,y⟩: x∈[a]_R, y∈[b]_S}
  )
} ↔

proof Cartesian_Product_Equivalence_Relations() {
  // Reflexivity
  lemma Reflexivity() {
    setVar(⟨x,y⟩: A×B) →
    assert(x R x) by(R.reflexive) →
    assert(y S y) by(S.reflexive) →
    assert(⟨x,y⟩ T ⟨x,y⟩) by(T.definition)
  } →

  // Symmetry
  lemma Symmetry() {
    setVar(⟨x₁,y₁⟩,⟨x₂,y₂⟩: A×B) →
    assume(⟨x₁,y₁⟩ T ⟨x₂,y₂⟩) →
    assert(x₁ R x₂ ∧ y₁ S y₂) by(T.definition) →
    assert(x₂ R x₁) by(R.symmetric) →
    assert(y₂ S y₁) by(S.symmetric) →
    assert(⟨x₂,y₂⟩ T ⟨x₁,y₁⟩) by(T.definition)
  } →

  // Transitivity
  lemma Transitivity() {
    setVar(⟨x₁,y₁⟩,⟨x₂,y₂⟩,⟨x₃,y₃⟩: A×B) →
    assume(⟨x₁,y₁⟩ T ⟨x₂,y₂⟩ ∧ ⟨x₂,y₂⟩ T ⟨x₃,y₃⟩) →
    assert(x₁ R x₂ ∧ y₁ S y₂ ∧ x₂ R x₃ ∧ y₂ S y₃) by(T.definition) →
    assert(x₁ R x₃) by(R.transitive) →
    assert(y₁ S y₃) by(S.transitive) →
    assert(⟨x₁,y₁⟩ T ⟨x₃,y₃⟩) by(T.definition)
  } →

  apply(Reflexivity()) →
  apply(Symmetry()) →
  apply(Transitivity()) →
  assert(T is_equivalence_relation_on A×B) by(equivalence_relation_definition) →
  assert(∀a∈A,b∈B: [a,b]_T = {⟨x,y⟩: x∈[a]_R, y∈[b]_S}) by(T.definition)
}