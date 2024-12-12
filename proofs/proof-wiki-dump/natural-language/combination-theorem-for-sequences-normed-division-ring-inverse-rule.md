# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Normed_Division_Ring/Inverse_Rule



Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring with zero: $0$.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\sequence {x_n}$ be convergent in the norm $\norm {\, \cdot \,}$ to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$
Suppose $l \ne 0$.

Then:

$\exists k \in \N : \forall n \in \N: x_{k + n} \ne 0$
and the subsequence $\sequence { x_{k+n}^{-1} }$ is well-defined and convergent with:

$\ds \lim_{n \mathop \to \infty} {x_{k + n} }^{-1} = l^{-1}$.


Proof
Since $\sequence {x_n}$ converges to $l \ne 0$, by Sequence Converges to Within Half Limit then:

$\exists k \in \N: \forall n \in \N: \dfrac {\norm l} 2 < \norm {x_{k + n} }$
By Norm Axiom $\text N 1$: Positive Definiteness:

$\forall n \in \N : x_{k + n} \ne 0$

Let $\sequence {y_n}$ be the subsequence of $\sequence {x_n}$ where $y_n = x_{k + n}$. 
By Limit of Subsequence equals Limit of Sequence, $\sequence {y_n}$ is convergent with:

$\ds \lim_{n \mathop \to \infty} y_n = l$
It also follows that: 

$\forall n \in \N : y_n \ne 0$
So $\sequence { {y_n}^{-1} }$ is well-defined and:

$\sequence { {y_n}^{-1} } = \sequence { {x_{k + n} }^{-1} }$


Lemma
$\ds \lim_{n \mathop \to \infty} {y_n}^{-1} = l^{-1}$
$\blacksquare$


Sources




