proof(Pell_Equation) ↔
    ∀A ∈ ℕ⁺, ∃x₁, y₁ ∈ ℕ⁺, 
        pell_eqn(x₁, y₁, A) ↔ x₁² - A·y₁² = 1 ∧ 

        (BaseCase(A) ↔ 
            ∃x₁, y₁ ∈ ℕ⁺, x₁² - A·y₁² = 1 ∧ 
            pell_eqn(x₁, y₁, A) ∧ 
            Minimality(x₁, y₁, A) ↔ ∀(x, y) ∈ ℕ², 
                pell_eqn(x, y, A) → (x₁ + y₁ ≤ x + y ∨ (x₁, y₁) = (x, y))) ∧ 

        (InductiveStep(A) ↔ 
            ∀n ∈ ℕ, ∃xₙ, yₙ ∈ ℕ, 
                RecurrenceRelation(xₙ₊₁, yₙ₊₁) ↔ 
                    xₙ₊₁ = x₁·xₙ + A·y₁·yₙ ∧ 
                    yₙ₊₁ = x₁·yₙ + y₁·xₙ ∧ 
                    pell_eqn(xₙ₊₁, yₙ₊₁, A) ∧ 
                    ∀(x, y) ∈ ℕ², pell_eqn(x, y, A) → 
                        ∃n ∈ ℤ, x + y√A = (x₁ + y₁√A)ⁿ) ∧ 

        (ClosureProperty(A) ↔ 
            ∀(x, y), (x₁, y₁) ∈ ℕ², 
                pell_eqn(x₁, y₁, A) ∧ pell_eqn(x, y, A) → 
                    ∃(a, b) ∈ ℕ², pell_eqn(a, b, A) ∧ 
                    a + b√A = (x₁ + y₁√A)·(x + y√A)) ∧ 

        (Uniqueness(A) ↔ 
            ∃x₁, y₁ ∈ ℕ⁺, FundamentalUnit(x₁, y₁, A) ↔ 
                pell_eqn(x₁, y₁, A) ∧ 
                ∀(x, y) ∈ ℕ², pell_eqn(x, y, A) → 
                    ∃n ∈ ℤ, x + y√A = (x₁ + y₁√A)ⁿ) ∧ 

        (RecurrenceProof(A) ↔ 
            ∀xₙ, yₙ ∈ ℕ, ∀n ∈ ℕ, 
                RecurrenceRelation(xₙ₊₁, yₙ₊₁) ↔ 
                    xₙ₊₁ = x₁·xₙ + A·y₁·yₙ ∧ 
                    yₙ₊₁ = x₁·yₙ + y₁·xₙ ∧ 
                    pell_eqn(xₙ₊₁, yₙ₊₁, A) ∧ 
                    (∀n ∈ ℕ, xₙ₊₁ > xₙ ∧ yₙ₊₁ > yₙ) → 
                        ∀(x, y) ∈ ℤ², pell_eqn(x, y, A) → 
                            ∃n ∈ ℤ, x + y√A = (x₁ + y₁√A)ⁿ) ∧ 

        (GeneralSolution(A) ↔ 
            ∀(x, y) ∈ ℤ², 
                pell_eqn(x, y, A) ↔ 
                    ∃n ∈ ℤ, x + y√A = (x₁ + y₁√A)ⁿ) ↔ 

    ∀A ∈ ℕ⁺, ∃x₁, y₁ ∈ ℕ⁺, 
        pell_eqn(x₁, y₁, A) ∧ 
        BaseCase(A) ∧ 
        InductiveStep(A) ∧ 
        ClosureProperty(A) ∧ 
        Uniqueness(A) ∧ 
        RecurrenceProof(A) ∧ 
        GeneralSolution(A)​​​​​​​​​​​​​​​​