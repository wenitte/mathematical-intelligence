theorem ThreeCyclePermutation() {
  assert(
    ∀n ≥ 5 ∧ ∀ρ ∈ S_n [ρ is 3-cycle] ∧
    let(ℕ_n = {0,1,...,n-1}) ∧
    let(i,j,k ∈ ℕ_n) ∧
    let(ρ = (i,j,k)) ⇒
    ∃σ ∈ A_n [
      map(σ,1) = i ∧
      map(σ,2) = j ∧
      map(σ,3) = k
    ]
  )
}

proof ThreeCyclePermutation() {
  setVar(n: ℕ, n ≥ 5) →
  setVar(i,j,k: ℕ_n) →
  let(S = |{1,2,3} ∩ {i,j,k}|) →
  
  cases(S) {
    case(S = 0) {
      assert(n ≥ 6) →
      let(σ = (1,i,2,j)(3,k)) →
      apply(ParityKCycle) →
      apply(SignComposition) →
      assert(σ ∈ A_n)
    }

    case(S = 1) {
      assumeWLOG({1,2,3} ∩ {i,j,k} = {1}) →
      branch {
        when(i = 1) {
          let(σ = (2,j)(3,k)) →
          apply(ParityKCycle) →
          apply(SignComposition)
        }
        when(i ≠ 1) {
          assumeWLOG(j = 1) →
          let(σ = (1,i,3,k,2)) →
          apply(ParityKCycle)
        }
      }
    }

    case(S = 2) {
      assumeWLOG({1,2,3} ∩ {i,j,k} = {1,2}) →
      branch {
        when(i = 1 ∧ j = 2) {
          exists(l ∈ ℕ_n ∖ {1,2,3,k}) →
          let(σ = (3,k,l)) →
          apply(ParityKCycle)
        }
        when((i = 1 ∧ j ≠ 2) ∨ (i ≠ 1 ∧ j = 2)) {
          assumeWLOG(i = 1 ∧ j ≠ 2) →
          assert(k = 2) →
          let(σ = (2,j,3)) →
          apply(ParityKCycle)
        }
        when(i ≠ 1 ∧ j ≠ 2) {
          branch {
            when(i = 2 ∧ j = 1) {
              let(σ = (1,2)(3,k)) →
              apply(ParityKCycle) →
              apply(SignComposition)
            }
            otherwise {
              assumeWLOG(i = 2 ∧ k = 1) →
              exists(l ∈ ℕ_n ∖ {1,2,3,k}) →
              let(σ = (1,2,j,l,3))
            }
          }
        }
      }
    }

    case(S = 3) {
      assert({i,j,k} = {1,2,3}) →
      let(α = permutation([1→i, 2→j, 3→k])) →
      branch {
        when(α = identity) {
          let(β = identity) →
          let(σ = β∘α) →
          apply(IdentityIsEven)
        }
        when(|fix(α)| = 1) {
          exists(β: transposition disjoint from α) →
          let(σ = β∘α) →
          apply(ParityKCycle) →
          apply(SignComposition)
        }
        when(|fix(α)| = 0) {
          let(β = identity) →
          let(σ = α) →
          apply(ParityKCycle)
        }
      }
    }
  } →
  
  assert(∀ρ[3-cycle] ∃σ ∈ A_n [desired_properties(σ)])
}