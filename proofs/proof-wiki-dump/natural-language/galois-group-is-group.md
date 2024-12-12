# 

Source: https://proofwiki.org/wiki/Galois_Group_is_Group

Theorem
Let $L / K$ be a normal extension.
Let $\Gal {L / K}$ be the Galois group of $L / K$.

Then $\Gal {L / K}$ forms a group under the operation of composition of mappings.


Proof
The Galois group $\Gal {L / K}$ of $L / K$ is defined as:

$\Gal {L / K} = \leftset{\sigma: L \to L: \sigma}$ is an automorphism of $L$ such that $\sigma$ fixes $K$ point-wise$\rightset{}$

We have that $\Gal {L / K}$ is a subset of the automorphism group on $L / K$.

We initially note that the Identity Mapping is Automorphism which trivially fixes $K$.
Thus $\Gal {L / K}$ is not the empty set.

First, to show that $\Gal {L / K}$ is closed under composition of mappings.
Let $\sigma, \tau \in \Gal {L / K}$.
Let $\rho = \sigma \circ \tau$.
If $k \in K$, then:

$\map \rho k = \map \sigma {\map \tau k} = \map \sigma k = k$
and so $\rho$ fixes $K$.
By Composite of Isomorphisms in Algebraic Structure is Isomorphism, $\rho$ is an automorphism.
Thus, $\Gal {L / K}$ is closed under composition.

Next, by Inverse of Algebraic Structure Isomorphism is Isomorphism, $\sigma^{-1}$ is an automorphism, and:

$\forall k \in K: \map \sigma k = k \implies \map {\sigma^{-1} } k = k$
Thus, $\sigma^{-1} \in \Gal {L / K}$.

The result follows from the Two-Step Subgroup Test.
That is, $\Gal {L / K}$ is a group.
$\blacksquare$





