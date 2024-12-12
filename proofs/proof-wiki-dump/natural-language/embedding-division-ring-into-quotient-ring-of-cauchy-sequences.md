# 

Source: https://proofwiki.org/wiki/Embedding_Division_Ring_into_Quotient_Ring_of_Cauchy_Sequences



Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\CC$ be the ring of Cauchy sequences over $R$
Let $\NN = \set {\sequence {x_n}: \ds \lim_{n \mathop \to \infty} x_n = 0}$
Let $\norm {\, \cdot \,}: \CC \, \big / \NN \to \R_{\ge 0}$ be the norm on the quotient ring $\CC \, \big / \NN$ defined by:

$\ds \forall \sequence {x_n} + \NN: \norm {\sequence {x_n} + \NN} = \lim_{n \mathop \to \infty} \norm {x_n}$

Let $\phi: R \to \CC \, \big / \NN$ be the mapping from $R$ to the quotient ring $\CC \, \big / \NN$ defined by:

$\forall a \in R: \map \phi a = \sequence {a, a, a, \dotsc} + \NN$
where $\sequence {a, a, a, \dotsc} + \NN$ is the left coset in $\CC \, \big / \NN$ that contains the constant sequence $\sequence {a, a, a, \dotsc}$.
Then:

$\phi$ is a distance-preserving ring monomorphism.


Proof
By the definition of a distance-preserving mapping and a ring monomorphism it has to be shown that:

$(1): \quad \phi$ is a homomorphism.
$(2): \quad \phi$ is an injection.
$(3): \quad \phi$ is distance-preserving.


$(1): \quad \phi$ is a homomorphism
By definition, $\phi$ is the composition of two mappings:

$\phi = q \circ \phi'$
where:

$\text{(a)}: \quad \phi': R \to \CC$, defined by: $\forall a \in R, \map {\phi'} a = \sequence {a, a, a, \dotsc}$
$\text{(b)}: \quad q$ is the quotient mapping $q: \CC \to \CC \, \big / \NN$ defined by: $\map q {\sequence {x_n} } = \sequence {x_n} + \NN$
By Embedding Normed Division Ring into Ring of Cauchy Sequences, $\phi'$ is a ring monomorphism.
By Quotient Ring Epimorphism is Epimorphism, then $q$ is a ring epimorphism.
By Composition of Ring Homomorphisms is Ring Homomorphism then the composition $\phi = q \circ \phi'$ is a ring homomorphism
$\Box$


$(2): \quad \phi$ is an injection
Let $a, b \in R$.
Suppose $\map \phi a = \map \phi b$.
Then:














\(\ds \sequence {a, a, a, \dotsc} + \NN\)

\(=\)







\(\ds \sequence {b, b, b, \dotsc} + \NN\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds \sequence {a, a, a, \dotsc} - \sequence {b, b, b, \dotsc}\)

\(\in\)







\(\ds \NN\)





Left Cosets are Equal iff Product with Inverse in Subgroup








\(\ds \leadsto \ \ \)





\(\ds \sequence {a - b, a - b, a - b, \dotsc}\)

\(\in\)







\(\ds \NN\)





Ring operations on Ring of Cauchy Sequences








\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} {a - b}\)

\(=\)







\(\ds 0\)





Definition of $\NN$



By Constant Sequence Converges to Constant in Normed Division Ring then:

$\ds \lim_{n \mathop \to \infty} {a - b} = a - b$
Hence $a-b = 0$.
The result follows.
$\Box$


$(3): \quad \phi$ is distance-preserving
Let $a, b \in R$.
Then:














\(\ds \norm {\map \phi a - \map \phi b}\)

\(=\)







\(\ds \norm {\map \phi {a - b} }\)





$\phi$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \norm {\sequence {a - b, a - b, a - b, \dots} + \NN}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty } \norm {a - b}\)





Definition of $\norm {\, \cdot \,}$














\(\ds \)

\(=\)







\(\ds \norm {a - b}\)





Constant Sequence Converges to Constant in Normed Division Ring



$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.2$: Completions: Problem $85$




