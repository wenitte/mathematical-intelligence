# 

Source: https://proofwiki.org/wiki/Mittag-Leffler_Expansion_for_Secant_Function



Theorem
$\ds \pi \map \sec {\pi z} = 4 \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {2 n + 1} {\paren {2 n + 1}^2 - 4 z^2}$
where: 

$z \in \C$ is not a half-integer
$\sec$ is the secant function.


Proof













\(\ds \pi \map \sec {\pi z}\)

\(=\)







\(\ds \pi \map \csc {\frac \pi 2 - \pi z}\)





Secant and Cosecant are Cofunctions in radians














\(\ds \)

\(=\)







\(\ds \frac 1 {1/2 - z} + 2 \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {1/2 - z} {\paren {1/2 - z}^2 - n^2}\)





Mittag-Leffler Expansion for Cosecant Function














\(\ds \)

\(=\)







\(\ds \frac 1 {1/2 - z} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {\frac 1 {n + 1/2 - z} - \frac 1 {n - 1/2 + z} }\)





Partial Fractions Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {1/2 - z} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac 1 {n + 1/2 - z} + \sum_{n \mathop = 1}^\infty \paren {-1}^{n + 1} \frac 1 {n - 1/2 + z}\)





splitting into two convergent series














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac 1 {n + 1/2 - z} + \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac 1 {n + 1/2 + z}\)





rewriting both sums starting from $n=0$














\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {\frac 1 {2 n - 2 z + 1} + \frac 1 {2 n + 2 z + 1} }\)





combining convergent series














\(\ds \)

\(=\)







\(\ds 4 \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {2 n + 1} {\paren {2 n + 1}^2 - 4 z^2}\)





Difference of Two Squares



$\blacksquare$


Source of Name
This entry was named for Magnus Gustaf Mittag-Leffler.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 37$: Partial Fraction Expansions: $37.3$
2009: Murray R. Spiegel, Seymour Lipschutz, John Schiller and Dennis Spellman: Complex Variables (2nd ed.): $7.10$: Some Special Expansions




