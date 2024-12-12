# 

Source: https://proofwiki.org/wiki/Evaluation_Isomorphism_is_Isomorphism



Theorem
Let $R$ be a commutative ring with unity.
Let $G$ be a unitary $R$-module whose dimension is finite.

Then the evaluation linear transformation $J: G \to G^{**}$ is an isomorphism.


Proof
Let $\sequence {a_n}$ be an ordered basis of $G$.
Then by definition, every $x \in G$ can be written in the form:

$\ds \sum_{k \mathop = 1}^n \lambda_k a_k$
where $\lambda_k \in R$.
From Unique Representation by Ordered Basis, this representation is unique.
From Existence of Ordered Dual Basis:

$\sequence {\map J {a_n} }$ is the ordered basis of $G^{**}$ dual to the ordered basis of $G^*$ which itself is dual to $\sequence {a_n}$.
From Unique Linear Transformation Between Modules, there exists a unique linear transformation $\phi: G \to H$ satisfying:

$\forall k \in \closedint 1 n: \map \phi {a_k} = b_k$
From the preceding it follows that this unique $\phi$ has to be $J$.
As every element of $G^{**}$ is so representable, it follows that $J$ is surjective.

Now let $x, y \in G$ such that $\map J x = \map J y$.
We have that:

$x = \ds \sum_{k \mathop = 1}^n \lambda_k a_k$
for some unique $\sequence {\lambda_n}$ in $R$

$y = \ds \sum_{k \mathop = 1}^n \mu_k a_k$
for some unique $\sequence {\mu_n}$ in $R$
Hence from Unique Linear Transformation Between Modules:

$\map J x = \ds \sum_{k \mathop = 1}^n \lambda_k b_k$
for some unique $\sequence {\lambda_n}$ in $R$

$\map J y = \ds \sum_{k \mathop = 1}^n \mu_k b_k$
for some unique $\sequence {\mu_n}$ in $R$
But as $\map J x = \map J y$ it must be the case that:

$\forall k \in \set {1, 2, \ldots, n}: \lambda_k = \mu_k$
and it follows that $x = y$.
Thus $J$ is injective.

It has been shown that $J$ is both injective and surjective.
Hence, by definition, $J$ is bijective.

By definition, a linear transformation is a homomorphism.

Hence, again by definition, $J$ is an isomorphism.
$\blacksquare$


Also see
Definition:Evaluation Isomorphism: what an evaluation linear transformation is called when its dimension is finite.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations




