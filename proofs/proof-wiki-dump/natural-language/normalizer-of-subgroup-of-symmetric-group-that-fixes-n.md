# 

Source: https://proofwiki.org/wiki/Normalizer_of_Subgroup_of_Symmetric_Group_that_Fixes_n

Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $H$ denote the subgroup of $S_n$ which consists of all $\pi \in S_n$ such that:

$\map \pi n = n$

The normalizer of $H$ is given by:

$\map {N_{S_n} } H = \map {N_{S_n} } {S_{n - 1} } = S_{n - 1}$


Proof
We have from Subgroup of Symmetric Group that Fixes n that $N = S_{n - 1}$.

By definition of normalizer:

$\map {N_{S_n} } {S_{n - 1} } := \set {\rho \in S_n: \rho S_{n - 1} \rho^{-1} = S_{n - 1} }$

We have from Group is Normal in Itself that:

$\forall \rho \in S_{n - 1}: \rho S_{n - 1} \rho^{-1} \in S_{n - 1}$
and so:

$S_{n - 1} \subseteq \map {N_{S_n} } {S_{n - 1} }$

It remains to be shown that $\map {N_{S_n} } {S_{n - 1} } \subseteq S_{n - 1}$.

This will be done by demonstrating that:

$S_n \setminus S_{n - 1} \cap \map {N_{S_n} } {S_{n - 1} } = \O$
where $\setminus$ denotes set difference.

Let $\rho \in S_n$ such that $\rho \notin S_{n - 1}$.
Thus:

$\map \rho n \ne n$
and so:

$\exists a \in S_n, a \ne n: \map \rho a = n$
for some $a \in S_{n - 1}$.
Then:

$\map {\rho^{-1} } n = a$
Let $\pi \in S_{n - 1}$ such that:

$\map \pi a = b$
for some $b \ne a$.
As $\rho$ is a permutation, $\rho$ is by definition a bijection.
Hence:

$\map \rho b \ne n$

We have:














\(\ds \map {\rho \pi \rho^{-1} } n\)

\(=\)







\(\ds \map {\rho \pi} a\)





as $\map {\rho^{-1} } n = a$














\(\ds \)

\(=\)







\(\ds \map \rho b\)





as $\map \pi a = b$














\(\ds \)

\(\ne\)







\(\ds n\)





as $\map \rho b \ne n$



Thus $\rho \pi \rho^{-1}$ does not fix $n$.

That is:

$\rho \pi \rho^{-1} \notin S_{n - 1}$

Since this is the case for all arbitrary $\rho \in S_n \setminus S_{n - 1}$, it follows that:

$S_n \setminus S_{n - 1} \cap \map {N_{S_n} } {S_{n - 1} } = \O$
So from Intersection with Complement is Empty iff Subset:

$\map {N_{S_n} } {S_{n - 1} } \subseteq S_{n - 1}$

and so by definition of set equality:

$\map {N_{S_n} } {S_{n - 1} } = S_{n - 1}$
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 48 \beta$




