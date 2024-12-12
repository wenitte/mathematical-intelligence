# 

Source: https://proofwiki.org/wiki/Derivative_of_P-Norm_wrt_P

Theorem
Let $p \ge 1$ be a real number.
Let $\ell^p$ denote the $p$-sequence space.
Let $\mathbf x = \sequence {x_n} \in \ell^p$.
Let $\norm {\mathbf x}_p$ be a $p$-norm.
Suppose, $\norm {\mathbf x}_p \ne 0$.

Then:

$\ds \dfrac \d {\d p} \norm {\mathbf x}_p = \frac {\norm {\mathbf x}_p} p \paren { \frac {\sum_{n \mathop = 0}^\infty \size {x_n}^p \map \ln {\size {x_n} } } {\norm {\bf x}_p^p} - \map \ln {\norm {\bf x}_p} }$


Proof
We begin with the natural logarithm of $\norm {\mathbf x}_p$:














\(\ds \dfrac \d {\d p} \map \ln {\norm {\bf x}_p}\)

\(=\)







\(\ds \frac {\dfrac \d {\d p} \norm {\bf x}_p} {\norm {\bf x}_p}\)




















\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d p} } {\frac 1 p \map \ln {\sum_{n \mathop = 0}^\infty \size {x_n}^p} }\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {p^2} \map \ln {\sum_{n \mathop = 0}^\infty \size {x_n}^p} + \frac 1 p \frac {\sum_{n \mathop = 0}^\infty \size {x_n}^p \map \ln {\size {x_n} } } {\sum_{n \mathop = 0}^\infty \size {x_n}^p}\)





Derivative of Power of Constant














\(\ds \)

\(=\)







\(\ds -\frac 1 {p^2} \map \ln {\norm {\bf x}_p^p} + \frac 1 p \frac {\sum_{n \mathop = 0}^\infty \size {x_n}^p \map \ln {\size {x_n} } } {\norm {\bf x}_p^p}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 p \paren {\frac {\sum_{n \mathop = 0}^\infty \size {x_n}^p \map {\ln} {\size {x_n} } } {\norm {\bf x}_p^p} - \map \ln {\norm {\bf x}_p} }\)









Multiplication by $\norm {\mathbf x}_p$ completes the proof.
$\blacksquare$





