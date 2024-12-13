# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_is_Dense_Subring_of_Completion

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\struct {R', \norm {\, \cdot \,}' }$ be a normed division ring completion of $\struct {R, \norm {\, \cdot \,} }$
Then:

$\struct {R, \norm {\, \cdot \,} }$ is isometrically isomorphic to a dense normed division subring of $\struct {R', \norm {\, \cdot \,}' }$.


Proof
By the definition of a normed division ring completion then:

$(1): \quad$ there exists a distance-preserving ring monomorphism $\phi: R \to R'$.
$(2): \quad \struct {R', \norm {\, \cdot \,}' }$ is a complete metric space.
$(3): \quad \phi \sqbrk R$ is a dense subspace in $\struct {R', \norm {\, \cdot \,}' }$.
By image of a ring homomorphism is a subring then $\phi \sqbrk R$ is a subring of $R'$ and $\phi: R \to \phi \sqbrk R$ is an isomorphism.
By Epimorphism from Division Ring to Ring then $\phi \sqbrk R$ is a division subring of $R'$.
By Division Subring of Normed Division Ring then $\struct {\phi \sqbrk R, \norm {\, \cdot \,}' }$ is a normed division subring of $\struct {R', \norm {\, \cdot \,}' }$.
By Distance-Preserving Surjection is Isometry of Metric Spaces then $\phi: R \to \phi \sqbrk R$ is an isometry.
The result follows.
$\blacksquare$





