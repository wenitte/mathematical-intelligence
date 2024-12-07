theorem_definition(lhopital) ↔
    ∀f, g differentiable on an open interval I containing a
    f(a) = g(a) = 0 ∨ lim_{x→a} f(x) = ±∞ ∧ lim_{x→a} g(x) = ±∞ →
    lim_{x→a} f(x)/g(x) = lim_{x→a} f'(x)/g'(x) if lim_{x→a} f'(x)/g'(x) exists →

proof(lhopital) ↔
    define(cauchy_mean_value) ↔
        ∀f, g continuous on [a, b] ∧ differentiable on (a, b) →
        ∃c ∈ (a, b), f'(c)/g'(c) = [f(b) - f(a)]/[g(b) - g(a)] →
    let h(x) = f(x) - [(f(b) - f(a))/(g(b) - g(a))]g(x) →
    apply(rolle_theorem) ↔
        h(a) = h(b) = 0 →
        ∃c ∈ (a, b), h'(c) = 0 →
        h'(c) = f'(c) - [(f(b) - f(a))/(g(b) - g(a))]g'(c) →
        f'(c)/g'(c) = [f(b) - f(a)]/[g(b) - g(a)] →

case(f(a) = g(a) = 0) ↔
    apply_cauchy_mean_value ↔
        ∃c ∈ (a, b), f'(c)/g'(c) = f(x)/g(x) →
        as x → a⁺, c → a → lim_{x→a⁺} f(x)/g(x) = lim_{x→a⁺} f'(x)/g'(x) →

case(lim_{x→a} f(x) = ±∞ ∧ lim_{x→a} g(x) = ±∞) ↔
    ∀ε > 0, ∃δ > 0, ∀x ∈ (a, a + δ), |f'(c)/g'(c) - L| < ε where L = lim_{x→a} f'(x)/g'(x) →
    rewrite f'(c)/g'(c) as r(x) →
    lim_{x→a} r(x) = 0 →
    apply_limits ↔
        lim_{x→a} f(x)/g(x) = L →

conclusion ↔ lim_{x→a} f(x)/g(x) = lim_{x→a} f'(x)/g'(x) if lim_{x→a} f'(x)/g'(x) exists ∴ Proved.