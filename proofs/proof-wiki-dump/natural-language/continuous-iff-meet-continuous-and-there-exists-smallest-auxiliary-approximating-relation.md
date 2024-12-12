# 

Source: https://proofwiki.org/wiki/Continuous_iff_Meet-Continuous_and_There_Exists_Smallest_Auxiliary_Approximating_Relation



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.

Then:

$L$ is continuous
if and only if:

$L$ is meet-continuous and there exists the smallest auxiliary approximating relation on $S$

That is:

$L$ is continuous
if and only if:

$L$ is meet-continuous and there exists an auxiliary approximating relation $\RR$ on $S$
for every auxiliary approximating relation $\QQ$ on $S$: $\RR \subseteq \QQ$


Proof
Sufficient Condition
Let $L$ be continuous.
Thus by Continuous Lattice is Meet-Continuous:

$L$ is meet-continuous.
Thus by Way Below is Approximating Relation and Way Below Relation is Auxiliary Relation:

$\ll$ is auxiliary approximating relation on $S$.
Thus by Continuous Lattice iff Auxiliary Approximating Relation is Superset of Way Below Relation:

for every auxiliary approximating relation $\QQ$ on $S$: $\ll \subseteq \QQ$
$\Box$


Necessary Condition
Let $L$ be meet-continuous.
Assume that:

there exists an auxiliary approximating relation $\RR$ on $S$
for every auxiliary approximating relation $\QQ$ on $S$: $\RR \subseteq \QQ$
Let $x \in S$.
By Intersection of Relation Segments of Approximating Relations equals Way Below Closure:

$\ds \bigcap \set {x^\QQ: \QQ \in \map {\operatorname{App} } L} = x^\ll$
where:

$x^\QQ$ denotes the $\QQ$-segment of $x$,
$\map {\operatorname{App} } L$ denotes the set of all auxiliary approximating relations on $S$.
By Intersection is Subset/General Result:

$x^\ll \subseteq x^\RR$
By definition of approximating relation:

$x = \map \sup {x^\RR}$
We will prove that:

$\forall a \in \set {x^\QQ: \QQ \in \map {\operatorname{App} } L}: x^\RR \subseteq a$
Let $a \in \set {x^\QQ: \QQ \in \map {\operatorname{App} } L}$
Then:

$\exists \QQ \in \map {\operatorname{App} } L: a = x^\QQ$
By assumption:

$\RR \subseteq \QQ$
Thus by Relation Segment is Increasing:

$x^\RR \subseteq a$
$\Box$
By Intersection is Largest Subset/General Result:

$x^\RR \subseteq x^\ll$
By definition of set equality:

$x^\RR = x^\ll$
Thus

$x = \map \sup {x^\ll}$
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
Mizar article WAYBEL_4:46




