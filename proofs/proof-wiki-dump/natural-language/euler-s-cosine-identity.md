# 

Source: https://proofwiki.org/wiki/Euler%27s_Cosine_Identity



Theorem
For any complex number $z \in \C$:

$\cos z = \dfrac {e^{i z} + e^{-i z} } 2$
where:

$\exp z$ denotes the exponential function
$\cos z$ denotes the complex cosine function
$i$ denotes the imaginary unit.


Real Domain
This result is often presented and proved separately for arguments in the real domain:


$\cos x = \dfrac {e^{i x} + e^{-i x} } 2$


Proof 1
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


Proof 2
Recall Euler's Formula:

$e^{i z} = \cos z + i \sin z$

Then, starting from the right hand side:














\(\ds \frac {e^{i z} + e^{-i z} } 2\)

\(=\)







\(\ds \frac {\cos z + i \sin z + \map \cos {-z} + i \map \sin {-z} } 2\)




















\(\ds \)

\(=\)







\(\ds \frac {\cos z + \map \cos {-z} } 2\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds \frac {2 \cos z} 2\)





Cosine Function is Even














\(\ds \)

\(=\)







\(\ds \cos z\)









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





\(\ds e^{i z} + e^{-i z}\)

\(=\)







\(\ds \paren {\cos z + i \sin z} + \paren {\cos z - i \sin z}\)





$(1) + (2)$














\(\ds \)

\(=\)







\(\ds 2 \cos z\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \frac {e^{i z} + e^{-i z} } 2\)

\(=\)







\(\ds \cos z\)









$\blacksquare$


Also presented as
Euler's Cosine Identity can also be presented as:

$\cos z = \dfrac 1 2 \paren {e^{-i z} + e^{i z} }$


Also see
Euler's Sine Identity
Euler's Tangent Identity
Euler's Cotangent Identity
Euler's Secant Identity
Euler's Cosecant Identity
Arccosine Logarithmic Formulation


Source of Name
This entry was named for Leonhard Paul Euler.


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $2$:  Functions, Limits and Continuity: The Elementary Functions: $4$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Euler's identities
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euler's identities




