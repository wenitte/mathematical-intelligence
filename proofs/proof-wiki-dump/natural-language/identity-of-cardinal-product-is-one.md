# 

Source: https://proofwiki.org/wiki/Identity_of_Cardinal_Product_is_One

Theorem
Let $\mathbf a$ be a cardinal.

Then:

$\bsone \mathbf a = \mathbf a$
where $\bsone \mathbf a$ denotes the product of the (cardinal) one and $\mathbf a$.

That is, $\bsone$ is the identity element of the product operation on cardinals.


Proof
Let $\mathbf a = \card A$ for some set $A$.
From the definition of (cardinal) one, $\bsone$ is the cardinal associated with a singleton set, say, $\set \O$.
We have by definition of product of cardinals that $\bsone \mathbf a$ is the cardinal associated with $\set \O \times A$.
Consider the mapping $f: \set \O \times A \to A$ defined as:

$\forall a \in A: \map f {\O, a} = a$

Let $a_1, a_2 \in A$ such that:

$\map f {\O, a_1} = \map f {\O, a_2}$

Then:














\(\ds \map f {\O, a_1}\)

\(=\)







\(\ds \map f {\O, a_2}\)














\(\ds \leadsto \ \ \)





\(\ds a_1\)

\(=\)







\(\ds a_2\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds \tuple {\O, a_1}\)

\(=\)







\(\ds \tuple {\O, a_2}\)





Equality of Ordered Pairs



Thus $f$ is an injection.

Let $a \in A$.
By definition of $f$:

$a = \map f {\O, a}$
Thus $f$ is a surjection.

So $f$ is both an injection and a surjection, and so by definition a bijection.

Thus a bijection has been established between $\set \O \times A$ and $A$.
It follows by definition that $\set \O \times A$ and $A$ are equivalent.

The result follows by definition of cardinal.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Theorem $8.4: \ (3)$




