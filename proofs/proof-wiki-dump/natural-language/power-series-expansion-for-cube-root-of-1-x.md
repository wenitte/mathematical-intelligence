# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Cube_Root_of_1_%2B_x

Theorem
Let $x \in \R$ such that $-1 < x \le 1$.
Then:

$\sqrt [3] {1 + x} = 1 + \dfrac 1 3 x - \dfrac 2 {3 \times 6} x^2 + \dfrac {2 \times 5} {3 \times 6 \times 9} x^3 - \cdots$


Proof













\(\ds \sqrt [3] {1 + x}\)

\(=\)







\(\ds \paren {1 + x}^{\frac 1 3}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {\frac 1 3}^{\underline k} } {k!} x^k\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds 1 + \sum_{k \mathop = 1}^\infty \frac {\ds \prod_{j \mathop = 0}^{k - 1} \paren {\frac 1 3 - j} } {k!} x^k\)





Definition of Falling Factorial and extracting $k = 0$














\(\ds \)

\(=\)







\(\ds 1 + \sum_{k \mathop = 1}^\infty \frac {\ds \prod_{j \mathop = 0}^{k - 1} \paren {1 - 3 j} } {3^k k!} x^k\)





simplifying














\(\ds \)

\(=\)







\(\ds \sqrt [3] {1 + x} = 1 + \dfrac 1 3 x - \dfrac 2 {3 \times 6} x^2 + \dfrac {2 \times 5} {3 \times 6 \times 9} x^3 - \cdots\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Binomial Series: $20.14$




