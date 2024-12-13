theorem FurstenbergBasisClopen() {
  let(τ: Topology, Z: Integers)
  assert(
    ∀a,b ∈ Z ∧ (a ≠ 0) ⇒
    (aZ + b) isClopen(in: ⟨Z,τ⟩)
  )
} ↔

proof FurstenbergBasisClopen() {
  setVar(a,b: Z) →
  assert((aZ + b) ∈ τ) by(DefFurstenbergTopology) →
  
  lemma ShowComplement() {
    assert(Z∖(aZ + b) ∈ τ) ↔
    assume(a > 0) by(aZ = (-a)Z) →
    cases {
      case(a = 1): 
        assert(Z∖Z = ∅) →
        assert(∅ ∈ τ)
      case(a ≥ 2):
        assert(
          ∀x ∈ Z: (
            x ∈ Z∖(aZ + b) ↔
            (x - b) ∉ aZ ↔
            (x - b) ≢ 0 (mod a) ↔
            ∃k ∈ {1,...,a-1}: (x - b) ≡ k (mod a) ↔
            ∃k ∈ {1,...,a-1}: (x - b) ∈ (aZ + k) ↔
            x ∈ ⋃_{k∈{1,...,a-1}} (aZ + k)
          )
        ) →
        assert(Z∖(aZ + b) = ⋃_{k∈{1,...,a-1}} (aZ + k)) →
        assert(∀k ∈ {1,...,a-1}: (aZ + k) ∈ τ) →
        assert(Z∖(aZ + b) ∈ τ) by(UnionClosedTopology)
    }
  } →
  
  apply(ShowComplement()) →
  assert((aZ + b) isClopen(in: ⟨Z,τ⟩)) by(OpenAndClosedIsClopen)
}