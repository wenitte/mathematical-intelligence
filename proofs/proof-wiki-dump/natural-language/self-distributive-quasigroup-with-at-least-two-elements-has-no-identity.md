# 

Source: https://proofwiki.org/wiki/Self-Distributive_Quasigroup_with_at_least_Two_Elements_has_no_Identity

Theorem
Let $\struct {S, \odot}$ be a self-distributive quasigroup.
Let $S$ have at least $2$ elements.

Then $\struct {S, \odot}$ has no identity element.


Proof
Aiming for a contradiction, suppose $S$ has an identity element $e$ and another element $a$ such that $a \ne e$.

Recall the definition of quasigroup:

$\forall a, b \in S: \exists ! x \in S: x \circ a = b$
That is:

We have:














\(\ds a \circ a\)

\(=\)







\(\ds a\)





Self-Distributive Quasigroup is Idempotent














\(\ds e \circ a\)

\(=\)







\(\ds a\)





Definition of Identity Element



That is, there are two $x \in S$ such that $x \circ a = a$.
This contradicts our assertion that $\struct {S, \odot}$ is a quasigroup.
Hence there can be no such element.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.21 \ \text{(d)}$




