# 

Source: https://proofwiki.org/wiki/Ring_Homomorphism_Preserves_Subrings



Theorem
Let $\phi: \struct {R_1, +_1, \circ_1} \to \struct {R_2, +_2, \circ_2}$ be a ring homomorphism.
Let $S$ be a subring of $R_1$.

Then $\phi \sqbrk S$ is a subring of $R_2$.


Corollary
The image of a ring homomorphism $\phi: R_1 \to R_2$ is a subring of $R_2$.


Proof 1
Since $S \ne \O$, $\phi \sqbrk S \ne \O$.
From Group Homomorphism Preserves Subgroups, $\struct {\phi \sqbrk S, +_2}$ is a subgroup of $\struct {R_2, +_2}$.
From Homomorphism Preserves Subsemigroups, $\struct {\phi \sqbrk S, \circ_2}$ is a subsemigroup of $\struct {R_2, \circ_2}$.
Thus, as $\struct {R_2, +_2}$ is a group and $\struct {R_2, \circ_2}$ is a semigroup, the result follows.
$\blacksquare$


Proof 2
From Morphism Property Preserves Closure, $\phi \sqbrk {R_1}$ is a closed algebraic structure.
From Epimorphism Preserves Rings, $\phi \sqbrk S$ is a ring.
Hence the result, from the definition of subring.
$\blacksquare$


Proof 3
Let $S$ be a subring of $R_1$.
Since $S \ne \O$ it follows that $\phi \sqbrk S \ne \O$.
Let $x, y \in \phi \sqbrk S$.
Then:

$\exists s, t \in S: x = \map \phi s, y = \map \phi t$

So:














\(\ds x +_2 \paren {-y}\)

\(=\)







\(\ds \map \phi s +_2 \paren {-\map \phi t}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {s +_1 \paren {-t} }\)





as $\phi$ is a homomorphism



As $S$ is a subring of $R_1$, it is closed under $+_1$ and the taking of negatives.
Thus $s +_1 \paren {-t} \in S$ and so $x +_2 \paren {-y} \in \phi \sqbrk S$.

Similarly:














\(\ds x \circ_2 y\)

\(=\)







\(\ds \map \phi s \circ_2 \map \phi t\)




















\(\ds \)

\(=\)







\(\ds \map \phi {s \circ_1 t}\)





as $\phi$ is a homomorphism



Because $S$ is a subring of $R_1$, it is closed under $\circ_1$.
Thus $s \circ_1 t \in S$ and so $x \circ_2 y \in \phi \sqbrk S$.
The result follows from Subring Test.
$\blacksquare$





