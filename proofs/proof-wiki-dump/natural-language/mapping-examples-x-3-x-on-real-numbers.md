# 

Source: https://proofwiki.org/wiki/Mapping/Examples/x%5E3-x_on_Real_Numbers

Example of Mapping
Let $f: \R \to \R$ be the mapping defined on the set of real numbers as:

$\forall x \in \R: \map f x = x^3 - x$
Then $f$ is a surjection but not an injection.


Proof
Let $y \in \R$.
As $x \to \infty$, we have that $y \to \infty$.
Similarly, as $x \to -\infty$, we have that $y \to -\infty$.
From Real Polynomial Function is Continuous, $f$ is continuous on $\R$.
It follows from the Intermediate Value Theorem that:

$\forall y \in \R: \exists x \in \R: y = \map f x$

Thus, by definition, $f$ is a surjection.
$\Box$

We have that:














\(\ds \map f 0\)

\(=\)







\(\ds 0^3 - 0\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \map f 1\)

\(=\)







\(\ds 1^3 - 1\)




















\(\ds \)

\(=\)







\(\ds 0\)









demonstrating that $f$ is not an injection.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.4$: Functions: Problem Set $\text{A}.4$: $22$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $2$: Maps and relations on sets: Example $2.5$




