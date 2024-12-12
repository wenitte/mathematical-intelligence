# 

Source: https://proofwiki.org/wiki/Empty_Class_Exists_and_is_Unique



Theorem
There is exactly one empty class.


Proof
Let $P$ be a property such that $\map P x$ is satisfied by no $x$ at all, for example:

$\forall x: \map P x := \neg {x = x}$
Then by the Axiom of Specification we can create the class $A$ such that:

$A := \set {x \in V \land \neg {x = x} }$
from which it is seen that $A$ has no elements.
Hence there exists an empty class.

Let $A$ and $B$ both be empty classes.
By definition, both $A$ and $B$ contain the same elements, that is, no elements at all.
By the Axiom of Extension, that means $A = B$.
Hence the result.
$\blacksquare$


Also see
Empty Set is Unique


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 3$ Axiom of the empty set




