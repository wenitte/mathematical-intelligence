# 

Source: https://proofwiki.org/wiki/External_Direct_Product_Commutativity/General_Result



Theorem
Let $\ds \struct {S, \circ} = \prod_{k \mathop = 1}^n S_k$ be the external direct product of the algebraic structures $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_n, \circ_n}$.

If $\circ_1, \ldots, \circ_n$ are all commutative, then so is $\circ$.


Proof
Suppose that, for all $k \in \N^*_n$, $\circ_k$ is commutative.
Let $\tuple {s_1, s_2, \ldots, s_n}$ and $\tuple {t_1, t_2, \ldots, t_n}$ be elements of $\struct {S_1, \circ_1} \times \struct {S_2, \circ_2} \times \cdots \times \struct {S_n, \circ_n}$.














\(\ds \tuple {s_1, s_2, \ldots, s_n} \circ \tuple {t_1, t_2, \ldots, t_n}\)

\(=\)







\(\ds \tuple {s_1 \circ_1 t_1, s_2 \circ_2 t_2, \ldots, s_n \circ_n t_n}\)





Definition of Operation Induced by Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {t_1 \circ_1 s_1, t_2 \circ_2 s_2, \ldots, t_n \circ_n s_n}\)





Definition of Commutative Operation














\(\ds \)

\(=\)







\(\ds \tuple {t_1, t_2, \ldots, t_n} \circ \tuple {s_1, s_2, \ldots, s_n}\)





Definition of Operation Induced by Direct Product



Hence the result.
$\blacksquare$


Also see
External Direct Product Associativity
External Direct Product Identity
External Direct Product Inverses


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.10: \ 1^\circ$




