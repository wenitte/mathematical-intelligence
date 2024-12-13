# 

Source: https://proofwiki.org/wiki/Max_Operation_on_Toset_forms_Semigroup

Theorem
Let $\struct{S, \preceq}$ be a totally ordered set.
Let $\map \max {x, y}$ denote the max operation on $x, y \in S$.

Then $\struct{S, \max}$ is a semigroup.


Proof
By the definition of the max operation, either:

$\map \max {x, y}= x$
or

$\map \max {x, y}= y$

So $\max$ is closed on $S$.

From Max Operation is Associative:

$\forall x, y, z \in S: \map \max {x, \map \max {y, z}} = \map \max {\map \max {x, y}, z}$
Hence the result, by definition of semigroup.
$\blacksquare$


Also see
Min Operation on Toset forms Semigroup




