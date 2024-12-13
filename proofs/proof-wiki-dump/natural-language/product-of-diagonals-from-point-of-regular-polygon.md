# 

Source: https://proofwiki.org/wiki/Product_of_Diagonals_from_Point_of_Regular_Polygon

Theorem
Let $A_0, A_1, \ldots, A_{n - 1}$ be the vertices of a regular $n$-gon $P = A_0 A_1 \cdots A_{n - 1}$ which is circumscribed by a unit circle.

Then:

$\ds \prod_{k \mathop = 2}^{n - 2} A_0 A_k = \frac {n \csc^2 \frac \pi n} 4$
where $A_0 A_k$ is the length of the line joining $A_0$ to $A_k$.


Proof
First it is worth examining the degenerate case $n = 3$, where there are no such lines.
In this case:














\(\ds \frac {n \csc^2 \frac \pi n} 4\)

\(=\)







\(\ds \frac 4 3 \csc^2 \frac \pi 3\)




















\(\ds \)

\(=\)







\(\ds \frac 3 4 \paren {\frac {2 \sqrt 3} 3}^2\)





Cosecant of $60 \degrees$














\(\ds \)

\(=\)







\(\ds 1\)









The continued product $\ds \prod_{k \mathop = 2}^{n - 2} A_0 A_k$ is vacuous here.
By convention, such a vacuous product is defined as being equal to $1$.
So the result holds for $n = 3$.




Let $n > 3$.
The illustration above is a diagram of the case where $n = 7$.
From Complex Roots of Unity are Vertices of Regular Polygon Inscribed in Circle, the vertices of $P$ can be identified with the complex $n$th roots of unity.
Thus:














\(\ds \prod_{k \mathop = 2}^{n - 2} A_1 A_k\)

\(=\)







\(\ds \prod_{k \mathop = 2}^{n - 2} \paren {1 - \alpha^k}\)





where $\alpha = e^{2 i \pi / n}$ is the first complex $n$th root of unity














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {1 - \alpha} \paren {1 - \alpha^{n - 1} } } \prod_{k \mathop = 1}^{n - 1} \paren {1 - \alpha^k}\)




















\(\ds \)

\(=\)







\(\ds \dfrac n {\paren {1 - \alpha} \paren {1 - \alpha^{n - 1} } }\)





Product of Differences between 1 and Complex Roots of Unity














\(\ds \)

\(=\)







\(\ds \dfrac n {\paren {1 - \paren {\cos \frac {2 \pi} n + i \sin \frac {2 \pi} n} } \paren {1 - \paren {\cos \frac {2 \paren {n - 1} \pi} n + i \sin \frac {2 \paren {n - 1} \pi} n} } }\)





Definition of $\alpha$














\(\ds \)

\(=\)







\(\ds \dfrac n {\paren {1 - \paren {\cos \frac {2 \pi} n + i \sin \frac {2 \pi} n} } \paren {1 - \paren {\cos \frac {2 \pi} n - i \sin \frac {2 \pi} n} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac n {\paren {1 - \cos \frac {2 \pi} n}^2 + \paren {\sin \frac {2 \pi} n}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac n {1 - 2 \cos \frac {2 \pi} n + \paren {\cos \frac {2 \pi} n}^2 + \paren {\sin \frac {2 \pi} n}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac n {2 - 2 \cos \frac {2 \pi} n}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \dfrac n {2 - 2 \paren {1 - 2 \sin^2 \frac \pi n} }\)





Double Angle Formula for Cosine: Corollary $2$














\(\ds \)

\(=\)







\(\ds \dfrac n {2 - 2 + 4 \sin^2 \frac \pi n}\)




















\(\ds \)

\(=\)







\(\ds \frac {n \csc^2 \frac \pi n} 4\)





Definition of Cosecant



$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $160$




