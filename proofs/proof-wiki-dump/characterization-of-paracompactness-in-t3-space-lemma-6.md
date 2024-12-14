theorem Paracompactness_Lemma_6() {
  assert(
    ∀T(T = ⟨X,τ⟩ ∧ IsTopologicalSpace(T)) ∧
    ∀U(U ∈ OpenCover(T)) ∧
    ∀V(V ∈ ClosedLocallyFiniteRefinement(U)) ∧
    ∀x∈X(∃Wx∈τ: x∈Wx ∧ IsFinite({V∈V: V∩Wx≠∅})) ∧
    let W = {Wx: x∈X} ∧
    ∀A(A ∈ ClosedLocallyFiniteRefinement(W)) ∧
    ∀V∈V(V* = X\⋃{A∈A: A∩V=∅}) ∧
    let V* = {V*: V∈V}
    ⇒
    IsOpenLocallyFiniteCover(V*,T)
  )
}

proof Paracompactness_Lemma_6() {
  lemma L4() {
    assert(∀A∈A: IsFinite({V∈V: V∩A≠∅}))
  }

  lemma L11() {
    assert(∀A∈A,V*∈V*: A∩V*≠∅ → A∩V≠∅)
  }

  proof OpenSubsets() {
    setVar(V*∈V*) →
    let Av = {A∈A: A∩V=∅} →
    assert(Av⊆A) →
    apply(LocallyFiniteSubset(Av,A)) →
    apply(ClosedUnionLocallyFinite(Av)) →
    assert(V* = X\⋃Av ∈ τ)
  }

  proof IsCover() {
    setVar(x∈X) →
    assert(∃V∈V: x∈V) →
    apply(L4()) →
    assert(V⊆V*) →
    assert(x∈V*)
  }

  proof LocallyFinite() {
    setVar(x∈X) →
    assert(∃U∈τ: x∈U ∧ IsFinite({A∈A: A∩U≠∅})) →
    let {A1,...,An} = {A∈A: A∩U≠∅} →
    assert(U ⊆ ⋃{A1,...,An}) →
    setVar(V*∈V*: V*∩U≠∅) →
    assert(V*∩⋃{A1,...,An} = ⋃(V*∩Ai)) →
    assert(∃i∈{1,...,n}: V*∩Ai≠∅) →
    apply(L11()) →
    assert(V∩Ai≠∅) →
    assert({V*∈V*: V*∩U} ⊆ {V*∈V*: ∃i(V∩Ai≠∅)}) →
    ∀i(∃Wi∈W: Ai⊆Wi) →
    assert(∀i: IsFinite({V∈V: V∩Wi≠∅})) →
    assert(∀i: IsFinite({V∈V: V∩Ai≠∅})) →
    apply(FiniteUnion()) →
    assert(IsFinite({V*∈V*: V*∩U}))
  }
}