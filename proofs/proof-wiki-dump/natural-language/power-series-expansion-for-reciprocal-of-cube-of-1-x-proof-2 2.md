# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Reciprocal_of_Cube_of_1_%2B_x/Proof_2

Theorem
Let $x \in \R$ such that $-1 < x < 1$.
Then:














\(\ds \dfrac 1 {\paren {1 + x}^3}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \frac {\paren {k + 2} \paren {k + 1} } 2 x^k\)




















\(\ds \)

\(=\)







\(\ds 1 - 3 x + 6 x^2 - 10 x^3 + 15 x^4 - \cdots\)











Proof













\(\ds \frac 1 {\paren {1 + x} }\)

\(=\)







\(\ds \paren {1 + x}^{-3}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-3}^{\underline k} } {k!} x^k\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\ds \prod_{j \mathop = 0}^{k - 1} \paren {\paren {-3} - j} } {k!} x^k\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\ds \prod_{j \mathop = 0}^{k - 1} \paren {-\paren {j + 3} } } {\ds \prod_{j \mathop = 1}^k j} x^k\)





Definition of Factorial and simplifying














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\ds \prod_{j \mathop = 1}^k \paren {-\paren {j + 2} } } {\ds \prod_{j \mathop = 1}^k j} x^k\)





Translation of Index Variable of Product














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-1}^k \ds \prod_{j \mathop = 1}^k \paren {j + 2} } {\ds \prod_{j \mathop = 1}^k j} x^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \frac {\paren {k + 2} \paren {k + 1} } 2 x^k\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Binomial Series: $20.10$




