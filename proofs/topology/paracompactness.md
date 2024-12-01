paracompact_definition(P) ↔
    X Hausdorff space
    𝓤 open cover of X
    ∃𝓥 locally finite refinement
    𝓥 covers X
→

[shrinking_lemma(S) ↔
    𝓤 = {Uᵢ}_{i∈I} open cover
    ∃𝓥 = {Vᵢ}_{i∈I}
    cl(Vᵢ) ⊆ Uᵢ
    ∪{Vᵢ : i ∈ I} = X]
→

[partition_unity(U) ↔
    𝓤 open cover
    ∃{φᵢ}_{i∈I}
    φᵢ: X → [0,1] continuous
    supp(φᵢ) ⊆ Uᵢ
    ∑{φᵢ(x) : i ∈ I} = 1]
→

[metric_paracompact(M) ↔
    (X,d) metric space
    → X paracompact]
