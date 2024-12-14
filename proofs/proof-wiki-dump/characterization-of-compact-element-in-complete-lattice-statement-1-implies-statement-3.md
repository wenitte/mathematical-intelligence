theorem Compact_Element_Complete_Lattice() {
  assert(
    ∀L(L = ⟨S,⪯⟩ ∧ isCompleteLattice(L)) ∧
    ∀a∈S(isCompact(a)) →
    ∀A⊆S(a ⪯ sup(A) → ∃F⊆A(isFinite(F) ∧ a ⪯ sup(F)))
  )
} ↔

proof Compact_Element_Complete_Lattice() {
  setDef(isCompact(a) ↔ ∀D⊆S(isDirected(D) ∧ a ⪯ sup(D) → ∃d∈D(a ⪯ d))) →
  
  let(A⊆S: a ⪯ sup(A)) →
  
  define(D = {b∈S | ∃F⊆A(isFinite(F) ∧ b = sup(F))}) →
  
  lemma D_is_Directed() {
    let(x,y ∈ D) →
    assert(∃F,G⊆A(isFinite(F) ∧ isFinite(G) ∧ x = sup(F) ∧ y = sup(G))) →
    let(H = F ∪ G) →
    assert(isFinite(H)) →
    let(z = sup(H)) →
    assert(z ∈ D ∧ x ⪯ z ∧ y ⪯ z) →
    conclude(isDirected(D))
  } →

  lemma Sup_D_Equals_Sup_A() {
    assert(∀x∈D(x ⪯ sup(A))) →
    assert(sup(D) ⪯ sup(A)) →
    assert(∀b∈A(b = sup({b}) ∧ b ∈ D)) →
    assert(sup(A) ⪯ sup(D)) →
    apply(Antisymmetry) →
    conclude(sup(D) = sup(A))
  } →

  apply(isCompact(a)) →
  assert(∃d∈D(a ⪯ d)) →
  assert(∃F⊆A(isFinite(F) ∧ d = sup(F))) →
  conclude(∃F⊆A(isFinite(F) ∧ a ⪯ sup(F)))
}