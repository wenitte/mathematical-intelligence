# 

Source: https://proofwiki.org/wiki/Composite_of_Bijections_is_Bijection



Theorem
Let $f$ and $g$ be mappings such that $\Dom f = \Cdm g$.

Then:

If $f$ and $g$ are both bijections, then so is $f \circ g$
where $f \circ g$ is the composite mapping of $f$ with $g$.


Proof 1
As every bijection is also by definition an injection, a composite of bijections is also a composite of injections.
Every composite of injections is also an injection by Composite of Injections is Injection.

As every bijection is also by definition a surjection, a composite of bijections is also a composite of surjections.
Every composite of surjections is also a surjection by Composite of Surjections is Surjection.

As a composite of bijections is therefore both an injection and a surjection, it is also a bijection.
$\blacksquare$


Proof 2
Let $g: X \to Y$ and $f: Y \to Z$ be bijections.
Then from Bijection iff Inverse is Bijection, both $f^{-1}$ and $g^{-1}$ are bijections.
From Inverse of Composite Relation we have that $g^{-1} \circ f^{-1}$ is the inverse of $f \circ g$.
Then:

$\paren {f \circ g} \circ \paren {g^{-1} \circ f^{-1} } = I_Z$
$\paren {g^{-1} \circ f^{-1} } \circ \paren {f \circ g} = I_X$
Hence the result.


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{J}$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory




