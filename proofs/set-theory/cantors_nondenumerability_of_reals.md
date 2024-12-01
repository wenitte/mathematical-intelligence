theorem_definition(Cantor_non_denumerability) ↔
    ∄f: ℕ → ℝ such that f is surjective
→

[assumption(A) ↔
    Assume ∃f: ℕ → ℝ such that f is surjective:
    ∀r ∈ ℝ, ∃n ∈ ℕ : f(n) = r]
→

[interval_initialization(I₁) ↔
    Let f(0), f(1), ... ∈ [0, 1], ∃n₁, n₂ ∈ ℕ such that:
    f(n₁), f(n₂) ∈ [0, 1], f(n₁) < f(n₂)]
→

[interval_step(I₂) ↔
    Define intervals iteratively:
    ∀k ≥ 1, ∃n_{1,...,k}, n_{2,...,k} ∈ ℕ such that:
    f(n_{1,...,k}) < f(n_{2,...,k}),
    f(n_{1,...,k}), f(n_{2,...,k}) ∈ [f(n_{1,...,k−1}), f(n_{2,...,k−1})]]
→

[infinite_intervals(I₃) ↔    Intervals [f(n_{1,...,k}), f(n_{2,...,k})] satisfy:
    lim_{k → ∞} (f(n_{2,...,k}) − f(n_{1,...,k})) = 0
    ∧ ∀k, ∃r ∈ ℝ, r ∈ (f(n_{1,...,k}), f(n_{2,...,k}))]
→

[real_between(RB) ↔    Define c = lim_{k → ∞} midpoint([f(n_{1,...,k}), f(n_{2,...,k})]),
    c ∈ (f(n_{1,...,k}), f(n_{2,...,k})), ∀k]
→

[contradiction(C) ↔    Assume ∃n_c ∈ ℕ such that f(n_c) = c:    By construction, c ≠ f(n_{1,...,k}) ∧ c ≠ f(n_{2,...,k}) ∀k    → Contradiction since c ∈ (f(n_{1,...,k}), f(n_{2,...,k})) ∧ ∄n such that f(n) = c]
→

[conclusion(F) ↔    ∄f: ℕ → ℝ such that f is surjective    ∴ Proved.]
