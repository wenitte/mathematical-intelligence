# 

Source: https://proofwiki.org/wiki/Euler%27s_Sine_Identity



Theorem
For any complex number $z$:

$\sin z = \dfrac {e^{i z} - e^{-i z} } {2 i}$
where:

$\exp z$ denotes the exponential function
$\sin z$ denotes the complex sine function
$i$ denotes the inaginary unit.


Real Domain
This result is often presented and proved separately for arguments in the real domain:


$\sin x = \dfrac {e^{i x} - e^{-i x} } {2 i}$


Proof 1
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


Proof 2
Recall Euler's Formula:

$e^{i z} = \cos z + i \sin z$

Then, starting from the right hand side:














\(\ds \frac {e^{i z} - e^{-i z} } {2 i}\)

\(=\)







\(\ds \frac {\paren {\cos z + i \sin z} - \paren {\map \cos {-z} + i \map \sin {-z} } } {2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\cos z + i \sin z - \cos z - i \map \sin {-z} } } {2 i}\)





Cosine Function is Even














\(\ds \)

\(=\)







\(\ds \frac {i \sin z - i \map \sin {-z} } {2 i}\)




















\(\ds \)

\(=\)







\(\ds \frac {i \sin z - i \paren {-\map \sin {-z} } } {2 i}\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds \frac {2 i \sin z} {2 i}\)




















\(\ds \)

\(=\)







\(\ds \sin z\)









$\blacksquare$


Proof 3



\(\text {(1)}: \quad\)









\(\ds e^{i z}\)

\(=\)







\(\ds \cos z + i \sin z\)





Euler's Formula




\(\text {(2)}: \quad\)









\(\ds e^{-i z}\)

\(=\)







\(\ds \cos z - i \sin z\)





Euler's Formula: Corollary








\(\ds \leadsto \ \ \)





\(\ds e^{i z} - e^{-i z}\)

\(=\)







\(\ds \paren {\cos z + i \sin z} - \paren {\cos z - i \sin z}\)





$(1) - (2)$














\(\ds \)

\(=\)







\(\ds 2 i \sin z\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \frac {e^{i z} - e^{-i z} } {2 i}\)

\(=\)







\(\ds \sin z\)









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


Source of Name
This entry was named for Leonhard Paul Euler.


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $2$: Functions, Limits and Continuity: The Elementary Functions: $4$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Euler's identities
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euler's identities




