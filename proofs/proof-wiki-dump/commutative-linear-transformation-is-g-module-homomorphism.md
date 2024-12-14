theorem CommutativeLinearTransformation_GModule() {
  let(G: Group, V: VectorSpace)
  let(ρ: G → GL(V))  // representation
  let(f: V → V)      // linear transformation
  assert(
    (∀g ∈ G: ρ(g) ∘ f = f ∘ ρ(g)) →
    isGModuleHomomorphism(f,V)
  )
}

proof CommutativeLinearTransformation_GModule() {
  setVar(g: G, v: V) →
  assume(∀g ∈ G: ρ(g) ∘ f = f ∘ ρ(g)) →
  assert(ρ(g)(f(v)) = f(ρ(g)(v))) →
  
  lemma RepresentationModuleCorrespondence() {
    assert(∃φ: G×V → V: 
      isGModule(V,φ) ∧
      (∀g ∈ G, ∀v ∈ V: φ(g,v) = ρ(g)(v))
    )
  } →
  
  apply(RepresentationModuleCorrespondence()) →
  let(φ: G×V → V) →
  assert(ρ(g)(f(v)) = φ(g,f(v))) →
  assert(f(φ(g,v)) = f(ρ(g)(v))) →
  assert(f(φ(g,v)) = φ(g,f(v))) →
  
  byDefinition(GModuleHomomorphism) →
  conclude(isGModuleHomomorphism(f,V))
}