# 

Source: https://proofwiki.org/wiki/Continuous_Linear_Operator_over_Finite_Dimensional_Vector_Space_is_Invertible

Theorem
Let $\struct {X, \norm {\, \cdot\,}_X}$ be a normed vector space.
Let $\map {CL} X := \map {CL} {X, X}$ be a continuous linear transformation space.
Let $I \in \map {CL} X$ be the identity element.
Let $S, T \in \map {CL} X$.
Suppose the dimension of $X$ is finite:

$d = \dim X < \infty$
Suppose $T \circ S = I$ where $\circ$ denotes the composition of mappings.

Then $T$ and $S$ are invertible.


Proof
Let $x \in X$.
Then:














\(\ds \map {\paren {T \circ S} } x\)

\(=\)







\(\ds \map I x\)














\(\ds \leadsto \ \ \)





\(\ds \map T {\map {S} x}\)

\(=\)







\(\ds x\)









Let $\mathbf 0 \in X$ be the zero vector of $X$.
Suppose $\map S x = \mathbf 0$.
Then:














\(\ds \map T {\map S x}\)

\(=\)







\(\ds \map T {\mathbf 0}\)




















\(\ds \)

\(=\)







\(\ds \mathbf 0\)





Linear Transformation Maps Zero Vector to Zero Vector














\(\ds \)

\(=\)







\(\ds x\)









Hence:

$\paren {\map S x = \mathbf 0} \implies \paren{x = \mathbf 0} \paren \star$
In other words:

$\map \ker S = \set {\mathbf 0}$
where $\ker$ denotes the kernel.

Let $\set {v_1, \ldots v_d}$ be the basis for $X$.
Suppose $\forall k \in \N_{> 0} : k \le d : \alpha_k \in \mathbb F$ are scalars such that:

$\ds \sum_{k \mathop = 1}^d \alpha_k \map S {v_k} = \mathbf 0$
where $\mathbb F$ is a number field.
By definition of linear transformation on vector space:

$\ds \map S {\sum_{k \mathop = 1}^d \alpha_k v_k} = \mathbf 0$
By Eq. $\paren \star$:

$\ds \sum_{k \mathop = 1}^d \alpha_k v_k = \mathbf 0$
Since $\set {v_1, \ldots v_d}$ was arbitrary, we have that:

$\forall k \in \N_{> 0} : k \le d : \alpha_k = 0$
By definition of linearly independent sequence of vectors, $\set {\map S {v_1}, \ldots \map S {v_d} }$ is a basis for $X$.
Therefore:

$\ds \forall x \in X : \forall k \in \N_{> 0} : k \le d : \exists \beta_k \in \mathbb F : x = \sum_{k \mathop = 1}^d \beta_k \map S {v_k}$
Thus:










\(\ds \forall x \in X: \, \)



\(\ds \map S {\map T x}\)

\(=\)







\(\ds \map S {\map T {\sum_{k \mathop = 1}^d \beta_k \map S {v_k} } }\)




















\(\ds \)

\(=\)







\(\ds \map S {\map T {\map S {\sum_{k \mathop = 1}^d \beta_k v_k} } }\)





Definition of Linear Transformation on Vector Space














\(\ds \)

\(=\)







\(\ds \map S {\map I {\sum_{k \mathop = 1}^d \beta_k v_k} }\)





$\map {\paren {T \circ S} } x = \map I x$














\(\ds \)

\(=\)







\(\ds \map S {\sum_{k \mathop = 1}^d \beta_k v_k}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds x\)









All in all:

$\paren {T \circ S = I} \implies \paren {T \circ S = S \circ T = I}$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




