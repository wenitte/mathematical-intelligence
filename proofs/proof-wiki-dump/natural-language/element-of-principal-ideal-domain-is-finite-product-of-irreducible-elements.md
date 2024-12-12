# 

Source: https://proofwiki.org/wiki/Element_of_Principal_Ideal_Domain_is_Finite_Product_of_Irreducible_Elements

Theorem
Let $R$ be a principal ideal domain.
Let $p \in R$ such that $p \ne 0$ and $p$ is not a unit.

Then there exist irreducible elements $p_1, \ldots, p_n$ such that $p = p_1 \cdots p_n$.


Proof
If $p$ is irreducible, it is proven.

Suppose $p$ is not irreducible.
Then $p = r_1 r_2$ where neither $r_1$ nor $r_2$ are units.
If $r_1$ and $r_2$ are irreducible, then the proof is complete.

If $r_1$ is not irreducible, then $r_1 = r_{11} r_{12}$ where neither $r_{11}$ nor $r_{12}$ are units.
If we continue, we get a proper inclusion of ideals $\ideal r \subset \ideal {r_1} \subset \ideal {r_{11} } \subset \cdots \subset R$.
If this process finishes in a finite number of steps, the proof is complete.

Aiming for a contradiction, suppose the process does not complete in a finite number of steps.
Thus the chain $\ideal r \subset \ideal {r_1} \subset \ideal {r_{11} } \subset \cdots \subset R$ is infinite.
From Principal Ideal Domain fulfills Ascending Chain Condition, this cannot happen.
Thus, the process ends in a finite number of steps.
$\blacksquare$





