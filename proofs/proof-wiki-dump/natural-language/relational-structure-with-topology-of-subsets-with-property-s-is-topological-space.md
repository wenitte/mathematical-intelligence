# 

Source: https://proofwiki.org/wiki/Relational_Structure_with_Topology_of_Subsets_with_Property_(S)_is_Topological_Space

Theorem
Let $T = \struct {S, \preceq, \tau}$ be a relational structure with topology
where

$\struct {S, \preceq}$ is an up-complete ordered set
$\tau$ is the set of all subsets of $S$ with property (S).

Then $\struct {S, \tau}$ is topological space.


Proof
We will prove that

$S$ has property (S).
Let $D$ be a directed subset of $S$ such that

$\sup D \in S$
By definition of non-empty set:

$\exists y: y \in D$
Thus $y \in D$.
Thus by definition of subset:

$\forall x \in D: y \preceq x \implies x \in S$
$\Box$

Then:
$(\text O 3): \quad S \in \tau$
We will prove that:

$(\text O 1): \quad \forall F \subseteq \tau: \bigcup F \in \tau$
Let $F \subseteq \tau$.
To prove that $\bigcup F \in \tau$ it should be proved that

$\bigcup F$ has property (S).
Let $D$ be a directed subset of $S$ such that

$\sup D \in \bigcup F$
By definition of union:

$\exists X \in F: \sup D \in X$
By definition of subset:

$X \in \tau$
By assumption:

$X$ has property (S).
By definition of property (S):

$\exists y \in D: \forall x \in D: y \preceq x \implies x \in X$
Thus $y \in D$.
Let $x \in D$ such that

$y \preceq x$
Then $x \in X$.
Thus by definition of union:

$x \in \bigcup F$
$\Box$

We will prove that

$(\text O 2): \quad \forall X, Y \in \tau: X \cap Y \in \tau$
Let $X, Y \in \tau$.
By assumption:

$X$ and $Y$ have property (S).
To prove that $X \cap Y \in \tau$ it should be proved that:

$X \cap Y$ has property (S).
Let $D$ be a directed subset of $S$ such that:

$\sup D \in X \cap Y$
By definition of intersection:

$\sup D \in X$ and $\sup D \in Y$
By definition of property (S):

$\exists x \in D: \forall z \in D: x \preceq z \implies z \in X$
and

$\exists y \in D: \forall z \in D: y \preceq z \implies z \in X$
By definition of directed:

$\exists z \in D: x \preceq z \land y \preceq z$
Thus $z \in D$.
Let $u \in D$ such that

$z \preceq u$
By definition of transitivity:

$x \preceq u$ and $y \preceq u$
Then:

$u \in X$ and $u \in Y$
Thus by definition of intersection:

$u \in X \cap Y$
$\Box$

Hence by $(\text O 1)$, $(\text O 2)$, $(\text O 3)$, and definition:

$\struct {S, \tau}$ is topological space.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:16




