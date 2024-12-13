# 

Source: https://proofwiki.org/wiki/Parallelogram_Law_(Inner_Product_Space)



Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space.
Let $\norm \cdot$ be the inner product norm of $\struct {V, \innerprod \cdot \cdot}$. 
Let $f, g \in V$ be arbitrary.

Then:

$\norm {f + g}^2 + \norm {f - g}^2 = 2 \paren {\norm f^2 + \norm g^2}$


Proof













\(\ds \norm {f + g}^2 + \norm {f - g}^2\)

\(=\)







\(\ds \innerprod {f + g} {f + g} + \innerprod {f - g} {f - g}\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod f f + \innerprod f g + \innerprod g f + \innerprod g g + \innerprod f f - \innerprod f g - \innerprod g f + \innerprod g g\)





Linearity of Inner Product














\(\ds \)

\(=\)







\(\ds 2 \innerprod f f + 2 \innerprod g g\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\norm f^2 + \norm g^2}\)





Definition of Inner Product Norm



$\blacksquare$


Also see
Norm satisfying Parallelogram Law induced by Inner Product establishes a converse result: if a norm satisfies the parallelogram law, then it is induced by an inner product.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): parallelogram law: 1.
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: $2.3$ Parallelogram Law
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $8.3$: Properties of the Induced Norms




