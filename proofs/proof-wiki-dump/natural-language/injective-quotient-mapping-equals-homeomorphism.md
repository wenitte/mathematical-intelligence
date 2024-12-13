# 

Source: https://proofwiki.org/wiki/Injective_Quotient_Mapping_Equals_Homeomorphism



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: S_1 \to S_2$ be a mapping.

Then $f$ is an injective quotient mapping, if and only if $f$ is a homeomorphism.


Proof
Sufficient condition
Suppose $f$ is an injective quotient mapping.
By definition of quotient mapping, $f$ is surjective.
Mapping is Injection and Surjection iff Inverse is Mapping shows that $f$ has an inverse $f^{-1}$.
To show continuity of $f^{-1}$, let $U \subseteq S_1$ be open in $T_1$.
As $f$ is bijective, it follows that $f^{-1} \sqbrk {f \sqbrk U} = U$.
By definition of quotient mapping, it follows that $f \sqbrk U$ is open in $T_2$.
As $f$ is bijective, it follows that the preimage of $U$ under $f^{-1}$ is equal to $f \sqbrk U$.
It follows that $f^{-1}$ is continuous.
By definition of homeomorphism, it follows that $f$ is a homeomorphism.
$\Box$


Necessary condition
Suppose $f$ is a homeomorphism.
By definition of homeomorphism, it follows that $f$ is injective.
Let $V \subseteq S_2$ such that $f^{-1} \sqbrk V$ is open in $T_1$.
As $f^{-1}$ is continuous, it follows that the preimage of $f^{-1} \sqbrk V$ under $f^{-1}$ is open in $T_2$.
As $f$ is bijective, it follows that the preimage of $f^{-1} \sqbrk V$ under $f^{-1}$ is equal to $V$.
By definition of quotient mapping, $f$ is a quotient mapping.
$\blacksquare$





