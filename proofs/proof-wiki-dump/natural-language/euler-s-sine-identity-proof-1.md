# 

Source: https://proofwiki.org/wiki/Euler%27s_Sine_Identity/Proof_1

Theorem
$\sin z = \dfrac {e^{i z} - e^{-i z} } {2 i}$


Proof
Recall the definition of the sine function:














\(\ds \sin z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {z^{2 n + 1} } {\paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds z - \frac {z^3} {3!} + \frac {z^5} {5!} - \frac {z^7} {7!} + \cdots + \paren {-1}^n \frac {z^{2 n + 1} } {\paren {2 n + 1}!} + \cdots\)










Recall the definition of the exponential as a power series:














\(\ds e^z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac z {1!} + \frac {z^2} {2!} + \frac {z^3} {3!} + \cdots + \frac {z^n} {n!} + \cdots\)










Then, starting from the right hand side:














\(\ds \frac {e^{i z} - e^{-i x} } {2 i}\)

\(=\)







\(\ds \frac 1 {2 i} \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {i z}^n} {n!} - \sum_{n \mathop = 0}^\infty \frac {\paren {-i z}^n} {n!} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \sum_{n \mathop = 0}^\infty \paren {\frac {\paren {i z}^n - \paren {-i z}^n} {n!} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \sum_{n \mathop = 0}^\infty \paren {\frac {\paren {i z}^{2 n} - \paren {-i z}^{2 n} } {\paren {2 n}!} + \frac {\paren {i z}^{2 n + 1} - \paren {-i z}^{2 n + 1} } {\paren {2 n + 1}!} }\)





split into even and odd $n$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \sum_{n \mathop = 0}^\infty \frac {\paren {i z}^{2 n + 1} - \paren {-i z}^{2 n + 1} } {\paren {2 n + 1}!}\)





as $\paren {-i z}^{2 n} = \paren {i z}^{2 n}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \sum_{n \mathop = 0}^\infty \frac {2 \paren {i z}^{2 n + 1} } {\paren {2 n + 1}!}\)





as $\paren {-1}^{2 n + 1} = -1$














\(\ds \)

\(=\)







\(\ds \frac 1 i \sum_{n \mathop = 0}^\infty \frac {\paren {i z}^{2 n + 1} } {\paren {2 n + 1}!}\)





cancel $2$














\(\ds \)

\(=\)







\(\ds \frac 1 i \sum_{n \mathop = 0}^\infty \frac {i \paren {-1}^n z^{2 n + 1} } {\paren {2 n + 1}!}\)





as $i^{2 n + 1} = i \paren {-1}^n $














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {z^{2 n + 1} } {\paren {2 n + 1!} }\)





cancel $i$














\(\ds \)

\(=\)







\(\ds \sin z\)









$\blacksquare$





