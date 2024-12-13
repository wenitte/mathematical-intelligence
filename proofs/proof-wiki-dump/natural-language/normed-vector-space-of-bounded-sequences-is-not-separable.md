# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_of_Bounded_Sequences_is_not_Separable

Theorem
Let $\struct {\ell^\infty, \norm {\, \cdot \,}_\infty}$ be the normed vector space of bounded sequences.

$\struct {\ell^\infty, \norm {\, \cdot \,}_\infty}$ is not separable.


Proof
Aiming for a contradiction, suppose $\struct {\ell^\infty, \norm {\, \cdot \,}_\infty}$ is separable.
Let $\mathbf x := \sequence {x_i}_{i \mathop \in \N}$, $\mathbf a := \sequence {a_i}_{i \mathop \in \N}$, $\mathbf b := \sequence {b_i}_{i \mathop \in \N}$ be sequences.
Let $D := \set {\mathbf x_i \in \R^\N : i \in \N}$ be a dense countable subset of $\ell^\infty$.
Let $A := \set {\sequence {y_i}_{i \mathop \in \N} : y_i = 0 \text{ or } y_i = 1}$ be the set of all sequences with terms equal to either $0$ or $1$.
Suppose $\mathbf a, \mathbf b \in A$ are two distinct elements of $A$.
Then:

$\exists n \in \N : a_n \ne b_n$
and:














\(\ds \norm {\mathbf a - \mathbf b}_\infty\)

\(=\)







\(\ds \sup_{n \mathop \in \N} \size {a_n - b_n}\)





Definition of Supremum Norm














\(\ds \)

\(=\)







\(\ds 1\)









Hence, their mutual distance is $1$.
Since $D$ is dense in $\ell^\infty$, we have that:

$\ds \forall \mathbf a \in A : \exists \mathbf x_{\map i {\mathbf a} } \in \map {B_{\frac 1 3} } {\mathbf a}$
For all $\mathbf a \in A$, the open balls $\map {B_{\frac 1 3} } {\mathbf a}$ are mutually disjoint because $\ds \frac 1 3 + \frac 1 3 < 1$.
Hence:

$\forall {\mathbf a} \in A : \forall n \in \N : \mathbf a \mapsto \map n {\mathbf a}$
is an injection.
By definition, $A$ is countable.
However, $A$ is in a one-to-one correspondence with all real numbers via binary expansion.
Therefore, $A$ is uncountable.
Hence the contradiction.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.3$: Normed and Banach spaces. Topology of normed spaces




