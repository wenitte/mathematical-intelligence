# 

Source: https://proofwiki.org/wiki/Coset_Product_is_Well-Defined/Proof_1

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

$a \circ N = a' \circ N$
and:

$b \circ N = b' \circ N$
To show that the coset product is well-defined, we need to demonstrate that:

$\paren {a \circ b} \circ N = \paren {a' \circ b'} \circ N$
So:














\(\ds a \circ N\)

\(=\)







\(\ds a' \circ N\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds a^{-1} \circ a'\)

\(\in\)







\(\ds N\)





Cosets are Equal iff Product with Inverse in Subgroup








\(\ds \leadsto \ \ \)





\(\ds b^{-1} \circ a^{-1} \circ a'\)

\(\in\)







\(\ds b^{-1} \circ N\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds b^{-1} \circ a^{-1} \circ a'\)

\(\in\)







\(\ds N \circ b^{-1}\)





$N$ is a normal subgroup








\(\ds \leadsto \ \ \)

\(\ds \exists n \in N: \, \)



\(\ds b^{-1} \circ a^{-1} \circ a'\)

\(=\)







\(\ds n \circ b^{-1}\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds \paren{b^{-1} \circ a^{-1} \circ a' } \circ b'\)

\(=\)







\(\ds \paren{n \circ b^{-1} } \circ b'\)





Group Axiom $\text G 0$: Closure








\(\ds \leadsto \ \ \)





\(\ds \paren{b^{-1} \circ a^{-1} } \circ \paren {a' \circ b'}\)

\(=\)







\(\ds \paren{n \circ b^{-1} } \circ b'\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b}^{-1} \circ \paren {a' \circ b'}\)

\(=\)







\(\ds \paren{n \circ b^{-1} } \circ b'\)





Inverse of Group Product








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b}^{-1} \circ \paren {a' \circ b'}\)

\(=\)







\(\ds n \circ \paren{ b^{-1} \circ b' }\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b}^{-1} \circ \paren {a' \circ b'}\)

\(\in\)







\(\ds N\)





Definition of Subset Product




By Cosets are Equal iff Product with Inverse in Subgroup:

$\paren {a \circ b}^{-1} \circ \paren {a' \circ b'} \in N \implies \paren {a \circ b} \circ N = \paren {a' \circ b'} \circ N$
and the proof is complete.
$\blacksquare$





