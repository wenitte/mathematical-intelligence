# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Reciprocal_of_Cube_of_1_%2B_x/Proof_1

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













\(\ds \frac 1 {\paren {1 + x}^2}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {k + 1} x^k\)





Power Series Expansion of $\dfrac 1 {\paren {1 + x}^2}$








\(\ds \leadsto \ \ \)





\(\ds \frac \d {\d x} \frac 1 {\paren {1 + x}^2}\)

\(=\)







\(\ds \frac \d {\d x} \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {k + 1} x^k\)














\(\ds \leadsto \ \ \)





\(\ds -\frac 2 {\paren {1 + x}^3}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {k + 1} k x^{k - 1}\)





differentiating with respect to $x$








\(\ds \leadsto \ \ \)





\(\ds \frac 2 {\paren {1 + x}^3}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^{k - 1} \paren {k + 1} k x^{k - 1}\)





taking one of the $-1$s out














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \paren {-1}^{k - 1} \paren {k + 1} k x^{k - 1}\)





the term in $k = 0$ vanishes














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {k + 2} \paren {k + 1} x^k\)





Translation of Index Variable of Product








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\paren {1 + x}^3}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \frac {\paren {k + 2} \paren {k + 1} } 2 x^k\)









$\blacksquare$





