theorem Millin_Series_Closed_Form() {
  assert(
    ∑(n=0 to ∞)[1/F_{2^n}] = (7-√5)/2
    where F_n denotes nth Fibonacci number
  )
} ↔

proof Millin_Series_Closed_Form() {
  lemma Finite_Sum_Form() {
    assert(
      ∀n≥1: ∑(r=0 to n)[1/F_{2^r}] = 3 - F_{2^n-1}/F_{2^n}
    )
    
    proof by_induction() {
      base_case(n=1) {
        assert(1/F_1 + 1/F_2 = 2) →
        assert(2 = 3 - F_1/F_2)
      } →
      
      inductive_step() {
        assume(
          ∑(r=0 to k)[1/F_{2^r}] = 3 - F_{2^k-1}/F_{2^k}
        ) →
        assert(
          ∑(r=0 to k+1)[1/F_{2^r}] = 
          (3 - F_{2^k-1}/F_{2^k} + 1/F_{2^{k+1}})
        ) →
        apply(Fibonacci_Recurrence) →
        assert(
          = 3 - (F_{2^k-1}F_{2^k}(F_{2^k+1} + F_{2^k-1}) - F_{2^k})/(F_{2^k}F_{2^{k+1}})
        ) →
        apply(Cassini_Identity) →
        assert(
          = 3 - F_{2^{k+1}-1}/F_{2^{k+1}}
        )
      }
    }
  } →
  
  apply(Finite_Sum_Form) →
  assert(
    ∑(r=0 to ∞)[1/F_{2^r}] = 
    lim(n→∞)[3 - F_{2^n-1}/F_{2^n}]
  ) →
  apply(Fibonacci_Ratio_Limit) →
  assert(
    = 3 - 2/(√5 + 1)
  ) →
  assert(
    = 3 - (2(√5 - 1))/4
  ) →
  assert(
    = 3 - (√5 - 1)/2
  ) →
  assert(
    = (7-√5)/2
  )
}