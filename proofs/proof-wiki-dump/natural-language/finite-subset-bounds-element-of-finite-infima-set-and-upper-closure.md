# 

Source: https://proofwiki.org/wiki/Finite_Subset_Bounds_Element_of_Finite_Infima_Set_and_Upper_Closure

Theorem
Let $L = \struct {S, \wedge, \preceq}$ be meet semilattice.
Let $F$ be filter in $L$.
Let $X$ be non empty finite subset of $S$.
Let $x \in S$ such that

$x \in \paren {\map {\operatorname{fininfs} } {F \cup X} }^\succeq$
where

$\operatorname{fininfs}$ denotes the finite infima set
$X^\succeq$ denotes the upper closure of $X$.

Then there exists $a \in S$: $a \in F \land x \succeq a \wedge \inf X$


Proof
By definition of upper closure of subset:

$\exists u \in \map {\operatorname{fininfs} } {F \cup X}: u \preceq x$
By definition of finite infima set:

there exists finite subset $Y$ of $F \cup X$:
$Y$ admits an infimum and $u = \inf Y$
We will prove that

$Y \setminus X \subseteq F$
Let $a \in Y \setminus X$.
By definition of difference:

$a \in Y$ and $a \notin X$
By definition of subset:

$a \in F \cup X$
Thus by definition of union:

$a \in F$
$\Box$

Define $Z := Y \setminus X$.


Case $Z = \O$

By $F$ is non-empty:

$\exists b: b \in F$
By Meet Precedes Operands:

$b \wedge \inf X \preceq \inf X$
By Set Difference with Superset is Empty Set:

$Y \subseteq X$
By Existence of Non-Empty Finite Infima in Meet Semilattice:

$X$ admits an infimum.
By Infimum of Subset:

$\inf X \preceq u$
Thus by definition of trantisivity:

$b \wedge \inf X \preceq x$
$\Box$


Case $Z \ne \O$

By Set Difference is Subset:

$Z \subseteq Y$
By Subset of Finite Set is Finite:

$Z$ is finite.
By Union of Finite Sets is Finite:

$Z \cup X$ is finite.
By definitions of non-empty set and union:

$Z \cup X \ne \O$
By Existence of Non-Empty Finite Infima in Meet Semilattice:

$X$ admits an infimum
and

$Z \cup X$ admits an infimum.
By Set is Subset of Union:

$Y \subseteq Y \cup X$
By Set Difference Union Second Set is Union:

$Y \subseteq Z \cup X$
By Infimum of Subset:

$\map \inf {Z \cup X} \preceq u$
By Existence of Non-Empty Finite Infima in Meet Semilattice:

$Z$ admits an infimum
By Infimum of Infima:

$\map \inf {Z \cup X} = \paren {\inf Z} \wedge \inf X$
By Filtered in Meet Semilattice with Finite Infima:

$\inf Z \in F$
By definition of transitivity:

$\paren {\inf Z} \wedge \inf X \preceq x$
Thus:

$\exists a \in S: a \in F \land x \succeq a \wedge \inf X$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:Lm1




