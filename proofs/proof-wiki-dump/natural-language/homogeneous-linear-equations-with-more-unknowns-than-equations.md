# 

Source: https://proofwiki.org/wiki/Homogeneous_Linear_Equations_with_More_Unknowns_than_Equations

Theorem
Let $\alpha_{ij}$ be elements of a field $F$, where $1 \le i \le m, 1 \le j \le n$.
Let $n > m$.
Then there exist $x_1, x_2, \ldots, x_n \in F$ not all zero, such that:

$\ds \forall i: 1 \le i \le m: \sum_{j \mathop = 1}^n \alpha_{ij} x_j = 0$

Alternatively, this can be expressed as:
If $n > m$, the following system of homogeneous linear equations:














\(\ds 0\)

\(=\)







\(\ds \alpha_{11} x_1 + \alpha_{12} x_2 + \cdots + \alpha_{1n} x_n\)




















\(\ds 0\)

\(=\)







\(\ds \alpha_{21} x_1 + \alpha_{22} x_2 + \cdots + \alpha_{2n} x_n\)




















\(\ds \)

\(\cdots\)







\(\ds \)




















\(\ds 0\)

\(=\)







\(\ds \alpha_{m1} x_1 + \alpha_{m2} x_2 + \cdots + \alpha_{mn} x_n\)









has at least one solution such that not all of $x_1, \ldots, x_n$ is zero.


Proof
Consider these vectors for $1 \le k \le n$:

$\mathbf a_k = \tuple {\alpha_{1k}, \alpha_{2k}, \dots, \alpha_{mk}} \in F^m$
Since $n > m$, by Cardinality of Linearly Independent Set is No Greater than Dimension, $\set {\mathbf a_1, \mathbf a_2, \dots, \mathbf a_n}$ is linearly dependent.
By definition of linearly dependent:

$\ds \exists \set {\lambda_k: 1 \le k \le n} \subseteq F: \sum_{k \mathop = 1}^n \lambda_k \mathbf a_k = \mathbf 0$
where at least one of $\lambda_k$ is not equal to $0$.
The system of homogeneous linear equations above can be written as:

$\ds \sum_{k \mathop = 1}^n x_k \mathbf a_k = \mathbf 0$
The result follows from taking $x_k = \lambda_k$.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 4$. Vector Spaces




