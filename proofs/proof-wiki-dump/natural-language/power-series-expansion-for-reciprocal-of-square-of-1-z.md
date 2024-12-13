# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Reciprocal_of_Square_of_1_-_z

Theorem













\(\ds \dfrac 1 {\paren {1 - z}^2}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {n + 1} z^n\)




















\(\ds \)

\(=\)







\(\ds 1 + 2 z + 3 z^2 + 4 z^3 + \cdots\)











Proof 1













\(\ds \sum_{n \mathop = 0}^\infty z^n\)

\(=\)







\(\ds \frac 1 {1 - z}\)





Sum of Infinite Geometric Sequence








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d z} } {\sum_{n \mathop = 1}^\infty z^n}\)

\(=\)







\(\ds \dfrac \d {\d z} \frac 1 {1 - z}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {1 - z}^2}\)





Power Rule for Derivatives and the Chain Rule for Derivatives




Now we have:














\(\ds \)

\(\)







\(\ds \map {\frac \d {\d z} } {\sum_{n \mathop = 0}^\infty z^n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\frac \d {\d z} z^n}\)





Derivative of Absolutely Convergent Series














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty n z^{n - 1}\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty n z^{n - 1}\)





as the zeroth term vanishes when $n = 0$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {n + 1} z^n\)





Translation of Index Variable of Summation



Hence the result.
$\blacksquare$


Proof 2













\(\ds \dfrac 1 {\paren {1 - z}^2}\)

\(=\)







\(\ds \paren {\dfrac 1 {1 - z} }^2\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{n \mathop = 0}^\infty z^n}^2\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\sum_{k \mathop = 0}^n 1 \times 1} z^n\)





Product of Absolutely Convergent Series














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {n + 1} z^n\)









$\blacksquare$





