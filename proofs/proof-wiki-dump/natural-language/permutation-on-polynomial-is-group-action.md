# 

Source: https://proofwiki.org/wiki/Permutation_on_Polynomial_is_Group_Action



Theorem
Let $n \in \Z: n > 0$.
Let $F_n$ be the set of all polynomials in $n$ variables $x_1, x_2, \ldots, x_n$:

$F = \set {\map f {x_1, x_2, \ldots, x_n}: f \text{ is a polynomial in $n$ variables} }$
Let $S_n$ denote the symmetric group on $n$ letters.

Let $*: S_n \times F \to F$ be the mapping defined as:

$\forall \pi \in S_n, f \in F: \pi * \map f {x_1, x_2, \ldots, x_n} = \map f {x_{\map \pi 1}, x_{\map \pi 2}, \ldots, x_{\map \pi n} }$
Then $*$ is a group action.


Proof
Let $\pi, \rho \in S_n$.
Let $\pi * f$ be the permutation on the polynomial $f$ by $\pi$.
Let $e \in S_n$ be the identity of $S_n$.

From Symmetric Group is Group:

$e * f = f$
thus fulfilling Group Action Axiom $\text {GA} 1$.

Then we have that:














\(\ds \paren {\pi \circ \rho} * f\)

\(=\)







\(\ds \map \pi {\rho * f}\)




















\(\ds \)

\(=\)







\(\ds \pi * \paren {\rho * f}\)









thus fulfilling Group Action Axiom $\text {GA} 2$
$\blacksquare$


Also see
Stabilizer of Polynomial


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $6$: Cosets: Exercise $10$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations: Proposition $9.13$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Example $10.3$




