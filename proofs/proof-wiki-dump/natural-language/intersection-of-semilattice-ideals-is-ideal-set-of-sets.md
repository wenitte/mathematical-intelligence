# 

Source: https://proofwiki.org/wiki/Intersection_of_Semilattice_Ideals_is_Ideal/Set_of_Sets



Theorem
Let $\struct {S, \preceq}$ be a bounded below join semilattice.
Let $\II$ be a set of ideals in $\struct {S, \preceq}$.

Then $\bigcap \II$ is an ideal in $\struct {S, \preceq}$.


Proof
Non-Empty Set
By Bottom in Ideal:

$\forall I \in \II: \bot \in I$
where $\bot$ denotes the smallest element in $S$.
By definition of intersection:

$\bot \in \bigcap \II$
Hence $\bigcap \II$ is non-empty.
$\Box$


Lower Section

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Intersection of Lower Sections is Lower SectionYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Let $x \in \bigcap \II$, $y \in S$ such that

$y \preceq x$
We will prove that:

$\forall I \in \II: y \in I$
Let $I \in \II$.
By definition of intersection:

$x \in I$
Thus by definition of lower section:

$y \in I$
$\Box$

Thus by definition of intersection:

$y \in \bigcap \II$
$\Box$


Directed Subset
Let $x, y \in \bigcap \II$.
We will prove that:

$\forall I \in \II: x \vee y \in I$
Let $I \in \II$.
By definition of intersection:

$x, y \in I$
By definition of directed:

$\exists z \in I: x \preceq z \land y \preceq z$
By definition of join:

$x \vee y = \sup \set {x, y}$
By definition:

$z$ is an upper bound for $\set {x, y}$.
By definition of supremum:

$x \vee y \preceq z$
Thus by definition of lower section:

$x \vee y \in I$
$\Box$

Thus by definition of intersection:

$x \vee y \in \bigcap \II$
Hence by Directed in Join Semilattice:

$\bigcap \II$ is directed.
$\blacksquare$


Sources
Mizar article YELLOW_2:45




