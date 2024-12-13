# 

Source: https://proofwiki.org/wiki/Minkowski%27s_Inequality_for_Sums



Theorem
Let $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n \in \R_{\ge 0}$ be non-negative real numbers.
Let $p \in \R$, $p \ne 0$ be a real number.
If $p < 0$, then we require that $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n$ be strictly positive.

If $p > 1$, then:

$\ds \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1/p} \le \paren {\sum_{k \mathop = 1}^n a_k^p}^{1/p} + \paren {\sum_{k \mathop = 1}^n b_k^p}^{1/p}$

If $p < 1$, $p \ne 0$, then:

$\ds \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1/p} \ge \paren {\sum_{k \mathop = 1}^n a_k^p}^{1/p} + \paren {\sum_{k \mathop = 1}^n b_k^p}^{1/p}$


Condition for Equality
$\ds \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / p} = \paren {\sum_{k \mathop = 1}^n a_k^p}^{1 / p} + \paren {\sum_{k \mathop = 1}^n b_k^p}^{1 / p}$
holds if and only if, for all $k \in \closedint 1 n$:

$\dfrac {a_k} {b_k} = c$
for some $c \in \R_{>0}$.


Corollary
Let $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n \in \R$ be real numbers.
Let $p \in \R$ be a real number.

If $p > 1$, then:

$\ds \paren {\sum_{k \mathop = 1}^n \size {a_k + b_k}^p}^{1/p} \le \paren {\sum_{k \mathop = 1}^n \size {a_k}^p}^{1/p} + \paren {\sum_{k \mathop = 1}^n \size {b_k}^p}^{1/p}$


Proof
Proof for $p = 2$
$p = 2$ is an easily proved special case:














\(\ds \sum_{k \mathop = 1}^n \paren {a_k + b_k}^2\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {a_k^2 + 2 a_k b_k + b_k^2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_k^2 + 2 \sum_{k \mathop = 1}^n a_k b_k + \sum_{k \mathop = 1}^n b_k^2\)




















\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^n a_k^2 + 2 \paren {\sum_{k \mathop = 1}^n a_k^2}^{1 / 2} \paren {\sum_{k \mathop = 1}^n b_k^2}^{1 / 2} + \sum_{k \mathop = 1}^n b_k^2\)





Cauchy's Inequality














\(\ds \)

\(=\)







\(\ds \paren {\paren {\sum_{k \mathop = 1}^n a_k^2}^{1 / 2} + \paren {\sum_{k \mathop = 1}^n b_k^2}^{1 / 2} }^2\)










The result follows from Order is Preserved on Positive Reals by Squaring.
$\Box$


Proof for $p > 1$
Define:

$q = \dfrac p {p - 1}$
Then:

$\dfrac 1 p + \dfrac 1 q = \dfrac 1 p + \dfrac {p - 1} p = 1$

It follows that:














\(\ds \sum_{k \mathop = 1}^n \paren {a_k + b_k}^p\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_k \paren {a_k + b_k}^{p - 1} + \sum_{k \mathop = 1}^n b_k \paren {a_k + b_k}^{p - 1}\)




















\(\ds \)

\(\le\)







\(\ds \paren {\sum_{k \mathop = 1}^n {a_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \paren {\paren {a_k + b_k}^{p - 1} }^q}^{1 / q} + \paren {\sum_{k \mathop = 1}^n {b_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \paren {\paren {a_k + b_k}^{p - 1} }^q}^{1 / q}\)





Hölder's Inequality for Sums (twice)














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 1}^n {a_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / q} + \paren {\sum_{k \mathop = 1}^n {b_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / q}\)





Power of Power, and by hypothesis: $\paren {p - 1} q = p$














\(\ds \)

\(=\)







\(\ds \paren {\paren {\sum_{k \mathop = 1}^n {a_k}^p}^{1 / p} + \paren {\sum_{k \mathop = 1}^n {b_k}^p}^{1 / p} } \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / q}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 - 1 / q}\)

\(\le\)







\(\ds \paren {\sum_{k \mathop = 1}^n {a_k}^p}^{1 / p} + \paren {\sum_{k \mathop = 1}^n {b_k}^p}^{1 / p}\)





dividing by $\ds \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / q}$








\(\ds \leadsto \ \ \)





\(\ds \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / p}\)

\(\le\)







\(\ds \paren {\sum_{k \mathop = 1}^n {a_k}^p}^{1 / p} + \paren {\sum_{k \mathop = 1}^n {b_k}^p}^{1 / p}\)





as $1 - \dfrac 1 q = p$



$\Box$


Proof for $p < 1$, $p \ne 0$
In this case, $p$ and $q$ have opposite sign.
The proof then follows the same lines as the proof for $p > 1$, except that the Reverse Hölder's Inequality for Sums is applied instead.
$\blacksquare$


Also known as
Minkowski's Inequality for Sums is also known just as Minkowski's Inequality.
However, this can cause it to be confused with Minkowski's Inequality for Integrals, so will not be used in this context on $\mathsf{Pr} \infty \mathsf{fWiki}$.


Also see
Minkowski's Inequality for Integrals


Source of Name
This entry was named for Hermann Minkowski.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.2$ Inequalities: Minkowski's Inequality for Sums: $3.2.12$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 36$: Inequalities: $36.12$: Minkowski's Inequality
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Minkowski's inequality




