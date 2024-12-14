theorem UnionMapping() {
  assert(
    ∀I: (∀i∈I: f_i ∈ map(A_i, B_i)) →
    (⋃_{i∈I} f_i ∈ map(⋃_{i∈I} A_i, ⋃_{i∈I} B_i)) ↔
    (∀i,j∈I: Dom(f_i)∩Dom(f_j)≠∅ → 
      (∀a∈(Dom(f_i)∩Dom(f_j)): ⟨a,b⟩∈f_i → ⟨a,b⟩∈f_j))
  )
}

proof UnionMapping() {
  // Sufficient condition
  block SufficientDirection() {
    assume(⋃_{i∈I} f_i ∈ map(⋃_{i∈I} A_i, ⋃_{i∈I} B_i)) →
    setVar(i,j: I) →
    assume(Dom(f_i)∩Dom(f_j)≠∅) →
    setVar(a: Dom(f_i)∩Dom(f_j)) →
    setVar(b: ⋃_{i∈I} B_i) →
    assume(⟨a,b⟩∈f_i) →
    
    byContradiction() {
      assume(⟨a,b⟩∉f_j) →
      assert(∃c∈⋃_{i∈I} B_i: ⟨a,c⟩∈f_j) →
      assert(⟨a,b⟩,⟨a,c⟩∈⋃_{i∈I} f_i ∧ b≠c) →
      contradicts(⋃_{i∈I} f_i is mapping)
    } →
    conclude(⟨a,b⟩∈f_j)
  }

  // Necessary condition
  block NecessaryDirection() {
    assume(∀i,j∈I: Dom(f_i)∩Dom(f_j)≠∅ → 
      (∀a∈(Dom(f_i)∩Dom(f_j)): ⟨a,b⟩∈f_i → ⟨a,b⟩∈f_j)) →
    setVar(a: ⋃_{i∈I} A_i) →
    assert(∃k∈I: a∈A_k) →
    setVar(k: I) →
    assert(a∈Dom(f_k)) →
    setVar(l: f_k(a)) →
    assert(⟨a,l⟩∈f_k) →
    assert(⟨a,l⟩∈⋃_{i∈I} f_i) →
    
    byContradiction() {
      assume(∃m∈⋃_{i∈I} B_i: (⟨a,m⟩∈⋃_{i∈I} f_i ∧ m≠l)) →
      setVar(j: I | ⟨a,m⟩∈f_j) →
      assert(a∈(Dom(f_k)∩Dom(f_j))) →
      assert(⟨a,l⟩∈f_j) →
      assert(⟨a,m⟩,⟨a,l⟩∈f_j ∧ m≠l) →
      contradicts(f_j is mapping)
    } →
    conclude(⋃_{i∈I} f_i ∈ map(⋃_{i∈I} A_i, ⋃_{i∈I} B_i))
  }
}