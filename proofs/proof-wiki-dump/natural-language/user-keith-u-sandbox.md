# 

Source: https://proofwiki.org/wiki/User:Keith.U/Sandbox



Theorem
Let $\mathcal E = \left \langle{E_n}\right \rangle$ denote the sequence of functions $E_n: \C \to \C$ defined as:

$E_n \left({z}\right) = \left({1 + \dfrac z n}\right)^n$
Let $K$ be a compact subset of $\C$.

Then $\mathcal E$ is uniformly convergent on $K$.


Proof
$\mathcal E$ is Uniformly Bounded on an open space containing $K$
First, from Equivalence of Definitions of Complex Exponential Function  we see that $\mathcal E$ is pointwise convergent to $\exp$.
From Combination Theorem for Continuous Complex Functions, $E_n$ is continuous for each $n \in \N$.
From Compact Subspace of Metric Space is Bounded, $K$ is bounded by some real number $M \in \R$.

Let:

$M' = M + 1$
$U = \left \{{z \in \C: \left \vert{z}\right \vert < M'}\right \}$
$z \in U$
$n \in \N$

From the Triangle Inequality for Complex Numbers:

$\left \vert{1 + \dfrac z n}\right \vert \le 1 + \dfrac {\left \vert{z}\right \vert} n$
Thus, from Power Function is Strictly Increasing over Positive Reals: Natural Exponent:

$\left \vert{1 + \dfrac z n}\right \vert^n \le \left({1 + \dfrac {\left \vert{z}\right \vert} n}\right)^n$
Call this result $(1)$.

Also:














\(\ds \left \vert{z}\right \vert\)

\(<\)







\(\ds M'\)














\(\ds \implies \ \ \)





\(\ds 1 + \frac {\left \vert{z}\right \vert} n\)

\(<\)







\(\ds 1 + \frac {M'} n\)





Divide both sides by $n$, add $1$ to both sides




\(\text {(2)}: \quad\)



\(\ds \implies \ \ \)





\(\ds \left({1 + \frac {\left \vert{z}\right \vert} n}\right)^n\)

\(<\)







\(\ds \left({1 + \frac {M'} n}\right)^n\)





Power Function is Strictly Increasing over Positive Reals: Natural Exponent




Thus it is sufficient to show that $\left({1 + \dfrac {M'} n}\right)^n$ is bounded.

From Exponential Sequence is Eventually Increasing:

$\exists N \in \N: n \geq N \implies  \left({1 + \dfrac {M'} n}\right)^n \le \left({1 + \dfrac {M'} {n + 1}}\right)^{n + 1}$
So, for $n \geq N$:














\(\ds \left({1 + \frac {M'} n}\right)^n\)

\(\leq\)







\(\ds \lim_{n \mathop \to \infty} \left({1 + \frac {M'} n}\right)^n\)





Limit of Bounded Convergent Sequence is Bounded














\(\ds \)

\(=\)







\(\ds \exp M'\)










Now, for each $n \in \left \{{1, 2, \ldots, N-1}\right \}$:

$\exists M_n \in \R: \left({1 + \dfrac {M'} n}\right)^n \leq M_n$
by Continuous Function on Compact Subspace of Euclidean Space is Bounded.
So:

$\forall n \in \N: \left({1 + \dfrac {M'} n}\right)^n \le \max \left \{{M_1, M_2, \ldots, M_{N-1}, \exp M'}\right \}$
Call this result $(3)$.

Hence, for $z \in U$; that is, for $\left \vert{z}\right \vert < {M'}$:














\(\ds \forall n \in \N: \left \vert{\left({1 + \frac z n}\right)^n}\right \vert\)

\(=\)







\(\ds \left \vert{1 + \dfrac z n}\right \vert^n\)





Complex Modulus of Product of Complex Numbers














\(\ds \)

\(\le\)







\(\ds \left({1 + \dfrac {\left \vert{z}\right \vert} n}\right)^n\)





From $(1)$














\(\ds \)

\(\le\)







\(\ds \left({1 + \frac {M'} n}\right)^n\)





From $(2)$














\(\ds \)

\(\le\)







\(\ds \max \left \{ {M_1, M_2, \ldots, M_{N-1}, \exp M'}\right \}\)





From $(3)$




That is, $\mathcal E$ is uniformly bounded on $U$.


$\mathcal E$ is Uniformly Convergent on $K$
Note that, from Combination Theorem for Complex Derivatives:

$\forall n \in \N: E_n \left({z}\right)$ is holomorphic on $U$.

From Uniformly Bounded Family is Locally Bounded, $\mathcal E$ is locally bounded on $U$.
From Montel's Theorem, $\mathcal E$ is a normal family.
From Vitali's Convergence Theorem, $\mathcal E$ converges uniformly on any compact subset of $U$.
In particular, $\mathcal E$ converges uniformly on $K$.
Hence the result.
$\blacksquare$





