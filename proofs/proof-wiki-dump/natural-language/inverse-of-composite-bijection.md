# 

Source: https://proofwiki.org/wiki/Inverse_of_Composite_Bijection



Theorem
Let $f$ and $g$ be bijections such that $\Dom g = \Cdm f$.

Then:

$\paren {g \circ f}^{-1} = f^{-1} \circ g^{-1}$
and $f^{-1} \circ g^{-1}$ is itself a bijection.


Proof 1
$\left({g \circ f}\right)^{-1} = f^{-1} \circ g^{-1}$ is a specific example of Inverse of Composite Relation.
As $f$ and $g$ are bijections then by Bijection iff Inverse is Bijection, so are both $f^{-1}$ and $g^{-1}$.
By Composite of Bijections is Bijection, it follows that $f^{-1} \circ g^{-1}$ is a bijection.
$\blacksquare$


Proof 2
Let $f: X \to Y$ and $g: Y \to Z$ be bijections.
Then:














\(\ds \paren {g \circ f} \circ \paren {f^{-1} \circ g^{-1} }\)

\(=\)







\(\ds g \circ \paren {\paren {f \circ f^{-1} } \circ g^{-1} }\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds g \circ \paren {I_Y \circ g^{-1} }\)





Composite of Bijection with Inverse is Identity Mapping














\(\ds \)

\(=\)







\(\ds g \circ g^{-1}\)





Identity Mapping is Left Identity














\(\ds \)

\(=\)







\(\ds I_Z\)





Composite of Bijection with Inverse is Identity Mapping



$\Box$















\(\ds \paren {f^{-1} \circ g^{-1} } \circ \paren {g \circ f}\)

\(=\)







\(\ds \paren {f^{-1} \circ \paren {g^{-1} \circ g} } \circ f\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds \paren {f^{-1} \circ I_Y} \circ f\)





Composite of Bijection with Inverse is Identity Mapping














\(\ds \)

\(=\)







\(\ds f^{-1} \circ f\)





Identity Mapping is Right Identity














\(\ds \)

\(=\)







\(\ds I_X\)





Composite of Bijection with Inverse is Identity Mapping



Hence the result.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{J}$
2011: Robert G. Bartle and Donald R. Sherbert: Introduction to Real Analysis (4th ed.) ... (previous) ... (next): $\S 1.1$: Sets and Functions




