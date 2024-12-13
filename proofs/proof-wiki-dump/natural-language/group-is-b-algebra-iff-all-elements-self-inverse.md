# 

Source: https://proofwiki.org/wiki/Group_is_B-Algebra_Iff_All_Elements_Self-Inverse

Theorem
Let $\struct {G, \circ}$ be a group whose identity element is $e$.

Then $\struct {G, \circ}$ is also a $B$-algebra if and only if:

$\forall g \in G: g = g^{-1}$
That is, if and only if all elements of $G$ are self-inverse.


Proof
Let $\struct {G, \circ}$ be a group such that $\forall g \in G: g = g^{-1}$.
From Group Induces B-Algebra, the algebraic structure $\struct {G, *}$ where $*$ is defined as:

$\forall a, b \in G: a * b := a \circ b^{-1}$
is a $B$-algebra.
But as $b = b^{-1}$, it follows that:

$\forall a, b \in G: a * b := a \circ b$
and so $\struct {G, \circ}$ is itself a $B$-algebra.

Now suppose it is not the case that $\forall g \in G: g = g^{-1}$.
Suppose $\struct {G, \circ}$ were a $B$-algebra.
By $B$-Algebra Axiom $(\text A 2)$, the identity element $e$ would be the $0$, as:

$\forall a \in G: a \circ 0 = a$
As an Identity is Unique, there can be no other element in $G$ which can satisfy the conditions to be the $0$ of a $B$-algebra.
Now as not every element is self-inverse:

$\exists x \in G: x \circ x \ne e$
Then by $B$-Algebra Axiom $(\text A 1)$ it follows that $\struct {G, \circ}$ is not a $B$-algebra.
Hence the result.
$\blacksquare$





