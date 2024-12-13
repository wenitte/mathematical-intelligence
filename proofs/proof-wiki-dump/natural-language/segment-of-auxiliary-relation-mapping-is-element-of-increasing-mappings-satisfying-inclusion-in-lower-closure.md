# 

Source: https://proofwiki.org/wiki/Segment_of_Auxiliary_Relation_Mapping_is_Element_of_Increasing_Mappings_Satisfying_Inclusion_in_Lower_Closure



Theorem
Let $R = \struct {S, \preceq}$ be an ordered set.
Let $\map {\mathit {Ids} } R$ be the set of all ideals in $R$.
Let $L = \struct {\map {\mathit {Ids} } R, \precsim}$ be an ordered set where $\precsim \mathop = \subseteq {\restriction_{\map {\mathit {Ids} } R \times \map {\mathit {Ids} } R} }$.
Let $r$ be an auxiliary relation on $S$.
Let $M = \struct {F, \preccurlyeq}$ be the ordered set of increasing mappings $g$ satisfying $\forall x \in S: \map g x \subseteq x^\preceq$.

Let $f: S \to \map {\mathit {Ids} } R$ be a mapping such that:

$\forall x \in S: \map f x = x^r$
where $x^r$ denotes the $r$-segment of $x$.

Then:

$(1): \quad f \in F$
Let $h: S \to \map {\mathit {Ids} } R: x \mapsto x^\preceq$

Then:

$(2): \quad h \in F \land f \preccurlyeq h$
Let $k: S \to \map {\mathit {Ids} } R: x \mapsto \set \bot$
where $\bot$ denotes the smallest element in $L$.

Then:

$(3): \quad k \in F$ and $k \preccurlyeq f$


Proof
Condition $(1)$
By Segment of Auxiliary Relation Mapping is Increasing:

$f$ is an increasing mapping.
By Segment of Auxiliary Relation is Subset of Lower Closure:

$\forall x \in S: x^r \subseteq x^\preceq$
By definition of $f$:

$\forall x \in S: \map f x \subseteq x^\preceq$
Thus

$f \in F$
$\Box$


Condition $(2)$
By Lower Closure is Increasing:

$\forall x, y \in S: x \preceq y \implies x^\preceq \subseteq y^\preceq$
By definitions of $h$ and $\precsim$:

$\forall x, y \in S: x \preceq y \implies \map h x \precsim \map h y$
By definition:

$h$ is an increasing mapping.
By definition of $h$:

$\forall x \in S: \map h x \subseteq x^\preceq$
Thus

$h \in F$
By Segment of Auxiliary Relation is Subset of Lower Closure:

$\forall x \in S: x^r \subseteq x^\preceq$
By definitions of $f$ and $h$:

$\forall x \in S: \map f x \subseteq \map h x$
By definition of $\precsim$:

$\forall x \in S: \map f x \precsim \map h x$
Thus by definition of ordering of $M$:

$f \preccurlyeq h$
$\Box$


Condition $(3)$
$k$ is well-defined because by Singleton of Bottom is Ideal:

$\set \bot$ is an ideal in $R$.
By Mapping is Constant iff Increasing and Decreasing:

$k$ is an increasing mapping.
By definition of smallest element:

$\forall x \in S: \bot \preceq x$
By definition of lower closure of element:

$\forall x \in S: \bot \in x^\preceq$
By definition of subset:

$\forall x \in S: \set \bot \subseteq x^\preceq$
By definition of $k$:

$\forall x \in S: \map k x \subseteq x^\preceq$
Thus

$k \in F$
By definition of auxiliary relation:

$\forall x \in S: \tuple {\bot, x} \in r$
By definition of $r$-segment:

$\forall x \in S: \bot \in x^r$
By definition of subset:

$\forall x \in S: \set \bot \subseteq x^r$
By definitions of $k$ and $f$:

$\forall x \in S: \map k x \subseteq \map f x$
By definition of $\precsim$:

$\forall x \in S: \map k x \precsim \map f x$
Thus by definition of ordering of $M$:

$k \preccurlyeq f$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:18
Mizar article WAYBEL_4:20
Mizar article WAYBEL_4:26
Mizar article WAYBEL_4:27




