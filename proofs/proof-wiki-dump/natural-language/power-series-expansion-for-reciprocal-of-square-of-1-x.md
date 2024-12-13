# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Reciprocal_of_Square_of_1_%2B_x



Theorem
Let $x \in \R$ such that $-1 < x < 1$.
Then:














\(\ds \dfrac 1 {\paren {1 + x}^2}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {k + 1} x^k\)




















\(\ds \)

\(=\)







\(\ds 1 - 2 x + 3 x^2 - 4 x^3 + 5 x^4 - \cdots\)











Corollary













\(\ds \dfrac 1 {\paren {1 - x}^2}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {k + 1} x^k\)




















\(\ds \)

\(=\)







\(\ds 1 + 2 x + 3 x^2 + 4 x^3 + 5 x^4 + \cdots\)











Proof 1













\(\ds \frac 1 {1 + x}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k x^k\)





Power Series Expansion for $\dfrac 1 {1 + x}$








\(\ds \leadsto \ \ \)





\(\ds \frac \d {\d x} \frac 1 {1 + x}\)

\(=\)







\(\ds \frac \d {\d x} \sum_{k \mathop = 0}^\infty \paren {-1}^k x^k\)














\(\ds \leadsto \ \ \)





\(\ds -\frac 1 {\paren {1 + x}^2}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k k x^{k - 1}\)





differentiating with respect to $x$








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\paren {1 + x}^2}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^{k - 1} k x^{k - 1}\)





taking one of the $-1$s out














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \paren {-1}^{k - 1} k x^{k - 1}\)





the term in $k = 0$ vanishes














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {1 + x}k x^k\)





Translation of Index Variable of Product



$\blacksquare$


Proof 2













\(\ds \frac 1 {\paren {1 + x} }\)

\(=\)







\(\ds \paren {1 + x}^{-2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-2}^{\underline k} } {k!} x^k\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\ds \prod_{j \mathop = 0}^{k - 1} \paren {\paren {-2} - j} } {k!} x^k\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\ds \prod_{j \mathop = 0}^{k - 1} \paren {-\paren {j + 2} } } {\ds \prod_{j \mathop = 1}^k j} x^k\)





Definition of Factorial and simplifying














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\ds \prod_{j \mathop = 1}^k \paren {-\paren {j + 1} } } {\ds \prod_{j \mathop = 1}^k j} x^k\)





Translation of Index Variable of Product














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-1}^k \ds \prod_{j \mathop = 1}^k \paren {j + 1} } {\ds \prod_{j \mathop = 1}^k j} x^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {k + 1} x^k\)





simplification



$\blacksquare$





