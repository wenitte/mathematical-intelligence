# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Bottom_of_Lattice



Theorem
Let $\struct {S, \vee, \wedge, \preceq}$ be a lattice.
Let $\bot$ be a bottom of $\struct {S, \vee, \wedge, \preceq}$.
The following definitions of the concept of Bottom in the context of Lattice Theory are equivalent:

Definition 1
Let $S$ admit a smallest element $\bot$.

Then $\bot$ is called the bottom of $S$.

Definition 2
Let $\vee$ have an identity element $\bot$.

Then $\bot$ is called the bottom of $S$.


Proof
By definition, $\bot$ is the smallest element of $S$ if and only if for all $a \in S$:

$\bot \preceq a$
By Ordering in terms of Join, this is equivalent to:

$a \vee \bot = a$
If this equality holds for all $a \in S$, then by definition $\bot$ is an identity for $\vee$.

The result follows.
$\blacksquare$





