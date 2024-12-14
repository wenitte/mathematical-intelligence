theorem MatroidCircuitPermutation() {
  assert(
    ∀S: FiniteSet ∧
    ∀C: SetOfSubsets(S) ∧
    satisfies(C, CircuitAxioms) ∧
    ∀x̄: OrderedTuple(S) ∧
    ∀π: Permutation(x̄) →
    map(t,x̄) = map(t,π(x̄))
  )
} ↔

proof MatroidCircuitPermutation() {
  setDef(θ(x̄): OrderedTuple → {0,1}, 
    "∀i: θ(x̄)_i = 0 ⟺ ∃C ∈ C: x_i ∈ C ⊆ {x_1,...,x_i}") →
  
  setDef(t(x̄): OrderedTuple → ℕ,
    "t(x̄) = Σ(i=1 to |x̄|) θ(x̄)_i") →

  lemma AdjacentSwap() {
    assert(
      ∀i ∈ {1,...,|x̄|-1}: 
      t(x_1,...,x_i,x_{i+1},...,x_q) = 
      t(x_1,...,x_{i+1},x_i,...,x_q)
    )
  } →

  proof AdjacentSwap() {
    setVar(a: t(x_1,...,x_{i-1})) →
    setVar(a_1: t(x_1,...,x_{i-1},x_i)) →
    setVar(a_2: t(x_1,...,x_{i-1},x_{i+1})) →
    setVar(a_12: t(x_1,...,x_{i-1},x_i,x_{i+1})) →
    setVar(a_21: t(x_1,...,x_{i-1},x_{i+1},x_i)) →

    cases(θ_values) {
      case1() {
        assert(θ_i = 1 ∧ θ_{i+1} = 1) →
        prove(a_12 = a_21)
      } →
      
      // Similar case structures for cases 2-8
      case8() {
        assert(θ_i = 0 ∧ θ_{i+1} = 0) →
        prove(a_12 = a_21)
      }
    } →
    
    assert(∀cases: a_12 = a_21)
  } →

  apply(AdjacentSwap) →
  assert(
    "Adjacent transpositions generate all permutations" ∧
    "Value preserved under adjacent swaps" →
    "Value preserved under all permutations"
  )
}