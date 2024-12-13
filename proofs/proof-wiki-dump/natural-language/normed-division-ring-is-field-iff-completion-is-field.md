# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_is_Field_iff_Completion_is_Field



Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\struct {R', \norm {\, \cdot \,}' }$ be a normed division ring completion of $\struct {R, \norm {\, \cdot \,} }$
Then:

$R$ is a field if and only if $R'$ is a field.


Proof
By the definition of a normed division ring completion then:

$(1): \quad$ there exists a distance-preserving ring monomorphism $\phi: R \to R'$.
$(2): \quad$ $\struct {R', \norm {\, \cdot \,}' }$ is a complete metric space.
$(3): \quad$ The image $\phi \sqbrk R$ of $\phi$ is a dense subspace in $\struct {R', \norm {\, \cdot \,}' }$.
By image of a ring homomorphism is a subring then $\phi \sqbrk R$ is a subring of $R'$ and $\phi: R \to \phi \sqbrk R$ is an isomorphism.


Necessary Condition
Let $x', y' \in R'$.
By the definition of a dense subset then $\map \cl {\phi \sqbrk R} = R'$.
From Closure of Subset of Metric Space by Convergent Sequence:

there exists a sequence $\sequence {x_n'} \subseteq \phi \sqbrk R$ that converges to $x'$, that is, $\ds \lim_{n \mathop \to \infty} x_n' = x'$
there exists a sequence $\sequence {y_n'} \subseteq \phi \sqbrk R$ that converges to $y'$, that is, $\ds \lim_{n \mathop \to \infty} y_n' = y'$
From Product Rule for Sequences in Normed Division Ring:

$\ds \lim_{n \mathop \to \infty} x_n' y_n' = x' y'$
$\ds \lim_{n \mathop \to \infty} y_n' x_n' = y' x'$
By the definition of a field, $R$ is a commutative ring.
Because $\phi: R \to \phi \sqbrk R$ is an isomorphism, by Isomorphism Preserves Commutativity, $\phi \sqbrk R$ is a commutative ring.
Because $\sequence {x_n'} \subseteq \phi \sqbrk R$ and $\sequence {y_n'} \subseteq \phi \sqbrk R$:

$\forall n: x_n' y_n' = y_n' x_n'$
Hence:

$\ds x' y' = \lim_{n \mathop \to \infty} x_n' y_n' = \lim_{n \mathop \to \infty} y_n' x_n' = y' x'$
Since $x', y' \in R'$ were arbitrary, then $R'$ is a commutative ring.
The result follows.
$\Box$


Sufficient Condition
By Restriction of Commutative Operation is Commutative, $\phi \sqbrk R$ is a commutative ring.
By Monomorphism Image is Isomorphic to Domain, $\phi: R \to \phi \sqbrk R$ is a ring isomorphism.
By Inverse of Algebraic Structure Isomorphism is Isomorphism, $\phi^{-1}: \phi \sqbrk R \to R$ is a ring isomorphism.
By Isomorphism Preserves Commutativity, $R$ is a commutative ring.
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




