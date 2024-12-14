theorem SubObjectsPreorderCategory() {
  let(C: MetaCategory)
  let(c: Object(C))
  let(SubC: Category)
  assert(
    SubC = SubObjects(C, c) →
    IsPreorderCategory(SubC)
  )
} ↔

proof SubObjectsPreorderCategory() {
  lemma SubObjectsIsCategory() {
    assert(IsCategory(SubC))
  } →
  
  lemma PreorderDefinition() {
    assert(
      IsPreorderCategory(X) ↔ 
      ∀m,m',f,g [
        (f: m → m' ∧ g: m → m') →
        f = g
      ]
    )
  } →
  
  setVar(m, m': Object(SubC)) →
  setVar(f,g: Morphism(m → m')) →
  
  assert(
    CommutativeDiagram(
      m ∘ f = m' ∧
      m ∘ g = m'
    )
  ) →
  
  lemma SubObjectIsMonomorphism() {
    assert(
      ∀x ∈ SubObjects(C,c) →
      IsMonomorphism(x)
    )
  } →
  
  apply(SubObjectIsMonomorphism(), m') →
  assert(IsMonomorphism(m')) →
  assert(m ∘ f = m ∘ g) →
  assert(f = g) →
  
  apply(PreorderDefinition()) →
  assert(IsPreorderCategory(SubC))
}