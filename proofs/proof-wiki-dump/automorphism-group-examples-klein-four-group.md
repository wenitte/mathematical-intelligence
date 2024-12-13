theorem Klein_Four_Group_Automorphism() {
  assert(
    ∀V: Klein4Group, Aut(V) ≅ S₃
  )
} ↔

proof Klein_Four_Group_Automorphism() {
  setVar(V: Klein4Group) →
  setVar(f: V → V, bijective) →
  assert(f(e) = e) →
  
  lemma NonIdentityProduct() {
    assert(
      ∀a,b ∈ V\{e} ∧ a≠b → ∃c ∈ V\{e}: ab = c
    )
  } →
  
  lemma HomomorphismProperty() {
    assert(
      ∀v,v' ∈ V\{e} →
      f(vv') = f(v)·f(v')
    )
  } →
  
  lemma IdentityElement() {
    assert(
      ∀v ∈ V →
      f(ev) = f(e)·f(v) = e·f(v) = f(v)
    )
  } →
  
  lemma OrderTwo() {
    assert(
      ∀v ∈ V\{e} →
      f(v²) = f(v)·f(v) = e
    )
  } →
  
  apply(HomomorphismProperty(), IdentityElement(), OrderTwo()) →
  assert(
    ∀σ ∈ Perm(V\{e}) →
    ∃f ∈ Aut(V): f|_{V\{e}} = σ
  ) →
  
  assert(|Aut(V)| = 3!) →
  assert(Aut(V) ≅ S₃)
}