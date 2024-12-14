theorem CompositionMappingRestricted() {
  assert(
    ∀A,B,C: Sets ∧
    ∀f: A→B ∧ 
    ∀g: B→C ∧
    let f[A] = Image(f,A) ∧
    let f₁ = f↾(A×f[A]): A→f[A] ∧
    let g₁ = g↾f[A]: f[A]→C ∧
    let h₁ = g₁∘f₁: A→C ∧
    let h₂ = g∘f: A→C ⇒
    h₁ = h₂
  )
} ↔

proof CompositionMappingRestricted() {
  lemma WellDefined() {
    assert(f₁: A→f[A] is_mapping) →
    assert(g₁: f[A]→C is_mapping) →
    assert(h₁: A→C is_mapping)
  } →
  
  setVar(a: A) →
  
  assert(h₁(a) = g₁(f₁(a))) by(CompositeDef) →
  assert(g₁(f₁(a)) = g(f₁(a))) by(RestrictionDef) →
  assert(g(f₁(a)) = g(f(a))) by(RestrictionDef) →
  assert(g(f(a)) = h₂(a)) by(CompositeDef) →
  
  apply(MappingEquality) {
    assert(
      ∀a∈A: h₁(a) = h₂(a) ⇒
      h₁ = h₂
    )
  }
}