# 

Source: https://proofwiki.org/wiki/Difference_of_Even_Powers_of_z_%2B_a_and_z_-_a

Theorem
Let $m \in \Z$ be an integer such that $m > 1$.
Then for all complex number $z$:

$\paren {z + a}^{2 m} - \paren {z - a}^{2 m} = 4 m a z \ds \prod_{k \mathop = 1}^{m - 1} \paren {z^2 + a^2 \cot^2 \dfrac {k \pi} {2 m} }$


Proof
From Factors of Difference of Two Even Powers:

$x^{2 n} - y^{2 n} = \paren {x - y} \paren {x + y} \ds \prod_{k \mathop = 1}^{n - 1} \paren {x^2 - 2 x y \cos \dfrac {k \pi} n + y^2}$
Substituting $z + a$ for $x$, $z - a$ for $y$, and $m$ for $n$ we get:














\(\ds \)

\(\)







\(\ds \paren {z + a}^{2 m} - \paren {z - a}^{2 m}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {z + a} - \paren {z - a} } \paren {\paren {z + a} + \paren {z - a} } \prod_{k \mathop = 1}^{m - 1} \paren {\paren {z + a}^2 - 2 \paren {z + a} \paren {z - a} \cos \frac {k \pi} m + \paren {z - a}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 a} \paren {2 z} \prod_{k \mathop = 1}^{m - 1} \paren {z^2 + 2 a z + a^2 - 2 \paren {z^2 - a^2} \cos \frac {k \pi} m + \paren {z^2 - 2 a z + a^2} }\)




















\(\ds \)

\(=\)







\(\ds 4 a z \prod_{k \mathop = 1}^{m - 1} \paren {2 z^2 + 2 a^2 - 2 \paren {z^2 - a^2} \cos \frac {k \pi} m}\)




















\(\ds \)

\(=\)







\(\ds 4 a z \prod_{k \mathop = 1}^{m - 1} \paren {2 z^2 \paren {1 - \cos \frac {k \pi} m} + 2 a^2 \paren {1 + \cos \frac {k \pi} m} }\)




















\(\ds \)

\(=\)







\(\ds 4 a z \prod_{k \mathop = 1}^{m - 1} \paren {2 z^2 \paren {2 \sin^2 \frac {k \pi} {2 m} } + 2 a^2 \paren {2 \cos^2 \frac {k \pi} {2 m} } }\)





Double Angle Formula for Cosine: Corollary $1$ and Double Angle Formula for Cosine: Corollary $2$














\(\ds \)

\(=\)







\(\ds 4 a z \paren {\prod_{k \mathop = 1}^{m - 1} \paren {z^2 + a^2 \cot^2 \frac {k \pi} {2 m} } } \paren {\prod_{k \mathop = 1}^{m - 1} 4 \sin^2 \frac {k \pi} {2 m} }\)





Definition of Cotangent














\(\ds \)

\(=\)







\(\ds 4^m a z \paren {\prod_{k \mathop = 1}^{m - 1} \paren {z^2 + a^2 \cot^2 \frac {k \pi} {2 m} } } \paren {\prod_{k \mathop = 1}^{m - 1} \sin \frac {k \pi} {2 m} } \paren {\prod_{k \mathop = 1}^{m - 1} \map \sin {\pi - \frac {k \pi} {2 m} } }\)





Sine of Supplementary Angle














\(\ds \)

\(=\)







\(\ds 4^m a z \paren {\prod_{k \mathop = 1}^{m - 1} \paren {z^2 + a^2 \cot^2 \frac {k \pi} {2 m} } } \paren {\prod_{k \mathop = 1}^{m - 1} \sin \frac {k \pi} {2 m} } \paren {\prod_{k \mathop = 1}^{m - 1} \sin \frac {\paren {2 m - k} \pi} {2 m} } \sin \frac {m \pi} {2 m}\)





Sine of Right Angle














\(\ds \)

\(=\)







\(\ds 4^m a z \paren {\prod_{k \mathop = 1}^{m - 1} \paren {z^2 + a^2 \cot^2 \frac {k \pi} {2 m} } } \paren {\prod_{k \mathop = 1}^m \sin \frac {k \pi} {2 m} } \paren {\prod_{k \mathop = m + 1}^{2 m - 1} \sin \frac {k \pi} {2 m} }\)





Translation of Index Variable of Product














\(\ds \)

\(=\)







\(\ds 4^m a z \paren {\prod_{k \mathop = 1}^{m - 1} \paren {z^2 + a^2 \cot^2 \frac {k \pi} {2 m} } } \paren {\prod_{k \mathop = 1}^{2 m - 1} \sin \frac {k \pi} {2 m} }\)




















\(\ds \)

\(=\)







\(\ds 4^m a z \paren {\prod_{k \mathop = 1}^{m - 1} \paren {z^2 + a^2 \cot^2 \frac {k \pi} {2 m} } } \paren {\frac {2 m} {2^{2 m - 1} } }\)





Product of Sines of Fractions of Pi














\(\ds \)

\(=\)







\(\ds 4 m a z \prod_{k \mathop = 1}^{m - 1} \paren {z^2 + a^2 \cot^2 \frac {k \pi} {2 m} }\)









$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $146$




