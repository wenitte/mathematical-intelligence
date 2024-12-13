# 

Source: https://proofwiki.org/wiki/Product_of_Subset_with_Intersection/Corollary

Theorem
Let $\struct {G, \circ}$ be a group.
Let $X, Y, Z \subseteq G$ such that $X$ is a singleton.

Then:

$X \circ \paren {Y \cap Z} = \paren {X \circ Y} \cap \paren {X \circ Z}$
$\paren {Y \cap Z} \circ X = \paren {Y \circ X} \cap \paren {Z \circ X}$
where $X \circ Y$ denotes the subset product of $X$ and $Y$.


Proof
Let $X = \set x$.
We have from Product of Subset with Intersection that:

$X \circ \paren {Y \cap Z} \subseteq \paren {X \circ Y} \cap \paren {X \circ Z}$

Let $g \in \paren {X \circ Y} \cap \paren {X \circ Z}$.
Then by definition of subset product:

$\exists y \in Y, z \in Z: g = x \circ y = x \circ z$
By the Cancellation Laws it follows that $y = z$.
But:

$g = x \circ y \implies g \in X \circ Y$
$g = x \circ z \implies g \in X \circ Z$
and so as $x \circ y = x \circ z$ it follows that $g \in X \circ \paren {Y \cap Z}$.
Thus:

$X \circ \paren {Y \cap Z} \supseteq \paren {X \circ Y} \cap \paren {X \circ Z}$
It follows by definition of set equality that:

$X \circ \paren {Y \cap Z} = \paren {X \circ Y} \cap \paren {X \circ Z}$

By similar reasoning:

$\paren {Y \cap Z} \circ X = \paren {Y \circ X} \cap \paren {Z \circ X}$
Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $4 \ \text{(iii)}$




