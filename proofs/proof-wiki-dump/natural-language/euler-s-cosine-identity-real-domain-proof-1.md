# 

Source: https://proofwiki.org/wiki/Euler%27s_Cosine_Identity/Real_Domain/Proof_1

Theorem
$\cos x = \dfrac {e^{i x} + e^{-i x} } 2$


Proof
Recall the definition of the real cosine function:














\(\ds \cos x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n!} }\)




















\(\ds \)

\(=\)







\(\ds 1 - \frac {x^2} {2!} + \frac {x^4} {4!} - \frac {x^6} {6!} + \cdots + \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!} + \cdots\)










Recall the definition of the exponential as a power series:














\(\ds e^x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + x + \frac {x^2} 2 + \frac {x^3} 6 + \cdots + \frac {x^n} {n!} + \cdots\)










Then, starting from the right hand side:














\(\ds \frac {e^{i x} + e^{-i x} } 2\)

\(=\)







\(\ds \frac 1 2 \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {i x}^n} {n!} + \sum_{n \mathop = 0}^\infty \frac {\paren {-i x}^n} {n!} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \paren {\frac {\paren {i x}^n + \paren {-i x}^n} {n!} }\)





Cosine Function is Absolutely Convergent














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \paren {\frac {\paren {i x}^{2 n} + \paren {-i x}^{2 n} } {\paren {2 n}!} + \frac {\paren {i x}^{2 n + 1} + \paren {-i x}^{2 n + 1} } {\paren {2 n + 1}!} }\)





split into even and odd $n$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \frac {\paren {i x}^{2 n} + \paren {-i x}^{2 n} } {\paren {2 n}!}\)





as $\paren {-i x}^{2 n + 1} = -\paren {i x}^{2 n + 1}$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \frac {2 \paren {i x}^{2 n} } {\paren {2 n}!}\)





as $\paren {-1}^{2 n} = 1$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {i x}^{2 n} } {\paren {2 n}!}\)





cancel $2$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}\)





as $i^{2 n} = \paren {-1}^n$














\(\ds \)

\(=\)







\(\ds \cos x\)









$\blacksquare$





