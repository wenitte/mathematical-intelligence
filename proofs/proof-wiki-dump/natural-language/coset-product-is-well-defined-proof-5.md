# 

Source: https://proofwiki.org/wiki/Coset_Product_is_Well-Defined/Proof_5

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





\(\ds a\)

\(\in\)







\(\ds a' \circ N\)





Definition of Left Coset








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds a' \circ n_1\)





for some $n_1 \in N$




Similarly, $b' = b \circ n_2$ for some $n_2 \in N$.






\(\ds \leadsto \ \ \)





\(\ds a' \circ b'\)

\(=\)







\(\ds a \circ n_1 \circ b \circ n_2\)










But $N \circ b = b \circ N$, as $N$ is normal, and so:






\(\ds \leadsto \ \ \)





\(\ds a' \circ b'\)

\(=\)







\(\ds a \circ b \circ n_3 \circ n_2\)





as $n_1 \circ b = b \circ n_3$ for some $n_3 \in N$








\(\ds \leadsto \ \ \)





\(\ds a' \circ b'\)

\(\in\)







\(\ds \paren{ a \circ b } \circ N\)





as $n_3 \circ n_2 \in N$








\(\ds \leadsto \ \ \)





\(\ds \paren{ a' \circ b' } \circ N\)

\(=\)







\(\ds \paren{ a \circ b }\circ N\)





Definition of Left Coset



$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$




