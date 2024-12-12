# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Normed_Division_Ring/Inverse_Rule/Lemma

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring with zero: $0$.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\sequence {x_n}$ be convergent in the norm $\norm {\, \cdot \,}$ to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$
Let $\sequence {y_n}$ be a subsequence of $\sequence {x_n}$.

Suppose $l \ne 0$, and for all $n: y_n \ne 0$.

Then:

$\ds \lim_{n \mathop \to \infty} {y_n}^{-1} = l^{-1}$


Proof
By Limit of Subsequence equals Limit of Sequence then $\sequence {y_n}$ is convergent with:

$\ds \lim_{n \mathop \to \infty} y_n = l$

Let $\epsilon > 0$ be given.
Let $\epsilon' = \dfrac {\epsilon  {\norm l}^2 } {2}$.
Then:

$ \epsilon' > 0$

As $\sequence {y_n} \to l$, as $n \to \infty$, we can find $N_1$ such that:

$\forall n > N_1: \norm {y_n - l} < \epsilon'$

As $\sequence {y_n}$ converges to $l \ne 0$, by Sequence Converges to Within Half Limit:

$\exists N_2 \in \N: \forall n > \N_2: \dfrac {\norm l} 2 < \norm {y_n}$
or equivalently:

$\exists N_2 \in \N: \forall n > \N_2: 1 < \dfrac {2 \norm {y_n} } {\norm l}$

Let $N = \max \set {N_1, N_2}$. 

Then $\forall n > N$:

$(1): \quad \norm {y_n - l} < \epsilon'$
$(2): \quad 1 < \dfrac {2 \norm {y_n} } {\norm l}$

Hence:














\(\ds \norm { {y_n }^{-1} - l^{-1} }\)

\(<\)







\(\ds \dfrac {2 \norm {y_n} } {\norm l} \norm { {y_n}^{-1} - l^{-1} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\norm l^2} \paren {\norm {y_n} \norm { {y_n}^{-1} - l^{-1} } \norm l}\)





multiplying and dividing by $\norm l$














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\norm l^2} \norm {y_n \paren { {y_n}^{-1} - l^{-1} } l}\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\norm l^2} \norm {y_n y_n^{-1} l - y_n l^{-1} l}\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\norm l^2} \norm {l - y_n}\)





Inverse Property of Division Ring














\(\ds \)

\(<\)







\(\ds \dfrac 2 {\norm l^2} \epsilon'\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\norm l^2} \paren {\dfrac {\epsilon \norm l^2 } 2}\)





Definition of $\epsilon'$














\(\ds \)

\(=\)







\(\ds \epsilon\)





cancelling terms




Hence:

$\sequence { {y_n}^{-1} }$ is convergent with $\ds \lim_{n \mathop \to \infty} {y_n}^{-1} = l^{-1}$.
$\blacksquare$





