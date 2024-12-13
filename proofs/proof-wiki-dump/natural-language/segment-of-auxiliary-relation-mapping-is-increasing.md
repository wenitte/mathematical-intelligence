# 

Source: https://proofwiki.org/wiki/Segment_of_Auxiliary_Relation_Mapping_is_Increasing

Theorem
Let $R = \left({S, \preceq}\right)$ be an ordered set.
Let ${\it Ids}\left({R}\right)$ be the set of all ideals in $R$.
Let $L = \left({ {\it Ids}\left({R}\right), \precsim}\right)$ be an ordered set
where $\precsim \mathop = \subseteq\restriction_{ {\it Ids}\left({R}\right) \times {\it Ids}\left({R}\right)}$
Let $r$ be an auxiliary relation on $S$.
Let $f: S \to {\it Ids}\left({R}\right)$ be a mapping such that

$\forall x \in S: f\left({x}\right) = x^r$
where $x^r$ denotes the $r$-segment of $x$.

Then

$f$ is increasing mapping.


Proof
$f$ is well-defined because by Relation Segment of Auxiliary Relation is Ideal:

$\forall x \in S: x^r$ is ideal in $L$
Let $x, y \in S$ such that

$x \preceq y$
By Preceding implies Inclusion of Segments of Auxiliary Relation:

$x^r \subseteq y^r$
Thus by definitions of $\precsim$ and $f$:

$f\left({x}\right) \precsim f\left({y}\right)$
Thus by definition:

$f$ is increasing mapping.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:funcreg 14




