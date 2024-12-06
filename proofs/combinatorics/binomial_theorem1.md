theorem_definition(Binomial_Theorem) ↔ 
    ∀a,b,n ∈ ℕ, (a + b)ⁿ = Σ_{k=0}^n (n choose k)·aᵏbⁿ⁻ᵏ →

taylor_expansion(T) ↔ 
    eˣ = Σ_{n=0}^∞ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... →

exponential_property(E) ↔ 
    eᵃ⁺ᵇ = eᵃ·eᵇ →

series_convolution(C) ↔ 
    (a + b)ⁿ/n! = Σ_{k=0}^n (aᵏ/k!)·(bⁿ⁻ᵏ/(n-k)!) →

coefficient_simplification(S) ↔ 
    (a + b)ⁿ = Σ_{k=0}^n (n!/(k!(n-k)!))·aᵏbⁿ⁻ᵏ →

binomial_form(B) ↔ 
    n!/(k!(n-k)!) = (n choose k) →
    (a + b)ⁿ = Σ_{k=0}^n (n choose k)·aᵏbⁿ⁻ᵏ