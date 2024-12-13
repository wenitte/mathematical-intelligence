# 

Source: https://proofwiki.org/wiki/Image_of_Positive_Element_of_C*-Algebra_under_*-Algebra_Homomorphism_is_Positive

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,}_A}$ and $\struct {B, \square, \norm {\, \cdot \,}_B}$ be $\text C^\ast$-algebras.
Let $\phi : A \to B$ be a $\ast$-algebra homomorphism.
Let $a \in A$ be positive.

Then $\map \phi a$ is positive.


Proof
We first show that $\map \phi a \in B$ is Hermitian.
Since $\phi$ is a $\ast$-algebra isomorphism, we have:

$\map \phi a^\square = \map \phi {a^\ast} = \map \phi a$
Hence $\map \phi a$ is Hermitian.
From Spectrum of Image of Element of Unital Algebra under Unital Algebra Homomorphism: Corollary, we have:

$\map {\sigma_B} {\map \phi a} \subseteq \map {\sigma_A} a \cup \set 0 \subseteq \hointr 0 \infty$
Hence $\map \phi a$ is positive.
$\blacksquare$





