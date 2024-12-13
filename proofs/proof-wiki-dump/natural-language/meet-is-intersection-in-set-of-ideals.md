# 

Source: https://proofwiki.org/wiki/Meet_is_Intersection_in_Set_of_Ideals

Theorem
Let $\mathscr S = \struct {S, \wedge, \preceq}$ be a meet semilattice.
Let $\map {\mathit {Ids} } {\mathscr S}$ be the set of all ideals in $\mathscr S$.
Let $P = \struct {\map {\mathit {Ids} } {\mathscr S}, \precsim}$ be an ordered set where $\mathord \precsim = \mathord \subseteq \restriction_{\map {\mathit {Ids} } {\mathscr S} \times \map {\mathit {Ids} } {\mathscr S} }$
Let $I_1, I_2$ be ideals in $\mathscr S$.
Then

$I_1 \wedge_P I_2 = I_1 \cap I_2$


Proof
By Intersection of Semilattice Ideals is Ideal:

$I_1 \cap I_2 \in \map {\mathit {Ids} } {\mathscr S}$
We will prove that

$I_1 \cap I_2$ is lower bound for $\set {I_1, I_2}$
Let $x \in \set {I_1, I_2}$.
Then by definition of unordered tuple:

$x = I_1$ or $x = I_2$
By Intersection is Subset

$I_1 \cap I_2 \subseteq x$
Thus by definition of $\precsim$:

$I_1 \cap I_2 \precsim x$
$\Box$

We will prove that

$\forall I \in \map {\mathit {Ids} } {\mathscr S}: I$ is lower bound for $\set {I_1, I_2} \implies I \precsim I_1 \cap I_2$
Let $I \in \map {\mathit {Ids} } {\mathscr S}$ such that

$I$ is lower bound for $\set {I_1, I_2}$
By definition of lower bound:

$I \precsim I_1$ and $I \precsim I_2$
By definition of $\precsim$:

$I \subseteq I_1$ and $I \subseteq I_2$
By Intersection is Largest Subset:

$I \subseteq I_1 \cap I_2$
Thus by definition of $\precsim$

$I \precsim I_1 \cap I_2$
$\Box$

By definition of infimum:

$\inf \set {I_1, I_2} = I_1 \cap I_2$
Hence by definition of meet:

$I_1 \wedge I_2 = I_1 \cap I_2$
$\blacksquare$


Sources
Mizar article YELLOW_2:43




