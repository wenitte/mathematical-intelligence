# 

Source: https://proofwiki.org/wiki/Composite_of_Inverse_of_Mapping_with_Mapping



Theorem
Let $f: S \to T$ be a mapping.

Then:

$f \circ f^{-1} = I_{\Img f}$
where:

$f \circ f^{-1}$ is the composite of $f$ and $f^{-1}$
$f^{-1}$ is the inverse of $f$
$I_{\Img f}$ is the identity mapping on the image set of $f$.


Proof
By Inverse of Mapping is One-to-Many Relation, $f^{-1}$ is a one-to-many relation:

$f^{-1} \subseteq T \times S$
whose domain is the image set of $f$.
By definition of composition of relations:

$f \circ f^{-1} := \set {\tuple {x, z} \in T \times T: \exists y \in S: \tuple {x, y} \in f^{-1} \land \tuple {y, z} \in f}$
Thus $f \circ f^{-1}$ is a relation on $T \times T$.

Let $x \in \Img f$.
Then:

$\exists y \in S: \tuple {x, y} \in f^{-1}$
As $f$ is a mapping, and so by definition a many-to-one relation;

$\map f y = x$
for all $y$ such that $\tuple {x, y} \in f^{-1}$.
That is:

$\forall x \in \Img f: f \circ \map {f^{-1} } x = x$
Hence the result by definition of identity mapping.
$\blacksquare$


Also see
Composite of Mapping with Inverse


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Functions




