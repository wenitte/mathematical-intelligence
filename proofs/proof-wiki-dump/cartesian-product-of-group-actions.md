theorem CartesianProduct_GroupActions() {
  let G be Group(∘)
  let S, T be Set
  let *_S: G × S → S
  let *_T: G × T → T
  assert(
    IsGroupAction(*_S) ∧ IsGroupAction(*_T) →
    ∃*: G × (S × T) → S × T where
    ∀g∈G, ∀s∈S, ∀t∈T:
    g * ⟨s,t⟩ = ⟨g *_S s, g *_T t⟩ →
    IsGroupAction(*)
  )
} ↔

proof CartesianProduct_GroupActions() {
  setVar(g,h: G)
  setVar(s: S)
  setVar(t: T)

  // Prove GA1: (g ∘ h) * x = g * (h * x)
  lemma GA1_Proof() {
    assert(g * (h * ⟨s,t⟩)) →
    assert(g * ⟨h *_S s, h *_T t⟩) by def(*) →
    assert(⟨g *_S (h *_S s), g *_T (h *_T t)⟩) by def(*) →
    assert(⟨(g ∘ h) *_S s, (g ∘ h) *_T t⟩) by GA1(*_S,*_T) →
    assert((g ∘ h) * ⟨s,t⟩) by def(*)
  }

  // Prove GA2: e * x = x
  lemma GA2_Proof() {
    assert(e * ⟨s,t⟩) →
    assert(⟨e *_S s, e *_T t⟩) by def(*) →
    assert(⟨s,t⟩) by GA2(*_S,*_T)
  }

  apply(GA1_Proof())
  apply(GA2_Proof()) →
  assert(IsGroupAction(*))
}