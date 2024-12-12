# 

Source: https://proofwiki.org/wiki/Finite_Weight_Space_has_Basis_equal_to_Image_of_Mapping_of_Intersections

Theorem
Let $T = \struct {X, \tau}$ be a topological space with finite weight.
Then there exist a basis $\BB$ of $T$ and a mapping $f:X \to \tau$ such that:

$\BB = \Img f$ and
$\forall x \in X: \paren {x \in \map f x \land \forall U \in \tau: x \in U \implies \map f x \subseteq U}$
where $\Img f$ denotes the image of $f$.


Proof
By definition of weight there exists a basis $\BB$ such that:

$\card \BB = \map w T$
where:

$\map w T$ denotes the weight of $T$
$\card \BB$ denotes the cardinality of $\BB$.
By assumption that weight is finite:

$\card \BB$ is finite
Then by Cardinality of Set is Finite iff Set is Finite:

$\BB$ is finite
Define a mapping $f: X \to \powerset X$:

$(1): \quad \forall x \in X: \map f x = \bigcap \set {U \in \BB: x \in U}$
By definition of subset:

$\forall x \in X: \set {U \in \BB: x \in U} \subseteq \BB$
By Subset of Finite Set is Finite:

$\forall x \in X: \set {U \in \BB: x \in U}$ is finite
Then by General Intersection Property of Topological Space:

$\forall x \in X: \bigcap \set {U \in \BB: x \in U} \in \tau$
So:

$f: X \to \tau$

We will prove that:

$(2): \quad \forall x \in X: \paren {x \in \map f x \land \forall U \in \tau: x \in U \implies \map f x \subseteq U}$
Let $x \in X$.
By $(1)$:

$\map f x = \bigcap \set {U \in \BB: x \in U}$
Thus by definition of intersection:

$x \in \map f x$
Let $U$ be an open set of $T$.
Let $x \in U$.
By definition of basis:

$\exists V \in \BB: x \in V \subseteq U$
Then:

$V \in \set {U \in \BB: x \in U}$
Hence by Intersection is Subset:

$\map f x \subseteq V$
Thus by Subset Relation is Transitive:

$\map f x \subseteq U$
This ends the proof of $(2)$.

We will prove that $\Img f$ is a basis of $T$.
By $f: X \to \tau$ and definition of image:

$\Img f \subseteq \tau$
Let $U$ be an open set of $T$.
Let $x$ be a point $x \in X$ such that:

$x \in U$
By $(2)$:

$\map f x \in \Img f \land x \in \map f x \subseteq U$
By definition of basis this ends the proof of basis.
Thus the result.
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_2:15




