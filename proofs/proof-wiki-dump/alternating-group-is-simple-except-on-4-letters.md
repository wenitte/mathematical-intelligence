theorem Alternating_Group_Simple() {
  assert(
    ∀n ∈ ℤ, n ≠ 4 ⇒ 
    isSimple(An)
  )
} ↔

proof Alternating_Group_Simple() {
  setVar(n: ℤ) →
  
  // Case n < 4
  branch n < 4 {
    case n = 2 {
      assert(A2 = {e}) →
      assert(isSimple(A2))
    } →
    case n = 3 {
      assert(A3 ≅ C3) →
      apply(Prime_Group_Simple(C3)) →
      assert(isSimple(A3))
    }
  } →

  // Case n ≥ 5
  branch n ≥ 5 {
    setVar(N: Subgroup(An), N ≠ {e}) →
    assert(isNormal(N, An)) →
    
    lemma Contains_3Cycle() {
      setVar(α ∈ N, α ≠ e) →
      setVar(β = (3,4,5)) →
      assert(
        β⁻¹α⁻¹βα ∈ N ∧
        fixes(β⁻¹α⁻¹βα, 1)
      ) →
      assert(∃γ ∈ N: is3Cycle(γ))
    } →

    lemma All_3Cycles() {
      setVar(ρ: is3Cycle(ρ)) →
      setVar(i,j,k ∈ ℕn) →
      assert(ρ = (i,j,k)) →
      setVar(σ ∈ An: σ(1)=i ∧ σ(2)=j ∧ σ(3)=k) →
      assert(σ(1,2,3)σ⁻¹ = ρ) →
      assert(ρ ∈ N)
    } →

    apply(Contains_3Cycle()) →
    apply(All_3Cycles()) →
    apply(Even_Permutation_Product_3Cycles()) →
    assert(N = An)
  } →
  
  assert(isSimple(An))
}