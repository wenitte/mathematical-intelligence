# 

Source: https://proofwiki.org/wiki/P-Sequence_Space_admits_Schauder_Basis



Theorem
Let $1 \le p < \infty$.
Let $\ell^p$ be the $p$-sequence space.
Let $\sequence {\mathbf e_n}_{n \mathop \in \N } \in \ell^p$ be a sequence such that:

$\mathbf e_n = \tuple {\underbrace{0, \ldots, 0}_n, 1, 0, \ldots}$

Then $\set {\mathbf e_n : n \in \N}$ is a Schauder basis for $\ell^p$.


Proof
Let $\mathbf x = \sequence {x_n}_{n \mathop \in \N} = \tuple {x_1, x_2, x_3, \ldots} \in \ell^p$.


$\sequence {x_n}_{n \mathop \in \N}$ converges in $\ell^p$ with basis $\mathbf e_n$
By definition of the $p$-sequence space:
$\ds \sum_{n \mathop = 0}^\infty \size {x_n}^p < \infty$
By Tail of Convergent Series tends to Zero:

$\ds \forall \epsilon' \in \R_{>0} : \exists N \in \N : \forall n \in \N : n > N \implies \sum_{k \mathop = n}^\infty \size {x_k}^p < \epsilon'$
Let $\ds \mathbf s_n := \sum_{k \mathop = 0}^n x_k \mathbf e_k$.
Then:

$\ds \forall n \in \N : \mathbf x - \mathbf s_n = \tuple {0, \ldots, 0, x_{n + 1}, x_{n + 2}, x_{n + 3}, \ldots}$
Therefore: 










\(\ds \forall n \in \N : n > N: \, \)



\(\ds \norm {\mathbf x - \mathbf s_n}_p^p\)

\(=\)







\(\ds \sum_{k \mathop = n + 1}^\infty \size {x_k}^p\)





Definition of P-Norm














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = N + 1}^\infty \size {x_k}^p\)




















\(\ds \)

\(<\)







\(\ds \epsilon'\)









Let $\epsilon' = \epsilon^p$.
Then:

$\norm {\mathbf x - \mathbf s_n}_p < \epsilon$.
Altogether:

$\forall \epsilon \in \R_{> 0} : \exists N \in \N : \forall n \in \N : n > N \implies \norm {\mathbf x - \mathbf s_n}_p < \epsilon$
By definition, $\sequence {\mathbf s_n}_{n \in \N}$ converges in $\ell^p$ to $\mathbf x$.
In other words, $\ds \mathbf x = \sum_{n = 1}^\infty x_n \mathbf e_n$.
$\Box$

Let $\phi_n : \ell^p \to \R$ be a map such that:

$\mathbf x = \tuple {x_1, x_2, x_3, \ldots} \stackrel {\phi_n} {\mapsto} x_n$.


$\phi_n$ commutes with infinite sum
We have that $\ell^p$ is a vector space.
Let $\mathbf z \in \ell^p$ be such that:

$\mathbf z = \mathbf x + \lambda \mathbf y$
where $\mathbf x, \mathbf y \in \ell^p, \lambda \in \R$.
Then:














\(\ds \map {\phi_n} {\mathbf z}\)

\(=\)







\(\ds z_n\)




















\(\ds \)

\(=\)







\(\ds x_n + \lambda y_n\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_n} {\mathbf x} + \lambda \map {\phi_n} {\mathbf y}\)









By definition, $\phi_n$ is linear.
Then for $\mathbf x - \mathbf s_k \in \ell^p$ we have:

$\ds \map {\phi_n} {\mathbf x - \mathbf s_k} = \map {\phi_n}{\mathbf x} - \map {\phi_n}{\mathbf s_k} = \map {\phi_n}{\sum_{i \mathop = 1}^\infty x_i \mathbf e_i} - \sum_{i \mathop = 1}^k x_i \map {\phi_n}{\mathbf e_i}$
Furthermore:










\(\ds \forall \mathbf x \in \ell^p: \, \)



\(\ds \size {\map {\phi_n} {\mathbf x} }\)

\(=\)







\(\ds \size {x_n}\)




















\(\ds \)

\(=\)







\(\ds \paren {\size{x_n}^p}^{1/p}\)




















\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^\infty \paren{\size {x_k}^p}^{\frac 1 p}\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf x}_p\)





Definition of P-Norm



By Continuity of Linear Transformation between Normed Vector Spaces, $\phi_n$ is continuous.


This page needs the help of a knowledgeable authority.In particular: The source cuts from continuity straight to uniqueness. Probably there is a more general statement for linear continuous operators and infinite sums. OTOH, the commutation can be proven from the inequality above without referring to continuity.If you are knowledgeable in this area, then you can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Help}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Then:

$\size {\map {\phi_n} {\mathbf x - \mathbf s_k} } \le \norm {\mathbf x - \mathbf s_k}_p$
Altogether:

$\ds \forall \epsilon \in \R_{> 0} : \exists N \in \N : \forall n \in \N : n > N \implies \size {\map {\phi_k}{\sum_{i \mathop = 1}^\infty x_i \mathbf e_i} - \sum_{i \mathop = 1}^n x_i \map {\phi_k}{\mathbf e_i}} < \epsilon$
Hence:

$\ds \map {\phi_k}{\sum_{i \mathop = 1}^\infty x_i \mathbf e_i} = \sum_{i \mathop = 1}^\infty x_i \map {\phi_k}{\mathbf e_i}$
$\Box$


Uniqueness of expansion coefficients
Suppose $\ds \mathbf x = \sum_{k \mathop = 1}^\infty \xi_k \mathbf e_k = \sum_{k \mathop = 1}^\infty \xi_k' \mathbf e_k$.
Then:










\(\ds \forall n \in \N: \, \)



\(\ds \xi_n\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \xi_k \delta_{kn}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \xi_k \map {\phi_n} {\mathbf e_k}\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_n} {\sum_{k \mathop = 1}^\infty \xi_k \mathbf e_k}\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_n} {\mathbf x}\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_n} {\sum_{k \mathop = 1}^\infty \xi_k' \mathbf e_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \xi_k' \map {\phi_n} {\mathbf e_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \xi_k' \delta_{kn}\)




















\(\ds \)

\(=\)







\(\ds \xi_n'\)









Therefore:

$\forall n \in \N : \xi_n = \xi'_n$
and the expression of $\mathbf x$ in basis $\mathbf e_n$ is unique.
By definition, $\set {\mathbf e_n : n \in \N}$ is a Schauder basis for $\ell^p$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$. Operator norm and the normed space $\map {CL} {X, Y}$




