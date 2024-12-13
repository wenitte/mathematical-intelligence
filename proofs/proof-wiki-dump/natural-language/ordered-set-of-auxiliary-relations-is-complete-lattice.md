# 

Source: https://proofwiki.org/wiki/Ordered_Set_of_Auxiliary_Relations_is_Complete_Lattice

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $\map {\operatorname {Aux} } L$ be the set of all auxiliary relations on $S$.
Let $P = \struct {\map {\operatorname {Aux} } L, \precsim}$ be an ordered set
where $\precsim \mathop = \subseteq \restriction_{\map {\operatorname {Aux} } L \times \map {\operatorname {Aux} } L}$

Then

$P$ is a complete lattice.


Proof
Let $X \subseteq \map {\operatorname {Aux} } L$
In the case when $X \ne \O$:
By Intersection of Auxiliary Relations is Auxiliary Relation:

$\bigcap X \in \map {\operatorname {Aux} } L$
By Intersection is Largest Subset, $\bigcap X$ is the infimum of $X$.
In case when $X = \O$:
By proof of Preceding is Top in Ordered Set of Auxiliary Relations:

$\O$ admits an infimum in $P$
Then:

$X$ (empty or non-empty) admits an infimum in $P$
By duality of Lattice is Complete iff it Admits All Suprema:

$P$ is a complete lattice.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:funcreg 10




