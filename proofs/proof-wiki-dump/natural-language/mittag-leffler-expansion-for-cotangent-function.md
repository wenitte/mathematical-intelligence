# 

Source: https://proofwiki.org/wiki/Mittag-Leffler_Expansion_for_Cotangent_Function


It has been suggested that this page or section be merged into Partial Fractions Expansion of Cotangent.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

It has been suggested that this page or section be merged into Series Expansion for Pi Cotangent of Pi Lambda.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
$\ds \pi \cot \pi z = \frac 1 z + 2 \sum_{n \mathop = 1}^\infty \frac z {z^2 - n^2}$
where:

$z \in \C$ is not an integer
$\cot$ is the cotangent function.


Real Domain
Let $\alpha \in \R$ be a real number which is specifically not an integer.

$\ds \dfrac 1 \alpha + \sum_{n \mathop \ge 1} \dfrac {2 \alpha} {\alpha^2 - n^2} = \pi \cot \pi \alpha$


Proof 1
Let $\LL$ denote the logarithmic derivative.
On the open set $\C \setminus \Z$ we have:














\(\ds \pi \cot \pi z\)

\(=\)







\(\ds \map \LL {\map \sin {\pi z} }\)





Primitive of Cotangent Function, or a complex version thereof














\(\ds \)

\(=\)







\(\ds \map \LL {\pi z \prod_{n \mathop = 1}^\infty \paren {1 - \frac {z^2} {n^2} } }\)





Euler Formula for Sine Function














\(\ds \)

\(=\)







\(\ds \map \LL {\pi z} + \sum_{n \mathop = 1}^\infty \map \LL {1 - \frac {z^2} {n^2} }\)





Logarithmic Derivative of Infinite Product of Analytic Functions














\(\ds \)

\(=\)







\(\ds \frac \pi {\pi z} + \sum_{n \mathop = 1}^\infty \frac 1 {1 - \frac {z^2} {n^2} } \cdot \map {\frac \d {\d z} } {1 - \frac {z^2} {n^2} }\)





Definition of Logarithmic Derivative of Meromorphic Function














\(\ds \)

\(=\)







\(\ds \frac 1 z - 2 \sum_{n \mathop = 1}^\infty \frac z {n^2 - z^2}\)





Derivative of Power














\(\ds \)

\(=\)







\(\ds \frac 1 z + 2 \sum_{n \mathop = 1}^\infty \frac z {z^2 - n^2}\)









$\blacksquare$


Proof 2
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


Also see
Partial Fractions Expansion of Cotangent


Source of Name
This entry was named for Magnus Gustaf Mittag-Leffler.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 37$: Partial Fraction Expansions: $37.1$




