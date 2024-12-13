# 

Source: https://proofwiki.org/wiki/P-adic_Integer_is_Limit_of_Unique_Coherent_Sequence_of_Integers/Lemma_3

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ be the $p$-adic integers.
Let $x \in \Z_p$.
Let $\sequence {\alpha_n}$ be a sequence such that:

$(1): \quad \forall n \in \N: \alpha_n \in \Z$ and $0 \le \alpha_n \le p^{n + 1} - 1$
$(2): \quad \forall n \in \N: \alpha_{n + 1} \equiv \alpha_n \pmod {p^{n + 1} }$
$(3): \quad \ds \lim_{n \mathop \to \infty} \alpha_n = x$

$\sequence {\alpha_n}$ is a unique sequence satisfying properties $(1)$, $(2)$ and $(3)$ above.


Proof
Suppose that there exists a sequence $\sequence {\alpha'_n}$ with:

$(1'): \quad \forall n \in \N: \alpha'_n \in \Z$ and $0 \le \alpha'_n \le p^{n + 1} - 1$
$(2'): \quad \forall n \in \N: \alpha'_{n + 1} \equiv \alpha'_n \pmod {p^{n + 1} }$
$(3'): \quad \ds \lim_{n \mathop \to \infty} \alpha'_n = x$
Aiming for a contradiction, suppose:

$\alpha'_N \ne \alpha_N$ for some $N \in \N$

By Initial Segment of Natural Numbers forms Complete Residue System:

$\alpha'_N \not \equiv \alpha_N \pmod {p^{N + 1} }$
Then for all $n > N$:














\(\ds \alpha'_n\)

\(\equiv\)







\(\ds \alpha'_N \pmod {p^{N + 1} }\)





by $(2)$ above














\(\ds \)

\(\not \equiv\)







\(\ds \alpha_N \pmod {p^{N + 1} }\)




















\(\ds \)

\(\equiv\)







\(\ds \alpha_n \pmod {p^{N + 1} }\)





by $(2)$ above



That is, for all $n > N$:

$\alpha'_n \not \equiv \alpha_n \pmod {p^{N + 1} }$
Hence for all $n > N$:

$\norm {\alpha'_n - \alpha_n}_p > p^{-\paren {N + 1} }$

By $(3)$ the limit of $\sequence {\alpha_n}$ is $x$:

$\exists N_1 \in \N: \forall n \ge N_1: \norm {x - \alpha_n}_p \le p^{-\paren {N + 1} }$
Similarly for $\sequence{\alpha'_n}$:

$\exists N_2 \in \N: \forall n \ge N_2: \norm {x - \alpha'_n}_p \le p^{-\paren {N + 1} }$

Let $M = \max \set {N + 1, N_1, N_2}$.
Then:

$\norm {\alpha'_M - \alpha_M}_p > p^{-\paren {N + 1} }$
$\norm {x - \alpha_M} _p\le p^{-\paren {N + 1} }$
$\norm {x - \alpha'_M}_p \le p^{-\paren {N + 1} }$
But:














\(\ds \norm {\alpha'_M - \alpha_M}_p\)

\(=\)







\(\ds \norm {\paren {\alpha'_M - x} + \paren {x - \alpha_M} }_p\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm {\alpha'_M - x}_p, \: \norm {x - \alpha_M}_p}\)





Non-Archimedean Norm Axiom $\text N 4$: Ultrametric Inequality














\(\ds \)

\(=\)







\(\ds \max \set {\norm {x - \alpha'_M}_p, \: \norm {x - \alpha_M}_p}\)





Norm of negative














\(\ds \)

\(\le\)







\(\ds \max \set {p^{-\paren {N + 1} } , p^{-\paren {N + 1} } }\)




















\(\ds \)

\(=\)







\(\ds p^{-\paren {N + 1} }\)









This contradicts the previous assertion that:

$\norm {\alpha'_M - \alpha_M}_p > p^{-\paren {N + 1} }$
Hence:

$\sequence {\alpha'_n} = \sequence {\alpha_n}$
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.3$ Exploring $\Q_p$, Lemma $3.3.4 \, \text {(ii)}$




