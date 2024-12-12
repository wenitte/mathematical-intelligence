# 

Source: https://proofwiki.org/wiki/Dilation_Mapping_on_Topological_Vector_Space_is_Homeomorphism

Theorem
Let $K$ be a topological field.
Let $X$ be a topological vector space over $K$. 
Let $\lambda \in K \setminus \set {0_K}$. 
Let $c_\lambda$ be the dilation by $\lambda$ mapping.

Then $c_\lambda$ is a homeomorphism.


Proof
From Dilation Mapping on Topological Vector Space is Continuous, both $c_{\lambda}$ and $c_{1/\lambda}$ are continuous.
It is therefore sufficient to establish that $c_{1/\lambda}$ is the inverse mapping of $c_\lambda$.
For all $x \in X$, we have:














\(\ds \map {\paren {c_\lambda \circ c_{1/\lambda} } } x\)

\(=\)







\(\ds \lambda \paren {\frac 1 \lambda x}\)




















\(\ds \)

\(=\)







\(\ds x\)









and:














\(\ds \map {\paren {c_{1/\lambda} \circ c_\lambda} } x\)

\(=\)







\(\ds \frac 1 \lambda \paren {\lambda x}\)




















\(\ds \)

\(=\)







\(\ds x\)









So both $c_\lambda \circ c_{1/\lambda}$ and $c_{1/\lambda} \circ c_\lambda$ are the identity mapping for $X$.
So $c_{1/\lambda}$ is the inverse mapping of $c_\lambda$, as required.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.6$: Topological vector spaces




