# 

Source: https://proofwiki.org/wiki/Continuous_Function_applied_to_Normal_Element_of_Unital_C*-Algebra_is_Positive_iff_Function_is_Non-Negative

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $x \in A$ be normal. 
Let $\map {\sigma_A} x$ denote the spectrum of $x$ in $A$.
Let $f : \map {\sigma_A} x \to \C$ be continuous.
Let $\map {\Theta_x} f = \map f x$ be the continuous functional calculus of $x$ applied to $f$. 

Then $\map f x$ is positive if and only if $\map f z \in \hointr 0 \infty$ for each $z \in \map {\sigma_A} x$. 


Corollary
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $x \in A$ be normal. 
Let $\map {\sigma_A} x$ denote the spectrum of $x$ in $A$.
Let $f, g, h : \map {\sigma_A} x \to \R$ be continuous such that:

$\map g z \le \map f z$ for all $z \in \map {\sigma_A} x$.
Let $\map {\Theta_x} f = \map f x$, $\map {\Theta_x} g = \map g x$ be the continuous functional calculus of $x$ applied to $f$ and $g$ respectively.
Let $\le_A$ be the canonical ordering of $A$. 

Then:

$\map g x \le_A \map f x$


Proof
From the definition of a positive element, we have that $\map f x$ is positive if and only if Hermitian and $\map {\sigma_A} {\map f x} \subseteq \hointr 0 \infty$. 
Note that $\map {\sigma_A} {\map f x} \subseteq \hointr 0 \infty$ implies that $\map {\sigma_A} {\map f x} \subseteq \R$. 
From Normal Element of C*-Algebra is Hermitian iff Spectrum is Real we have that $\map f x$ is Hermitian if $\map {\sigma_A} {\map f x} \subseteq \hointr 0 \infty$.
So $\map f x$ is positive if and only if $\map {\sigma_A} {\map f x} \subseteq \hointr 0 \infty$.
From the Spectral Mapping Theorem, we have:

$\map {\sigma_A} {\map f x} = f \sqbrk {\map {\sigma_A} x}$
Hence we have $\map {\sigma_A} {\map f x} \subseteq \hointr 0 \infty$ if and only if $\map f z \in \hointr 0 \infty$ for each $z \in \map {\sigma_A} x$.
$\blacksquare$





