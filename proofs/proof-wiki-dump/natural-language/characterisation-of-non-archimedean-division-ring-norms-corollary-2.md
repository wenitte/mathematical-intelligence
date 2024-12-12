# 

Source: https://proofwiki.org/wiki/Characterisation_of_Non-Archimedean_Division_Ring_Norms/Corollary_2

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring with unity $1_R$.

Let $\sup \set {\norm {n \cdot 1_R}: n \in \N_{> 0} } = C < +\infty$.
where $n \cdot 1_R = \underbrace {1_R + 1_R + \dots + 1_R}_{\text {$n$ times} }$

Then $\norm {\,\cdot\,}$ is non-Archimedean and $C = 1$.


Proof
Aiming for a contradiction, suppose $C > 1$.

By Characterizing Property of Supremum of Subset of Real Numbers:

$\exists m \in \N_{> 0}: \norm {m \cdot 1_R} > 1$
Let   

$x = m \cdot 1_R$
$y = x^{-1}$

By Norm of Inverse:

$\norm y < 1$

By Sequence of Powers of Number less than One:

$\ds \lim_{n \mathop \to \infty} \norm y^n = 0$

By Reciprocal of Null Sequence then:

$\ds \lim_{n \mathop \to \infty} \frac 1 {\norm y^n} = +\infty$

For all $n \in \N_{> 0}$:














\(\ds \dfrac 1 {\norm y^n}\)

\(=\)







\(\ds \norm {y^{-1} }^n\)





Norm of Inverse














\(\ds \)

\(=\)







\(\ds \norm x^n\)





Definition of $y$














\(\ds \)

\(=\)







\(\ds \norm {x^n}\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \norm {\paren {m \cdot 1_R}^n}\)





Definition of $x$














\(\ds \)

\(=\)







\(\ds \norm {m^n \cdot 1_R}\)










So:

$\ds \lim_{n \mathop \to \infty} \norm {m^n \cdot 1_R} = +\infty$

Hence:

$\sup \set {\norm{n \cdot 1_R}: n \in \N_{> 0} } = +\infty$

This contradicts the assumption that $C < +\infty$.
$\Box$

It follows that $C \le 1$.
Then:

$\forall n \in \N_{>0}: \norm{n \cdot 1_R} \le 1$
By Characterisation of Non-Archimedean Division Ring Norms, $\norm{\,\cdot\,}$ is non-Archimedean.
By Corollary 1:

$\sup \set {\norm {n \cdot 1_R}: n \in \N_{> 0} } = 1$
So $C = 1$.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.2$ Basic Properties: Problem $41$




