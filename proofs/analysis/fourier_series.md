theorem(fourier_series) ↔ 
    ∀f: ℝ → ℝ, ∀T > 0, 
    periodic(f, T) →
    f(x) = a₀ / 2 + ∑ₙ=1⁺∞ [aₙ cos(nω₀x) + bₙ sin(nω₀x)] ∧
    ω₀ = 2π / T ↔ 

    assume(f: ℝ → ℝ ∧ periodic(f, T)) →
    ω₀ := 2π / T ∧ 
    a₀ := (1 / T) ∫[x = 0..T] f(x) dx ∧ 
    aₙ := (2 / T) ∫[x = 0..T] f(x) cos(nω₀x) dx ∧ 
    bₙ := (2 / T) ∫[x = 0..T] f(x) sin(nω₀x) dx →
    
    derive_fourier_coefficients(f, T, a₀, aₙ, bₙ) ↔
    
    assume(integrate(both_sides(f(x) = a₀/2 + ∑ₙ=1⁺∞ [aₙ cos(nω₀x) + bₙ sin(nω₀x)], x = 0..T))) →
    apply_orthogonality(trig_functions) →
    
    derive_a₀ ↔ 
        a₀ = (1 / T) ∫[x = 0..T] f(x) dx ∧ proven ∧ 
    
    derive_aₙ ↔ 
        multiply_both_sides(f(x) by cos(mω₀x) ∧ integrate, x = 0..T) →
        apply_orthogonality(trig_functions) →
        ∫[x = 0..T] cos(nω₀x) cos(mω₀x) dx = 0 if n ≠ m, else = T / 2 →
        aₙ = (2 / T) ∫[x = 0..T] f(x) cos(nω₀x) dx ∧ proven ∧ 

    derive_bₙ ↔ 
        multiply_both_sides(f(x) by sin(mω₀x) ∧ integrate, x = 0..T) →
        apply_orthogonality(trig_functions) →
        ∫[x = 0..T] sin(nω₀x) sin(mω₀x) dx = 0 if n ≠ m, else = T / 2 →
        bₙ = (2 / T) ∫[x = 0..T] f(x) sin(nω₀x) dx ∧ proven ∧ 
    
    reconstruct_fourier_series ↔ 
        substitute(a₀, aₙ, bₙ into generic_fourier_form) →
        f(x) = a₀ / 2 + ∑ₙ=1⁺∞ [aₙ cos(nω₀x) + bₙ sin(nω₀x)] ∧ proven.