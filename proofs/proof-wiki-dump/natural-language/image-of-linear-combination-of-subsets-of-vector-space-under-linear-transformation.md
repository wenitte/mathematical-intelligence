# 

Source: https://proofwiki.org/wiki/Image_of_Linear_Combination_of_Subsets_of_Vector_Space_under_Linear_Transformation

Theorem
Let $K$ be a field.
Let $X$ and $Y$ be vector spaces over $K$.
Let $T : X \to Y$ be a linear transformation.
Let $\lambda, \mu \in K$.
Let $A, B \subseteq X$.

Then:

$T \sqbrk {\lambda A + \mu B} = \lambda T \sqbrk A + \mu T \sqbrk B$


Proof
We have: 














\(\ds T \sqbrk {\bigcup_{x \in A} \paren {\lambda x + \mu B} }\)

\(=\)







\(\ds \bigcup_{x \in A} T \sqbrk {\lambda x + \mu B}\)





Image of Union under Mapping














\(\ds \)

\(=\)







\(\ds \bigcup_{x \in A} \paren {\lambda T x + T \sqbrk {\mu B} }\)





Image of Translation of Set under Linear Transformation is Translation of Image














\(\ds \)

\(=\)







\(\ds \bigcup_{x \in A} \paren {\lambda T x} + T \sqbrk {\mu B}\)





Translation of Union of Subsets of Vector Space














\(\ds \)

\(=\)







\(\ds \lambda \bigcup_{x \in A} \paren {T x} + T \sqbrk {\mu B}\)





Image of Dilation of Set under Linear Transformation is Dilation of Image














\(\ds \)

\(=\)







\(\ds \lambda T \sqbrk {\bigcup_{x \in A} x} + T \sqbrk {\mu B}\)





Image of Union under Mapping














\(\ds \)

\(=\)







\(\ds \lambda T \sqbrk A + T \sqbrk {\mu B}\)




















\(\ds \)

\(=\)







\(\ds \lambda T \sqbrk A + \mu T \sqbrk B\)





Image of Dilation of Set under Linear Transformation is Dilation of Image



$\blacksquare$





