theorem_definition(trirecip) ↔
    Σk ∈ N (2/(k·(k+1))) = 2

proof(trirecip) ↔
    base_definitions(
        N := ℤ_≥1 ∧
        ∀k ∈ N, (k+1) ∈ N ∧
        ∀k ∈ N, k·(k+1) ∈ N
    ) ∧

    lemma_1(nonzero_product) ↔
        ∀k ∈ N, k·(k+1) ≠ 0 →
        ∀k ∈ N, 2/(k·(k+1)) = 2·(1/(k·(k+1))) ∧
    
    lemma_2(sequence_convergence) ↔
        let(seq1 := (n ∈ N ↦ 1/(n·(n+1)))) →
        seq1 ∈ dom_convergent ∧
        lim(seq1) = 1 ∧
    
    proof_steps(
        ∀k ∈ N →
            k·(k+1) ∈ C ∧
            k·(k+1) ≠ 0 ∧
            1/(k·(k+1)) ∈ R ∧
            2·Σk∈N(1/(k·(k+1))) = Σk∈N(2/(k·(k+1))) ∧
            Σk∈N(1/(k·(k+1))) = 1
    ) →

    conclusion(
        2·Σk∈N(1/(k·(k+1))) = 2·1 ∧
        Σk∈N(2/(k·(k+1))) = 2
    )
    ∴ Proved.