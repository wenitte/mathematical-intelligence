# 

Source: https://proofwiki.org/wiki/Continuous_Function_applied_to_Normal_Element_of_Unital_C*-Algebra_is_Unitary_iff_Function_is_Valued_in_Unit_Circle

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $x \in A$ be normal. 
Let $\map {\sigma_A} x$ denote the spectrum of $x$ in $A$.
Let $f : \map {\sigma_A} x \to \C$ be continuous.
Let $\map {\Theta_x} f = \map f x$ be the continuous functional calculus of $x$ applied to $f$. 

Then $\map f x$ is unitary if and only if $\cmod {\map f z} = 1$ for each $z \in \map {\sigma_A} x$. 


Proof
From Normal Element of Unital C*-Algebra is Unitary iff Spectrum is Subset of Unit Circle we have:

$\map f x$ is unitary if and only if $\map {\sigma_A} {\map f x} \subseteq \set {z \in \C : \cmod z = 1}$.
From the Spectral Mapping Theorem, we have:

$\map {\sigma_A} {\map f x} = f \sqbrk {\map {\sigma_A} x}$
Hence $\map f x$ is unitary if and only if $f \sqbrk {\map {\sigma_A} x} \subseteq \set {z \in \C : \cmod z = 1}$.
Hence $\map f x$ is unitary if and only if $\cmod {\map f z} = 1$ for each $z \in \map {\sigma_A} x$.
$\blacksquare$





