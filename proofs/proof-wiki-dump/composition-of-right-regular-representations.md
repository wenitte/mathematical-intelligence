theorem RightRegularRepComposition() {
  assert(
    ∀S(isSemigroup(S) ∧
    ∀x,y∈S(
      ρ_x: S → S ∧
      ρ_y: S → S ∧
      (ρ_x ∘ ρ_y = ρ_{y*x})
    ))
  )
} ↔

proof RightRegularRepComposition() {
  setVar(S: Semigroup) →
  setVar(x,y,z: S) →
  
  assert((ρ_x ∘ ρ_y)(z)) →
  
  lemma CompositionDef() {
    assert((ρ_x ∘ ρ_y)(z) = ρ_x(ρ_y(z)))
  } →
  apply(CompositionDef()) →
  
  lemma RightRegRep1() {
    assert(ρ_y(z) = z * y)
  } →
  apply(RightRegRep1()) →
  
  lemma RightRegRep2() {
    assert(ρ_x(z * y) = (z * y) * x)
  } →
  apply(RightRegRep2()) →
  
  lemma SemigroupAssoc() {
    assert((z * y) * x = z * (y * x))
  } →
  apply(SemigroupAssoc()) →
  
  lemma RightRegRep3() {
    assert(z * (y * x) = ρ_{y*x}(z))
  } →
  apply(RightRegRep3()) →
  
  assert((ρ_x ∘ ρ_y)(z) = ρ_{y*x}(z)) →
  conclude(ρ_x ∘ ρ_y = ρ_{y*x})
}