# 

Source: https://proofwiki.org/wiki/P-adic_Integer_is_Limit_of_Unique_Coherent_Sequence_of_Integers/Lemma_1

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ be the $p$-adic integers.
Let $x \in \Z_p$.
Let  $\sequence{\alpha_n}$ be an integer sequence:

$(1): \quad 0 \le \alpha_n \le p^{n + 1} - 1$
$(2): \quad \norm {x -\alpha_n}_p \le p^{-\paren{n + 1}}$

Then:

$\forall n \in \N: \alpha_{n + 1} \equiv \alpha_n \pmod {p^{n + 1}}$


Proof
For any $n \in \N$ then:














\(\ds \norm {\alpha_{n + 1} - \alpha_n }_p\)

\(=\)







\(\ds \norm {\paren {\alpha_{n + 1} - x} + \paren {x - \alpha_n } }_p\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm {\alpha_{n + 1} - x}_p, \: \norm {x - \alpha_n }_p }\)





Non-Archimedean Norm Axiom $\text N 4$: Ultrametric Inequality














\(\ds \)

\(\le\)







\(\ds \max \set {\norm {x - \alpha_{n + 1} }_p, \: \norm {x - \alpha_n }_p}\)





Norm of negative














\(\ds \)

\(\le\)







\(\ds \max \set {p^{-\paren{n + 2} } , p^{-\paren{n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds p^{-\paren{n + 1} }\)





Since $p^{-n - 1} < p^{-n}$



Hence:

$p^{n + 1} \divides \paren {\alpha_{n + 1} - \alpha_n} $
or equivalently:

$\alpha_{n + 1} \equiv \alpha_n \pmod {p^{n + 1} }$
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.3$ Exploring $\Q_p$, Lemma $3.3.4 \ \text {(ii)}$




