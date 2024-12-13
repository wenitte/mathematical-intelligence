# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Completions_are_Isometric_and_Isomorphic



Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\struct {S_1, \norm {\, \cdot \,}_1 }$ and $\struct {S_2, \norm {\, \cdot \,}_2 }$ be normed division ring completions of $\struct {R, \norm {\, \cdot \,} }$
Then there exists an isometric isomorphism $\psi: \struct {S_1, \norm {\, \cdot \,}_1 } \to \struct {S_2, \norm {\, \cdot \,}_2 }$


Proof
By the definition of a normed division ring completion then:

there exists a distance-preserving ring monomorphisms $\phi_1: R \to S_1$
$R_1 = \map {\phi_1} R$ is a dense subring of $S_1$
$S_1$ is a complete metric space
there exists a distance-preserving ring monomorphisms $\phi_2: R \to S_2$
$R_2 = \map {\phi_2} R$ is a dense subring of $S_2$
$S_2$ is a complete metric space


Lemma 1
Let $\psi' = \phi_2 \circ \phi_1^{-1}:\phi_1 \paren R \to \phi_2 \paren R$ be the composition of $\phi_1^{-1}$ with $\phi_2$. 
Then $\psi': \struct {\map {\phi_1} R, \norm {\, \cdot \,}_1 } \to \struct {\map {\phi_2} R, \norm {\, \cdot \,}_2 }$ is an isometric ring isomorphism.


Lemma 2
Let $\psi: S_1 \to S_2$ be defined by:

$\forall x \in S_1: \map \psi x = \ds \lim_{n \mathop \to \infty} \map {\psi'} {x_n}$
where $\ds x = \lim_{n \mathop \to \infty} x_n$ for some sequence $\sequence {x_n} \subseteq R_1$
Then $\psi$ is a well-defined mapping.


Lemma 3
$\psi$ is a surjective mapping.


Lemma 4
$\psi$ is an isometry.


Lemma 5
$\psi$ is a ring isomorphism.
$\blacksquare$





