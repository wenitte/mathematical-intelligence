series_definition(f) ↔
    f(t) = Σ_{n=1}^∞ (cos(nt) / n^2)
→

[sin_nt_rewrite(S) ↔
    Σ_{n=1}^N sin(nt) = Σ_{n=1}^N ((e^(int) - e^(-int)) / (2i))
→
 sum_rewrite(S_alt) ↔
    Σ_{n=1}^N sin(nt) =
        (e^(it) - e^(i(N+1)t)) / (2i(1 - e^(it)))
        - (e^(-it) - e^(-i(N+1)t)) / (2i(1 - e^(-it)))]
→

[bounded_sum(B) ↔
    |Σ_{n=1}^N sin(nt) / n| ≤ 2 / |1 - e^(it)| = 1 / sin(t/2)
→
 uniform_convergence(U) ↔
    Σ_{n=1}^N (sin(nt) / n) is uniformly convergent by Dirichlet's test]
→

derivative_relation(f') ↔
    f'(t) = -Σ_{n=1}^∞ (sin(nt) / n)
    = -Im(Σ_{n=1}^∞ (e^(int) / n))
    = Im(log(1 - e^(it)))
    = arg(1 - e^(it))
    = (t - π) / 2
→

integral_evaluation(f_diff) ↔
    f(π) - f(0) = ∫_0^π f'(t) dt = ∫_0^π ((t - π) / 2) dt = -π^2 / 4
→

[zeta_relation(ζ) ↔
    f(0) = ζ(2) ∧ f(π) = Σ_{n=1}^∞ ((-1)^n / n^2) = -ζ(2)
→
    {ζ(2)} = {Σ_{n=1}^∞ (1 / n^2) : ζ(2) = π^2 / 6}]
