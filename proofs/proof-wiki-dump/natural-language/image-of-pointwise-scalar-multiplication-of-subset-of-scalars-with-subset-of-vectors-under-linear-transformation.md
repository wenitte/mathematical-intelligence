# 

Source: https://proofwiki.org/wiki/Image_of_Pointwise_Scalar_Multiplication_of_Subset_of_Scalars_with_Subset_of_Vectors_under_Linear_Transformation

Theorem
Let $K$ be a field.
Let $X$ and $Y$ be vector spaces over $K$.
Let $T : X \to Y$ be a linear transformation. 
Let $S \subseteq K$ and $D \subseteq X$ be non-empty sets.

Then:

$T \sqbrk {S D} = S T \sqbrk D$
where:

$S D = \set {\lambda x : \lambda \in S, \, x \in D}$


Proof
We have: 














\(\ds T \sqbrk {S D}\)

\(=\)







\(\ds T \sqbrk {\bigcup_{s \mathop \in S} s D}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{s \mathop \in S} T \sqbrk {s D}\)





Image of Union under Mapping














\(\ds \)

\(=\)







\(\ds \bigcup_{s \mathop \in S} s T \sqbrk D\)





Image of Dilation of Set under Linear Transformation is Dilation of Image














\(\ds \)

\(=\)







\(\ds S T \sqbrk D\)









$\blacksquare$





