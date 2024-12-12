# 

Source: https://proofwiki.org/wiki/Complex_Cosine_Function_is_Entire/Proof_1

Theorem
Let $\cos: \C \to \C$ be the complex cosine function. 
Then $\cos$ is entire. 


Proof
By the definition of the complex cosine function, $\cos$ admits a power series expansion about $0$: 

$\ds \cos z = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {z^{2 n} } {\paren {2 n}!}$
By Complex Function is Entire iff it has Everywhere Convergent Power Series, to show that $\cos$ is entire it suffices to show that this series is everywhere convergent.
From Radius of Convergence from Limit of Sequence: Complex Case, it is sufficient to show that: 

$\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {-1}^{n + 1} } {\paren {2 n + 2}!} \times \frac {\paren {2 n}!} {\paren {-1}^n} } = 0$
We have: 














\(\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {-1}^{n + 1} } {\paren {2 n + 2}!} \times \frac {\paren {2 n}!} {\paren {-1}^n} }\)

\(=\)







\(\ds \size {-1} \lim_{n \mathop \to \infty} \size {\frac {\paren {2 n}!} {\paren {2 n + 2} \paren {2 n + 1} \paren {2 n}!} }\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\frac 1 {\paren {2 n + 2} \paren {2 n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds 0\)









Hence the result.
$\blacksquare$





