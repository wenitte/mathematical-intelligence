# 

Source: https://proofwiki.org/wiki/Product_of_Cotangents_of_Fractions_of_Pi

Theorem
Let $m \in \Z$ such that $m > 1$.

Then:

$\ds \prod_{k \mathop = 1}^{m - 1} \cot \frac {k \pi} {2 m} = 1$


Proof
We have:














\(\ds \frac {k \pi} {2 m} + \frac {\paren {m - k} \pi} {2 m}\)

\(=\)







\(\ds \frac {\paren {k + m - k} \pi} {2 m}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2\)










That means:

$(1): \quad \dfrac \pi 2 - \dfrac {k \pi} {2 m} = \dfrac {\paren {m - k} \pi} {2 m}$

Let $m$ be odd.
Then $m - 1$ is even, and so:














\(\ds \prod_{k \mathop = 1}^{m - 1} \cot \frac {k \pi} {2 m}\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{\frac {m - 1} 2} \cot \frac {k \pi} {2 m} \prod_{k \mathop = \frac {m - 1} 2 + 1}^{m - 1} \cot \frac {k \pi} {2 m}\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^{\frac {m - 1} 2} \cot \frac {k \pi} {2 m} \cot \frac {\paren {m - k} \pi} {2 m}\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^{\frac {m - 1} 2} \cot \frac {k \pi} {2 m} \map \cot {\frac \pi 2 - \frac {k \pi} {2 m} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^{\frac {m - 1} 2} \cot \frac {k \pi} {2 m} \tan \frac {k \pi} {2 m}\)





Cotangent of Complement equals Tangent














\(\ds \)

\(=\)







\(\ds 1\)





Product of Tangent and Cotangent




Now suppose $m$ is even.
Then $m - 1$ is odd, and so:














\(\ds \prod_{k \mathop = 1}^{m - 1} \cot \frac {k \pi} {2 m}\)

\(=\)







\(\ds \paren {\prod_{k \mathop = 1}^{\frac m 2 - 1} \cot \frac {k \pi} {2 m} } \frac m 2 \frac \pi {2 m} \paren {\prod_{k \mathop = \frac m 2 + 1}^{m - 1} \cot \frac {k \pi} {2 m} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{k \mathop = 1}^{\frac m 2 - 1} \cot \frac {k \pi} {2 m} \cot \frac {\paren {m - k} \pi} {2 m} } \frac \pi 4\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{k \mathop = 1}^{\frac m 2 - 1} \cot \frac {k \pi} {2 m} \map \cot {\frac \pi 2 - \frac {k \pi} {2 m} } } \cot \frac \pi 4\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \paren {\prod_{k \mathop = 1}^{\frac m 2 - 1} \cot \frac {k \pi} {2 m} \tan \frac {k \pi} {2 m} } \cot \frac \pi 4\)





Cotangent of Complement equals Tangent














\(\ds \)

\(=\)







\(\ds 1 \cot \frac \pi 4\)





Product of Tangent and Cotangent














\(\ds \)

\(=\)







\(\ds 1\)





Cotangent of $45 \degrees$



$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $148$




