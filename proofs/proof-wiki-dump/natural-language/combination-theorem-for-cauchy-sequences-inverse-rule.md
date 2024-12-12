# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Cauchy_Sequences/Inverse_Rule

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring with zero: $0$.
Let $\sequence {x_n}$ be a Cauchy sequences in $R$.
Suppose $\sequence {x_n}$ does not converge to $0$.
Then:

$\exists K \in \N: \forall n > K : x_n \ne 0$
and the sequence:

$\sequence {\paren {x_{K + n} }^{-1} }_{n \mathop \in \N}$ is well-defined and a Cauchy sequence.


Proof
Since $\sequence {x_n}$ does not converge to $0$, by Cauchy Sequence Is Eventually Bounded Away From Non-Limit then:

$\exists K \in \N$ and $C \in \R_{>0}: \forall n > K: C <  \norm {x_n}$
or equivalently:

$\exists K \in \N$ and $C \in \R_{>0}: \forall n > K: 1 < \dfrac {\norm {x_n} } C$
By Norm Axiom $\text N 1$: Positive Definiteness:

$\forall n > K : x_n \ne 0$
Let $\sequence {y_n}$ be the subsequence of $\sequence {x_n}$ defined as:

$y_n = x_{K + n}$
By Subsequence of Cauchy Sequence in Normed Division Ring is Cauchy Sequence:

$\sequence {y_n}$ is a Cauchy sequence.
So $\sequence { {y_n}^{-1} }$ is well-defined and $\sequence { {y_n}^{-1} } = \sequence {\paren {x_{K + n} }^{-1} }_{n \mathop \in \N}$.

Let $\epsilon > 0$ be given.
Let $\epsilon' = \epsilon C^2$, then $ \epsilon' > 0$.
Similarly, $\sequence {y_n}$ is a Cauchy sequence, we can find $N$ such that:

$\forall n, m > N_2: \norm {y_n - y_m} < \epsilon'$
Thus $\forall n, m > N$:

$(1): \quad 1 < \dfrac {\norm {y_n} } C, \dfrac {\norm {y_m} } C$
$(2): \quad \norm {y_n - y_m} < \epsilon'$
Hence:














\(\ds \norm { {y_n}^{-1} - {y_m}^{-1} }\)

\(<\)







\(\ds \dfrac {\norm {y_n} } C \norm { {y_n }^{-1} - {y_m}^{-1} } \dfrac {\norm {y_m} } C\)





$(1)$ above














\(\ds \)

\(=\)







\(\ds \dfrac 1 {C^2} \paren {\norm {y_n} \norm { {y_n }^{-1} - {y_m}^{-1 } } \norm {y_m} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {C^2} \norm {y_n \paren { {y_n }^{-1 } - {y_m }^{-1} } y_m}\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \dfrac 1 {C^2} \norm {\paren {y_n {y_n }^{-1 } - y_n {y_m }^{-1} } y_m }\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds \dfrac 1 {C^2} \norm {y_n {y_n}^{-1} y_m - y_n {y_m}^{-1} y_m}\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds \dfrac 1 {C^2} \norm {y_m - y_n}\)





Inverse Property of a Division Ring














\(\ds \)

\(<\)







\(\ds \dfrac 1 {C^2} \epsilon'\)





$(2)$ above














\(\ds \)

\(=\)







\(\ds \dfrac 1 {C^2} \paren {\epsilon C^2}\)





Definition of $\epsilon'$














\(\ds \)

\(=\)







\(\ds \epsilon\)









So:

$\sequence { { {y_n}^{-1} } }$ is a Cauchy sequence in $R$ by definition.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




