# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Reciprocal_of_Cube_Root_of_1_%2B_x

Theorem
Let $x \in \R$ such that $-1 < x \le 1$.
Then:

$\dfrac 1 {\sqrt [3] {1 + x} } = 1 - \dfrac 1 3 x + \dfrac {1 \times 4} {3 \times 6} x^2 - \dfrac {1 \times 4 \times 7} {3 \times 6 \times 9} x^3 + \cdots$


Proof













\(\ds \frac 1 {\sqrt [3] {1 + x} }\)

\(=\)







\(\ds \paren {1 + x}^{-\frac 1 3}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-\frac 1 3}^{\underline k} } {k!} x^k\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\ds \prod_{j \mathop = 0}^{k - 1} \paren {\paren {-\frac 1 3} - j} } {k!} x^k\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \frac {\ds \prod_{j \mathop = 1}^k \paren {3 j - 1} } {3^k k!} x^k\)





Translation of Index Variable of Product and simplifying














\(\ds \)

\(=\)







\(\ds 1 - \frac 1 3 x + \frac {1 \times 4} {3 \times 6} x^2 - \frac {1 \times 4 \times 7} {3 \times 6 \times 9} x^3 + \cdots\)





extracting the juice



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Binomial Series: $20.13$




