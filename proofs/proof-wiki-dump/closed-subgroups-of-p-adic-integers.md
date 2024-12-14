theorem Closed_Subgroups_Padic() {
  assert(
    ∀p ∈ Primes ∧ ∀H ⊆ ℤp →
    (H is_closed_subgroup_of ℤp) ↔
    (H = {0} ∨ ∃k ∈ ℕ: H = p^k ℤp)
  )
}

proof Closed_Subgroups_Padic() {
  setVar(p: Prime) →
  lemma Hausdorff_Property() {
    assert(ℤp is_Hausdorff_space)
  } →
  
  lemma Zero_Set_Closed() {
    assert({0} is_closed_in ℤp)
  } →
  
  lemma Principal_Ideals_Closed() {
    assert(∀k ∈ ℕ: p^k ℤp is_closed_in ℤp)
  } →
  
  // Forward direction
  assert(∀I ∈ {{0} ∪ {p^k ℤp | k ∈ ℕ}} → I is_closed_subgroup) →
  
  // Reverse direction
  setVar(H: closed_subgroup(ℤp)) →
  assert(ℤH ⊆ H) →
  
  lemma Dense_Sequence() {
    setVar(a: ℤp) →
    assert(∃{aₙ} ⊆ ℤ: limₙ→∞ aₙ = a)
  } →
  
  lemma Sequence_Convergence() {
    setVar(h: H) →
    setVar({aₙ}: sequence_from(Dense_Sequence)) →
    assert(limₙ→∞ aₙh = ah) ∧
    assert(∀n ∈ ℕ: aₙh ∈ ℤH) →
    assert(ah ∈ H)
  } →
  
  assert(∀a ∈ ℤp ∧ ∀h ∈ H → ah ∈ H) →
  assert(ℤpH ⊆ H) →
  assert(H is_ideal_of ℤp) →
  
  lemma Padic_Ideal_Classification() {
    assert(H = {0} ∨ ∃k ∈ ℕ: H = p^k ℤp)
  } →
  
  conclude(
    H is_closed_subgroup_of ℤp ↔
    (H = {0} ∨ ∃k ∈ ℕ: H = p^k ℤp)
  )
}