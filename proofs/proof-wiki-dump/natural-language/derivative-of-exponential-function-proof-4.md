# 

Source: https://proofwiki.org/wiki/Derivative_of_Exponential_Function/Proof_4

Theorem
Let $\exp$ be the exponential function.
Then:

$\map {\dfrac \d {\d x} } {\exp x} = \exp x$


Proof
This proof assumes the power series definition of $\exp$.
That is, let:

$\ds \exp x = \sum_{k \mathop = 0}^\infty \frac {x^k} {k!}$

From Series of Power over Factorial Converges, the interval of convergence of $\exp$ is the entirety of $\R$.
So we may apply Differentiation of Real Power Series to $\exp$ for all $x \in \R$.

Thus we have:














\(\ds \frac \d {\d x} \exp x\)

\(=\)







\(\ds \frac \d {\d x} \sum_{k \mathop = 0}^\infty \frac {x^k} {k!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac k {k!} x^{k - 1}\)





Differentiation of Real Power Series, with $n = 1$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac {x^{k - 1} } {\paren {k - 1}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {x^k} {k!}\)




















\(\ds \)

\(=\)







\(\ds \exp x\)










Hence the result.
$\blacksquare$





