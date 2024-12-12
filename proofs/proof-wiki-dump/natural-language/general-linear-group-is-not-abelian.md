# 

Source: https://proofwiki.org/wiki/General_Linear_Group_is_not_Abelian



Theorem
Let $K$ be a field whose zero is $0_K$ and unity is $1_K$.
Let $\GL {n, K}$ be the general linear group of order $n$ over $K$.

Then $\GL {n, K}$ is not an abelian group.


Proof 1
From Special Linear Group is Subgroup of General Linear Group we have that the special linear group $\SL {n, K}$ is a subgroup of $\GL {n, K}$.
From Special Linear Group is not Abelian, $\SL {n, K}$ is not abelian.
From Subgroup of Abelian Group is Abelian it follows by the Rule of Transposition that $\GL {n, K}$ is not abelian.
$\blacksquare$


Proof 2
Let:














\(\ds A\)

\(=\)







\(\ds \begin {pmatrix} 1 & 1 \\ 0 & 1 \end {pmatrix}\)




















\(\ds B\)

\(=\)







\(\ds \begin {pmatrix} 1 & 1 \\ 1 & 1 \end {pmatrix}\)









Both $A$ and $B$ are elements of the general linear group.

Then:














\(\ds A B\)

\(=\)







\(\ds \begin {pmatrix} 1 & 1 \\ 0 & 1 \end {pmatrix} \begin {pmatrix} 1 & 1 \\ 1 & 1 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 2 & 2 \\ 1 & 1 \end {pmatrix}\)




















\(\ds B A\)

\(=\)







\(\ds \begin {pmatrix} 1 & 1 \\ 1 & 1 \end {pmatrix} \begin {pmatrix} 1 & 1 \\ 0 & 1 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 2 & 1 \\ 2 & 1 \end {pmatrix}\)














\(\ds \leadsto \ \ \)





\(\ds AB\)

\(\ne\)







\(\ds BA\)









and it follows by definition that the general linear group is not abelian.
$\blacksquare$


Sources
1974: Robert Gilmore: Lie Groups, Lie Algebras and Some of their Applications ... (previous) ... (next): Chapter $1$: Introductory Concepts: $1$. Basic Building Blocks: $2$. GROUP




