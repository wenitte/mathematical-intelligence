# 

Source: https://proofwiki.org/wiki/Cartesian_Product_is_Unique

Theorem
Let $A$ and $B$ be classes.
If there exists a cartesian product of $A$ and $B$, then it is unique.


Proof
Let $C_1$ and $C_2$ be cartesian products of $A$ and $B$.
Then by the cartesian product definition, for an arbitrary $a$:

$a \in C_1 \iff \exists x \in A: \exists y \in B: a = \tuple {x, y}$
$a \in C_2 \iff \exists x \in A: \exists y \in B: a = \tuple {x, y}$
By Biconditional is Transitive:

$a \in C_1 \iff a \in C_2$
By Axiom of Extension:

$C_1 = C_2$
Thus the cartesian product of $A$ and $B$ is unique.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 7$ Cartesian products




