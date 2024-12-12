# 

Source: https://proofwiki.org/wiki/Continuous_Function_applied_to_Normal_Element_of_Unital_C*-Algebra_is_Hermitian_iff_Function_is_Real-Valued

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $x \in A$ be normal. 
Let $\map {\sigma_A} x$ denote the spectrum of $x$ in $A$.
Let $f : \map {\sigma_A} x \to \C$ be continuous.
Let $\map {\Theta_x} f = \map f x$ be the continuous functional calculus of $x$ applied to $f$. 

Then $\map f x$ is Hermitian if and only if $\map f z \in \R$ for each $z \in \map {\sigma_A} x$. 


Proof
From Normal Element of C*-Algebra is Hermitian iff Spectrum is Real we have:

$\map f x$ is Hermitian if and only if $\map {\sigma_A} {\map f x} \subseteq \R$.
From the Spectral Mapping Theorem, we have:

$\map {\sigma_A} {\map f x} = f \sqbrk {\map {\sigma_A} x}$
Hence $\map f x$ is Hermitian if and only if $f \sqbrk {\map {\sigma_A} x} \subseteq \R$.
Hence $\map f x$ is Hermitian if and only if $\map f z \in \R$ for each $z \in \map {\sigma_A} x$.
$\blacksquare$





