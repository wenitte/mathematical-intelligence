theorem StrictlyIncreasingMapping() {
  let(J: WellOrderedSet, E: WellOrderedSet) →
  let(h: Mapping(J → E)) →
  let(Sₐ: InitialSegment(α)) →
  assert(
    (1) ↔ (2) where
    (1) := [h is strictly increasing ∧ 
            (image(h) = E ∨ image(h) is initial segment of E)]
    (2) := [∀α ∈ J: h(α) = min(E \ h(Sₐ)) ∧ h(Sₐ) = S_{h(α)}]
  )
}

proof StrictlyIncreasingMapping() {
  // 1 ⟹ 2
  proof Forward() {
    assume(h: StrictlyIncreasing) →
    assert(∀x,y ∈ J: x ≺ y ⟹ h(x) ≺ h(y)) →
    
    lemma ImageIsInitialSegment() {
      ∀y ∈ J:
      assert(h(Sᵧ) = {h(x) ∈ E: ∃x ∈ J: h(x) ≺ h(y)}) →
      assert(h(Sᵧ) = S_{h(y)})
    } →
    
    assert(min(E \ h(Sᵧ)) = min(E \ S_{h(y)})) →
    assert(min(E \ S_{h(y)}) = h(y))
  }

  // 2 ⟹ 1
  proof Backward() {
    assume(∀α ∈ J: h(α) = min(E \ h(Sₐ))) →
    assume(h(Sₐ) = S_{h(α)}) →
    
    lemma MappingProperties() {
      ∀y ∈ J:
      assert(h(y) = min(E \ h(Sᵧ))) →
      assert(h(Sᵧ) = {h(x) ∈ E: h(x) ≺ h(y)}) →
      assert(h(Sᵧ) = S_{h(y)})
    } →
    
    assert(∀x ∈ Sᵧ: h(x) ∈ S_{h(y)}) →
    assert(h: StrictlyIncreasing) →
    
    apply(UnionOfInitialSegments()) →
    assert(image(h) = E ∨ image(h) is initial segment of E)
  }
}