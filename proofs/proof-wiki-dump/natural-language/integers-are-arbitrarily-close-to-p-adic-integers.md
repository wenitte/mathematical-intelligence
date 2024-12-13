# 

Source: https://proofwiki.org/wiki/Integers_are_Arbitrarily_Close_to_P-adic_Integers

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ be the $p$-adic integers.
Let $x \in \Z_p$.
Then for $n \in \N$ there exists unique $\alpha \in \Z$:

$(1): \quad 0 \le \alpha \le p^n - 1$
$(2): \quad \norm { x -\alpha}_p \le p^{-n}$


Proof
Let $n \in \N$.
From Rational Numbers are Dense Subfield of P-adic Numbers:

the rational numbers are dense in $\Q_p$.
So there exists:

$\dfrac a b \in \Q: \norm {x - \dfrac a b}_p \le p^{-n}$

From Unique Integer Close to Rational in Valuation Ring of P-adic Norm,  there exists  unique $\alpha \in \Z$ such that:

$\norm {\dfrac a b - \alpha}_p \le p^{-n}$
$0 \le \alpha \le p^n - 1$

Then:














\(\ds \norm {x - \alpha}_p\)

\(=\)







\(\ds \norm {\paren {x - \dfrac a b} + \paren {\dfrac a b - \alpha} }_p\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm {x - \dfrac a b}_p, \: \norm {\dfrac a b - \alpha}_p }\)





Norm axiom (N4) (Ultrametric Inequality)














\(\ds \)

\(\le\)







\(\ds p^{-n}\)










Now suppose $\beta \in \Z$ also satisfies conditions $(1)$ and $(2)$, that is:

$0 \le \beta \le p^n - 1$
$\norm { x - \beta}_p \le p^{-n}$
Then:














\(\ds \norm{\dfrac a b - \beta}_p\)

\(=\)







\(\ds \norm{\paren{\dfrac a b - x} + \paren{x - \beta} }_p\)




















\(\ds \)

\(\le\)







\(\ds \max \set{\norm{\dfrac a b - x}_p,\:\norm{x - \beta}_p}\)





Norm axiom (N4) (Ultrametric Inequality)














\(\ds \)

\(\le\)







\(\ds \max \set{\norm{x - \dfrac a b}_p,\:\norm{x - \beta}_p}\)





Norm of Negative














\(\ds \)

\(\le\)







\(\ds p^{-n}\)









From Unique Integer Close to Rational in Valuation Ring of P-adic Norm,  $\alpha \in \Z$ was unique, so:

$\beta = \alpha$
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$: Lemma $3.3.4 \ \text{(ii)}$




