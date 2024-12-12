# 

Source: https://proofwiki.org/wiki/Derivative_of_Derivative_is_Subset_of_Derivative_in_T1_Space


This article needs to be tidied.In particular: Consider using eqn templatePlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $T = \struct {S, \tau}$ be a $T_1$ topological space.
Let $A$ be a subset of $S$.

Then

$A' ' \subseteq A'$
where

$A'$ denotes the derivative of $A$


Proof
Let:

$(1): \quad x \in A' '$
Aiming for a contradiction, suppose $x \notin A'$.
Then by Characterization of Derivative by Open Sets there exists an open subset $G$ of $T$ such that:

$(2): \quad x \in G$
and:

$(3): \quad \lnot \exists y: y \in A \cap G \land x \ne y$
By definition of $T_1$ space:

$\set x$ is closed.
Then by Open Set minus Closed Set is Open:

$(4): \quad G \setminus \set x$ is open.
By $(1)$, $(2)$, and Characterization of Derivative by Open Sets there exists a point $y$ of $T$ such that:

$(5): \quad y \in A' \cap G$
and:

$(6): \quad x \ne y$
Then by definition of intersection:

$y \in A'$
Then by $(6)$ and definition of set difference:

$(7): \quad y \in A' \setminus \set x$
By definition of intersection and $(5)$:

$y \in G$
By $(6)$ and definition of singleton:

$y \notin \set x$
Then by definition of set difference:

$(8): \quad y \in G \setminus \set x$
We will prove:

$(9): \quad G \cap \paren {A \setminus \set x} = \O$
Aiming for a contradiction, suppose:
$G \cap \paren {A \setminus \set x} \ne \O$
Then by definition of the empty set there exists $g$ such that:
$g \in G \cap \paren {A \setminus \set x}$
Hence by definition of intersection:
$g \in G$
and:
$g \in A \setminus \set x$
Then by definition of set difference:
$g \in A$
Hence by definition of intersection:
$g \in A \cap G$
Then by $(3)$:
$x = g$
This by definition of singleton contradicts with $g \notin \set x$ obtained by definition of set difference.
Thus:
$G \cap \paren {A \setminus \set x} = \O$
Define $U = G \setminus \set x$ as an open set by $(4)$.
By $(5)$ and definition of set difference:

$y \in A'$
Then by $(8)$ and Characterization of Derivative by Open Sets there exists a point $q$ of $T$ such that:

$(10): \quad q \in A \cap U$
and:

$(11): \quad y \ne q$
By $(10)$ and definition of intersection:

$q \in A$
By $(11)$ and definition of singleton:

$q \notin \set y$
Then by definition of set difference

$(12): \quad q \in A \setminus \set y$
By definition of intersection:

$q \in U$
Then by $(12)$ and by definition of set difference

$q \ne x$
and:

$q \in A$
Then by definition of set difference:

$q \in A \setminus \set x$
and :

$q \in G$
Hence this contradicts with $(9)$ by definition of intersection.
Thus the result by Proof by Contradiction.
$\blacksquare$


Sources
1977: Ryszard Engelking: General Topology
Mizar article TOPGEN_1:32




