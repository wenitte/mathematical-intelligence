theorem_definition(arithmetic_series_sum) ↔
    let Sₙ = ∑_{i=1}^n a_i where a₁ = first term, d = common difference →
    nth_term ↔ aₙ = a₁ + (n - 1)d →
    Sₙ = a₁ + (a₁ + d) + (a₁ + 2d) + ... + [a₁ + (n - 1)d] →
    
step_1 ↔ write_Sₙ_twice ↔
    Sₙ = a₁ + (a₁ + d) + (a₁ + 2d) + ... + [a₁ + (n - 1)d] →
    reverse_terms ↔ Sₙ = [a₁ + (n - 1)d] + [a₁ + (n - 2)d] + ... + (a₁ + d) + a₁ →
    
step_2 ↔ add_equations ↔
    2Sₙ = n(a₁ + aₙ) →
    solve_for_Sₙ ↔ Sₙ = n/2 (a₁ + aₙ) →
    
step_3 ↔ substitute_aₙ ↔
    Sₙ = n/2 [a₁ + a₁ + (n - 1)d] →
    simplify ↔ Sₙ = n/2 [2a₁ + (n - 1)d] →

conclusion ↔
    Sₙ = n/2 (a₁ + aₙ) or Sₙ = n/2 [2a₁ + (n - 1)d] ∴ Proved.