# 

Source: https://proofwiki.org/wiki/Quotient_Mapping_is_Linear_Transformation

Theorem
Let $K$ be a field.
Let $V$ be a vector space over $K$.
Let $M$ be a subspace of $V$.
Let $V / M$ be the quotient vector space.
Let $Q: V \to V / M$ be the quotient mapping.

Then $Q$ is a linear transformation.


Proof
Let $\lambda, \mu \in K$ and $x, y \in V$.
Then we have: 














\(\ds \map Q {\lambda x + \mu y}\)

\(=\)







\(\ds \paren {\lambda x + \mu y} + M\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda x + M} + \paren {\mu y + M}\)




















\(\ds \)

\(=\)







\(\ds \lambda \paren {x + M} + \mu \paren {y + M}\)




















\(\ds \)

\(=\)







\(\ds \lambda \map Q x + \mu \map Q y\)









using the definition of vector addition and scalar multiplication for $V/M$.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): Appendix $\text{A}$ Preliminaries: $\S 1.$ Linear Algebra




