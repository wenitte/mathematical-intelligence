# 

Source: https://proofwiki.org/wiki/Exponential_Sequence_is_Uniformly_Convergent_on_Compact_Sets



Theorem
Let $\EE = \sequence {E_n}$ denote the sequence of complex functions $E_n: \C \to \C$ defined as:

$\map {E_n} z = \paren {1 + \dfrac z n}^n$
Let $K$ be a compact subset of $\C$.

Then $\EE$ is uniformly convergent on $K$.


Proof
$\EE$ is Uniformly Bounded on an open space containing $K$
First, from Equivalence of Definitions of Complex Exponential Function  we see that $\EE$ is pointwise convergent to $\exp$.


This page has been identified as a candidate for refactoring of medium complexity.In particular: extract this result from that pageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
From Combination Theorem for Continuous Complex Functions, $E_n$ is continuous for each $n \in \N$.
From Compact Subspace of Metric Space is Bounded, $K$ is bounded by some real number $M \in \R$.

Let:

$M' = M + 1$
$U = \set {z \in \C: \cmod z < M'}$
$z \in U$
$n \in \N$

From the Triangle Inequality for Complex Numbers:

$\cmod {1 + \dfrac z n} \le 1 + \dfrac {\cmod z} n$
Thus, from Power Function is Strictly Increasing over Positive Reals: Natural Exponent:

$\cmod {1 + \dfrac z n}^n \le \paren {1 + \dfrac {\cmod z} n}^n$
Call this result $(1)$.

Also:














\(\ds \cmod z\)

\(<\)







\(\ds M'\)














\(\ds \leadsto \ \ \)





\(\ds 1 + \frac {\cmod z} n\)

\(<\)







\(\ds 1 + \frac {M'} n\)





Divide both sides by $n$, add $1$ to both sides




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \paren {1 + \frac {\cmod z} n}^n\)

\(<\)







\(\ds \paren {1 + \frac {M'} n}^n\)





Power Function is Strictly Increasing over Positive Reals: Natural Exponent




Thus it is sufficient to show that $\paren {1 + \dfrac {M'} n}^n$ is bounded.

From Exponential Sequence is Eventually Increasing:

$\exists N \in \N: n \ge N \implies \paren {1 + \dfrac {M'} n}^n \le \paren {1 + \dfrac {M'} {n + 1} }^{n + 1}$
So, for $n \ge N$:














\(\ds \paren {1 + \frac {M'} n}^n\)

\(\le\)







\(\ds \lim_{n \mathop \to \infty} \paren {1 + \frac {M'} n}^n\)





Limit of Bounded Convergent Sequence is Bounded














\(\ds \)

\(=\)







\(\ds \exp M'\)










Now, for each $n \in \set {1, 2, \ldots, N - 1}$:

$\exists M_n \in \R: \paren {1 + \dfrac {M'} n}^n \le M_n$
by Continuous Function on Compact Subspace of Euclidean Space is Bounded.
So:

$\forall n \in \N: \paren {1 + \dfrac {M'} n}^n \le \max \set {M_1, M_2, \ldots, M_{N - 1}, \exp M'}$
Call this result $(3)$.

Hence, for $z \in U$; that is, for $\cmod z < {M'}$:










\(\ds \forall n \in \N: \, \)



\(\ds \cmod {\paren {1 + \frac z n}^n}\)

\(=\)







\(\ds \cmod {1 + \dfrac z n}^n\)





Complex Modulus of Product of Complex Numbers














\(\ds \)

\(\le\)







\(\ds \paren {1 + \dfrac {\cmod z} n}^n\)





From $(1)$














\(\ds \)

\(\le\)







\(\ds \paren {1 + \frac {M'} n}^n\)





From $(2)$














\(\ds \)

\(\le\)







\(\ds \max \set {M_1, M_2, \ldots, M_{N - 1}, \exp M'}\)





From $(3)$




That is, $\EE$ is uniformly bounded on $U$.


$\EE$ is Uniformly Convergent on $K$
Note that, from Combination Theorem for Complex Derivatives:

$\forall n \in \N: \map {E_n} z$ is holomorphic on $U$.

From Uniformly Bounded Family is Locally Bounded, $\EE$ is locally bounded on $U$.
From Montel's Theorem, $\EE$ is a normal family.
From Vitali's Convergence Theorem, $\EE$ converges uniformly on any compact subset of $U$.
In particular, $\EE$ converges uniformly on $K$.
Hence the result.
$\blacksquare$





