# 

Source: https://proofwiki.org/wiki/Power_of_Product_of_Commutative_Elements_in_Semigroup



Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $x, y \in S$ both be cancellable elements of $S$.

Then:

$\forall n \in \N_{>1}: \paren {x \circ y}^n = x^n \circ y^n \iff x \circ y = y \circ x$


Proof
Necessary Condition
Let $x \circ y = y \circ x$.
Then by Power of Product of Commuting Elements in Semigroup equals Product of Powers:

$\forall n \in \N_{>1}: \paren {x \circ y}^n = x^n \circ y^n$
$\Box$


Sufficient Condition
Suppose $\forall n \in \N_{>1}: \paren {x \circ y}^n = x^n \circ y^n$.
In particular, when $n = 2$,














\(\ds \paren {x \circ y}^2\)

\(=\)







\(\ds x^n \circ y^2\)




















\(\ds x \circ y \circ x \circ y\)

\(=\)







\(\ds x \circ x \circ y \circ y\)





Definition of Semigroup: $\circ$ is Associative














\(\ds y \circ x\)

\(=\)







\(\ds x \circ y\)





$x$ and $y$ are assumed to be cancellable



$\blacksquare$


This article, or a section of it, needs explaining.In particular: This needs to go into an inductive argument, and the assumption about cancellability needs to be found and utilised explicitlyYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Examples
Elements of $3$rd Symmetric Group
Let $S = \set {1, 2, 3}$.
Let $S_3$ denote the symmetric group on $3$ letters.
Let $\rho, \sigma \in S_3$ defined in two-row notation as:














\(\ds \rho\)

\(=\)







\(\ds \dbinom {1 \ 2 \ 3} {2 \ 3 \ 1}\)




















\(\ds \sigma\)

\(=\)







\(\ds \dbinom {1 \ 2 \ 3} {1 \ 3 \ 2}\)










Then:

$\rho^2 \sigma^2 \ne \paren {\rho \sigma}^2$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $4$. Groups: Exercise $8$




