# 

Source: https://proofwiki.org/wiki/Euler%27s_Cosine_Identity/Proof_1

Theorem
$\cos z = \dfrac {e^{i z} + e^{-i z} } 2$


Proof
Recall the definition of the cosine function:














\(\ds \cos z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {z^{2 n} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds 1 - \frac {z^2} {2!} + \frac {z^4} {4!} - \frac {z^6} {6!} + \cdots + \paren {-1}^n \frac {z^{2 n} } {\paren {2 n}!} + \cdots\)










Recall the definition of the exponential as a power series:














\(\ds e^z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac z {1!} + \frac {z^2} {2!} + \frac {z^3} {3!} + \cdots + \frac {z^n} {n!} + \cdots\)










Then, starting from the right hand side:














\(\ds \frac {e^{i z} + e^{-i z} } 2\)

\(=\)







\(\ds \frac 1 2 \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {i z}^n} {n!} + \sum_{n \mathop = 0}^\infty \frac {\paren {-i z}^n} {n!} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \paren {\frac {\paren {i z}^n + \paren {-i z}^n} {n!} }\)





Cosine Function is Absolutely Convergent














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \paren {\frac {\paren {i z}^{2 n} + \paren {-i z}^{2 n} } {\paren {2 n}!} + \frac {\paren {i z}^{2 n + 1} + \paren {-i z}^{2 n + 1} } {\paren {2 n + 1}!} }\)





split into even and odd $n$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \frac {\paren {i z}^{2 n} + \paren {-i z}^{2 n} } {\paren {2 n}!}\)





$\paren {-i z}^{2 n + 1} = -\paren {i z}^{2 n + 1}$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \frac {2 \paren {i z}^{2 n} } {\paren {2 n}!}\)





$\left({ -1 }\right)^{2n} = 1$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {i z}^{2 n} } {\paren {2 n}!}\)





cancel $2$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {z^{2 n} } {\paren {2 n}!}\)





$i^{2 n} = \paren {-1}^n$














\(\ds \)

\(=\)







\(\ds \cos z\)









$\blacksquare$





