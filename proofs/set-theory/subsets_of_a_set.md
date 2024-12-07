theorem_definition(Subset_Count) ↔
    ∀A finite_set, |A| = n →
    |P(A)| = 2^n →

[example_case_n3 ↔
    A = {1,2,3} ∧
    count_by_size ↔ [
        size_0 ↔ |{∅}| = ₃C₀ = 1 ∧
        size_1 ↔ |{{1},{2},{3}}| = ₃C₁ = 3 ∧
        size_2 ↔ |{{1,2},{1,3},{2,3}}| = ₃C₂ = 3 ∧
        size_3 ↔ |{{1,2,3}}| = ₃C₃ = 1 ∧
        total ↔ ₃C₀ + ₃C₁ + ₃C₂ + ₃C₃ = 1 + 3 + 3 + 1 = 8 = 2³
    ]] →

[generalization ↔
    subset_count(n) := Σ_{k=0}^n ₙCₖ ∧
    binomial_theorem ↔ 
        (1+x)^n = Σ_{k=0}^n ₙCₖx^k →
        let(x=1) →
        2^n = Σ_{k=0}^n ₙCₖ] →

[conclusion ↔
    subset_count(n) = Σ_{k=0}^n ₙCₖ = 2^n]
∴ Proved.