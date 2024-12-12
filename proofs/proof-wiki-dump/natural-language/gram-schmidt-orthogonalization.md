# 

Source: https://proofwiki.org/wiki/Gram-Schmidt_Orthogonalization



Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space over $\R$ or $\C$.
Let $S = \set {v_n: n \in \N_{>0} }$ be a linearly independent subset of $V$. 

Then there exists an orthonormal subset $E = \set {e_n: n \in \N_{>0} }$ of $V$ such that:

$\forall k \in \N: \span \set {v_1 , \ldots , v_k} = \span \set {e_1 , \ldots ,e_k}$
where $\span$ denotes linear span.


Corollary 1
The theorem also holds for finite sets $S$:

Let $m \in \N_{>0}$ be a natural number.
Let $S = \set {v_n: n \le m}$ be a finite linearly independent subset of $V$. 

Then there exists an orthonormal subset $E = \set {e_n: n \le m}$ of $V$ such that:

$\forall k \le m: \span \set {v_1, \ldots, v_k} = \span \set {e_1, \ldots, e_k}$
where $\span$ denotes linear span.


Corollary 2
Let $\struct {V, \innerprod \cdot \cdot}$ be an $n$-dimensional inner product space over $\R$ or $\C$.
Let $\tuple {v_1, \ldots, v_n}$ be any ordered basis for $V$.

Then there is an orthonormal ordered basis $\tuple {b_1, \ldots, b_n}$ satisfying the following conditions:

$\forall k \in \set {1, \ldots, n} : \span \set {v_1, \ldots v_k} = \span \set {b_1, \ldots, b_k} $


Proof
For all $k \in \N_{>0}$, define $u_k , e_k \in V$ inductively as:














\(\ds u_k\)

\(:=\)







\(\ds \ds v_k - \sum_{i \mathop= 1}^{k-1} \innerprod {v_k}{e_i} e_i\)




















\(\ds e_k\)

\(:=\)







\(\ds \dfrac {1}{\norm {u_k} } u_k\)









where $\norm \cdot$ denotes the inner product norm on $V$.
We prove the theorem by induction for $k \in \N_{>0}$.


Basis for the Induction
For $k = 1$, the sum in the definition of $u_1$ is empty, so $u_1 = v_1$.
Let $\bszero$ denote the zero vector of $V$, which by definition is the identity of $V$.
From Subset of Module Containing Identity is Linearly Dependent, it follows that $\bszero \notin E$, so $v_1 \ne \bszero$.
By Norm Axiom $\text N 1$: Positive Definiteness, it follows that $\norm {v_1} \ne 0$.
It follows that $e_1 = \dfrac {1}{\norm {u_1} } u_1$ is well-defined.
By Norm Axiom $\text N 2$: Positive Homogeneity, it follows that:

$\norm {e_1} = \dfrac {1}{\norm {u_1} } \norm {u_1} = 1$.

Hence, $\set {e_1}$ is an orthonormal subset of $V$.
From Singleton is Linearly Independent, it follows that $\set {e_1}$ is a linear independent set.
From Sufficient Conditions for Basis of Finite Dimensional Vector Space, it follows that $\set {e_1}$ is a basis for $\span \set {e_1}$.
By definition of dimension of vector space, it follows that:

$\dim \span \set {e_1} = \dim \span \set {v_1} = 1$

As $e_1 \in \span \set {v_1}$, it follows that $\span \set {e_1} \subseteq \span \set {v_1}$.
From Sufficient Conditions for Basis of Finite Dimensional Vector Space, it follows that $\set {e_1}$ is also a basis for $\span \set {v_1}$.
By definition of basis, it follows that:

$\span \set {e_1} = \span \set {v_1}$
This is the basis for the induction.


Induction Hypothesis
Suppose for $k \in \N_{>1}$ that the set $\set {e_1, e_2, \ldots, e_{k - 1} }$ is an orthonormal subset of $V$ such that:

$\span \set {v_1, v_2, \ldots, v_{k - 1} } = \span \set {e_1, e_2, \ldots, e_{k - 1} }$
This is our induction hypothesis.

Assuming the hypothesis, we need to show that $\set {e_1, e_2, \ldots, e_k}$ is an orthonormal subset of $V$ such that:

$\span \set {v_1, v_2, \ldots, v_k} = \span \set {e_1, e_2, \ldots, e_k}$


