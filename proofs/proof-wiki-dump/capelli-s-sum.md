theorem Capelli_Sum() {
  assert(
    ∀n ∈ ℤ_{>0}, ∀x,y ∈ ℝ ⇒ 
    (x + y)^{\overline{n}} = ∑_{k=0}^n \binom{n}{k} x^{\overline{k}} y^{\overline{n-k}}
  )
} ↔

proof Capelli_Sum() {
  setVar(n: ℤ_{>0}, x,y: ℝ) →
  
  lemma Base_Case() {
    assert(n = 1) →
    assert((x + y)^{\overline{1}} = x^{\overline{1}} + y^{\overline{1}}) →
    assert(x^{\overline{1}} + y^{\overline{1}} = x^{\overline{0}}y^{\overline{1}} + x^{\overline{1}}y^{\overline{0}}) →
    assert(x^{\overline{0}}y^{\overline{1}} + x^{\overline{1}}y^{\overline{0}} = \binom{1}{0}x^{\overline{0}}y^{\overline{1}} + \binom{1}{1}x^{\overline{1}}y^{\overline{0}}) →
    assert(∑_{k=0}^1 \binom{1}{k}x^{\overline{k}}y^{\overline{1-k}})
  } →

  lemma Inductive_Step() {
    setVar(m: ℤ_{>0}) →
    assume((x + y)^{\overline{m}} = ∑_k \binom{m}{k}x^{\overline{k}}y^{\overline{m-k}}) →
    assert((x + y)^{\overline{m+1}} = (x + y)^{\overline{m}}(x + y + m)) →
    assert(= (∑_k \binom{m}{k}x^{\overline{k}}y^{\overline{m-k}})(x + y + m)) →
    assert(= ∑_k \binom{m}{k}x^{\overline{k}}y^{\overline{m-k}}(x + k + y + m - k)) →
    assert(= ∑_k \binom{m}{k}x^{\overline{k+1}}y^{\overline{m-k}} + ∑_k \binom{m}{k}x^{\overline{k}}y^{\overline{m-k+1}}) →
    assert(= ∑_k \binom{m}{k}x^{\overline{k+1}}y^{\overline{m-k}} + ∑_k \binom{m}{k+1}x^{\overline{k+1}}y^{\overline{m-k}}) →
    apply(Pascal_Rule()) →
    assert(= ∑_k \binom{m+1}{k}x^{\overline{k+1}}y^{\overline{m-k}})
  } →

  apply(Mathematical_Induction(Base_Case(), Inductive_Step())) →
  conclude()
}