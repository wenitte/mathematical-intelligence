# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Identity/General_Result



Theorem
Let $\ds \struct {\SS, \circ} = \prod_{k \mathop = 1}^n S_k$ be the external direct product of the algebraic structures $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_n, \circ_n}$.

Let $e_1, e_2, \ldots, e_n$ be the identity elements of $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_n, \circ_n}$ respectively.
Then $\tuple {e_1, e_2, \ldots, e_n}$ is the identity element of $\struct {\SS, \circ}$.


Proof
Let $s := \tuple {s_1, s_2, \ldots, s_n}$ be an arbitrary element of $\struct {S_1, \circ_1} \times \struct {S_2, \circ_2} \times \cdots \times \struct {S_n, \circ_n}$.
Let $e := \tuple {e_1, e_2, \ldots, e_n}$.
Then:














\(\ds s \circ e\)

\(=\)







\(\ds \tuple {s_1, s_2, \ldots, s_n} \circ \tuple {e_1, e_2, \ldots, e_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {s_1 \circ_1 e_1, s_2 \circ_2 e_2, \ldots, s_n \circ_n e_n}\)





Definition of External Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {s_1, s_2, \ldots, s_n}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds s\)





Definition of $s$



and:














\(\ds e \circ s\)

\(=\)







\(\ds \tuple {e_1, e_2, \ldots, e_n} \circ \tuple {s_1, s_2, \ldots, s_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {e_1 \circ_1 s_1, e_2 \circ_2 s_2, \ldots, e_n \circ_n s_n}\)





Definition of External Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {s_1, s_2, \ldots, s_n}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds s\)





Definition of $s$



$\blacksquare$


Also see
External Direct Product Associativity
External Direct Product Commutativity
External Direct Product Inverses


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.10: \ 2^\circ$




