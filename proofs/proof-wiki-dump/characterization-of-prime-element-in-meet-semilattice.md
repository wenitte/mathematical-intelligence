theorem Characterization_Prime_Element_Meet_Semilattice() {
  let(L = ⟨S,∧,≼⟩: MeetSemilattice) →
  let(p ∈ S) →
  assert(
    isPrimeElement(p) ↔ 
    ∀A⊆S [isFinite(A) ∧ A≠∅ → (inf(A)≼p → ∃x∈A(x≼p))]
  )
}

proof Characterization_Prime_Element_Meet_Semilattice() {
  // Sufficient condition
  proof_forward() {
    assume(isPrimeElement(p)) →
    let(A⊆S: isFinite(A) ∧ A≠∅) →
    
    define(P(X) := X≠∅ ∧ inf(X)≼p → ∃x∈X(x≼p)) →
    
    lemma InductionStep() {
      ∀x∈A,B⊆A [P(B) → P(B∪{x})] →
      
      case(B=∅) {
        assert(B∪{x}={x}) →
        assert(inf({x})=x) →
        assert(x∈{x}) →
        conclude(∃z∈B∪{x}(z≼p))
      } →
      
      case(B≠∅) {
        assert(isFinite(B)) →
        assert(inf(B∪{x})=inf(B)∧inf({x})) →
        assert(isPrimeElement(p) → (inf(B)≼p ∨ x≼p)) →
        
        subcase(inf(B)≼p) {
          assert(∃z∈B(z≼p)) →
          assert(z∈B∪{x}) →
          conclude(∃z∈B∪{x}(z≼p))
        } →
        
        subcase(x≼p) {
          assert(x∈B∪{x}) →
          conclude(∃z∈B∪{x}(z≼p))
        }
      }
    } →
    
    assert(P(∅)) →
    apply(FiniteInduction(A,P)) →
    conclude(inf(A)≼p → ∃x∈A(x≼p))
  }

  // Necessary condition
  proof_backward() {
    assume(∀A⊆S [isFinite(A) ∧ A≠∅ → (inf(A)≼p → ∃x∈A(x≼p))]) →
    let(x,y ∈ S: x∧y≼p) →
    let(A := {x,y}) →
    assert(isFinite(A) ∧ A≠∅) →
    assert(inf(A)=x∧y) →
    assert(∃z∈A(z≼p)) →
    conclude(x≼p ∨ y≼p)
  }
}