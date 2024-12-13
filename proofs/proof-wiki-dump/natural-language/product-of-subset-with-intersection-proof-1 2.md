# 

Source: https://proofwiki.org/wiki/Product_of_Subset_with_Intersection/Proof_1

Theorem
Let $\struct {G, \circ}$ be an algebraic structure.
Let $X, Y, Z \subseteq G$.
Then:

$X \circ \paren {Y \cap Z} \subseteq \paren {X \circ Y} \cap \paren {X \circ Z}$
$\paren {Y \cap Z} \circ X \subseteq \paren {Y \circ X} \cap \paren {Z \circ X}$
where $X \circ Y$ denotes the subset product of $X$ and $Y$.


Proof
Let $x \in X, t \in Y \cap Z$.
By the definition of intersection, $t \in Y$ and $t \in Z$.

Consider $X \circ \paren {Y \cap Z}$.
We have $x \circ t \in X \circ \paren {Y \cap Z}$ by definition of subset product.
As $t \in Y$ and $t \in Z$, we also have $x \circ t \in X \circ Y$ and $x \circ t \in X \circ Z$.
The result follows.

Similarly, consider $\paren {Y \cap Z} \circ X$.
Then we have $t \circ x \in \paren {Y \cap Z} \circ X$ by definition of subset product.
As $t \in Y$ and $t \in Z$, we also have $t \circ x \in Y \circ X$ and $t \circ x \in Z \circ X$.
Again, the result follows.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $4 \ \text{(i)}$




