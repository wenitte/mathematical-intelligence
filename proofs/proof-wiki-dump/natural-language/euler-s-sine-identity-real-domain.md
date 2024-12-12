# 

Source: https://proofwiki.org/wiki/Euler%27s_Sine_Identity/Real_Domain



Theorem
For any real number $x \in \R$:

$\sin x = \dfrac {e^{i x} - e^{-i x} } {2 i}$
where:

$e^{i x}$ denotes the exponential function
$\sin x$ denotes the real sine function
$i$ denotes the inaginary unit.


Proof 1
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


Proof 2
Recall Euler's Formula:

$e^{i x} = \cos x + i \sin x$

Then, starting from the right hand side:














\(\ds \frac {e^{i x} - e^{-i x} }{2 i}\)

\(=\)







\(\ds \frac {\paren {\cos x + i \sin x} - \paren {\map \cos {-x} + i \map \sin {-x} } } {2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\cos x + i \sin x - \cos x - i \map \sin {-x} } } {2 i}\)





Cosine Function is Even














\(\ds \)

\(=\)







\(\ds \frac {i \sin x - i \map \sin {-x} } {2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac {i \sin x - i \paren {-\map \sin {-x} } } {2 i}\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds \frac {2 i \sin x} {2 i}\)




















\(\ds \)

\(=\)







\(\ds \sin x\)









$\blacksquare$


Proof 3



\(\text {(1)}: \quad\)









\(\ds e^{i x}\)

\(=\)







\(\ds \cos x + i \sin x\)





Euler's Formula




\(\text {(2)}: \quad\)









\(\ds e^{-i x}\)

\(=\)







\(\ds \cos x - i \sin x\)





Euler's Formula: Corollary








\(\ds \leadsto \ \ \)





\(\ds e^{i x} - e^{-i x}\)

\(=\)







\(\ds \paren {\cos x + i \sin x} - \paren {\cos x - i \sin x}\)





$(1) - (2)$














\(\ds \)

\(=\)







\(\ds 2 i \sin x\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \frac {e^{i x} - e^{-i x} } {2 i}\)

\(=\)







\(\ds \sin x\)









$\blacksquare$


Also presented as
Euler's Sine Identity can also be presented in the form:

$\sin z = \dfrac 1 2 i \paren {e^{-i z} - e^{i z} }$


Also see
Euler's Cosine Identity
Euler's Tangent Identity
Euler's Cotangent Identity
Euler's Secant Identity
Euler's Cosecant Identity
Arcsine Logarithmic Formulation


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 7$: Relationship between Exponential and Trigonometric Functions: $7.17$




