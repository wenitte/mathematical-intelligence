# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Reciprocal_of_Square_of_1_%2B_x/Proof_1

Theorem
Let $x \in \R$ such that $-1 < x < 1$.
Then:














\(\ds \dfrac 1 {\paren {1 + x}^2}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {k + 1} x^k\)




















\(\ds \)

\(=\)







\(\ds 1 - 2 x + 3 x^2 - 4 x^3 + 5 x^4 - \cdots\)











Proof













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





