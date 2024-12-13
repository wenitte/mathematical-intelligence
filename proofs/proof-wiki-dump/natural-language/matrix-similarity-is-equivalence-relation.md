# 

Source: https://proofwiki.org/wiki/Matrix_Similarity_is_Equivalence_Relation



Theorem
Matrix similarity is an equivalence relation.


Proof 1
Follows directly from Matrix Equivalence is Equivalence Relation.
$\blacksquare$


Proof 2
Checking in turn each of the criteria for equivalence:


Reflexive
$\mathbf A = \mathbf{I_n}^{-1} \mathbf A \mathbf{I_n}$ trivially, for all order $n$ square matrices $\mathbf A$.
So matrix similarity is reflexive.
$\Box$


Symmetric
Let $\mathbf B = \mathbf P^{-1} \mathbf A \mathbf P$.
As $\mathbf P$ is a priori nonsingular, we have:














\(\ds \mathbf P \mathbf B \mathbf P^{-1}\)

\(=\)







\(\ds \mathbf P \mathbf P^{-1} \mathbf A \mathbf P \mathbf P^{-1}\)




















\(\ds \)

\(=\)







\(\ds \mathbf{I_n} \mathbf A \mathbf{I_n}\)




















\(\ds \)

\(=\)







\(\ds \mathbf A\)









So matrix similarity is symmetric.
$\Box$


Transitive
Let $\mathbf B = \mathbf P_1^{-1} \mathbf A \mathbf P_1$ and $\mathbf C = \mathbf P_2^{-1} \mathbf B \mathbf P_2$.
Then:














\(\ds \mathbf C\)

\(=\)







\(\ds \mathbf P_2^{-1} \mathbf P_1^{-1} \mathbf A \mathbf P_1 \mathbf P_2\)




















\(\ds \)

\(=\)







\(\ds \paren {\mathbf P_1 \mathbf P_2}^{-1} \mathbf A \paren {\mathbf P_1 \mathbf P_2}\)





Inverse of Matrix Product



By Product of Matrices is Nonsingular iff Matrices are Nonsingular, $\paren {\mathbf P_1 \mathbf P_2}$ is nonsingular.
So matrix similarity is transitive.
$\Box$

So, by definition, matrix similarity is an equivalence relation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices




