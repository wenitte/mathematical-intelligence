# 

Source: https://proofwiki.org/wiki/Convergence_of_Taylor_Series_of_Function_Analytic_on_Disk/Lemma

Lemma
Let $y > 1$.

Then:

$\ds \lim_{n \mathop \to \infty} \frac n {y^n} = 0$


Proof 1
Let $z$ be a real number.
We have:

$\ds \sum_{n \mathop = 0}^\infty n z^n$ has radius of convergence of $1$
by Complex Power Series/Examples/n.
This leads to that:

$\ds \sum_{n \mathop = 0}^\infty n \paren {\frac 1 y}^n$ converges
as $\ds \frac 1 y < 1$ as $y > 1$.
This leads to that:

the sequence $\ds \sequence {\frac n {y^n}}$ converges to the limit $0$
by Terms in Convergent Series Converge to Zero.
This means that:

$\ds \lim_{n \mathop \to \infty} \frac n {y^n}$ = $0$
by definition of limit.
This concludes the proof.
$\blacksquare$


Proof 2
Note that $\ln y > 0$ as $y > 1$.














\(\ds \lim_{n \mathop \to \infty} \frac n {y^n}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac n {\paren {e^{\ln y} }^n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac n {e^{\paren {\ln y} n} }\)




















\(\ds \)

\(=\)







\(\ds 0\)





as $\ds \lim_{x \mathop \to \infty} \frac x {e^{\paren {\ln y} x} } = 0$ by Limit at Infinity of Polynomial over Complex Exponential as $\ln y > 0$



$\blacksquare$





