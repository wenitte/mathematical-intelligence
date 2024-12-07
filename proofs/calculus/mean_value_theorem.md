theorem_definition(mean_value_theorem) ↔
    ∀f: ℝ → ℝ, ∀a, b ∈ ℝ, (a < b ∧ continuous(f, [a, b]) ∧ differentiable(f, (a, b))) →
    ∃c ∈ (a, b), f'(c) = (f(b) - f(a)) / (b - a).

proof(mean_value_theorem) ↔
    assume(f: ℝ → ℝ ∧ a, b ∈ ℝ ∧ a < b ∧ continuous(f, [a, b]) ∧ differentiable(f, (a, b))) →
    let g(x) := f(x) - [(f(b) - f(a)) / (b - a)](x - a) - f(a) →
    [
        continuous(g, [a, b]) ∧ differentiable(g, (a, b)) ∧
        g(a) = f(a) - [(f(b) - f(a)) / (b - a)](a - a) - f(a) = 0 ∧
        g(b) = f(b) - [(f(b) - f(a)) / (b - a)](b - a) - f(a) = 0 →
        by(rolle_theorem, ∃c ∈ (a, b), g'(c) = 0) →
        g'(x) = f'(x) - (f(b) - f(a)) / (b - a) →
        g'(c) = 0 ↔ f'(c) - (f(b) - f(a)) / (b - a) = 0 →
        f'(c) = (f(b) - f(a)) / (b - a).
    ]