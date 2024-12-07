theorem_definition(Inclusion_Exclusion_Probability) ↔
    [Two_Events ↔
        ∀E,F ∈ F,
        P(E ∪ F) = P(E) + P(F) - P(E ∩ F)] →

    [n_Events ↔
        ∀E₁,...,Eₙ ∈ F,
        P(E₁ ∪ ... ∪ Eₙ) = 
        ∑_{i} P(Eᵢ) - 
        ∑_{i₁<i₂} P(Eᵢ₁ ∩ Eᵢ₂) +
        ∑_{i₁<i₂<i₃} P(Eᵢ₁ ∩ Eᵢ₂ ∩ Eᵢ₃) +
        ... +
        (-1)ⁿ⁺¹P(E₁ ∩ ... ∩ Eₙ)] →

    [Alternating_Property ↔
        ∀k ≤ n,
        ∑_{i≤k} (-1)ᵏ⁺¹ ∑_{i₁<...<iₖ} P(Eᵢ₁ ∩ ... ∩ Eᵢₖ) ≥ 
        P(E₁ ∪ ... ∪ Eₙ) when k odd ∧
        ≤ P(E₁ ∪ ... ∪ Eₙ) when k even]
