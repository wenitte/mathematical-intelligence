# 

Source: https://proofwiki.org/wiki/Internal_Group_Direct_Product_Commutativity/General_Result

Theorem
Let $\struct {G, \circ}$ be the internal group direct product of $H_1, H_2, \ldots, H_n$.
Let $h_i$ and $h_j$ be elements of $H_i$ and $H_j$ respectively, $i \ne j$.

Then $h_i \circ h_j = h_j \circ h_i$.


Proof
Let $g = h_i \circ h_j \circ h_i^{-1} \circ h_j^{-1}$.
From the Internal Direct Product Theorem: General Result, $H_i$ and $H_j$ are normal in $G$.
Hence $h_i \circ h_j \circ h_i^{-1} \in H_j$ and thus $g \in H_j$.
Similarly, $g \in H_i$ and thus $g \in H_i \cap H_j$.

But:














\(\ds H_i \cap H_j\)

\(=\)







\(\ds \set e\)














\(\ds \leadsto \ \ \)





\(\ds g\)

\(=\)







\(\ds h_i \circ h_j \circ h_i^{-1} \circ h_j^{-1}\)




















\(\ds \)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds h_i \circ h_j \circ h_i^{-1}\)

\(=\)







\(\ds h_j\)














\(\ds \leadsto \ \ \)





\(\ds h_i \circ h_j\)

\(=\)







\(\ds h_j \circ h_i\)









$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Corollary $13.6$




