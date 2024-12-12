# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Convex_Set_in_Vector_Space



Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $V$ be a vector space over $\Bbb F$.
Let $C \subseteq V$.

The following definitions of the concept of convexity are equivalent:

Definition 1
We say that $C$ is convex if and only if:

$t x + \paren {1 - t} y \in C$
for each $x, y \in C$ and $t \in \closedint 0 1$. 


Definition 2
We say that $C$ is convex if and only if:

$t C + \paren {1 - t} C \subseteq C$
for each $t \in \closedint 0 1$, where $t C + \paren {1 - t} C$ denotes a linear combination of subsets.


Proof
From the definition of the linear combination $t C + \paren {1 - t} C$, we have: 

$t C + \paren {1 - t} C = \set {t x + \paren {1 - t} y : x, y \in C}$
for $t \in \R$. 
So we have: 

$t C + \paren {1 - t} C \subseteq C$
if and only if:

$t x + \paren {1 - t} y \in C$ for all $x, y \in C$ and $t \in \closedint 0 1$.
Hence the result.
$\blacksquare$





