# 

Source: https://proofwiki.org/wiki/Complex_Sine_Function_is_Entire/Proof_1

Theorem
Let $\sin: \C \to \C$ be the complex sine function. 
Then $\sin$ is entire. 


Proof
By the definition of the complex sine function, $\sin$ admits a power series expansion about $0$: 

$\ds \sin z = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {z^{2 n + 1} } {\paren {2 n + 1}!}$
By Complex Function is Entire iff it has Everywhere Convergent Power Series, to show that $\sin$ is entire it suffices to show that this series is everywhere convergent.
From Radius of Convergence from Limit of Sequence: Complex Case, it is sufficient to show that: 

$\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {-1}^{n + 1} } {\paren {2 n + 3}!} \times \frac {\paren {2 n + 1}!} {\paren {-1}^n} } = 0$
We have: 














\(\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {-1}^{n + 1} } {\paren {2 n + 3}!} \times \frac {\paren {2 n + 1}!} {\paren {-1}^n} }\)

\(=\)







\(\ds \size {-1} \lim_{n \mathop \to \infty} \size {\frac {\paren {2 n + 1}!} {\paren {2 n + 3} \paren {2 n + 2} \paren {2 n + 1}!} }\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\frac 1 {\paren {2 n + 3} \paren {2 n + 2} } }\)




















\(\ds \)

\(=\)







\(\ds 0\)









Hence the result.
$\blacksquare$





