# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Reciprocal_of_Square_Root_of_1_-_x/Proof_2

Theorem
Let $x \in \R$ such that $-1 < x \le 1$.
Then:














\(\ds \dfrac 1 {\sqrt {1 - x} }\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {2 k}!} {\paren {2^k k!}^2} x^k\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac 1 2 x + \frac {1 \times 3} {2 \times 4} x^2 + \frac {1 \times 3 \times 5} {2 \times 4 \times 6} x^3 + \cdots\)











Proof













\(\ds \frac 1 {\sqrt {1 - x} }\)

\(=\)







\(\ds \paren {1 - x}^{-\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-\frac 1 2}^{\underline k} } {k!} \paren {-x}^k\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\ds \prod_{j \mathop = 0}^{k - 1} \paren {\paren {-\frac 1 2} - j} } {k!} \paren {-x}^k\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \frac {\ds \prod_{j \mathop = 1}^k \paren {2 j - 1} } {2^k k!} \paren {-x}^k\)





Translation of Index Variable of Product and simplifying














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \frac {\ds \prod_{j \mathop = 1}^k \paren {2 j - 1} \prod_{j \mathop = 1}^k \paren {2 j} } {2^k k! \ds \prod_{j \mathop = 1}^k \paren {2 j} } \paren {-x}^k\)





multiplying top and bottom by $\ds \prod_{j \mathop = 1}^k \paren {2 j}$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\ds \prod_{j \mathop = 1}^{2 k} j} {2^k k! \paren {2^k \ds \prod_{j \mathop = 1}^k j} } x^k\)





simplifying














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {2 k}!} {2^k k! \paren {2^k k!} } x^k\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {2 k}!} {\paren {2^k k!}^2} x^k\)





simplifying



$\blacksquare$





