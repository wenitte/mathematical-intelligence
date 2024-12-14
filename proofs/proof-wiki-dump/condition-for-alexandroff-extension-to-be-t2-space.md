theorem Alexandroff_Extension_T2_Space() {
  let(T = ⟨S,τ⟩: TopologicalSpace, p ∉ S) →
  let(S* = S ∪ {p}) →
  let(T* = ⟨S*,τ*⟩: AlexandroffExtension(S)) →
  assert(
    isT2Space(T*) ↔ (isLocallyCompact(T) ∧ isHausdorff(T))
  )
}

proof Alexandroff_Extension_T2_Space() {
  // Necessary Condition
  part1_Necessary() {
    assume(isLocallyCompact(T) ∧ isHausdorff(T)) →
    forall(x,y ∈ S) {
      case(x ≠ p ∧ y ≠ p) {
        exists(U,V ∈ τ: OpenSet) {
          assert(x ∈ U ∧ y ∈ V ∧ U ∩ V = ∅) →
          assert(U,V ∈ τ*)
        }
      } →
      case(y = p) {
        exists(Nx: CompactNeighborhood(x)) →
        exists(U ∈ τ: OpenSet(x ∈ U)) →
        assert(U ∈ τ*) →
        assert(isClosed(Nx)) by CompactSubspaceHausdorffClosed() →
        let(V = S* ∖ Nx) →
        assert(x ∉ V ∧ p ∈ V) →
        assert(V ∈ τ*) →
        assert(U ∩ V = ∅) by IntersectionComplementEmpty()
      }
    } →
    conclude(isT2Space(T*))
  }

  // Sufficient Condition
  part2_Sufficient() {
    assume(isT2Space(T*)) →
    assert(isSubspace(T,T*)) →
    assert(isT2Space(T)) by T2PropertyHereditary() →
    forall(x ∈ S) {
      exists(U,V ∈ τ*: OpenSet) {
        assert(x ∈ U ∧ p ∈ V ∧ U ∩ V = ∅) →
        let(Nx = S* ∖ V) →
        assert(isCompactNeighborhood(Nx,x))
      }
    } →
    conclude(isLocallyCompact(T))
  }

  conclude(
    isT2Space(T*) ↔ (isLocallyCompact(T) ∧ isHausdorff(T))
  )
}