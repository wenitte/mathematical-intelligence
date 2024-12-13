# 

Source: https://proofwiki.org/wiki/Meet_in_Set_of_Ideals



Theorem
Let $\mathscr S = \struct {S, \preceq}$ be a meet semilattice.
Let $\map {\it Ids} {\mathscr S}$ be the set of all ideals in $\mathscr S$.
Let $I_1, I_2$ be ideals in $\mathscr S$.
Then

$I_1 \wedge I_2 = \set {i_1 \wedge i_2: i_1 \in I_1, i_2 \in I_2}$
where

$I_1 \wedge I_2$ denotes the meet in $\struct {\map {\it Ids} {\mathscr S}, \subseteq}$


Proof
By Meet is Intersection in Set of Ideals:

$I_1 \wedge I_2 = I_1 \cap I_2$


($\subseteq$)
Let $x \in I_1 \cap I_2$.
By definition of intersection:

$x \in I_1 \land x \in I_2$
By Meet is Idempotent:

$x = x \wedge x$
Thus

$x \in \set {i_1 \wedge i_2: i_1 \in I_1, i_2 \in I_2}$
$\Box$


($\supseteq$)
Let $x \in \set {i_1 \wedge i_2: i_1 \in I_1, i_2 \in I_2}$.
Then

$\exists i_1 \in I_1, i_2 \in I_2: x = i_1 \wedge i_2$
By Meet Precedes Operands:

$x \preceq i_1 \land x \preceq i_2$
By definition of lower section:

$x \in I_1 \land x \in I_2$
Thus by definition of intersection:

$x \in I_1 \cap I_2$
$\blacksquare$


Sources
Mizar article YELLOW_4:58




