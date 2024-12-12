# 

Source: https://proofwiki.org/wiki/Determinant_of_Unit_Matrix



Theorem
Let $R$ be a ring with unity whose zero is $0_R$ and whose unity is $1_R$.
The determinant of the unit matrix of order $n$ over $R$ is equal to $1_R$.


Proof
Let $\mathbf I_n$ denote the unit matrix of order $n$ over $R$.

The proof proceeds by induction.
For all $n \in \Z_{\ge 1}$, let $\map P n$ be the proposition:

$\map \det {\mathbf I_n} = 1_R$

By definition of Determinant of Order $1$:

$\begin {vmatrix} a_{1 1} \end {vmatrix} = a_{1 1}$
In this case $a_{1 1} = 1_R$.
Thus $\map P 1$ is seen to hold.


Basis for the Induction













\(\ds \map \det {\mathbf I_2}\)

\(=\)







\(\ds \begin {vmatrix} 1_R & 0_R \\ 0_R & 1_R \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 1_R \cdot 1_R - 0_R \cdot 0_R\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds 1_R\)









Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\map \det {\mathbf I_k} = 1_R$

from which it is to be shown that:

$\map \det {\mathbf I_{k + 1} } = 1_R$


Induction Step
This is the induction step:














\(\ds \mathbf I_{k + 1}\)

\(=\)







\(\ds \begin {bmatrix} 1_R & 0_R \\ 0_R & \mathbf I_n \end {bmatrix}\)





Definition of Unit Matrix








\(\ds \leadsto \ \ \)





\(\ds \map \det {\mathbf I_{k + 1} }\)

\(=\)







\(\ds \begin {vmatrix} 1_R & 0_R \\ 0_R & \mathbf I_n \end {vmatrix}\)





Definition of Determinant of Matrix














\(\ds \)

\(=\)







\(\ds \map \det {\mathbf I_k}\)





Determinant with Unit Element in Otherwise Zero Row














\(\ds \)

\(=\)







\(\ds 1_R\)





Induction Hypothesis



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: \map \det {\mathbf I_n} = 1_R$
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Fact $1.7 \ \text {(d)}$




