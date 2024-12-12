# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Local_Ring_Homomorphism



Theorem
Let $\struct {A, \mathfrak m}$ and $\struct {B, \mathfrak n}$ be commutative local rings.
Let $f : A \to B$ be a unital ring homomorphism.

The following definitions of the concept of Local Ring Homomorphism are equivalent:


Definition 1
The homomorphism $f$ is local if and only if the image $f(\mathfrak m) \subseteq \mathfrak n$.


Definition 2
The homomorphism $f$ is local if and only if the preimage $\map {f^{-1} } {\mathfrak n} \supseteq \mathfrak m$.


Definition 3
The homomorphism $f$ is local if and only if the preimage $\map {f^{-1} } {\mathfrak n} = \mathfrak m$.


Proof
1 iff 2
Follows from Image is Subset iff Subset of Preimage.
$\Box$


2 implies 3
Let $f^{-1} \sqbrk {\mathfrak n} \supseteq \mathfrak m$.
We have to show that $f^{-1} \sqbrk {\mathfrak n} \subseteq \mathfrak m$.
By Preimage of Proper Ideal of Ring is Proper Ideal, $f^{-1} \sqbrk {\mathfrak n}$ is a proper ideal.
By Proper Ideal of Ring is Contained in Maximal Ideal, $f^{-1} \sqbrk {\mathfrak n}$ is contained in some maximal ideal of $A$.
Because $A$ is a commutative local ring, $\mathfrak m$ is its only maximal ideal.
$\Box$


3 implies 2
Follows by definition of set equality.
$\blacksquare$





