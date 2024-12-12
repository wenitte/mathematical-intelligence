# 

Source: https://proofwiki.org/wiki/Continuous_Lattice_iff_Auxiliary_Approximating_Relation_is_Superset_of_Way_Below_Relation



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $\map {\operatorname{App} } L$ be the set of all auxiliary approximating relation on $S$.

Then

$L$ is continuous
if and only if

$\forall \RR \in \map {\operatorname{App} } L: \ll \subseteq \RR$ and $\ll$ is an approximating relation


Proof
Sufficient Condition
Let $L$ be continuous.
Let $\RR \in \map {\operatorname{App} } L$
Let $\tuple {a, b} \in S \times S$ such that:

$a \ll b$
By definition of way below closure:

$a \in b^\ll$
where $b^\ll$ denotes the way below closure of $b$.
By Complete Lattice is Bounded and Continuous Lattice is Meet-Continuous:
$L$ is a bounded below meet-continuous lattice.
By Intersection of Relation Segments of Approximating Relations equals Way Below Closure:

$\ds \bigcap \set {b^\RR: \RR \in \map {\operatorname{App} } L} = b^\ll$
where $b^\RR$ denotes the $\RR$-segment of $b$.
By Intersection is Subset/General Result:

$b^\ll \subseteq b^\RR$
By definition of subset:

$a \in b^\RR$
By definition of $\RR$-segment:

$\tuple {a, b} \in \RR$
Thus by definition of subset:

$\ll \subseteq \RR$
Thus by Way Below is Approximating Relation:

$\ll$ is an approximating relation.
$\Box$


Necessary Condition
Let

$\forall \RR \in \map {\operatorname{App} } L: \ll \subseteq \RR$ and $\ll$ is an approximating relation
Define $\RR := \mathord \ll$.
By definition of approximating relation:

$\forall x \in S: x = \map \sup {x^\RR}$
By definitions of way below closure and $\RR$-segment:

$\forall x \in S: x = \map \sup {x^\ll}$
By definition:

$L$ satisfies the axiom of approximation.
By Way Below Closure is Directed in Bounded Below Join Semilattice:

$\forall x \in S: x^\ll$ is directed
By definition of complete lattice:

$L$ is up-complete.
Hence $L$ is continuous.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:45




