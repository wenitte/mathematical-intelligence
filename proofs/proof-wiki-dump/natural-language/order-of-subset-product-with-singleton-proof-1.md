# 

Source: https://proofwiki.org/wiki/Order_of_Subset_Product_with_Singleton/Proof_1

Theorem
Let $\struct {G, \circ}$ be a group.
Let $X, Y \subseteq \struct {G, \circ}$ such that $X$ is a singleton:

$X = \set x$

Then:

$\order {X \circ Y} = \order Y = \order {Y \circ X}$
where $\order S$ is defined as the order of $S$.


Proof
From Regular Representations of Subset Product, we have that the left regular representation of $\struct {S, \circ}$ with respect to $a$ is:

$\lambda_x \sqbrk S = \set x \circ S = x \circ S$
The result then follows directly from Regular Representation of Invertible Element is Permutation.
$\blacksquare$





