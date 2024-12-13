# 

Source: https://proofwiki.org/wiki/Preimage_of_Prime_Ideal_under_Ring_Homomorphism_is_Prime_Ideal



Theorem
Let $A$ and $B$ be commutative rings with unity.
Let $f : A \to B$ be a ring homomorphism.
Let $\mathfrak p \subseteq B$ be a prime ideal.

Then its preimage $\map {f^{-1} } {\mathfrak p}$ is a prime ideal of $A$.


Proof 1
By Preimage of Ideal under Ring Homomorphism is Ideal, $\map {f^{-1} } {\mathfrak p}$ is a ideal of $A$.
Let $a, b \in A$ with $a b \in \map {f^{-1} } {\mathfrak p}$.
By definitin of preimage, $\map f a \, \map f b = \map f {a b} \in \mathfrak p$.
Because $\mathfrak p$ is prime, $\map f a \in \mathfrak p$ or $\map f b \in \mathfrak p$.
Thus $a \in \map {f^{-1} } {\mathfrak p}$ or $b \in \map {f^{-1} } {\mathfrak p}$.
Thus $\map {f^{-1} } {\mathfrak p}$ is a prime ideal.
$\blacksquare$


Proof 2
By Preimage of Ideal under Ring Homomorphism is Ideal, $\map {f^{-1} } {\mathfrak p}$ is a ideal of $A$.
Let $B / \mathfrak p$ be the quotient ring.
By Prime Ideal iff Quotient Ring is Integral Domain, $B / \mathfrak p$ is an integral domain.
By Kernel of Quotient Ring Epimorhpism, the quotient ring epimorphism $B \to B / \mathfrak p$ has kernel $\mathfrak p$.
By Kernel of Composition of Ring Homomorphisms, the composition $A \overset f \to B \to B / \mathfrak p$ has kernel $\map {f^{-1} } {\mathfrak p}$.
By Universal Property of Quotient Ring, there exists a ring homomorphism $A / \map {f^{-1} } {\mathfrak p} \to B / \mathfrak p$.


A specific link is needed here.In particular: a theorem why it is injectiveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by searching for it, and adding it here.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{LinkWanted}} from the code..
By Subring of Integral Domain is Integral Domain, $A / \map {f^{-1} } {\mathfrak p}$ is an integral domain.
By Prime Ideal iff Quotient Ring is Integral Domain, $\map {f^{-1} } {\mathfrak p}$ is a prime ideal of $A$.
$\blacksquare$


Also see
Definition:Induced Mapping on Spectra of Rings




