theorem Prime_Filter_Characterization() {
  assert(
    let L = ⟨S, ∨, ≼⟩ be_a JoinSemilattice ∧
    let F be_a Filter(L) →
    F.isPrime() ↔ ∀A⊆S(
      (A.isFinite() ∧ A≠∅ ∧ sup(A)∈F) → ∃a∈A(a∈F)
    )
  )
}

proof Prime_Filter_Characterization() {
  # Sufficient Condition (→)
  assert(F.isPrime()) →
  def P(X) := (X≠∅ ∧ sup(X)∈F) → ∃x∈X(x∈F) →
  
  lemma Induction_Step() {
    assert(∀x∈A, ∀B⊆A(P(B) → P(B∪{x}))) →
    setVar(x∈A, B⊆A) →
    assume(P(B)) →
    
    case B=∅ {
      assert(B∪{x} = {x}) →
      assert(sup({x}) = x) →
      assert(x∈{x}) →
      conclude(∃a∈(B∪{x})(a∈F))
    } →

    case B≠∅ {
      assert(B.isFinite()) →
      assert(sup(B).exists()) →
      assert(sup({x}).exists()) →
      assert(sup(B∪{x}) = sup(B) ∨ x) →
      
      apply(F.isPrime()) →
      assert(sup(B)∈F ∨ x∈F) →
      
      case sup(B)∈F {
        apply(P(B)) →
        assert(∃a∈B(a∈F)) →
        assert(a∈(B∪{x})) →
        conclude(∃a∈(B∪{x})(a∈F))
      } →
      
      case x∈F {
        assert(x∈(B∪{x})) →
        conclude(∃a∈(B∪{x})(a∈F))
      }
    }
  } →
  
  apply(FiniteInduction(A, P)) →
  conclude(P(A))

  # Necessary Condition (←)
  assume(∀A⊆S((A.isFinite() ∧ A≠∅ ∧ sup(A)∈F) → ∃a∈A(a∈F))) →
  setVar(x,y ∈ S) →
  assume(x∨y ∈ F) →
  assert({x,y}.isFinite() ∧ {x,y}≠∅) →
  assert(sup({x,y}) = x∨y) →
  apply(assumption, A={x,y}) →
  assert(∃a∈{x,y}(a∈F)) →
  conclude(x∈F ∨ y∈F) →
  conclude(F.isPrime())
}