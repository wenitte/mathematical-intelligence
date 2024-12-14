theorem CompletelyIrreducible() {
  assume(L = ⟨S,⪯⟩: OrderedSet) →
  assume(p ∈ S) →
  assert(
    p.isCompletelyIrreducible() ↔
    ∃q ∈ S: (p ≺ q ∧ 
    (∀s ∈ S: p ≺ s → q ⪯ s) ∧ 
    p↑ = {p} ∪ q↑)
  )
}

proof CompletelyIrreducible() {
  // Sufficient Condition
  branch SufficientCondition() {
    assume(p.isCompletelyIrreducible()) →
    assert(p↑∖{p}.hasMinimum()) →
    assert(p↑∖{p}.hasInfimum()) →
    setVar(q := inf(p↑∖{p})) →
    assert(q ∈ p↑∖{p}) →
    assert(q ∈ p↑) →
    assert(p ⪯ q) →
    apply(CompletelyIrreducibleDiffersFromInf()) →
    assert(q ≠ p) →
    assert(p ≺ q)

    lemma SubsetProof() {
      assert({p} ∪ q↑ ⊆ p↑) →
      forall(x ∈ {p} ∪ q↑) {
        branch Case1() {
          assume(x ∈ {p}) →
          assert(x = p) →
          assert(p ⪯ x) →
          assert(x ∈ p↑)
        }
        branch Case2() {
          assume(x ∈ q↑) →
          assert(q ⪯ x) →
          assert(p ⪯ x) →
          assert(x ∈ p↑)
        }
      }
    }

    lemma LowerBoundImplication() {
      assert(∀s ∈ S: p ≺ s → q ⪯ s) →
      forall(s ∈ S: p ≺ s) {
        assert(p ⪯ s ∧ p ≠ s) →
        assert(s ∈ p↑) →
        assert(s ∉ {p}) →
        assert(s ∈ p↑∖{p}) →
        assert(q ⪯ s)
      }
    }

    lemma SupersetProof() {
      assert(p↑ ⊆ {p} ∪ q↑) →
      forall(x ∈ p↑) {
        assert(x = p ∨ (x ∈ p↑ ∧ x ∉ {p})) →
        assert(x = p ∨ x ∈ p↑∖{p}) →
        assert(x = p ∨ q ⪯ x) →
        assert(x ∈ {p} ∨ x ∈ q↑) →
        assert(x ∈ {p} ∪ q↑)
      }
    }

    apply(SubsetProof()) →
    apply(LowerBoundImplication()) →
    apply(SupersetProof()) →
    assert(p↑ = {p} ∪ q↑)
  }

  // Necessary Condition
  branch NecessaryCondition() {
    assume(∃q ∈ S: p ≺ q ∧ (∀s ∈ S: p ≺ s → q ⪯ s) ∧ p↑ = {p} ∪ q↑) →
    
    lemma LowerBoundProof() {
      forall(a ∈ p↑∖{p}) {
        assert(a ∈ p↑ ∧ a ∉ {p}) →
        assert(p ⪯ a ∧ a ≠ p) →
        assert(p ≺ a) →
        assert(q ⪯ a)
      }
    }

    assert(q ⪯ q) →
    assert(q ∈ q↑) →
    assert(q ∈ {p} ∪ q↑) →
    assert(p ≠ q) →
    assert(q ∉ {p}) →
    assert(q ∈ p↑∖{p}) →
    
    forall(b ∈ S: b.isLowerBound(p↑∖{p})) {
      assert(b ⪯ q)
    } →
    
    assert(q = inf(p↑∖{p})) →
    assert(p↑∖{p}.hasMinimum()) →
    assert(p.isCompletelyIrreducible())
  }
}