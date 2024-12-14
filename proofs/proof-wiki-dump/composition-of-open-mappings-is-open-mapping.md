theorem Composition_Open_Mappings() {
  setType(X: TopologicalSpace[τ_X]) ∧
  setType(Y: TopologicalSpace[τ_Y]) ∧
  setType(Z: TopologicalSpace[τ_Z]) ∧
  setMap(f: X → Y, open: true) ∧
  setMap(g: Y → Z, open: true) →
  assert(
    isOpen(g ∘ f: X → Z)
  )
} ↔

proof Composition_Open_Mappings() {
  setVar(U ∈ τ_X) →
  assert(
    f[U] ∈ τ_Y
  ) by(f.isOpen) →
  assert(
    g[f[U]] ∈ τ_Z
  ) by(g.isOpen) →
  assert(
    g[f[U]] = (g ∘ f)[U]
  ) by(function_composition) →
  assert(
    ∀U ∈ τ_X ⇒ (g ∘ f)[U] ∈ τ_Z
  ) →
  conclude(
    isOpen(g ∘ f: X → Z)
  ) by(definition_open_mapping)
}