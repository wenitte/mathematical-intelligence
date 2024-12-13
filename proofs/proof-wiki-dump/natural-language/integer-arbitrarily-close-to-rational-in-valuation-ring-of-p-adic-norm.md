# 

Source: https://proofwiki.org/wiki/Integer_Arbitrarily_Close_to_Rational_in_Valuation_Ring_of_P-adic_Norm



Theorem
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime number $p$.
Let $x \in \Q$ such that $\norm x_p \le 1$.

Then for all $i \in \N$ there exists $\alpha \in \Z$ such that:

$\norm {x - \alpha}_p \le p^{-i}$


Proof
Let $i \in \N$.
Let $x = \dfrac a b: a, b \in \Z \text{ and } b \ne 0$.
Without loss of generality we can assume that $\dfrac a b$ is in canonical form.
By Valuation Ring of P-adic Norm on Rationals:

$\dfrac a b \in \Z_{\paren p} = \set {\dfrac c d \in \Q : p \nmid d}$
So $p \nmid b$.

Since $p \nmid b$, by Prime not Divisor implies Coprime then $p^i \perp b$.
By Integer Combination of Coprime Integers, there exists $m, l \in \Z: m b + l p^i = 1$.
Then:














\(\ds \norm {\dfrac a b - am}_p\)

\(=\)







\(\ds \norm {\dfrac a b}_p \norm {1 - a m b}_p\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(\le\)







\(\ds \norm {1 - m b}_p\)





As $\norm {\dfrac a b}_p \le 1$














\(\ds \)

\(=\)







\(\ds \norm {l p^i}_p\)





As $1 - m b = l p^i$














\(\ds \)

\(\le\)







\(\ds p^{-i}\)





Definition of $p$-adic norm on integers



As $am \in \Z$, the result follows with $\alpha = am$.
$\blacksquare$


Also see
Unique Integer Close to Rational in Valuation Ring of P-adic Norm


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$: Lemma $1.29$




