# 

Source: https://proofwiki.org/wiki/Euler%27s_Sine_Identity/Real_Domain/Proof_1

Theorem
$\sin x = \dfrac {e^{i x} - e^{-i x} } {2 i}$


Proof
Recall the definition of the sine function:














\(\ds \sin x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds x - \frac {x^3} {3!} + \frac {x^5} {5!} - \frac {x^7} {7!} + \cdots + \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!} + \cdots\)










Recall the definition of the exponential as a power series:














\(\ds e^x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac x {1!} + \frac {x^2} {2!} + \frac {x^3} {3!} + \cdots + \frac {x^n} {n!} + \cdots\)










Then, starting from the right hand side:














\(\ds \frac {e^{i x} - e^{-i x} } {2 i}\)

\(=\)







\(\ds \frac 1 {2 i} \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {i x}^n} {n!} - \sum_{n \mathop = 0}^\infty \frac {\paren {-i x}^n} {n!} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \sum_{n \mathop = 0}^\infty \paren {\frac {\paren {i x}^n - \paren {-i x}^n} {n!} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \sum_{n \mathop = 0}^\infty \paren {\frac {\paren {i x}^{2 n} - \paren {-i x}^{2 n} } {\paren {2 n}!} + \frac {\paren {i x}^{2 n + 1} - \paren {-i x}^{2 n + 1} } {\paren {2 n + 1}!} }\)





split into even and odd $n$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \sum_{n \mathop = 0}^\infty \frac {\paren {i x}^{2 n + 1} - \paren {-i x}^{2 n + 1} } {\paren {2 n + 1}!}\)





as $\paren {-i x}^{2 n} = \paren {i x}^{2 n}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \sum_{n \mathop = 0}^\infty \frac {2 \paren {i x}^{2 n + 1} } {\paren {2 n + 1}!}\)





as $\paren {-1}^{2 n + 1} = -1$














\(\ds \)

\(=\)







\(\ds \frac 1 i \sum_{n \mathop = 0}^\infty \frac {\paren {i x}^{2 n + 1} } {\paren {2 n + 1}!}\)





cancel $2$














\(\ds \)

\(=\)







\(\ds \frac 1 i \sum_{n \mathop = 0}^\infty \frac {i \paren {-1}^n x^{2 n + 1} } {\paren {2 n + 1}!}\)





as $i^{2 n + 1} = i \paren {-1})^n $














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1!} }\)





cancel $i$














\(\ds \)

\(=\)







\(\ds \sin x\)









$\blacksquare$





