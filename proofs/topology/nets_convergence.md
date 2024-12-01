net_definition(N) ↔
    (D,≤) directed set
    ∀α,β,γ ∈ D
    α ≤ α
    α ≤ β ∧ β ≤ γ → α ≤ γ
    ∃δ ∈ D, α ≤ δ ∧ β ≤ δ
→

[convergence(C) ↔
    x: D → X net
    a ∈ X
    x → a ↔ ∀U open, a ∈ U
    ∃α ∈ D, ∀β ≥ α
    x_β ∈ U]
→

[subnet_definition(S) ↔
    y: E → X subnet of x: D → X
    ↔ ∃φ: E → D
    y = x ∘ φ
    ∀α ∈ D, ∃β ∈ E
    ∀γ ≥ β, φ(γ) ≥ α]
→

[equivalence(E) ↔
    x → a
    ↔ ∃𝓕 filter
    𝓕 → a
    ∧ {x_α : α ≥ β} ∈ 𝓕]
