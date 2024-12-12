# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Inverses/General_Result



Theorem
Let $\ds \struct {\SS, \circ} = \prod_{k \mathop = 1}^n S_k$ be the external direct product of the algebraic structures $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_n, \circ_n}$.
Let $\tuple {x_1, x_2, \ldots, x_n} \in S$.

Let $y_k$ be an inverse of $x_k$ in $\struct {S_k, \circ_k}$ for each of $k \in \N^*_n$.
Then $\tuple {y_1, y_2, \ldots, y_n}$ is the inverse of $\tuple {x_1, x_2, \ldots, x_n} \in \SS$ in $\struct {\SS, \circ}$.


Proof
Let $e_1, e_2, \ldots, e_n$ be the identity elements of $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_n, \circ_n}$ respectively.
Let $x := \tuple {x_1, x_2, \ldots, x_n}$.
Let $y := \tuple {x_1, x_2, \ldots, x_n}$.
From External Direct Product Identity, $e := \tuple {e_1, e_2, \ldots, e_n}$ is the identity element of $\SS$.
Then:














\(\ds x \circ y\)

\(=\)







\(\ds \tuple {x_1, x_2, \ldots, x_n} \circ \tuple {y_1, y_2, \ldots, y_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {x_1 \circ_1 y_1, x_2 \circ_2 y_2, \ldots, x_n \circ_n y_n}\)





Definition of External Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {e_1, e_2, \ldots, e_n}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds e\)





External Direct Product Identity




and:














\(\ds y \circ x\)

\(=\)







\(\ds \tuple {y_1, y_2, \ldots, y_n} \circ \tuple {x_1, x_2, \ldots, x_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {y_1 \circ_1 x_1, y_2 \circ_2 x_2, \ldots, y_n \circ_n x_n}\)





Definition of External Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {e_1, e_2, \ldots, e_n}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds e\)





External Direct Product Identity



$\blacksquare$


Also see
External Direct Product Associativity
External Direct Product Commutativity
External Direct Product Identity


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.10: \ 3^\circ$




