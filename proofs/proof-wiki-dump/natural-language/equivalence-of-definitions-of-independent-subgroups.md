# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Independent_Subgroups



Theorem
The following definitions of the concept of Independent Subgroups are equivalent:

Let $G$ be a group whose identity is $e$.
Let $\sequence {H_n}$ be a sequence of independent subgroups of $G$.


Definition 1
The subgroups $H_1, H_2, \ldots, H_n$ are independent if and only if:

$\ds \prod_{k \mathop = 1}^n h_k = e \iff \forall k \in \set {1, 2, \ldots, n}: h_k = e$
where $h_k \in H_k$ for all $k \in \set {1, 2, \ldots, n}$.

Definition 2
The subgroups $H_1, H_2, \ldots, H_n$ are independent if and only if:

$\ds \forall k \in \set {2, 3, \ldots, n}: \paren {\prod_{j \mathop = 1}^{k - 1} H_j} \cap H_k = \set e$


Proof
Definition 1 implies Definition 2
Let $H_1, H_2, \ldots, H_n$ be independent by definition 1:

$\ds \prod_{k \mathop = 1}^n h_k = e \iff \forall k \in \closedint 1 n: h_k = e$
where $h_k \in H_k$ for all $k \in \closedint 1 n$.

Let $\ds u \in \paren {\prod_{j \mathop = 1}^{k - 1} H_j} \cap H_k$.
Then:

$\ds \exists x_1, x_2, \ldots, x_{k - 1} \in H_1, \ldots, H_{k - 1}: u = \prod_{j \mathop = 1}^{k - 1} x_j$
We have that $u \in H_k$ and $H_k$ is a group.
Therefore let $x_k = u^{-1}$, the inverse of $u$.
For each $j \in \set {k + 1, k + 2, \ldots, n}$ let $x_j = e$.
Then:














\(\ds \prod_{j \mathop = 1}^n x_j\)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^{k - 1} x_j} u^{-1} \paren {\prod_{j \mathop = k + 1}^n x_j}\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^{k - 1} x_j} u^{-1}\)




















\(\ds \)

\(=\)







\(\ds e\)










Thus by hypothesis $u^{-1} = e$ and hence $u = e$.
Hence $H_1, H_2, \ldots, H_n$ are independent by definition 2:

$\ds \forall k \in \set {2, 3, \ldots, n}: \paren {\prod_{j \mathop = 1}^{k - 1} H_j} \cap H_k = \set e$


Definition 2 implies Definition 1
Let $H_1, H_2, \ldots, H_n$ be independent by definition 2:

$\ds \forall k \in \set {2, 3, \ldots, n}: \paren {\prod_{j \mathop = 1}^{k - 1} H_j} \cap H_k = \set e$

Aiming for a contradiction, suppose that:

$\ds x_1, x_2, \ldots, x_n \in H_1, H_2, \ldots, H_n: \prod_{i \mathop = 1}^n x_i = e$
but that $x_j \ne e$ for some $j \in \set {1, 2, \ldots, n}$.
There is bound to be more than one of them, because otherwise that would mean:

$\ds \prod_{i \mathop = 1}^n x_i = x_j e = e \implies x_j = e$
So let $m$ be the largest of the $j$ such that $x_j \ne e$.
Then $m > 1$, and:














\(\ds e\)

\(=\)







\(\ds x_1 \cdots x_n\)




















\(\ds \)

\(=\)







\(\ds x_1 \cdots x_m\)




















\(\ds \)

\(=\)







\(\ds \paren {x_1 \cdots x_{m - 1} } x_m\)









Thus:














\(\ds x_m^{-1}\)

\(=\)







\(\ds x_1 \cdots x_{m - 1}\)




















\(\ds \)

\(=\)







\(\ds H_1 \cdots H_{m - 1}\)










So:

$x_m^{-1} \in H_m$
Therefore by hypothesis:

$x_m^{-1} = e$
and therefore:

$x_m = e$

But $m$ was defined to be the largest of the $j$ such that $x_j \ne e$.
Thus by Proof by Contradiction it follows that there can be no such $j$ so that:

$\ds x_1, x_2, \ldots, x_n \in H_1, H_2, \ldots, H_n: \prod_{i \mathop = 1}^n x_i = e$
but that $x_j \ne e$ for some $j \in \set {1, 2, \ldots, n}$.

Hence $H_1, H_2, \ldots, H_n$ are independent by definition 1:

$\ds \prod_{k \mathop = 1}^n h_k = e \iff \forall k \in \closedint 1 n: h_k = e$
where $h_k \in H_k$ for all $k \in \closedint 1 n$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.15$