Induction step
By the induction hypothesis, it follows that $\norm {e_i} = 1$ for all $i < k$.
By the same hypothesis, $e_i \in \span \set {v_1, \ldots, v_{k - 1} }$.
By definition of linear span, it follows that $\ds \sum_{i \mathop = 1}^{k - 1} \innerprod {v_k} {e_i} e_i$ can be written as a linear combination of $v_1, \ldots, v_{k - 1}$.
As $\set {v_1, \ldots, v_k}$ is linearly independent, it follows that $v_k \ne \ds \sum_{i \mathop = 1}^{k - 1} \innerprod {v_k} {e_i} e_i$.
By definition of $u_k$, it follows that $u_k \ne \bszero$.
It follows that $e_k = \dfrac 1 {\norm {u_k} } u_k$ is well-defined.
By Norm Axiom $\text N 2$: Positive Homogeneity, it follows that:

$\norm {e_k} = \dfrac 1 {\norm {u_k} } \norm {u_k} = 1$

By the induction hypothesis, it follows that:

$\innerprod {e_{n_1} }{e_{n_2} } = 0$
for all $n_1, n_2 < k$ with $n_1 \ne n_2$.
For $n < k$, it follows that:














\(\ds \innerprod {e_k} {e_n}\)

\(=\)







\(\ds \dfrac 1 {\norm {u_k} } \innerprod {u_k} {e_n}\)





Inner Product Axiom $\text N 2$: Linearity in first argument














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\norm {u_k} } \innerprod {v_k - \sum_{i \mathop= 1}^{k - 1} \innerprod {v_k} {e_i} e_i} {e_n}\)





definition of $u_k$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\norm {u_k} } \paren {\innerprod {v_k} {e_n} - \sum_{i \mathop = 1}^{k - 1} \innerprod {v_k} {e_i} \innerprod {e_i} {e_n} }\)





Inner Product Axiom $\text N 2$: Linearity in first argument














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\norm {u_k} } \paren {\innerprod {v_k} {e_n} - \innerprod {v_k} {e_n} }\)





Definition of Orthonormal Subset, as $\innerprod {e_i} {e_n} = 0$ for $n \ne i$, and $\innerprod {e_i} {e_n} = 1$ for $n = i$














\(\ds \)

\(=\)







\(\ds 0\)










It follows that $\set {e_1, \ldots, e_k}$ is an orthonormal subset.
From Orthogonal Set is Linearly Independent Set, it follows that $\set {e_1, \ldots, e_k}$ is a linear independent set.
From Sufficient Conditions for Basis of Finite Dimensional Vector Space, it follows that $\set {e_1, \ldots, e_k}$ is a basis for $\span \set {e_1, \ldots, e_k}$.
By definition of dimension of vector space, it follows that:

$\dim \span \set {e_1, \ldots, e_k} = \dim \span \set {v_1, \ldots, v_k} = k$

By the induction hypothesis, it follows that:

$\set {e_1, \ldots, e_{k -1} } \subseteq \span \set {v_1, \ldots, v_k}$
As $e_k \in \span \set {v_1, \ldots, v_k}$, it follows that:

$\span \set {e_1, \ldots, e_k} \subseteq \span \set {v_1, \ldots, v_k}$
From Sufficient Conditions for Basis of Finite Dimensional Vector Space, it follows that $\set {e_1, \ldots, e_k}$ is also a basis for $\span \set {v_1, \ldots, v_k}$.
By definition of basis, it follows that:

$\span \set {e_1, \ldots, e_k} = \span \set {v_1, \ldots, v_k}$

It follows by induction that for all $k \in \N_{>0}$, the set $\set {e_1 , \ldots ,e_k}$ is an orthonormal subset of $V$ such that:

$\span \set {e_1, \ldots, e_k} = \span \set {v_1, \ldots, v_k}$
$\Box$

For all $k_1 , k_2 \in \N_{>0}$, we have shown that $\set {e_1, \ldots, e_{\max \set {k_1, k_2} } }$ is an orthonormal subset of $V$.
It follows that:

$\innerprod {e_{k_1} } {e_{k_2} } = 1$ if $k_1 = k_2$
or:

$\innerprod {e_{k_1} }{e_{k_2} } = 0$ if $k_1 \ne k_2$.
It follows that $E$ itself is an orthonormal subset of $V$.
$\blacksquare$


Also known as
Gram-Schmidt Orthogonalization is known in some texts as Gram-Schmidt Orthonormalization.
Some texts refer to this theorem as the Gram-Schmidt Orthogonalization Process, or just the Gram-Schmidt Process.
Some others use the term Gram-Schmidt Method.


Also see
Definition:QR Factorization


Source of Name
This entry was named for Jørgen Pedersen Gram and Erhard Schmidt.


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 4.$ Orthonormal Sets of Vectors and Bases: $4.6$ The Gram-Schmidt Orthogonalization Process
1994: Robert Messer: Linear Algebra: Gateway to Mathematics: $\S 4.4$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Gram-Schmidt method
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Gram-Schmidt method




