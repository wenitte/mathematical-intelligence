# 

Source: https://proofwiki.org/wiki/If_Ideal_and_Filter_are_Disjoint_then_There_Exists_Prime_Ideal_Including_Ideal_and_Disjoint_from_Filter

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a distributive lattice.
Let $I$ be an ideal in $L$.
Let $F$ be a filter on $L$ such that

$I \cap F = \O$

Then there exists a prime ideal $P$ in $L$:
$I \subseteq P$ and $P \cap F = \O$


Proof
Define $X := \set {P \in \map {\operatorname {Ids} } L: I \subseteq P \land P \cap F = \O}$
where $\map {\operatorname {Ids} } L$ denotes set of all ideals in $L$.
By Set is Subset of Itself:

$I \in X$
We will prove that:

$\forall Z: Z \ne \O \land Z \subseteq X \land \paren {\forall Y_1, Y_2 \in Z: Y_1 \subseteq Y_2 \lor Y_2 \subseteq Y_1} \implies \bigcup Z \in X$
Let $Z$ such that:

$Z \ne \O$ and
$Z \subseteq X$ and
$\forall Y_1, Y_2 \in Z: Y_1 \subseteq Y_2 \lor Y_2 \subseteq Y_1$
By definition of $X$:

$Z$ is set of subsets of $S$.
By definition of $X$:

$\forall Y \in Z: Y$ is a lower section.
Then by Every Element is Lower implies Union is Lower:

$J := \bigcup Z$ is lower section.
By definition of non-empty set:

$\exists Y: Y \in Z$
By definition of subset:

$Y \in X$
By definition of $X$:

$I \subseteq Y$
By Set is Subset of Union/General Result:

$Y \subseteq J$
By Subset Relation is Transitive:

$I \subseteq J$
We will prove that:

$\forall A, B \in Z: \exists C \in Z: A \cup B \subseteq C$
Let $A, B \in Z$.
By assumption:

$A \subseteq B$ or $B \subseteq A$
By Union with Superset is Superset:

$A \cup B = B$ or $A \cup B = A$
Thus by Set is Subset of Itself:

$\exists C \in Z: A \cup B \subseteq C$
$\Box$
By definition of $X$:

$\forall Y \in Z: Y$ is directed.
By Every Element is Directed and Every Two Elements are Included in Third Element implies Union is Directed:

$J$ is directed.
By definition of ideal in ordered set:

$J$ is an ideal in $L$.
We will prove that

$J \cap F = \O$
Let $x \in J$.
By definition of union:

$\exists A \in Z: x \in A$
By definition of subset:

$A \in X$
By definition of $X$:

$A \cap F = \O$
Thus by definitions of intersection and empty set:

$x \notin F$
$\Box$

Thus by definition of $X$:

$\bigcup Z \in X$
$\Box$

By Zorn's Lemma:

there exists $Y \in X$: $Y$ is maximal set of $X$.
Then by definition of $X$:

$Y \in \map {\operatorname {Ids} } L$ and $I \subseteq Y$ and $Y \cap F = \O$
We will prove that:

$Y$ is a prime ideal.
Let $x, y \in S$ such that:

$x \wedge y \in Y$
Aiming for a contradiction, suppose:

$x \notin Y$ and $y \notin Y$
Define $P_y = \map {\operatorname{finsups} } {Y \cap \set y}^\preceq$
By Finite Suprema Set and Lower Closure is Smallest Ideal:

$Y \cup \set y \subseteq P_y$
By Set is Subset of Union:

$Y \subseteq Y \cup \set y$
By Subset Relation is Transitive:

$Y \subseteq P_y$
By Subset Relation is Transitive:

$I \subseteq P_y$
By definition of singleton:

$y \in \set y$
By definition of union:

$y \in Y \cup \set y$
By definition of subset:

$y \in P_y$
We will prove that

$P_y \cap F \ne \O$
Aiming for a contradiction, suppose 

$P_y \cap F = \O$
By definition of $X$:

$P_y \in X$
By definition of minimal set:

$Y = P_y$
A contradiction between $y \notin Y$ and $y \in P_y$
$\Box$

By definitions of non-empty set and intersection:

$\exists v: v \in P_y \land v \in F$
Define $P_x = \map {\operatorname{finsups} } {Y \cap \set x}^\preceq$
Analogically:

$\exists u: u \in P_x \land u \in F$
By Finite Subset Bounds Element of Finite Suprema Set and Lower Closure:

$\exists u' \in Y: u \preceq u' \vee \sup \set x$
By Finite Subset Bounds Element of Finite Suprema Set and Lower Closure:

$\exists v' \in Y: v \preceq v' \vee \sup \set y$
By Join is Associative:

$\paren {v' \vee u'} \vee x = v' \vee \paren {u' \vee x}$
By Join Succeeds Operands: 

$\paren {v' \vee u'} \vee x \succeq u' \vee x$
By Supremum of Singleton:

$\sup \set x = x$
By definition of transitivity:

$u \preceq v' \vee u' \vee x$
By definition of upper section:

$u' \vee v' \vee x \in F$
Analogically:

$u' \vee v' \vee y \in F$
By Filtered in Meet Semilattice:

$\paren {u' \vee v' \vee x} \wedge \paren {u' \vee v' \vee y} \in F$
By definition of distributive lattice:

$\paren {u' \vee v'} \vee \paren {x \wedge y} \in F$
By Directed in Join Semilattice:

$u' \vee v' \in Y$
By Directed in Join Semilattice:

$\paren {u' \vee v'} \vee \paren {x \wedge y} \in Y$
This contradicts $Y \cap F = \O$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:23




