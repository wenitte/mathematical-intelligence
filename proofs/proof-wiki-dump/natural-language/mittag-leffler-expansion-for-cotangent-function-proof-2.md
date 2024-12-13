# 

Source: https://proofwiki.org/wiki/Mittag-Leffler_Expansion_for_Cotangent_Function/Proof_2

Theorem
$\ds \pi \cot \pi z = \frac 1 z + 2 \sum_{n \mathop = 1}^\infty \frac z {z^2 - n^2}$
where:

$z \in \C$ is not an integer
$\cot$ is the cotangent function.


Proof
Let $\map \zeta s$ be the Riemann zeta function.
Let $\ds \map g z = \sum_{n \mathop = 1}^\infty z^n \map \zeta {2 n}$ be the  generating function of $\map \zeta {2 n}$

By Power Series Expansion for Cotangent Function, for $\size z < 1$:














\(\ds \pi \map \cot {\pi z}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \pi^{2 n} 2^{2 n} B_{2 n} \, z^{2 n - 1} } {\paren {2 n}!}\)














\(\ds \leadsto \ \ \)





\(\ds \pi z \map \cot {\pi z}\)

\(=\)







\(\ds 1 + \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \pi^{2 n} 2^{2 n} B_{2 n} \, z^{2 n} } {\paren {2 n}!}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\pi z \map \cot {\pi z} - 1} {-2}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} \pi^{2 n} 2^{2 n - 1} B_{2 n} \, z^{2 n} } {\paren {2 n}!}\)









By Riemann Zeta Function at Even Integers:

$\map \zeta {2 n} = \dfrac {\paren {-1}^{n + 1} \pi^{2 n} 2^{2 n - 1} B_{2 n}  } {\paren {2 n}!}$
Thus:














\(\ds \dfrac {\pi z \map \cot {\pi z} - 1} {-2}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map \zeta {2 n} z^{2 n}\)




















\(\ds \)

\(=\)







\(\ds \map g {z^2}\)









By Analytic Continuation of Generating Function of Dirichlet Series and Uniqueness of Analytic Continuation: 

$\ds \dfrac {\pi z \map \cot {\pi z} - 1} {-2} = \sum_{n \mathop = 1}^\infty \dfrac {z^2} {n^2 - z^2}$
for all of $\C$, as this is the overlap of their domains.
Thus:














\(\ds \pi z \map \cot {\pi z} - 1\)

\(=\)







\(\ds 2 \sum_{n \mathop = 1}^\infty \frac {z^2} {z^2 - n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \pi z \map \cot {\pi z}\)

\(=\)







\(\ds 1 + 2 \sum_{n \mathop = 1}^\infty \frac {z^2} {z^2 - n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \pi \map \cot {\pi z}\)

\(=\)







\(\ds \frac 1 z + 2 \sum_{n \mathop = 1}^\infty \frac z {z^2 - n^2}\)









$\blacksquare$





