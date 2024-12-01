theorem_definition(FTC1) ↔
    ∀f ∈ C([a, b]), F(x) = ∫_C^x f(t)dt → d/dx ∫_C^x f(t)dt = f(x)
→

[derivative_definition(D) ↔    d/dx ∫_C^x f(t)dt = lim_{Δx→0} (∫_x^{x+Δx} f(t)dt / Δx)]
→

[mean_value_theorem(MVT) ↔    ∃k ∈ [x, x + Δx] such that ∫_x^{x+Δx} f(t)dt = f(k)Δx]
→

[simplification(S) ↔    d/dx ∫_C^x f(t)dt = lim_{Δx→0} f(k), where k → x as Δx → 0]
→

[continuity_property(C) ↔    f ∈ C([a, b]) → lim_{Δx→0} f(k) = f(x)]
→

conclusion(Final) ↔
    d/dx ∫_C^x f(t)dt = f(x)
    ∴ Proved.
