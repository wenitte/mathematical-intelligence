# 

Source: https://proofwiki.org/wiki/Null_Space_Contains_Only_Zero_Vector_iff_Columns_are_Independent


This article is complete as far as it goes, but it could do with expansion.In particular: This should be more abstract than just being in $\R^n$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let:














\(\ds \mathbf A_{m \times n}\)

\(=\)







\(\ds \begin{bmatrix} \mathbf a_1 & \mathbf a_2 & \cdots & \mathbf a_n \end{bmatrix}\)









be a matrix where:

$\forall i: 1 \le i \le n: \mathbf a_i = \begin{bmatrix} a_{1i} \\ a_{2i} \\ \vdots \\ a_{mi} \end{bmatrix} \in \R^m$
are vectors.
Then:

$\set {\mathbf a_1, \mathbf a_2, \cdots, \mathbf a_n}$ is a linearly independent set
if and only if:

$\map {\mathrm N} {\mathbf A} = \set {\mathbf 0_{n \times 1} }$
where $\map {\mathrm N} {\mathbf A}$ is the null space of $\mathbf A$.


Proof
Let $\mathbf x = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix} \in \R^m$.

We have that:














\(\ds \mathbf x\)

\(\in\)







\(\ds \map {\mathrm N} {\mathbf A}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \mathbf A \mathbf x_{n \times 1}\)

\(=\)







\(\ds \mathbf 0_{m \times 1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \begin{bmatrix} \mathbf a_1 & \mathbf a_2 & \cdots & \mathbf a_n \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}\)

\(=\)







\(\ds \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{bmatrix}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \sum_{k \mathop = 1}^n x_k \mathbf a_k\)

\(=\)







\(\ds \mathbf 0\)











Sufficient Condition
Let $\set {\mathbf a_1, \mathbf a_2, \cdots, \mathbf a_n}$ be linearly independent.
Then by definition:

$\forall k: 1 \le k \le n: x_k = 0 \iff \mathbf x = \mathbf 0_{n \times 1}$
By the definition of null space:

$\map {\mathrm N} {\mathbf A} = \set {\mathbf 0_{n \times 1} }$
$\Box$


Necessary Condition
Let $\map {\mathrm N} {\mathbf A} = \set {\mathbf 0_{n \times 1} }$.
Then by the definition of null space:

$\mathbf x = \mathbf 0_{n \times 1}$
This means that:

$\forall k: 1 \le k \le n: x_k = 0$
from which it follows that $\set {\mathbf a_1, \mathbf a_2, \cdots, \mathbf a_n}$ is linearly independent.
$\blacksquare$


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




