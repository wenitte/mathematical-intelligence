theorem BorelMeasureDistribution() {
  assert(
    ∀K[Closed_Interval] ∧
    ∀F: K → ℝ[RightContinuous ∧ Increasing ∧ Bounded] ∧
    (lim[x→inf K] F(x) = 0) ∧
    (lim[x→sup K] F(x) = M ∈ (0,∞)) →
    ∃μ[BorelMeasure_Finite](
      F_μ = F ∧ 
      μ(K) = M
    )
  )
} ↔

proof BorelMeasureDistribution() {
  case M = 0 {
    setVar(μ = 0) →
    assert(claim_satisfied)
  } →
  
  case M ≠ 0 {
    define Q(t) {
      assert(Q(t) = inf{x ∈ K : F(x) ≥ t})
    } →

    lemma Q_Range() {
      assert(∀t ∈ (0,M) → Q(t) ∈ (inf K, sup K)) →
      let ε ∈ (0,M) →
      ∃N₁(
        |F(x) - M| < M - ε for N₁ < x ≤ sup K
      ) →
      ∃N₂(
        F(x) < ε for inf K ≤ x < -N₂
      ) →
      conclude(Q(t) ∈ K)
    } →

    lemma Q_Measurable() {
      assert(∀t,s ∈ (0,M)[s < t] →
        {x ∈ K : F(x) > t} ⊆ {x ∈ K : F(x) > s}
      ) →
      conclude(Q is measurable)
    } →

    setVar(λ = LebesgueMeasure((0,M))) →
    setVar(μ = Q*λ) →  // Pushforward measure
    
    assert(μ(K) = λ(Q⁻¹[K]) = M) →
    
    lemma Distribution_Equality() {
      assert(∀x ∈ K →
        F_μ(x) = μ((-∞,x] ∩ K) = 
        λ({t ∈ (0,M) : Q(t) ≤ x}) =
        λ([0,F(x)]) = F(x)
      )
    } →
    
    conclude(F_μ = F ∧ μ(K) = M)
  }
}

corollary BorelMeasureDistribution_Shifted() {
  assert(
    ∀K[Closed_Interval ∧ inf K > -∞] ∧
    ∀m ≥ 0 ∧
    ∀F: K → ℝ[RightContinuous ∧ Increasing ∧ Bounded] ∧
    (lim[x→inf K] F(x) = m) ∧
    (lim[x→sup K] F(x) = M ∈ (0,∞)) →
    ∃μ[BorelMeasure_Finite](
      F_μ = F ∧ 
      μ(K) = M ∧
      μ({inf K}) = m
    )
  )
}