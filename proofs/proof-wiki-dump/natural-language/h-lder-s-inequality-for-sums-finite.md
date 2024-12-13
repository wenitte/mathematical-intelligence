# 

Source: https://proofwiki.org/wiki/H%C3%B6lder%27s_Inequality_for_Sums/Finite



Hölder's Inequality for Sums: Finite Form
Let $p, q \in \R_{>0}$ be strictly positive real numbers such that:

$\dfrac 1 p + \dfrac 1 q = 1$
Let $\GF \in \set {\R, \C}$, that is, $\GF$ represents the set of either the real numbers or the complex numbers.
Let $n \in \N_{>0}$ be a non-zero natural number.
Let $\sequence {x_k}_{1 \mathop \le k \mathop \le n}$ and $\sequence {y_k}_{1 \mathop \le k \mathop \le n}$ be finite sequences in $\GF$.
Then:

$\ds \sum \limits_{k \mathop = 1}^n \size {x_k y_k} \le \paren {\sum_{k \mathop = 1}^n \size {x_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \size {y_k}^q}^{1 / q}$
where the summations are finite.


Euclidean Plane
In the context of a Euclidean plane, Hölder's Inequality for Sums takes the following form:

$x_1 y_1 + x_2 y_2 \le \paren {\size {x_1}^p + \size {x_2}^p}^{1 / p} \paren {\size {y_1}^q + \size {y_2}^q}^{1 / q}$


Proof
Let $\sequence {x_k}_{k \mathop \in \N}$ and $\sequence {y_k}_{k \mathop \in \N}$ be infinite sequences in $\GF$ such that:

$\forall m > n: x_m = y_m = 0$
Then we have:














\(\ds \sum \limits_{k \mathop = 1}^n \size {x_k y_k}\)

\(=\)







\(\ds \sum \limits_{k \mathop \in \N} \size {x_k y_k}\)





by hypothesis














\(\ds \)

\(\le\)







\(\ds \paren {\sum_{k \mathop \in \N} \size {x_k}^p}^{1 / p} \paren {\sum_{k \mathop \in \N} \size {y_k}^q}^{1 / q}\)





Hölder's Inequality for Sums














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 1}^n \size {x_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \size {y_k}^q}^{1 / q}\)





by hypothesis



$\blacksquare$


Parameter Inequalities
Statements of Hölder's Inequality for Sums will commonly insist that $p, q > 1$.
However, we note that from Positive Real Numbers whose Reciprocals Sum to 1 we have that if:

$p, q > 0$
and:

$\dfrac 1 p + \dfrac 1 q = 1$
it follows directly that $p, q > 1$.


Also known as
Hölder's Inequality for Sums is also seen referred to just as Hölder's Inequality.
This allows it to be confused with Hölder's Inequality for Integrals, so the full form is used on $\mathsf{Pr} \infty \mathsf{fWiki}$.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.2$ Inequalities: Hölder's Inequality for Sums: $3.2.8$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 36$: Inequalities: Hölder's Inequality: $36.8$




