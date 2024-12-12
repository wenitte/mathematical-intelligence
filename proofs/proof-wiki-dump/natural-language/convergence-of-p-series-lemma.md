# 

Source: https://proofwiki.org/wiki/Convergence_of_P-Series/Lemma

Lemma for Convergence of P-Series
Let $p = x + i y$ be a complex number where $x, y \in \R$ such that:

$x > 0$
$x \ne 1$

Then:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^x}$ converges if and only if $\ds \lim_{P \mathop \to \infty} \dfrac {P^{1 - x} } {1 - x}$ converges.


Proof
Let $p = x + i y$.
Then:














\(\ds \sum_{n \mathop = 1}^\infty \size {n^{-p} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {\size {n^x n^{i y} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {\size {n^x e^{-i y \, \map \log n} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {\size {n^x} \size {e^{-i y \, \map \log n} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {\size {n^x} }\)









by Euler's Formula.
Now since $x > 0$, and all $n \ge 1$, all terms are positive and we may do away with the absolute values.

Then by the Cauchy Integral Test:

$\ds \sum_{n \mathop = 1}^{\to \infty} \frac 1 {n^x}$ converges if and only if $\ds \int_1^\infty \frac {\d t} {t^x}$ converges.

First let $x \ne 1$:














\(\ds \int_1^{\to \infty} \frac {\d t} {t^x}\)

\(=\)







\(\ds \lim_{P \mathop \to \infty} \int_1^P \dfrac {\d t} {t^x}\)




















\(\ds \)

\(=\)







\(\ds \lim_{P \mathop \to \infty} \intlimits {\dfrac {t^{1 - x} } {1 - x} } 1 P\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \lim_{P \mathop \to \infty} \paren {\dfrac {P^{1 - x} } {1 - x} - \dfrac {1^{1 - x} } {1 - x} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{P \mathop \to \infty} \paren {\dfrac {P^{1 - x} } {1 - x} } - \dfrac {1^{1 - x} } {1 - x}\)










Hence:

$\ds \int_1^{\to \infty} \frac {\d t} {t^x} = \lim_{P \mathop \to \infty} \paren {\dfrac {P^{1 - x} } {1 - x} } - \dfrac {1^{1 - x} } {1 - x}$
if and only if:

$\ds \int_1^{\to \infty} \frac {\d t} {t^x} + \dfrac {1^{1 - x} } {1 - x} = \lim_{P \mathop \to \infty} \paren {\dfrac {P^{1 - x} } {1 - x} }$

and so:

$\ds \sum_{n \mathop = 1}^\infty \size {n^{-p} }$ converges
if and only if:

$\ds \lim_{P \mathop \to \infty} \dfrac {P^{1 - x} } {1 - x}$ converges.

For $x = 1$:














\(\ds \int_1^{\to \infty} \frac {\d t} t\)

\(=\)







\(\ds \lim_{P \mathop \to \infty} \int_1^P \dfrac {\d t} t\)




















\(\ds \)

\(=\)







\(\ds \lim_{P \mathop \to \infty} \bigintlimits {\ln x} 1 P\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \lim_{P \mathop \to \infty} \ln P\)





Logarithm of 1 is 0



which diverges.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 6.6$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.34 \ (3)$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.2$: Summary of convergence tests




