# 

Source: https://proofwiki.org/wiki/Coset_Product_is_Well-Defined/Proof_3

Theorem
Let $\struct {G, \circ}$ be a group.
Let $N$ be a normal subgroup of $G$.
Let $a, b \in G$.

Then the coset product:

$\paren {a \circ N} \circ \paren {b \circ N} = \paren {a \circ b} \circ N$
is well-defined.


Proof
Let $N \lhd G$ where $G$ is a group.

Let $a, a', b, b' \in G$ such that:

$N \circ a = N \circ a'$
and:

$N \circ b = N \circ b'$
We need to show that:

$N \circ \paren {a \circ b} = N \circ \paren {a' \circ b'}$

So:














\(\ds N \circ \paren {a \circ b}\)

\(=\)







\(\ds \paren {N \circ a} \circ b\)





Subset Product within Semigroup is Associative: Corollary














\(\ds \)

\(=\)







\(\ds \paren {N \circ a'} \circ b\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {a' \circ N} \circ b\)





Definition of Normal Subgroup














\(\ds \)

\(=\)







\(\ds a' \circ \paren {N \circ b}\)





Subset Product within Semigroup is Associative: Corollary














\(\ds \)

\(=\)







\(\ds a' \circ \paren {N \circ b'}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {a' \circ N} \circ b'\)





Subset Product within Semigroup is Associative: Corollary














\(\ds \)

\(=\)







\(\ds \paren {N \circ a'} \circ b'\)





Definition of Normal Subgroup














\(\ds \)

\(=\)







\(\ds N \circ \paren {a' \circ b'}\)





Subset Product within Semigroup is Associative: Corollary



$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.7$. Quotient groups




