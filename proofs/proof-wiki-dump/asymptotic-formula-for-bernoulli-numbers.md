theorem Bernoulli_Asymptotic() {
  assert(
    ∀n ∈ ℕ ⇒ B_{2n} ∼ (-1)^{n+1} 4 √(πn) (n/(πe))^{2n}
  )
} ↔

proof Bernoulli_Asymptotic() {
  setVar(n: ℕ) →
  assert(
    lim_{n→∞} (B_{2n})/((-1)^{n+1} 4 √(πn) (n/(πe))^{2n})
  ) →
  apply(Bernoulli_Representation) {
    assert(B_{2n} = (-1)^{n+1} (2n)! ζ(2n)/(2^{2n-1}π^{2n}))
  } →
  substitute() →
  assert(
    lim_{n→∞} ((2n)! ζ(2n))/(2^{2n+1} √(πn) (n/e)^{2n})
  ) →
  apply(Stirling_Formula) {
    assert((2n)! ∼ 2√(πn)(2n/e)^{2n})
  } →
  substitute() →
  assert(
    lim_{n→∞} (2√(πn)(2n/e)^{2n} ζ(2n))/(2^{2n+1} √(πn) (n/e)^{2n})
  ) →
  simplify() →
  assert(
    lim_{n→∞} ζ(2n)
  ) →
  apply(Riemann_Zeta_Limit) {
    assert(lim_{n→∞} ζ(2n) = 1)
  } →
  substitute() →
  assert(1) →
  conclude(B_{2n} ∼ (-1)^{n+1} 4 √(πn) (n/(πe))^{2n})
}