# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Closed_Element



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $\cl$ be a closure operator on $S$.
Let $x \in S$.

The following definitions of the concept of Closed Element are equivalent:

Definition 1
The element $x$ is a closed element of $S$ (with respect to $\cl$) if and only if $x$ is a fixed point of $\cl$:

$\map \cl x = x$
Definition 2
The element $x$ is a closed element of $S$ (with respect to $\cl$) if and only if $x$ is in the image of $\cl$:

$x \in \Img \cl$


Proof
Let $\struct {S, \preceq}$ be an ordered set.
Let $\cl: S \to S$ be a closure operator on $S$.
Let $x \in S$.
By the definition of closure operator, $\cl$ is idempotent.
Thus by Fixed Point of Idempotent Mapping:

An element of $S$ is a fixed point of $\cl$ if and only if it is in the image of $\cl$.
Thus the above definitions are equivalent.
$\blacksquare$





