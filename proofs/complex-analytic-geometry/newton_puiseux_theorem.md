theorem_statement(Newton_Puiseux) ↔
    (
        definitions(
            C[[z]] = formal_power_series_ring(C) ∧
            C{z} = convergent_power_series_ring(C) ∧
            C((z)) = quotient_field(C[[z]]) ∧
            C({z}) = quotient_field(C{z}) ∧
            C[[z*]] = formal_puiseux_series_ring(C) ∧
            C{z*} = convergent_puiseux_series_ring(C) ∧
            puiseux_series(f) ↔ ∃r ∈ N, f(z) = f(z^(1/r)) ∧
            order(φ, n, r) ↔ φ(z) = Σ_{k≥n} a_k·z^(k/r) ∧ a_n ≠ 0
        ) ∧

        lemma(Elementary_Symmetric) ↔
            (∀f ∈ C[[z]], ∀r ∈ N,
            Q(z,T) := Π_{i=0}^{r-1} (T - f(ε_r^i·z)) →
            monic_polynomial_in(Q, T) ∧ coeffs_in(C[[z^r]]))
    ) →
    
    (∀P ∈ C[[z*]][T], monic(P) ∧ irreducible(P) →
        (∃n ∈ N, deg(P) = n) →
            (∃q ∈ N⁺, ∀k,
                (let(T' = T + 1/n·a₁(z)) ∧
                let(r_k = ord(a_k)) ∧
                let(r = min(r_k/k)) ∧
                let(r = p/q, p ∈ Z)) →
                
                (transform(z = w^q, T = U·w^p) →
                    P(z,T) = w^(np)·Q(w,U) ∧
                    Q(w,U) = U^n + b₂(w)U^(n-2) + ... + bₙ(w) ∧
                    (∃k, ord(b_k) = 0) ∧
                    Q(0,U) ≠ (U - c)^n) →
                    
                    (by_Hensels_lemma(∃Q₁,Q₂, Q = Q₁·Q₂) →
                        (∃g ∈ C[[z]], ∃φ = g(z^(1/n)),
                            P(z,T) = Π_{i=0}^{n-1} (T - g(ε_n^i·z^(1/n)))))))) ∧
    
    algebraically_closed(C((z*))) ∧ 
    algebraically_closed(C({z*}))
    ∴ Proved.
