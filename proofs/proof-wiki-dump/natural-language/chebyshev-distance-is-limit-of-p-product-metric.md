# 

Source: https://proofwiki.org/wiki/Chebyshev_Distance_is_Limit_of_P-Product_Metric

Theorem
Let $M_{1'} = \struct {A_{1'}, d_{1'} }$ and $M_{2'} = \struct {A_{2'}, d_{2'} }$ be metric spaces.
Let $\AA = A_{1'} \times A_{2'}$ be the cartesian product of $A_{1'}$ and $A_{2'}$.

Let $p \in \R_{\ge 1}$.
Let $d_p: \AA \times \AA \to \R$ be the $p$-product metric on $\AA$:

$\map {d_p} {x, y} := \paren {\paren {\map {d_{1'} } {x_1, y_1} }^p + \paren {\map {d_{2'} } {x_2, y_2} }^p}^{1/p}$
and let $d_\infty: \AA \times \AA \to \R$ be the Chebyshev distance on $\AA$:

$\ds \map {d_\infty} {x, y} := \max \set {\map {d_{1'} } {x_1, y_1}, \map {d_{2'} } {x_2, y_2} }$
where $x = \tuple {x_1, x_2}, y = \tuple {y_1, y_2} \in \AA$.

Then:

$\ds d_\infty = \lim_{p \mathop \to \infty} d_p$
in the sense that:

$\ds \max \set {\map {d_{1'} } {x_1, y_1}, \map {d_{2'} } {x_2, y_2} } = \lim_{p \mathop \to \infty} \paren {\paren {\map {d_{1'} } {x_1, y_1} }^p + \paren {\map {d_{2'} } {x_2, y_2} }^p}^{1/p}$


Proof
Let $x$ and $y$ be arbitrary.
Let $a = \map {d_{1'} } {x_1, y_1}, b = \map {d_{2'} } {x_2, y_2}$.
Without loss of generality, suppose that $\max \set {a, b} = a$.
Then:














\(\ds \lim_{p \mathop \to \infty} \paren {a^p + b^p}^{1/p}\)

\(\ge\)







\(\ds \lim_{p \mathop \to \infty} \paren {a^p}^{1/p}\)




















\(\ds \)

\(=\)







\(\ds \lim_{p \mathop \to \infty} a\)




















\(\ds \)

\(=\)







\(\ds a\)




















\(\ds \)

\(=\)







\(\ds \max \set {a, b}\)









and:














\(\ds \lim_{p \mathop \to \infty} \paren {a^p + b^p}^{1/p}\)

\(\le\)







\(\ds \lim_{p \mathop \to \infty} \paren {a^p + a^p}^{1/p}\)




















\(\ds \)

\(=\)







\(\ds \lim_{p \mathop \to \infty} \paren {2 a^p}^{1/p}\)




















\(\ds \)

\(=\)







\(\ds \lim_{p \mathop \to \infty} a \cdot 2^{1/p}\)




















\(\ds \)

\(=\)







\(\ds a \lim_{p \mathop \to \infty} 2^{1/p}\)




















\(\ds \)

\(=\)







\(\ds a\)




















\(\ds \)

\(=\)







\(\ds \max \set {a, b}\)









The result follows by the Squeeze Theorem for Functions.
$\blacksquare$





