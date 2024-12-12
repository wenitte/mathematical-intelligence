# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Primitive_Root_of_Unity


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $n \in \Z_{> 0}$ be a strictly positive integer.
Let $F$ be a field.
Let $U_n$ denote the set of all $n$-th roots of unity.

The following definitions of the concept of Primitive Root of Unity are equivalent:

Definition 1
A primitive $n$th root of unity of $F$ is an element $\alpha \in U_n$ such that:

$U_n = \set {1, \alpha, \ldots, \alpha^{n - 1} }$
Definition 2
A primitive $n$th root of unity of $F$ is an element $\alpha \in U_n$ such that:

$\forall m : 0 < m < n : \alpha^m \ne 1$


Proof
Definition 1 implies Definition 2
Let $\alpha \in U_n$ such that:

$U_n = \set{1, \alpha, \alpha^2, \ldots, \alpha^{n-1}}$
By Definition of Power of Field Element:

$\alpha = \alpha^1$
Hence:

$U_n = \set{1, \alpha^1, \alpha^2, \ldots, \alpha^{n-1}}$
By Definition of Explicit Set Definition:

$\forall m \in \N: 0 < m < n : \alpha^m \ne 1$
$\Box$

Definition 2 implies Definition 1
Let $\alpha \in U_n$ such that:

$\forall m \in \N : 0 < m < n: \alpha^m \ne 1$
Since $\alpha$ is a root of unity:

$\alpha \ne 0$

Aiming for a contradiction, suppose:

$\exists m, k \in \N : 0 \le m < k < n : \alpha^k = \alpha^m$
Then:














\(\ds \alpha^{\paren{k - m} }\)

\(=\)







\(\ds \alpha^k \circ \alpha^{-m}\)





Sum of Indices Law for Field














\(\ds \)

\(=\)







\(\ds \alpha^k \circ \paren{\alpha^{m} }^{-1}\)





Negative Index Law for Field














\(\ds \)

\(=\)







\(\ds \dfrac {\alpha^k} {\alpha^m}\)




















\(\ds \)

\(=\)







\(\ds 1\)





as $\alpha^k = \alpha^m$



Since $0 < k-m < n$, this contradicts the hypothesis:

$\forall m \in \N : 0 < m < n: \alpha^m \ne 1$

Hence:

$\forall m, k \in \N: 0 \le m < k < n : \alpha^k \ne \alpha^m$
From Integer Power of Root of Unity is Root of Unity:

$\set{1, \alpha, \alpha^2, \ldots, \alpha^{n-1}} \subseteq U_n$
From Cardinality of Subset of Finite Set:

$n = \card {\set{1, \alpha, \alpha^2, \ldots, \alpha^{n-1}}} \le \card {U_n}$

Consider the polynomial $X^n - 1$ over $F$.
By Definition of Root of Unity and Definition of Root of Polynomial:

$\beta \in F$ is a $n$-th root of unity if and only if $\beta$ is a root of the polynomial $X^n - 1$
From Polynomial over Field has Finitely Many Roots:

The polynomial $X^n - 1$ has at most $n$ roots.
So:

$\card {U_n} \le n$
Hence:

$\card {U_n} = n = \card {\set{1, \alpha, \alpha^2, \ldots, \alpha^{n-1}}}$

From Tests for Finite Set Equality:

$U_n = \set{1, \alpha, \alpha^2, \ldots, \alpha^{n-1}}$
$\blacksquare$





