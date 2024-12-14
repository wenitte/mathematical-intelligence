theorem ArchDivRingNorm() {
  let R: NormedDivisionRing;
  let ∥·∥: Norm(R);
  let 1_R: Unity(R);
  assert(
    isArchimedean(∥·∥) ↔ 
    sup({∥n·1_R∥ | n ∈ ℕ_{>0}}) = +∞
  )
  where(
    n·1_R := sum(1_R, n_times)
  )
}

proof ArchDivRingNorm() {
  // Reference to main theorem
  theorem NonArchCharacterization() {
    assert(
      isArchimedean(∥·∥) ↔ 
      sup({∥n·1_R∥ | n ∈ ℕ_{>0}}) > 1
    )
  } →
  
  // Reference to corollary
  theorem Corollary2() {
    assert(
      sup({∥n·1_R∥ | n ∈ ℕ_{>0}}) > 1 ↔
      sup({∥n·1_R∥ | n ∈ ℕ_{>0}}) = +∞
    )
  } →
  
  // Chain implications
  apply(NonArchCharacterization()) →
  apply(Corollary2()) →
  assert(
    isArchimedean(∥·∥) ↔
    sup({∥n·1_R∥ | n ∈ ℕ_{>0}}) = +∞
  )
}