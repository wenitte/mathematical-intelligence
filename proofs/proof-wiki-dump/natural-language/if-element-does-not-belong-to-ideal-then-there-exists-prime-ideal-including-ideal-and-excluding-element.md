# 

Source: https://proofwiki.org/wiki/If_Element_Does_Not_Belong_to_Ideal_then_There_Exists_Prime_Ideal_Including_Ideal_and_Excluding_Element

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a distributive lattice.
Let $I$ be an ideal in $L$.
Let $x$ be an element of $S$.
Suppose $x \notin I$

Then there exists a prime ideal $P$ in $L$: $I \subseteq P$ and $x \notin P$


Proof
By Upper Closure of Element is Filter:

$x^\succeq$ is a filter.
We will prove that

$I \cap x^\succeq = \O$
Aiming for a contradiction, suppose:

$\exists y: y \in I \cap x^\succeq$
By definition of intersection:

$y \in I$ and $y \in x^\succeq$
By definition of upper closure of element:

$x \preceq y$
By definition of lower section:

$x \in I$
This contradicts $x \notin I$
$\Box$

Thus by If Ideal and Filter are Disjoint then There Exists Prime Ideal Including Ideal and Disjoint from Filter:

there exists a prime ideal $P$ in $L$: $I \subseteq P$ and $P \cap x^\succeq = \O$
By definition of reflexivity:

$x \preceq x$
By definition of upper closure of element:

$x \in x^\succeq$
Thus by definitions of intersection and empty set:

$x \notin P$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:25




