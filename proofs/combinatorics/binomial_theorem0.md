theorem_definition(Binomial_Theorem) ↔ 
    ∀a,b,n ∈ ℕ, (a + b)ⁿ = Σ_{k=0}^n (n choose k)·aⁿ⁻ᵏbᵏ →

base_case(B) ↔ (a + b)¹ = a + b →

inductive_hypothesis(H) ↔ (a + b)ⁿ = Σ_{k=0}^n (n choose k)·aⁿ⁻ᵏbᵏ →

expansion_step(E) ↔ (a + b)ⁿ⁺¹ = (Σ_{k=0}^n (n choose k)·aⁿ⁻ᵏbᵏ)(a + b) →

term_distribution(T) ↔ Σ_{k=0}^n [(n choose k)·aⁿ⁻ᵏbᵏ·a + (n choose k)·aⁿ⁻ᵏbᵏ·b] →

pascal_identity(P) ↔ ∀m ≤ n, (n choose m) + (n choose m+1) = (n+1 choose m+1) →

final_form(F) ↔ Σ_{k=0}^{n+1} (n+1 choose k)·a^(n+1-k)·b^k