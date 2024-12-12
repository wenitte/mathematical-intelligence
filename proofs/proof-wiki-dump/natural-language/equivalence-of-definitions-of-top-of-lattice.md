# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Top_of_Lattice



Theorem
The following definitions of the concept of Top of Lattice are equivalent:

Let $\struct {S, \vee, \wedge, \preceq}$ be a lattice.

Definition 1
Let $S$ admit a greatest element $\top$.

Then $\top$ is called the top of $S$.

Definition 2
Let $\wedge$ have an identity element $\top$.

Then $\top$ is called the top of $S$.


Proof
By definition, $\top$ is the greatest element of $S$ if and only if for all $a \in S$:

$a \preceq \top$
By Ordering in terms of Meet, this is equivalent to:

$a \wedge \top = a$
If this equality holds for all $a \in S$, then by definition $\top$ is an identity for $\wedge$.

The result follows.
$\blacksquare$





