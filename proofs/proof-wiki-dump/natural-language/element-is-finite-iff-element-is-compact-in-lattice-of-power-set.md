# 

Source: https://proofwiki.org/wiki/Element_is_Finite_iff_Element_is_Compact_in_Lattice_of_Power_Set



Theorem
Let $X$ be a set.
Let $L = \struct {\powerset X, \cup, \cap, \subseteq}$ be a lattice of power set.
Let $x \in \powerset X$.

Then $x$ is a finite set if and only if $x$ is a compact element.


Proof
Sufficient Condition when Empty
The case when $x = \O$
By Empty Set is Bottom of Lattice of Power Set:

$x = \bot$
where $\bot$ denotes the bottom of $L$.
By Bottom is Way Below Any Element:

$x \ll x$
where $\ll$ denotes the way below relation.
Thus by definition

$x$ is a finite set if and only if $x$ is a compact element.
$\Box$


Sufficient Condition when Non-Empty
The case when $x \ne \O$:
Let $x$ be a finite set.
We will prove that

for every a set $Y$ of subsets of $X$ such that $x \subseteq \bigcup Y$
then there exists a finite subset $Z$ of $Y$: $x \subseteq \bigcup Z$
Let $Y$ be a set of subsets of $X$ such that

$x \subseteq \bigcup Y$
By definitions of union and subset:

$\forall e \in x: \exists u \in Y: e \in u$
By Axiom of Choice:

$\exists f:x \to Y: \forall e \in x: e \in \map f e$
Define:

$Z = f \sqbrk x$
By Image of Mapping from Finite Set is Finite:

$Z$ is a finite set.
By definition of image of mapping:

$Z \subseteq Y$
It remains to prove that

$x \subseteq \bigcup Z$
Let $e \in x$.
By definitions of $f$ and image of mapping:

$e \in \map f e \in Z$
Thus by definition of union:

$e \in \bigcup Z$
$\Box$

By Way Below in Lattice of Power Set:

$x \ll x$
Thus by definition of compact:

$x$ is compact.
$\Box$


Necessary Condition when Non-Empty
Let $x$ be a compact element.
By definition of subset:

$Y := \set {\set y: y \in x}$ is set of subsets of $X$.
We will prove that

$x \subseteq \bigcup Y$
Let $y \in x$.
By definition of $Y$:

$\set y \in Y$
By definition of singleton:

$y \in \set y$
Thus by definition of union:

$y \in \bigcup Y$
$\Box$

By definition of compact:

$x \ll x$
By Way Below in Lattice of Power Set:

there exists finite subset $Z$ of $Y$: $x \subseteq \bigcup Z$
By Singleton is Finite:

$\forall A \in Z: A$ is a finite set.
By Finite Union of Finite Sets is Finite:

$\bigcup Z$ is a finite set.
Thus by Subset of Finite Set is Finite:

$x$ is a finite set.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_8:28




