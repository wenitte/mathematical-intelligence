# 

Source: https://proofwiki.org/wiki/Compact_Element_iff_Principal_Ideal



Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $P = \struct {\map {\operatorname {Ids} } L, \precsim}$ be an inclusion ordered set
where

$\map {\operatorname {Ids} } L$ denotes the set of all ideals in $L$,
$\mathord\precsim = \mathord\subseteq \cap \paren {\map {\operatorname {Ids} } L \times \map {\operatorname {Ids} } L}$
Let $x \in \map {\operatorname {Ids} } L$

Then $x$ is compact element if and only if $x$ is principal ideal in $L$.


Proof
By Ideals are Continuous Lattice Subframe of Power Set:

$P$ is continuous lattice subframe of $\struct {\powerset S, \subseteq'}$
where 

$\powerset S$ denotes the power set of $S$,
$\mathord\subseteq' = \mathord\subseteq \cap \struct {\powerset S \times \powerset S}$


Sufficient Condition
Assume that

$x$ is compact element.
By Compact Element iff Existence of Finite Subset that Element equals Intersection and Includes Subset:

$\exists F \in \map {\operatorname {Fin} } S: x = \bigcap \set {I \in \map {\operatorname {Ids} } L: F \subseteq I} \land F \subseteq x$
where $\map {\operatorname {Fin} } S$ denotes the set of all finite subsets of $S$.
We will prove that

$\exists y \in x: y$ is upper bound for $x$.
Define $y = \sup_L F$.
By Directed in Join Semilattice with Finite Suprema:

$F \ne \O \implies y \in x$
By Supremum of Empty Set is Smallest Element:

$F = \O \implies y = \bot_L$
where $\bot_L$ is the smallest element in $L$.
By Bottom in Ideal:

$F = \O \implies y \in x$
Thus $y \in x$
Let $z \in x$.
We will prove that

$F \subseteq y^\preceq$
Let $u \in F$.
By definitions of supremum and upper bound:

$u \preceq y$
Thus by definition of lower closure of element:

$u \in y^\preceq$
$\Box$
By Lower Closure of Element is Ideal:

$y^\preceq$ is ideal in $L$.
Then

$y^\preceq \in \set {I \in \map {\operatorname {Ids} } L: F \subseteq I}$
By definition of intersection:

$z \in y^\preceq$
Thus by definition of lower closure of element:

$z \preceq y$
$\Box$
Hence $x$ is principal ideal.
$\Box$


Necessary Condition
Assume that
$x$ is principal ideal.
By definition of principal ideal:

$\exists y \in x: y$ is upper bound for $x$.
We will prove that

$\exists F \in \map {\operatorname {Fin} } S: F \subseteq x \land x = \bigcap \set {I \in \map {\operatorname {Ids} } L: F \subseteq I}$
Define $F = \set y$
By Singleton is Finite:

$F$ is finite.
Thus by definition of $\operatorname {Fin}$:

$F \in \map {\operatorname {Fin} } S$
Thus by definitions of subset and singleton:

$F \subseteq x$
We will prove that

$\forall z: z \in x \iff z \in \bigcap \set {I \in \map {\operatorname {Ids} } L: F \subseteq I}$
Thus by definition of set equality:

$x = \bigcap \set {I \in \map {\operatorname {Ids} } L: F \subseteq I}$
$\Box$
Thus by Compact Element iff Existence of Finite Subset that Element equals Intersection and Includes Subset:

$x$ is compact element.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL13:11




