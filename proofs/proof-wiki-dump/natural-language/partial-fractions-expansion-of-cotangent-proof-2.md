# 

Source: https://proofwiki.org/wiki/Partial_Fractions_Expansion_of_Cotangent/Proof_2

Theorem
Let $x \in \R \setminus \Z$, that is such that $x$ is a real number that is not an integer.
Then:

$\ds \pi \cot \pi x = \dfrac 1 x + 2 x \sum_{n \mathop = 1}^\infty \frac 1 {x^2 - n^2}$


Proof
From the Euler Formula for Sine Function:

$\ds \sin x = x \prod_{n \mathop = 1}^\infty \paren {1 - \frac {x^2} {n^2 \pi^2} }$

Taking the logarithm of both sides:














\(\ds \map \ln {\sin x}\)

\(=\)







\(\ds \ln x + \sum_{n \mathop = 1}^\infty \map \ln {1 - \frac {x^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds \ln x + \sum_{n \mathop = 1}^\infty \map \ln {\frac {n^2 \pi^2 - x^2} {n^2 \pi^2} }\)










Differentiating with respect to $x$:














\(\ds \cot x\)

\(=\)







\(\ds \dfrac 1 x + \sum_{n \mathop = 1}^\infty \dfrac {\dfrac {-2 x} {n^2 \pi^2} } {\paren {\dfrac {n^2 \pi^2 - x^2} {n^2 \pi^2} } }\)





Derivative of Composite Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 x + \sum_{n \mathop = 1}^\infty \frac {-2 x} {n^2 \pi^2 - x^2}\)














\(\ds \leadsto \ \ \)





\(\ds \cot x\)

\(=\)







\(\ds \frac 1 x + 2 x \sum_{n \mathop = 1}^\infty \frac 1 {x^2 - n^2 \pi^2}\)





moving the $-1$ to the denominator








\(\ds \leadsto \ \ \)





\(\ds \pi \map \cot {\pi x}\)

\(=\)







\(\ds \pi \paren {\frac 1 {\pi x} + 2 \paren {\pi x} \sum_{n \mathop = 1}^\infty \frac 1 {\paren {\pi x}^2 - n^2 \pi^2} }\)





multiplying by $\pi$ and entering $\pi x$








\(\ds \leadsto \ \ \)





\(\ds \pi \map \cot {\pi x}\)

\(=\)







\(\ds \frac 1 x + 2 x \sum_{n \mathop = 1}^\infty \frac 1 {x^2 - n^2 }\)









Hence the result.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.20$: The Bernoulli Numbers and some Wonderful Discoveries of Euler




