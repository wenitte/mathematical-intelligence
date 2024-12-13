# 

Source: https://proofwiki.org/wiki/Min_Operation_on_Toset_forms_Semigroup


It has been suggested that this page or section be merged into Min Semigroup is Commutative.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\struct {S, \preceq}$ be a totally ordered set.
Let $\map \min {x, y}$ denote the min operation on $x, y \in S$.

Then $\struct {S, \min}$ is a semigroup.


Proof
By the definition of the min operation, either:

$\map \min {x, y}= x$
or

$\map \min {x, y}= y$

So $\min$ is closed on $S$.

From Min Operation is Associative:

$\forall x, y, z \in S: \map \min {x, \map \min {y, z} } = \map \min {\map \min {x, y}, z}$
Hence the result, by definition of semigroup.
$\blacksquare$


Also see
Max Operation on Toset forms Semigroup




