# 

Source: https://proofwiki.org/wiki/Same_Dimensional_Vector_Spaces_are_Isomorphic


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $K$ be a division ring.
Let $V$, $W$ be finite dimensional $K$-vector spaces.
Suppose that $\dim_K V = \dim_K W$.
Then:

$V \cong W$
That is, $V$ and $W$ are isomorphic.


Proof
Let $\mathbb V$, $\mathbb W$ be bases for $V$, $W$ respectively.
We have by hypothesis that:

$\dim_K V = \dim_K W$
Thus by the definition of dimension:

$\mathbb V \sim \mathbb W$
Therefore we can choose a bijection $\phi: \mathbb V \leftrightarrow \mathbb W$.

Define the mapping $\lambda: V \to W$ by:

$\ds \map \lambda {\sum \limits_{\mathbf v \mathop \in \mathbb V} a_{\mathbf v} \mathbf v} = \sum \limits_{\mathbf v \mathop \in \mathbb V} a_\mathbf v \map \phi {\mathbf v}$

For $\mathbf v \in \mathbb V$ let $l_\mathbf v \in V^\star$ be the unique linear transformation defined on the basis $\mathbb V$ by:

$\forall \mathbf v' \in \mathbb V: \map {l_\mathbf v} {\mathbf v'} = \delta_{\mathbf v, \mathbf v'}$
where $\delta : V \times V \to K$ is the Kronecker delta and $V^*$ is the dual of $V$.
Now:

$\ds \map {l_{\mathbf v} } {\sum \limits_{\mathbf u \mathop \in \mathbb V} a_\mathbf u \mathbf u} = \map {l_\mathbf v} {\sum_{\mathbf u \mathop \in \mathbb V \mathop \setminus \set {\mathbf v} } a_\mathbf u \mathbf u + a_{\mathbf v} \mathbf v} = \sum_{\mathbf u \mathop \in \mathbb V \mathop \setminus \set {\mathbf v} } a_\mathbf u \map {l_\mathbf v} {\mathbf u} + a_{\mathbf v} \map {l_\mathbf v} {\mathbf v}$
By the definition of $l_{\mathbf v}$ and by Vector Scaled by Zero is Zero Vector, all the terms but the last vanish, and so:

$\ds \forall \mathbf v \in \mathbb V : \map {l_\mathbf v} {\sum \limits_{\mathbf u \mathop \in \mathbb V} a_\mathbf u \mathbf u} = a_\mathbf v$

For all $\mathbf v, \mathbf v' \in V, c \in K$:














\(\ds \map \lambda {c \mathbf v + \mathbf v'}\)

\(=\)







\(\ds \map \lambda {c \sum \limits_{\mathbf u \mathop \in \mathbb V} \map {l_\mathbf u} {\mathbf v} \mathbf u + \sum \limits_{\mathbf u \mathop \in \mathbb V} \map {l_\mathbf u} {\mathbf v'} \mathbf u}\)




















\(\ds \)

\(=\)







\(\ds \map \lambda {\sum \limits_{\mathbf u \mathop \in \mathbb V} \paren {c \map {l_\mathbf u} {\mathbf v} + \map {l_\mathbf u} {\mathbf v'} } \mathbf u}\)




















\(\ds \)

\(=\)







\(\ds \sum \limits_{\mathbf u \mathop \in \mathbb V} \paren {c \map {l_\mathbf u} {\mathbf v} + \map {l_\mathbf u} {\mathbf v'} } \map \phi {\mathbf u}\)




















\(\ds \)

\(=\)







\(\ds c \sum \limits_{\mathbf u \mathop \in \mathbb V} \map {l_\mathbf u} {\mathbf v} \map \phi {\mathbf u} + \sum \limits_{\mathbf u \mathop \in \mathbb V} \map {l_\mathbf u} {\mathbf v} \map \phi {\mathbf u}\)




















\(\ds \)

\(=\)







\(\ds c \map \lambda {\mathbf v} + \map \lambda {\mathbf v'}\)










Thus $\lambda$ is linear.

Let $\mathbf x \in \ker \lambda$ where $\ker \lambda$ denotes the kernel of $\lambda$.
Then:

$\ds \mathbf 0 = \map \lambda {\mathbf x} = \sum \limits_{\mathbf v \mathop \in \mathbb V} \map {l_\mathbf v} {\mathbf x} \mathbf v$
Therefore:

$\forall \mathbf v \in \mathbb V: \map {l_\mathbf v} {\mathbf x} = 0$
because $\mathbb V$ is linearly independent.
By Vector Scaled by Zero is Zero Vector, $\mathbf x = \mathbf 0$.
That is:

$\ker \lambda = \set {\mathbf 0}$
By Linear Transformation is Injective iff Kernel Contains Only Zero, it follows that $\lambda$ is injective.

Recall that $\phi$ is a bijection.
From Inverse of Bijection is Bijection, $\phi$ is invertible.

Suppose $\mathbf y \in W$.
Then:














\(\ds \mathbf y\)

\(=\)







\(\ds \sum \limits_{\mathbf w \mathop \in \mathbb W} \map {l_\mathbf w} {\mathbf y} \mathbf w\)




















\(\ds \)

\(=\)







\(\ds \sum \limits_{\mathbf v \mathop \in \mathbb V} \map {l_{\map {\phi^{-1} } {\mathbf v} } } {\mathbf y} \map {\phi^{-1} } {\mathbf v}\)









where this last vector belongs to $\map \lambda V$.
Thus $\lambda$ is surjective.

$\lambda$ has been shown to be injective and surjective, and so is a bijection.
$\lambda$ has also been shown to be linear transformation.
Thus, by definition, $\lambda$ is an isomorphism.
$\blacksquare$


Also see
Linear Transformation from Finite-Dimensional Vector Space is Injective iff Surjective‎




