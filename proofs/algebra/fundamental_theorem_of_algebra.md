∀p(z)(Polynomial(p(z)) ∧ deg(p(z)) > 0 →
  (∃c∈ℂ(Root(p(z), c)) ∧ ∀k(1 ≤ k ≤ deg(p(z)) → ∃c∈ℂ(RootMultiplicity(p(z), c, k)) ∧ TotalRoots(p(z)) = deg(p(z)))))

(Assume ¬∃c∈ℂ(Root(p(z), c))) →
(∀z(∃s(|z| > s → |p(z)| > 2|p₀|)) ∧ ∃t(|p(t)| = min(|p(z)|, |z| ≤ s))) ∧
(Define q(z) = p(z + t)) ∧ (q(0) = q₀ = |p(t)|) ∧
(q(z) = q₀ + qₘzᵐ + ∑_{k>m} qₖzᵏ) ∧
(∃r(Choose z = r(-q₀/qₘ)^(1/m))) ∧
(q(z) = q₀ - q₀rᵐ + ∑_{k>m} qₖzᵏ) ∧
(|q(z)| < |q₀| due to geometric decay of ∑_{k>m} qₖzᵏ) ∧
(Contradiction |q(0)| = min(|q(z)|)) →
¬(¬∃c∈ℂ(Root(p(z), c))) →
∃c∈ℂ(Root(p(z), c)).

(∃c∈ℂ(Root(p(z), c))) →
(∀p(z)(p(z) = (z - c)q(z) ∧ deg(q(z)) = deg(p(z)) - 1)) →
(∀n(Induction(n ≥ 1 ∧ deg(p(z)) = n → p(z) has exactly n roots counting multiplicities))) →
∀p(z)(deg(p(z)) = n → TotalRoots(p(z)) = n).
