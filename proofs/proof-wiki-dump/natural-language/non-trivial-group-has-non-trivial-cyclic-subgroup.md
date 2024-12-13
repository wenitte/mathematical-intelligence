# 

Source: https://proofwiki.org/wiki/Non-Trivial_Group_has_Non-Trivial_Cyclic_Subgroup



Theorem
Let $G$ be a group whose identity element is $e$.
Let $g \in G$.

If $g$ has infinite order, then $\gen g$ is an infinite cyclic group.
If $\order g = n$, then $\gen g$ is a cyclic group with $n$ elements.

Thus, every group which is non-trivial has at least one cyclic subgroup which is also non-trivial.
In the case that $G$ is itself cyclic, that cyclic subgroup may of course be itself.


Proof
Infinite Order
Suppose that $g$ has infinite order.
We have that $\gen g$ consists of all possible powers of $g$.
So $\gen g$ can contain a finite number of elements only if some of these were equal.
Then we would have:

$\exists i, j \in \Z, i < j: g^i = g^j$
and so:

$g^{j - i} = g^{i - i} = g^0 = e$
which would mean that $g$ was of finite order.
This contradiction leads to the conclusion that $\gen g$ must be an infinite cyclic group.
$\Box$


Finite Order
If $\order g = n$, we have from Equal Powers of Finite Order Element that there are exactly $n$ different elements of $G$ of the form $g^i$.
Hence $\gen g$ is a cyclic group with $n$ elements.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups: Proposition $4.11$




