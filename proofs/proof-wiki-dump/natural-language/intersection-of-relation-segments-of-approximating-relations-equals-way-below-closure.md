# 

Source: https://proofwiki.org/wiki/Intersection_of_Relation_Segments_of_Approximating_Relations_equals_Way_Below_Closure

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below meet-continuous lattice.
Let $\map {\operatorname {App} } L$ be the set of all auxiliary approximating relations on $S$.
Let $x \in S$.

Then

$\ds \bigcap \set {x^\RR: \RR \in \map {\operatorname {App} } L} = x^\ll$


Proof
By Intersection of Ideals with Suprema Succeed Element equals Way Below Closure of Element:

$\ds \bigcap \set {I \in \operatorname {Ids}: x \preceq \sup I} = x^\ll$
where $\operatorname {Ids}$ denotes the set of all ideals in $L$.
For all $I \in \operatorname {Ids}$ define a mapping $m_I: S \to \operatorname {Ids}$:

$\forall x \in S: x \preceq \sup I \implies \map {m_I} x = \set {x \wedge i: i \in I}$
and

$\forall x \in S: x \npreceq \sup I \implies \map {m_I} x = x^\preceq$
By Intersection of Applications of Down Mappings at Element equals Way Below Closure of Element:

$\ds \forall x \in S: \bigcap \set {\map {m_I} x: I \in \operatorname {Ids} } = x^\ll$
We will prove that

$\set {\map {m_I} x: I \in \operatorname {Ids} } \subseteq \set {x^{\RR}: \RR \in \map {\operatorname {App} } L}$
Let $a \in \set {\map {m_I} x: I \in \operatorname {Ids} }$
Then

$\exists I \in \operatorname {Ids}: a = \map {m_I} x$
By Down Mapping is Generated by Approximating Relation:

$\exists \RR \in \map {\operatorname {App} } L: \forall s \in S: \map {m_I} s = s^\RR$
Then

$a = x^\RR$
Thus

$a \in \set {x^\RR: \RR \in \map {\operatorname {App} } L}$
$\Box$

By Intersection of Family is Subset of Intersection of Subset of Family:

$\ds \bigcap \set {x^\RR: \RR \in \map {\operatorname {App} } L} \subseteq x^\ll$
We will prove that

$\set {x^\RR: \RR R \in \map {\operatorname {App} } L} \subseteq \set {I \in \operatorname {Ids}: x \preceq \sup I}$
Let $a \in \set {x^\RR: \RR \in \map {\operatorname {App} } L}$
Then

$\exists \RR \in \map {\operatorname {App} } L: a = x^\RR$
By definition of approximating relation:

$x = \sup a$
By Relation Segment of Auxiliary Relation is Ideal:

$a \in \operatorname {Ids}$
Thus by definition of reflexivity:

$a \in \set {I \in \operatorname {Ids}: x \preceq \sup I}$
$\Box$
By Intersection of Family is Subset of Intersection of Subset of Family:

$\ds x^\ll \subseteq \bigcap \set {x^\RR: \RR \in \map {\operatorname {App} } L}$
Hence the result by definition of set equality.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:44




