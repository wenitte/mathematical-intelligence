theorem NonArchimedean_Norm_Unity() {
  assert(
    let R: DivisionRing,
    let ||·||: Norm(R),
    let 1_R: Unity(R) →
    (
      NonArchimedean(||·||) ↔ 
      sup{||n·1_R|| : n ∈ ℕ_{>0}} = 1
    )
  )
} ↔

proof NonArchimedean_Norm_Unity() {
  apply(Characterisation_NonArchimedean_Norms) →
  assert(
    NonArchimedean(||·||) ↔ 
    sup{||n·1_R|| : n ∈ ℕ_{>0}} ≤ 1
  ) →
  
  lemma Unity_Norm() {
    assert(||1_R|| = 1)
  } →

  assert(
    ||1_R|| = 1 ∧
    1 ∈ {||n·1_R|| : n ∈ ℕ_{>0}} →
    sup{||n·1_R|| : n ∈ ℕ_{>0}} ≥ 1
  ) →
  
  assert(
    (sup{||n·1_R|| : n ∈ ℕ_{>0}} ≤ 1) ∧
    (sup{||n·1_R|| : n ∈ ℕ_{>0}} ≥ 1) →
    sup{||n·1_R|| : n ∈ ℕ_{>0}} = 1
  )
}