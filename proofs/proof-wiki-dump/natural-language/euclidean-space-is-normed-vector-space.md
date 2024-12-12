# 

Source: https://proofwiki.org/wiki/Euclidean_Space_is_Normed_Vector_Space



Theorem
The Euclidean space $\R^n$ is a normed vector space.


Proof
Let $\norm {\, \cdot \,}$ denote the Euclidean norm on $\R^n$.
We prove that $\norm {\, \cdot \,}$ is indeed a norm on $\R^n$ by proving it fulfils the norm axioms.


Norm Axiom $\text N 1$: Positive Definiteness
As $\mathbf 0 = \tuple {0, \ldots, 0}$, it follows that:

$\norm {\mathbf 0} = \sqrt {0^2 + \ldots + 0^2} = 0$

Suppose instead that $\norm {\mathbf v} = 0$ for some $\mathbf v = \tuple {v_1, \ldots, v_n}$ with $v_1, \ldots, v_n \in \R$.
As $\ds \sqrt {\sum_{i \mathop = 1}^n v_n^2 } = 0$, it follows from squaring both sides that:

$\ds \sum_{i \mathop = 1}^n v_n^2 = 0$
From Even Power is Non-Negative, it follows that for all $i$: $v_i = 0$.
Hence $\mathbf v = \mathbf 0$.
Thus Norm Axiom $\text N 1$: Positive Definiteness holds
$\Box$


Norm Axiom $\text N 2$: Positive Homogeneity
Let $\mathbf v = \tuple {v_1, \ldots, v_n} \in \R^n$ with $v_1, \ldots, v_n \in \R$.
Let $r \in \R$.
Then:














\(\ds \norm { r \mathbf v }\)

\(=\)







\(\ds \sqrt {\sum_{i \mathop = 1}^n \paren { r v_i }^2 }\)





Definition of Euclidean Norm














\(\ds \)

\(=\)







\(\ds \sqrt {\sum_{i \mathop = 1}^n \paren { r^2 v_i^2 } }\)





Power of Product














\(\ds \)

\(=\)







\(\ds \sqrt{ r^2 \sum_{i \mathop = 1}^n v_i^2 }\)




















\(\ds \)

\(=\)







\(\ds \sqrt{ r^2 } \sqrt{ \sum_{i \mathop = 1}^n v_i^2 }\)





Power of Product














\(\ds \)

\(=\)







\(\ds \size r \norm { \mathbf v }\)









Thus Norm Axiom $\text N 2$: Positive Homogeneity holds.
$\Box$


Norm Axiom $\text N 3$: Triangle Inequality
Follows from Triangle Inequality for Vectors in Euclidean Space.
Thus Norm Axiom $\text N 3$: Triangle Inequality holds.
$\blacksquare$


Sources
1965: Michael Spivak: Calculus on Manifolds ... (previous) ... (next): 1. Functions on Euclidean Space: Norm and Inner Product




