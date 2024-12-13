# 

Source: https://proofwiki.org/wiki/Null_Polynomial_is_Additive_Identity

Theorem
The set of polynomial forms has an additive identity.


This article, or a section of it, needs explaining.In particular: ContextYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
Let $\struct {R, +, \circ}$ be a commutative ring with unity with zero $0_R$.
Let $\set {X_j: j  \in J}$  be a set of indeterminates.
Let $Z$ be the set of all multiindices indexed by $\set {X_j: j \in J}$.
Let:

$\ds f = \sum_{k \mathop \in Z} a_k \mathbf X^k$
be an arbitrary polynomial form in the indeterminates $\set {X_j: j \in J}$ over $R$.

Let:

$\ds N = \sum_{k \mathop \in Z} 0_R \mathbf X^k$
be the null polynomial.

Then:














\(\ds f + N\)

\(=\)







\(\ds \sum_{k \mathop \in Z} \paren {a_k + 0_R} \mathbf X^k\)





Definition of Polynomial Addition














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in Z} a_k \mathbf X^k\)




















\(\ds \)

\(=\)







\(\ds f\)





Definition of Polynomial Addition



Therefore, $N + f = f$ for all polynomial forms $f$.
Therefore, $N$ is an additive identity for the set of polynomial forms.
$\blacksquare$





