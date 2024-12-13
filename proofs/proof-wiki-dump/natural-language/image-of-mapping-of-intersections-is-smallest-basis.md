# 

Source: https://proofwiki.org/wiki/Image_of_Mapping_of_Intersections_is_Smallest_Basis

Theorem
Let $T = \struct {X, \tau}$ be a topological space.
Let $f: X \to \tau$ be a mapping such that:

$\forall x \in X: \paren {x \in \map f x \land \forall U \in \tau: x \in U \implies \map f x \subseteq U}$.
Then the image $\Img f$ is subset of every basis of $T$.


Proof
Let $\BB$ be a basis.
Let $V \in \Img f$.
Then by definition of image there exists a point $b \in X$ such that:

$V = \map f b$
Then $V$ is open because $\Img f \subseteq \tau$.
By assumption of mapping $f$:

$b \in V$
Then by definition of basis there exists a subset $U \in \BB$ such that:

$b \in U \subseteq V$
By definition of basis:

$\BB \subseteq \tau$
Then by definition of subset:

$U \in \tau$
Then by assumption of mapping $f$:

$\map f b \subseteq U$
Thus by definition of set equality:

$V = U \in \BB$
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_2:16




