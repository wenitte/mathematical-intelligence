theorem AlexandroffExtension_IsTopology() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T ≠ ∅ ∧ isTopologicalSpace(T)) ∧
    ∃p(p ∉ S) ∧
    let S* = S ∪ {p} ∧
    let T* = ⟨S*,τ*⟩ ⇒
    isTopology(τ*, S*)
  )
} ↔

proof AlexandroffExtension_IsTopology() {
  define(AlexandroffExtension := {
    U is_open_in T* ↔ (
      isOpen(U,T) ∨
      ∃C(C ⊆ T ∧ isClosed(C,T) ∧ isCompact(C,T) ∧ U = S* ∖ C)
    )
  }) →

  // O1: Union of Open Sets
  lemma UnionOfOpenSets() {
    setVar(I: indexSet) →
    setVar({Ui}i∈I: familyOfOpenSets(T*)) →
    let(J := {i ∈ I | isOpen(Ui,T)}) →
    let(K := I ∖ J) →
    let(UJ := ⋃j∈J Uj) →
    let(VJ := ⋂j∈J (S ∖ Uj)) →
    assert(S ∖ UJ = VJ) →
    assert(isClosed(VJ,T)) →
    assert(isOpen(UJ,T*)) →
    let(UK := ⋃k∈K Uk) →
    let(VK := VK' ∩ (S ∖ Um)) →
    assert(isClosed(VK,T) ∧ isCompact(VK,T)) →
    assert(UK = S ∖ VK) →
    assert(isOpen(UK,T*)) →
    assert(⋃i∈I Ui = UJ ∪ UK) →
    assert(isOpen(UJ ∪ UK,T*))
  } →

  // O2: Intersection of Open Sets
  lemma IntersectionOfOpenSets() {
    setVar(U1,U2: openSets(T*)) →
    // Case 1: Both open in T
    assert(isOpen(U1,T) ∧ isOpen(U2,T) ⇒ isOpen(U1 ∩ U2,T*)) →
    // Case 2: Neither open in T
    assert(¬isOpen(U1,T) ∧ ¬isOpen(U2,T) ⇒ {
      let(C1 := S ∖ U1, C2 := S ∖ U2) →
      assert(isClosed(C1 ∪ C2,T) ∧ isCompact(C1 ∪ C2,T)) →
      assert(S ∖ (U1 ∩ U2) = C1 ∪ C2) →
      assert(isOpen(U1 ∩ U2,T*))
    }) →
    // Case 3: One open in T
    assert((isOpen(U1,T) ⊕ isOpen(U2,T)) ⇒ isOpen(U1 ∩ U2,T*))
  } →

  // O3: Whole space is open
  lemma WholeSpaceOpen() {
    assert(S* ∖ S* = ∅) →
    assert(isCompact(∅,T*)) →
    assert(isOpen(S*,T*))
  } →

  apply(UnionOfOpenSets()) →
  apply(IntersectionOfOpenSets()) →
  apply(WholeSpaceOpen()) →
  assert(isTopology(τ*,S*))
}