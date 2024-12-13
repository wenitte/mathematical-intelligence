# 

Source: https://proofwiki.org/wiki/Mittag-Leffler%27s_Expansion_Theorem



Theorem
Let $f$ be a meromorphic function that: 

has only simple poles
is continuous, or has a removable singularity, at $0$.
Let $X$ be the set of poles of $f$. 
For $N \in \N$, let $C_N$ be a disk, centred at the origin, of radius $R_N$ where: 

$R_N \to \infty$ as $N \to \infty$
$\partial C_N$ contains no poles of $f$ for any $N$.
there exists a real number $M > 0$ independent of $N$ such that for all $z \in \partial C_N$, $\cmod {\map f z} < M$ , for all $N \in \N$.

Then:

$\ds \map f z = \map f 0 + \sum_{n \mathop \in X} \Res f n \paren {\frac 1 {z - n} + \frac 1 n}$
where:

$\Res f n$ is the residue of $f$ at $n$
$z$ is not a pole of $f$
$\ds \map f 0 = \lim_{z \mathop \to 0} \map f z$ if $f$ has a removable singularity at $0$.


Proof
Let $\zeta \in \C \setminus X$. 
Then: 

$\ds \frac {\map f z} {z - \zeta}$
has simple poles for $z \in X \cup \set \zeta$. 
Let $X_N$ be the set of poles contained within $C_N$. 
Then: 














\(\ds \frac 1 {2 \pi i} \oint_{\partial C_N} \frac {\map f z} {z - \zeta} \rd z\)

\(=\)







\(\ds \Res {\frac {\map f z} {z - \zeta} } \zeta + \sum_{n \mathop \in X_N} \Res {\frac {\map f z} {z - \zeta} } n\)





Cauchy's Residue Theorem














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to \zeta} \paren {\frac {\paren {z - \zeta} \map f z} {z - \zeta} } + \sum_{n \mathop \in X_N} \paren {\lim_{z \mathop \to n} \frac {\paren {z - n} \map f z} {z - \zeta} }\)





Residue at Simple Pole














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to \zeta} \map f z + \sum_{n \mathop \in X_N} \paren {\lim_{z \mathop \to n} \paren {\paren {z - n} \map f z } \cdot \lim_{z \mathop \to n} \frac 1 {z - \zeta} }\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \map f \zeta + \sum_{n \mathop \in X_N} \frac {\Res f n} {n - \zeta}\)





$f$ is continuous at $\zeta$, Residue at Simple Pole



Setting $\zeta = 0$, we obtain: 

$\ds \frac 1 {2 \pi i} \oint_{\partial C_N} \frac {\map f z} z \rd z = \map f 0 + \sum_{n \mathop \in X_N} \frac {\Res f n} n$
So: 

$\ds \frac 1 {2 \pi i} \oint_{\partial C_N} \map f z \paren {\frac 1 {z - \zeta} - \frac 1 z} \rd z = \map f \zeta + \sum_{n \mathop \in X_N} {\Res f n} \paren {\frac 1 {n - \zeta} - \frac 1 n} - \map f 0$
It remains to show that the integral on the left hand side vanishes as $N \to \infty$.
We have:














\(\ds \cmod {\frac 1 {2 \pi i} \oint_{\partial C_N} \map f z \paren {\frac 1 {z - \zeta} - \frac 1 z} \rd z}\)

\(=\)







\(\ds \cmod {\frac \zeta {2 \pi i} \oint_{\partial C_N} \frac {\map f z} {z \paren {z - \zeta} } \rd z}\)




















\(\ds \)

\(\le\)







\(\ds \frac {\cmod \zeta} {2 \pi} \cdot \frac M {R_N \paren {R_N - \cmod \zeta} } \cdot 2 \pi R_N\)





Estimation Lemma for Contour Integrals and Reverse Triangle Inequality, noting that $\cmod z = R_N$ for $z \in \partial C_N$














\(\ds \)

\(\le\)







\(\ds \frac {M \size \zeta} {R_N - \size \zeta}\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $N \to \infty$, $R_N \to \infty$



Letting $N \to \infty$ gives: 

$\ds 0 = \map f \zeta + \sum_{n \mathop \in X} {\Res f n} \paren {\frac 1 {n - \zeta} - \frac 1 n} - \map f 0$
Giving:

$\ds \map f \zeta = \map f 0 + \sum_{n \mathop \in X} \Res f n \paren {\frac 1 {\zeta - n} + \frac 1 n}$
$\blacksquare$


Source of Name
This entry was named for Magnus Gustaf Mittag-Leffler.


Sources
2009: Murray R. Spiegel, Seymour Lipschutz, John Schiller and Dennis Spellman: Complex Variables (2nd ed.): $7.9$: Mittag-Leffler's Expansion Theorem




