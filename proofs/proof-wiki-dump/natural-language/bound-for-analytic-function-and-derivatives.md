# 

Source: https://proofwiki.org/wiki/Bound_for_Analytic_Function_and_Derivatives

Lemma
Let $f$ be a complex function.
Let $z_0$ be a point in $\C$.
Let $r$ be a real number in $\R_{>0}$.
Let $\Gamma$ be a circle in $\C$ with center at $z_0$ and radius $r$.
Let $f$ be analytic on $\Gamma$ and its interior.
Let $t \in \C$ be such that $\cmod {t - z_0} < r$.

Then a real number $M$ exists such that, for every $n \in \N$:

$\cmod {\map {f^{\paren n} } t} \le \dfrac {M r \, n!} {\paren {r - \cmod {t - z_0} }^\paren {n + 1} }$


Proof
Lemma (Analytic Function Bounded on Circle)
Let $f$ be a complex function.
Let $z_0$ be a point in $\C$.
Let $\Gamma$ be a circle in $\C$ with center at $z_0$ and radius in $\R_{>0}$.
Let $f$ be analytic on $\Gamma$.

Then $f$ is bounded on $\Gamma$.
$\Box$
We have:

$f$ is analytic on $\Gamma$ and its interior
$t$ is in the interior of $\Gamma$
Therefore:

$\ds \map {f^{\paren n} } t = \frac {n!} {2 \pi i} \int_\Gamma \frac {\map f z} {\paren {z - t}^{\paren {n + 1} } } \rd z$ by Cauchy's Integral Formula for Derivatives
where $\Gamma$ is traversed counterclockwise.

We have that $f$ is bounded on $\Gamma$ by Lemma (Analytic Function Bounded on Circle).
Therefore, there is a positive real number $M$ that satisfies:

$M \ge \cmod {\map f z}$ for every $z$ on $\Gamma$

We have $\cmod {t - z_0} < r$.
Therefore:

$0 < r - \cmod {t - z_0}$
We observe that $r - \cmod {t - z_0}$ is the minimum distance between $t$ and $\Gamma$.
Therefore:

$\forall z \in \Gamma: \paren {r - \cmod {t - z_0} } \le \cmod {z - t}$
We get:














\(\ds \cmod {\map {f^{\paren n} } t}\)

\(=\)







\(\ds \cmod {\frac {n!} {2 \pi i} \int_\Gamma \frac {\map f z} {\paren {z - t}^{\paren {n + 1} } } \rd z}\)




















\(\ds \)

\(\le\)







\(\ds \frac {n!} {2 \pi} \int_\Gamma \frac {\cmod {\map f z} } {\cmod {z - t}^{\paren {n + 1} } } \cmod {\d z}\)





Definition of Absolute Value of Complex Differential














\(\ds \)

\(\le\)







\(\ds \frac {n!} {2 \pi} \int_\Gamma \frac M {\cmod {z - t}^{\paren {n + 1} } } \cmod {\d z}\)





as $M \ge \cmod {\map f z}$ for every $z$ on $\Gamma$














\(\ds \)

\(\le\)







\(\ds \frac {n!} {2 \pi} \int_\Gamma \frac M {\paren {r - \cmod {t - z_0} }^{\paren {n + 1} } } \cmod {\d z}\)





as $0 < \paren {r - \cmod {t - z_0} } \le \cmod {z - t}$ for every $z$ on $\Gamma$














\(\ds \)

\(=\)







\(\ds \frac {n!} {2 \pi} \frac M {\paren {r - \cmod {t - z_0} }^{\paren {n + 1} } } \int_\Gamma \cmod {\d z}\)




















\(\ds \)

\(=\)







\(\ds \frac {n!} {2 \pi} \frac M {\paren {r - \cmod {t - z_0} }^{\paren {n + 1} } } 2 \pi r\)




















\(\ds \)

\(=\)







\(\ds \frac {M r \, n!} {\paren {r - \cmod {t - z_0} }^{\paren {n + 1} } }\)









$\blacksquare$





