theorem_definition(optional_stopping_uniform_integrability) ↔
    ∀{Xₙ}, martingale(Xₙ, ℱₙ) ∧ uniformly_integrable(Xₙ) ∧ stopping_time(T) →
    (E(X₀) = E(X_T) if E(|X_T|) < ∞ ∧ T is almost surely finite) →

proof(optional_stopping_uniform_integrability) ↔
    define(T_∧n) ↔ min(T, n) →
    lemma(4.1) ↔
        E(X_T) = E(X_T_∧n) + E(X_T ⋅ I{T > n}) - E(X_T_∧n ⋅ I{T > n}) →
        proof(strategy) ↔
            consider_cases(T ≤ n ∨ T > n) →
            case(T ≤ n) ↔ X_T = X_T_∧n ∧ I{T > n} = 0 →
            case(T > n) ↔
                X_T = X_T_∧n + X_T ⋅ I{T > n} - X_T_∧n ⋅ I{T > n} →
            in_both_cases(X_T = X_T_∧n + X_T ⋅ I{T > n} - X_T_∧n ⋅ I{T > n}) →
            expand_expectation ↔
                E(X_T) = E(X_T_∧n) + E(X_T ⋅ I{T > n}) - E(X_T_∧n ⋅ I{T > n}) →
            conclusion(lemma(4.1)) ↔ proved →

    proposition(4.2) ↔ E(X_T_∧n) = E(X₀) for all n ∈ ℕ →
    proof(proposition(4.2)) ↔
        T_∧n ≤ n for all n ∈ ℕ ∧ stopping_time(T) →
        X_T_∧n is bounded and adapted →
        E(X_T_∧n) = E(X₀) by martingale_property →

    conclusion(optional_stopping) ↔
        by(lemma(4.1), proposition(4.2)) →
        lim_{n→∞} E(X_T ⋅ I{T > n}) = 0 ∧ lim_{n→∞} E(X_T_∧n ⋅ I{T > n}) = 0 →
        dominated_convergence_theorem ↔
            E(X_T) = lim_{n→∞} E(X_T_∧n) = E(X₀) →
        proved.