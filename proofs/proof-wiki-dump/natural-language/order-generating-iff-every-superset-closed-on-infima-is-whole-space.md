# 

Source: https://proofwiki.org/wiki/Order_Generating_iff_Every_Superset_Closed_on_Infima_is_Whole_Space



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $X$ be a subset of $S$.

Then

$X$ is order generating
if and only if

$\forall Y \subseteq S: Y \supseteq X \land \paren {\forall Z \subseteq Y: \inf Z \in Y} \implies Y = S$


Proof
Sufficient Condition
Let $X$ be order generating.
Let $Y \subseteq S$ such that

$Y \supseteq X \land \paren {\forall Z \subseteq Y: \inf Z \in Y}$
We will prove that

$S \subseteq Y$
Let $s \in S$.
By Order Generating iff Every Element is Infimum:

$\exists Z \subseteq X: s = \inf Z$
By Subset Relation is Transitive:

$Z \subseteq Y$
Thus by assumption:

$s \in Y$
$\Box$

By definition of set equality:

$Y = S$
$\Box$


Necessary Condition
Assume that:

$\forall Y \subseteq S: Y \supseteq X \land \paren {\forall Z \subseteq Y: \inf Z \in Y} \implies Y = S$
Define $Y := \set {\inf Z: Z \subseteq X}$
By definition of subset:

$Y \subseteq S$
We will prove that

$X \subseteq Y$
Let $x \in X$.
By definitions of singleton and subset:

$\set x \subseteq X$
By Infimum of Singleton:

$\inf \set x = x$
Thus by definition of $Y$:

$x \in Y$
$\Box$

We will prove that:

$\forall x \in S: \exists Z \subseteq X: x = \inf Z$
Let $x \in S$.
We will prove that:

$\forall Z \subseteq Y: \inf Z \in Y$
Let $Z \subseteq Y$.
Define:

$T := \bigcup \set {A \subseteq X: \inf A \in Z}$
By Union of Subsets is Subset:

$T \subseteq X \subseteq S$
Define:

$N := \set {\inf A: A \subseteq X \land \inf A \in Z}$
We will prove that:

$Z \subseteq N$
Let $y \in Z$.
By definition of subset:

$y \in Y$
By definition of $Y$:

$\exists Z \subseteq X: y = \inf Z$
Thus by definition of $N$:

$y \in N$
$\Box$

By definition of subset:

$N \subseteq Z$
By definition of set equality:

$Z = N$
By Infimum of Infima:

$\inf Z = \inf T$
Thus

$\inf Z \in Y$
$\Box$

By assumption:

$Y = S$
Then

$x \in Y$
Thus by definition of $Y$:

$\exists Z \subseteq X: x = \inf Z$
$\Box$

Hence $X$ is order generating by Order Generating iff Every Element is Infimum.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_6:16




