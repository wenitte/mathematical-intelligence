theorem Centralizer_Subset_Intersection() {
  assert(
    ∀G:Group, ∀S⊆G → 
    C_G(S) = ⋂_{x∈S} C_G(x)
  )
} ↔

proof Centralizer_Subset_Intersection() {
  setVar(G: Group) →
  setVar(S: Set, S⊆G) →
  
  lemma CentralizerDef() {
    assert(
      C_G(S) = {g∈G : ∀x∈S : g∘x = x∘g}
    )
  } →

  lemma SingleElementCentralizer() {
    assert(
      ∀x∈G → C_G(x) = {g∈G : g∘x = x∘g}
    )
  } →

  lemma IntersectionDef() {
    assert(
      {g∈G : ∀x∈S : g∈C_G(x)} = ⋂_{x∈S} C_G(x)
    )
  } →

  apply(CentralizerDef()) →
  assert(C_G(S) = {g∈G : ∀x∈S : g∘x = x∘g}) →
  apply(SingleElementCentralizer()) →
  assert(C_G(S) = {g∈G : ∀x∈S : g∈C_G(x)}) →
  apply(IntersectionDef()) →
  assert(C_G(S) = ⋂_{x∈S} C_G(x))
}