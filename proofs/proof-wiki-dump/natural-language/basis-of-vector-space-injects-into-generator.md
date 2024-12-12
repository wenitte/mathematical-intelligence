# 

Source: https://proofwiki.org/wiki/Basis_of_Vector_Space_Injects_into_Generator

Theorem
Let $K$ be a division ring.
Let $V$ be a vector space over $K$.
Let $B$ be a basis of $V$.
Let $G$ be a generator of $V$.

Then there exists an injection from $B$ to $G$.


Proof
By Vector Space has Basis between Linearly Independent Set and Spanning Set, there exists a basis $C \subset G$.
By Bases of Vector Space have Equal Cardinality, there exists a bijection between $B$ and $C$.
By Composite of Injections is Injection, composing this bijection with the inclusion of $C$ in $G$, we obtain an injection from $B$ to $G$.
$\blacksquare$





