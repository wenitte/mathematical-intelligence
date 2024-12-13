# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Reciprocal_of_1_%2B_x

Theorem
Let $x \in \R$ such that $-1 < x < 1$.
Then:














\(\ds \dfrac 1 {1 + x}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k x^k\)




















\(\ds \)

\(=\)







\(\ds 1 - x + x^2 - x^3 + x^4 - \cdots\)











Proof 1













\(\ds \frac 1 {1 + x}\)

\(=\)







\(\ds \frac 1 {1 - \paren {-x} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-x}^k\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k x^k\)









$\blacksquare$


Proof 2













\(\ds \frac 1 {1 + x}\)

\(=\)







\(\ds \paren {1 + x}^{-1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-1}^{\underline k} } {k!} x^k\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\ds \prod_{j \mathop = 0}^{k - 1} \paren {\paren {-1} - j} } {k!} x^k\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\ds \prod_{j \mathop = 0}^{k - 1} \paren {-\paren {j + 1} } } {\ds \prod_{j \mathop = 1}^k j} x^k\)





Definition of Factorial and simplifying














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\ds \prod_{j \mathop = 1}^k \paren {-j} } {\ds \prod_{j \mathop = 1}^k j} x^k\)





Translation of Index Variable of Product














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-1}^k \ds \prod_{j \mathop = 1}^k j} {\ds \prod_{j \mathop = 1}^k j} x^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k x^k\)





simplification



$\blacksquare$





