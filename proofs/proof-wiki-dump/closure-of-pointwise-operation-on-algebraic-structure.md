theorem Closure_Pointwise_Operation() {
  let(S: Set, T: Set, ∘: Operation, TS: SetOfMappings) →
  assume(S ≠ ∅) ∧
  assume(⟨T,∘⟩: AlgebraicStructure) ∧
  assume(TS = {f | f: S → T}) ∧
  let(⊕: TS × TS → TS) →
  assert(
    isClosed(⊕,TS) ↔ isClosed(∘,T)
  )
}

proof Closure_Pointwise_Operation() {
  // Necessary Condition
  block Necessary() {
    assume(isClosed(∘,T)) →
    forall(f,g ∈ TS) {
      forall(x ∈ S) {
        assert((f⊕g)(x) = f(x)∘g(x)) →  // Definition of Pointwise Operation
        assert(f(x) ∈ T ∧ g(x) ∈ T) →
        assert((f⊕g)(x) ∈ T)  // As ∘ is closed on T
      } →
      conclude(f⊕g ∈ TS)
    } →
    conclude(isClosed(⊕,TS))
  }

  // Sufficient Condition
  block Sufficient() {
    assume(isClosed(⊕,TS)) →
    byContradiction() {
      assume(¬isClosed(∘,T)) →
      assert(∃s,t ∈ T: s∘t ∉ T) →
      assert(∃x ∈ S)  // As S ≠ ∅
      let(x ∈ S) →
      let(f,g ∈ TS: f(x)=s ∧ g(x)=t) →
      assert((f⊕g)(x) = f(x)∘g(x)) →  // Definition of Pointwise Operation
      assert((f⊕g)(x) = s∘t) →
      assert((f⊕g)(x) ∉ T) →
      assert(f⊕g ∉ TS) →
      contradiction(isClosed(⊕,TS))
    } →
    conclude(isClosed(∘,T))
  }

  conclude(Necessary() ∧ Sufficient())
}