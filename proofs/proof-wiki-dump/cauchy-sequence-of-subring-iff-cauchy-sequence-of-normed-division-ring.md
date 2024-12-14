theorem Cauchy_Sequence_Subring_iff_Division_Ring() {
  let(R: NormedDivisionRing, ∥·∥: Norm) →
  let(S: NormedDivisionSubring(R), ∥·∥_S: Norm) →
  let({x_n}: Sequence(S)) →
  assert(
    IsCauchySequence({x_n}, S, ∥·∥_S) ↔ IsCauchySequence({x_n}, R, ∥·∥)
  )
} ↔

proof Cauchy_Sequence_Subring_iff_Division_Ring() {
  lemma Normed_Subring_Definition() {
    assert(
      ∀s ∈ S: ∥s∥_S = ∥s∥
    )
  } →
  
  lemma Cauchy_Sequence_Definition() {
    assert(
      IsCauchySequence({x_n}, S, ∥·∥_S) ↔
      ∀ε > 0, ∃N ∈ ℕ: ∀m,n ≥ N: ∥x_m - x_n∥_S < ε
    ) ∧
    assert(
      IsCauchySequence({x_n}, R, ∥·∥) ↔
      ∀ε > 0, ∃N ∈ ℕ: ∀m,n ≥ N: ∥x_m - x_n∥ < ε
    )
  } →
  
  apply(Normed_Subring_Definition()) →
  apply(Cauchy_Sequence_Definition()) →
  
  assert(
    ∀ε,m,n: ∥x_m - x_n∥_S = ∥x_m - x_n∥
  ) →
  
  conclude(
    IsCauchySequence({x_n}, S, ∥·∥_S) ↔ IsCauchySequence({x_n}, R, ∥·∥)
  )
}