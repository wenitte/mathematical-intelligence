theorem CartesianProduct_PowerSet() {
  assert(
    ∀S,T: Set ⇒ 
    S×T ⊆ 𝒫(𝒫(S∪T))
  )
} ↔

proof CartesianProduct_PowerSet() {
  proof_by_cases() {
    case_1: "S×T = ∅" {
      apply(EmptySet_SubsetOfPowerSet) →
      assert(S×T ⊆ 𝒫(𝒫(S∪T)))
    }
    
    case_2: "S×T ≠ ∅" {
      apply(CartesianProduct_NonEmpty_Existence) →
      assert(∃x∈S, ∃y∈T) →
      
      setVar(x∈S) →
      setVar(y∈T) →
      
      lemma ElementInUnion() {
        assert(x ∈ S) →
        assert(S ⊆ S∪T) →
        assert(x ∈ S∪T) →
        assert({x} ∈ 𝒫(S∪T))
      } →
      
      lemma PairInPowerSet() {
        assert(x,y ∈ S∪T) →
        assert({x,y} ∈ 𝒫(S∪T))
      } →
      
      apply(KuratowskiPair_Definition) →
      assert(⟨x,y⟩ = {{x},{x,y}}) →
      assert({{x},{x,y}} ∈ 𝒫(𝒫(S∪T))) →
      assert(⟨x,y⟩ ∈ 𝒫(𝒫(S∪T)))
    }
  }
}