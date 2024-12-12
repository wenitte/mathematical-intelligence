# 

Source: https://proofwiki.org/wiki/Condition_for_Elements_of_Group_to_be_in_Subgroup

Theorem
Let $G$ be a group.
Let $H$ be a subgroup of $G$.
Let $x, y \in G$ be such that $2$ elements of $\set {x, y, x y}$ are elements of $h$.

Then all the elements of $\set {x, y, x y}$ are in $H$.


Proof
As $H$ is a subgroup of $G$, it is a group in its own right.
Thus the group axioms all apply to $H$.

Let $x, y \in H$.
Then by Group Axiom $\text G 0$: Closure, $x y \in H$.

Let $x, x y \in H$.
As $x \in H$, it follows that $x^{-1} \in H$ by Group Axiom $\text G 3$: Existence of Inverse Element.
Thus by Group Axiom $\text G 0$: Closure, $x^{-1} \paren {x y} = y \in H$.

Let $y, x y \in H$.
As $y \in H$, it follows that $y^{-1} \in H$ by Group Axiom $\text G 3$: Existence of Inverse Element.
Thus by Group Axiom $\text G 0$: Closure, $\paren {x y} y^{-1} = x \in H$.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $5$: Subgroups: Exercise $6$




