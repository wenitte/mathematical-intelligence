# 

Source: https://proofwiki.org/wiki/Closure_of_Subalgebra_in_Normed_Algebra_is_Subalgebra

Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {A, \norm {\, \cdot \,} }$ be a normed algebra over $\GF$.
Let $B$ be a subalgebra of $A$.

Then $B^-$ is a subalgebra of $A$.


Proof
From Closure of Subspace of Normed Vector Space is Subspace, $B^-$ is a vector subspace of $A$. 
Now let $x, y \in B^-$.
From the definition of a closed set in a normed vector space, there exists sequences $\sequence {x_n}_{n \mathop \in \N}$ and $\sequence {y_n}_{n \mathop \in \N}$ valued in $B$ such that:

$x_n \to x$ and $y_n \to y$.
From Product Rule for Sequence in Normed Algebra, we have:

$x_n y_n \to x y$
From the definition of closure, we have $x y \in B^-$.
So $B^-$ is a vector subspace of $A$ that is closed under multiplication.
Hence $B^-$ is a subalgebra of $A$.
$\blacksquare$





