# 

Source: https://proofwiki.org/wiki/Product_Rule_for_Divergence



Theorem
Let $\map {\mathbf V} {x_1, x_2, \ldots, x_n}$ be a vector space of $n$ dimensions.
Let $\mathbf A$ be a vector field over $\mathbf V$.
Let $U$ be a scalar field over $\mathbf V$.

Then:

$\map {\operatorname {div} } {U \mathbf A} = \map U {\operatorname {div} \mathbf A} + \mathbf A \cdot \grad U$
where

$\operatorname {div}$ denotes the divergence operator
$\grad$ denotes the gradient operator
$\cdot$ denotes dot product.


Proof
From Divergence Operator on Vector Space is Dot Product of Del Operator and definition of the gradient operator:














\(\ds \operatorname {div} \mathbf V\)

\(=\)







\(\ds \nabla \cdot \mathbf V\)




















\(\ds \grad \mathbf U\)

\(=\)







\(\ds \nabla U\)









where $\nabla$ denotes the del operator.

Hence we are to demonstrate that:

$\nabla \cdot \paren {U \, \mathbf A} = \map U {\nabla \cdot \mathbf A} + \paren {\nabla U} \cdot \mathbf A$

Let $\mathbf A$ be expressed as a vector-valued function on $\mathbf V$:

$\mathbf A := \tuple {\map {A_1} {\mathbf r}, \map {A_2} {\mathbf r}, \ldots, \map {A_n} {\mathbf r} }$
where $\mathbf r = \tuple {x_1, x_2, \ldots, x_n}$ is an arbitrary element of $\mathbf V$.

Let $\tuple {\mathbf e_1, \mathbf e_2, \ldots, \mathbf e_n}$ be the standard ordered basis of $\mathbf V$.

Then:














\(\ds \nabla \cdot \paren {U \mathbf A}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \frac {\map \partial {U A_k} } {\partial x_k}\)





Definition of Divergence Operator














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {U \frac {\partial A_k} {\partial x_k} + \frac {\partial U} {\partial x_k} A_k}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds U \sum_{k \mathop = 1}^n \frac {\partial A_k} {\partial x_k} + \sum_{k \mathop = 1}^n \frac {\partial U} {\partial x_k} A_k\)




















\(\ds \)

\(=\)







\(\ds \map U {\nabla \cdot \mathbf A} + \sum_{k \mathop = 1}^n \frac {\partial U} {\partial x_k} A_k\)





Definition of Divergence Operator














\(\ds \)

\(=\)







\(\ds \map U {\nabla \cdot \mathbf A} + \paren {\sum_{k \mathop = 1}^n \frac {\partial U} {\partial x_k} \mathbf e_k} \cdot \paren {\sum_{k \mathop = 1}^n A_k \mathbf e_k}\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \map U {\nabla \cdot \mathbf A} + \paren {\nabla U} \cdot \mathbf A\)





Definition of Gradient Operator, Definition of Vector



$\blacksquare$


Also presented as
This result can also be presented as:

$\nabla \cdot \paren {U \, \mathbf A} = \map U {\nabla \cdot \mathbf A} + \paren {\nabla U} \cdot \mathbf A$
presupposing the implementations of $\operatorname {div}$ and $\grad$ as operations using the del operator.


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {IV}$: The Operator $\nabla$ and its Uses: $7$. Divergence and Curl of $S \mathbf A$: $(4.13)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Miscellaneous Formulas involving $\nabla$: $22.38$




