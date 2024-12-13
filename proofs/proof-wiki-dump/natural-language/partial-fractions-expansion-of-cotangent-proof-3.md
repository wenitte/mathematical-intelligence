# 

Source: https://proofwiki.org/wiki/Partial_Fractions_Expansion_of_Cotangent/Proof_3

Theorem
Let $x \in \R \setminus \Z$, that is such that $x$ is a real number that is not an integer.
Then:

$\ds \pi \cot \pi x = \dfrac 1 x + 2 x \sum_{n \mathop = 1}^\infty \frac 1 {x^2 - n^2}$


Proof
From Euler's Reflection Formula:

$\forall x \notin \Z: \map \Gamma x \map \Gamma {1 - x} = \dfrac \pi {\map \sin {\pi x} }$
Taking the logarithm of both sides:














\(\ds \map \ln {\map {\Gamma} x } + \map \ln {\map {\Gamma} {1 - x} }\)

\(=\)







\(\ds \map \ln {\pi } - \map \ln {\map \sin {\pi x} }\)





Sum of Logarithms/Natural Logarithm and Difference of Logarithms




Taking the derivative of both sides:














\(\ds \frac {\map {\Gamma'} x} {\map \Gamma x} - \frac {\map {\Gamma'} {1 - x} } {\map \Gamma {1 - x} }\)

\(=\)







\(\ds -\frac 1 {\map \sin {\pi x} } \map \cos {\pi x} \pi\)





Derivative of Composite Function, Derivative of Natural Logarithm Function and Derivative of Sine Function














\(\ds \)

\(=\)







\(\ds -\pi \map \cot {\pi x}\)





Definition of cotangent



We now have:














\(\ds \pi \map \cot {\pi x}\)

\(=\)







\(\ds \frac {\map {\Gamma'} {1 - x} } {\map \Gamma {1 - x} } - \frac {\map {\Gamma'} x} {\map \Gamma x}\)





multiplying both sides by $-1$














\(\ds \)

\(=\)







\(\ds \paren {-\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {n - x } } } - \paren {-\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {x + n - 1} } }\)





Reciprocal times Derivative of Gamma Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\frac 1 {x + n - 1} - \frac 1 {n - x } }\)





Linear Combination of Convergent Series














\(\ds \)

\(=\)







\(\ds \frac 1 x + \sum_{n \mathop = 1}^\infty \paren {\frac 1 {x + n } - \frac 1 {n - x } }\)





reindexing the sum














\(\ds \)

\(=\)







\(\ds \frac 1 x + \sum_{n \mathop = 1}^\infty \paren {\frac 1 {x + n } + \frac 1 {x - n } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 x + 2 x \sum_{n \mathop = 1}^\infty \frac 1 {x^2 - n^2}\)





Difference of Two Squares



$\blacksquare$


Sources
1985: Bruce C. Berndt: Ramanujan's Notebooks: Part I: Chapter $\text {8}$. Analogues of the Gamma Function




