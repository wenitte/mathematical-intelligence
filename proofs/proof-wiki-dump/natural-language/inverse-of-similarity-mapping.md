# 

Source: https://proofwiki.org/wiki/Inverse_of_Similarity_Mapping

Theorem
Let $G$ be a vector space over a field $K$.
Let $\beta \in K$ such that $\beta \ne 0$.

Let $s_\beta: G \to G$ be the similarity on $G$ defined as:

$\forall \mathbf x \in G: \map {s_\beta} {\mathbf x} = \beta \mathbf x$
Let $\paren {s_\beta}^{-1}$ denote the inverse of $s_\beta$.

Then:

$\paren {s_\beta}^{-1} = s_{\beta^{-1} }$
where $\beta^{-1}$ is the multiplicative inverse in $K$ of $\beta$.


Proof
From Similarity Mapping is Automorphism, $s_\beta$ is an automorphism of $G$.
Hence $s_\beta$ is an vector space isomorphism from $G$ to $G$ itself.
So by definition $s_\beta$ is a bijection.
Hence the existence of this inverse $\paren {s_\beta}^{-1}$ follows from Bijection iff Left and Right Inverse.

By Field Axiom $\text M4$: Inverses for Product, we have that there exists a multiplicative inverse $\beta^{-1}$ for $\beta$ such that:

$\beta \beta^{-1} = 1_K = \beta^{-1} \beta$
where $1_K$ is the multiplicative identity of $K$.

Then:














\(\ds \map {\paren {s_\beta}^{-1} } {\map {s_\beta} {\beta^{-1} \, \mathbf x} }\)

\(=\)







\(\ds \beta^{-1} \mathbf x\)





Definition of Inverse Mapping








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {s_\beta}^{-1} } {\beta \beta^{-1} \, \mathbf x}\)

\(=\)







\(\ds \beta^{-1} \, \mathbf x\)





Definition of $s_\beta$








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {s_\beta}^{-1} } {1_K \, \mathbf x}\)

\(=\)







\(\ds \beta^{-1} \, \mathbf x\)





Field Axiom $\text M4$: Inverses for Product








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {s_\beta}^{-1} } {\mathbf x}\)

\(=\)







\(\ds \beta^{-1} \, \mathbf x\)





Field Axiom $\text M3$: Identity  for Product








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {s_\beta}^{-1} } {\mathbf x}\)

\(=\)







\(\ds \map {s_{\beta^{-1} } } {\mathbf x}\)





Definition of $s_{\beta^{-1} }$



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Example $28.3$




