[definitions ↔
    algebraic_number(α) ↔ 
        ∃n ∈ ℕ, ∃a₀,...,aₙ ∈ ℚ, a₀ ≠ 0 →
        a₀αⁿ + a₁αⁿ⁻¹ + ... + aₙ₋₁α + aₙ = 0 ∧
    
    transcendental_number(α) ↔ 
        ¬algebraic_number(α)] →

[theorem_1(π_irrational) ↔
    define(Iₙ) ↔ ∫₋₁¹ (1-x²)ⁿ cos(nx)dx ∧
    
    recurrence ↔ 
        α²Iₙ = 2n(2n-1)Iₙ₋₁ - 4n(n-1)Iₙ₋₂ for n ≥ 2 →
        α^(2n+1)Iₙ = n!(Pₙsin(α) + Qₙcos(α)) where
            deg(Pₙ) = n ∧ deg(Qₙ) = n-1 ∧
    
    contradiction ↔
        assume(π = b/a, a,b ∈ ℤ) →
        b^(2n+1)Iₙ/n! is integer →
        bounded integral → 0 as n → ∞ ∧
        non_zero_integral → contradiction] →

[theorem_2(π²_irrational) ↔
    assume(π² = a/b, a,b ∈ ℤ) →
    define(f) ↔ f(x) = x^n(1-x)^n/n! ∧
    define(G) ↔ G(x) = b^n[π^2nf(x) - π^(2n-2)f'(x) + ... + (-1)^nf^(2n)(x)] →
    
    derivative_analysis ↔
        d/dx[G'(x)sin(πx) - πG(x)cos(πx)] = 
            [G''(x) + π²G(x)]sin(πx) =
            b^nπ^(2n+2)f(x)sin(πx) →
            
    integral_computation ↔
        π∫₀¹ a^nsin(πx)f(x)dx = integer ∧
        integral → 0 as n → ∞ →
        contradiction] →

[theorem_3(e_transcendental) ↔
    assume(e algebraic) →
    ∃aₘeᵐ + ... + a₁e + a₀ = 0, aᵢ ∈ ℤ, a₀ ≠ 0 →
    
    define(f) ↔ f(x) = x^(p-1)(x-1)^p...(x-m)^p/(p-1)! where p prime ∧
    define(F) ↔ F(x) = f(x) + f'(x) + ... + f^((mp+p-1))(x) →
    
    integral_equation ↔
        Σⱼ₌₀ᵐ aⱼeʲ ∫₀¹ e⁻ᵗf(t)dt = F(0)·0 - Σⱼ₌₀ᵐ aⱼF(j) →
        -Σⱼ₌₀ᵐ Σᵢ₌₀^(mp+p-1) aⱼf^(i)(j) →
        divisibility_by_p except j=0,i=p-1 →
        contradiction] →

[theorem_4(π_transcendental) ↔
    assume(π algebraic) →
    e^(iπ) + 1 = 0 →
    (e^α₁ + 1)...(e^αₙ + 1) = 0 where αᵢ form pairs →
    
    define(θ) ↔ θ(x) = 0 with roots = non-zero exponents ∧
    define(f) ↔ f(x) = x^s(p-1)[θ(x)]^p/(p-1)! →
    define(F) ↔ F(x) = f(x) + f'(x) + ... + f^(rxp)(x) →
    
    final_contradiction ↔
        LHS = integer multiple of p + c·r!·k →
        RHS → 0 as p → ∞ →
        contradiction]

∴ Proved.
