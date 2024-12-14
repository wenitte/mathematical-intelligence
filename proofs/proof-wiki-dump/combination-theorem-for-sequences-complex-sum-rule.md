theorem ComplexSequenceSum() {
  assert(
    ∀{zₙ}, {wₙ} ∈ ℂ^ℕ ∧
    lim(n→∞)[zₙ] = c ∧ 
    lim(n→∞)[wₙ] = d →
    lim(n→∞)[zₙ + wₙ] = c + d
  )
}

proof ComplexSequenceSum() {
  setVar(ε: ℝ₊) →
  assert(ε/2 > 0) →
  
  lemma LimitDefinition1() {
    assert(
      ∃N₁ ∈ ℕ: ∀n > N₁ →
      |zₙ - c| < ε/2
    )
  } →

  lemma LimitDefinition2() {
    assert(
      ∃N₂ ∈ ℕ: ∀n > N₂ →
      |wₙ - d| < ε/2
    )
  } →

  setVar(N = max{N₁, N₂}) →
  assert(∀n > N → n > N₁ ∧ n > N₂) →
  
  compute(
    |(zₙ + wₙ) - (c + d)| =
    |(zₙ - c) + (wₙ - d)| ≤
    |zₙ - c| + |wₙ - d| <
    ε/2 + ε/2 = ε
  ) →

  apply(ComplexTriangleInequality()) →
  
  conclude(
    ∀ε > 0, ∃N ∈ ℕ: ∀n > N →
    |(zₙ + wₙ) - (c + d)| < ε →
    lim(n→∞)[zₙ + wₙ] = c + d
  )
}

proof ComplexSequenceSum_Alternative() {
  setVar(
    zₙ = xₙ + iyₙ,
    wₙ = rₙ + isₙ,
    c = a + ib,
    d = l + im
  ) →
  
  assert(xₙ, yₙ, rₙ, sₙ, a, b, l, m ∈ ℝ) →
  
  compute(
    lim(n→∞)[zₙ + wₙ] =
    lim(n→∞)[(xₙ + iyₙ) + (rₙ + isₙ)] =
    lim(n→∞)[(xₙ + rₙ) + i(yₙ + sₙ)] =
    lim(n→∞)[xₙ + rₙ] + i·lim(n→∞)[yₙ + sₙ] =
    (a + l) + i(b + m) =
    (a + ib) + (l + im) =
    c + d
  )
}