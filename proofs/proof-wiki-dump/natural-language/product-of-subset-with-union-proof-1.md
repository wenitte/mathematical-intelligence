# 

Source: https://proofwiki.org/wiki/Product_of_Subset_with_Union/Proof_1

Theorem
Let $\struct {G, \circ}$ be an algebraic structure.
Let $X, Y, Z \subseteq G$.
Then:

$X \circ \paren {Y \cup Z} = \paren {X \circ Y} \cup \paren {X \circ Z}$
$\paren {Y \cup Z} \circ X = \paren {Y \circ X} \cup \paren {Z \circ X}$
where $X \circ Y$ denotes the subset product of $X$ and $Y$.


Proof
Let $x \circ t \in X \circ \paren {Y \cup Z}$.
We have $x \in X, t \in Y \cup Z$ by definition of subset product.
By definition of set union, it follows that $t \in Y$ or $t \in Z$.
So we also have $x \circ t \in X \circ Y$ or $x \circ t \in X \circ Z$.
That is:

$x \circ t \in \paren {X \circ Y} \cup \paren {X \circ Z}$
and so:

$X \circ \paren {Y \cup Z} \subseteq \paren {X \circ Y} \cup \paren {X \circ Z}$

Now let $x \circ t \in \paren {X \circ Y} \cup \paren {X \circ Z}$.
By definition of set union, it follows that $x \circ t \in X \circ Y$ or $x \circ t \in X \circ Z$.
So $x \in X$, and $y \in Y$ or $y \in Z$.
That is, $x \in X$, and $y \in Y \cup Z$ by definition of set union.
Hence:

$x \circ t \in X \circ \paren {Y \cup Z}$
and so:

$\paren {X \circ Y} \cup \paren {X \circ Z} \subseteq X \circ \paren {Y \cup Z}$

That is:

$X \circ \paren {Y \cup Z} = \paren {X \circ Y} \cup \paren {X \circ Z}$

The result:

$\paren {Y \cup Z} \circ X = \paren {Y \circ X} \cup \paren {Z \circ X}$
follows similarly.
$\blacksquare$





