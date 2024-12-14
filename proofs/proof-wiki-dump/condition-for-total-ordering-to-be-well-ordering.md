theorem TotalOrdering_WellOrdering_Equivalence() {
  assert(
    ∀A[¬empty(A) ∧ hasOrdering(A, ⪯)] ⇒
    (isWellOrdering(A, ⪯) ↔ 
      (∃x₀[isSmallest(x₀, A)] ∧
       ∀x∈A[¬isGreatest(x, A) → hasImmediateSuccessor(x)] ∧
       ∀L⊂A[isProperLowerSection(L) ∧ ¬hasGreatest(L) → 
         ∃z∈A[z∉L ∧ isSmallest(z, A\L)]])
  )
}

proof TotalOrdering_WellOrdering_Equivalence() {
  // Sufficient condition
  part_1() {
    assume(isWellOrdering(A, ⪯)) →
    assert(∃x₀[isSmallest(x₀, A)]) →
    
    lemma NoSuccessor_IsGreatest() {
      setVar(x: A) →
      let(S = {y ∈ A: x ⪯ y}) →
      assume(¬hasImmediateSuccessor(x)) →
      assume(S ≠ ∅) →
      apply(wellOrderingProperty(S)) →
      let(z = minElement(S)) →
      assert(x ⪯ z ∧ ¬∃y[x ⪯ y ⪯ z]) →
      conclude(S = ∅) →
      conclude(isGreatest(x, A))
    } →

    lemma ProperSection_HasSmallestComplement() {
      setVar(L: ProperLowerSection(A)) →
      assume(¬hasGreatest(L)) →
      assert(A\L ≠ ∅) →
      apply(wellOrderingProperty(A\L)) →
      conclude(∃z[isSmallest(z, A\L)])
    }
  }

  // Necessary condition
  part_2() {
    assume(
      ∃x₀[isSmallest(x₀, A)] ∧
      ∀x∈A[¬isGreatest(x, A) → hasImmediateSuccessor(x)] ∧
      ∀L⊂A[isProperLowerSection(L) ∧ ¬hasGreatest(L) → 
        ∃z∈A[z∉L ∧ isSmallest(z, A\L)]]
    ) →
    
    proof_by_contradiction() {
      assume(∃S⊆A[¬∃min(S)]) →
      assert(x₀ ∉ S) →
      let(T = {z ∈ A: ∀y∈S[z ⪯ y]}) →
      assert(x₀ ∈ T) →
      
      case_1() {
        assume(hasGreatest(T)) →
        let(g = max(T)) →
        let(g' = successor(g)) →
        assert(g' ∈ S) →
        assert(∃w∈S[w ⪯ g']) →
        contradiction()
      } →
      
      case_2() {
        assume(¬hasGreatest(T)) →
        apply(condition_3(T)) →
        assert(∃min(S)) →
        contradiction()
      }
    }
  }
}