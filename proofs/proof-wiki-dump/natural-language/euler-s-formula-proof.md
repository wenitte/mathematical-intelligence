# 

Source: https://proofwiki.org/wiki/Euler%27s_Formula/Proof

Theorem
Let $z \in \C$ be a complex number.
Then:

$e^{i z} = \cos z + i \sin z$


Proof
As Complex Sine Function is Absolutely Convergent and Complex Cosine Function is Absolutely Convergent, we have:














\(\ds \cos z + i \sin z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac {z^{2 n} } {\paren {2 n}!} + i \sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac {z^{2 n + 1} } {\paren {2 n + 1}!}\)





Definition of Complex Cosine Function and Definition of Complex Sine Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\paren {-1}^n \dfrac {z^{2 n} } {\paren {2 n}!} + i \paren {-1}^n \dfrac {z^{2 n + 1} } {\paren {2 n + 1}!} }\)





Sum of Absolutely Convergent Series














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\dfrac {\paren {i z}^{2 n} } {\paren {2 n}!} + \dfrac {\paren {i z}^{2 n + 1} } {\paren {2 n + 1}!} }\)





Definition of Imaginary Unit














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {\paren {i z}^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds e^{i z}\)





Definition of Complex Exponential Function



$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.5$. The Functions $e^z$, $\cos z$, $\sin z$: $\text{(ii)}$: $(4.14)$
2001: Christian Berg: Kompleks funktionsteori: $\S 1.5$
For a video presentation of the contents of this page, visit the Khan Academy.




