# 

Source: https://proofwiki.org/wiki/Real-Valued_Continuous_Function_Vanishing_at_Zero_applied_to_Hermitian_Element_of_Closed_Ideal_of_Unital_C*-Algebra_is_contained_in_Ideal

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $I$ be a closed ideal.
Let $x \in I$ be Hermitian.
Let $\map {\sigma_A} x \subseteq \R$ be the spectrum of $x$ in $A$.
Let $K$ be a compact set such that $0 \in K$ and $\map {\sigma_A} x \subseteq K$.  
Let $f : K \to \R$ be a continuous function with $\map f 0 = 0$.
Let $\map f x$ be obtained from the continuous functional calculus, restricting $f$ to $\map {\sigma_A} x$.

Then $\map f x \in I$. 


Corollary
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $\struct {A_+, \ast, \norm {\, \cdot \,} }$ be the unitization of $\struct {A, \ast, \norm {\, \cdot \,} }$.
Let $A_0 = \set {\tuple {a, 0} : a \in A}$.
Let $x \in A$ be Hermitian.
Let $\map {\sigma_{A_+} } {\tuple {x, 0} } \subseteq \R$ be the spectrum of $\tuple {x, 0}$ in $A$.
Let $f : \map {\sigma_{A_+} } x \to \R$ be a continuous function with $\map f 0 = 0$.
Let $\map f {\tuple {x, 0} }$ be obtained from the continuous functional calculus.

Then $\map f {\tuple {x, 0} } \in A_0$.
Hence there exists $u \in A$ such that $\map f {\tuple {x, 0} } = \tuple {u, 0}$. 


Proof
Let $\norm {\, \cdot \,}_\infty$ be the supremum norm on $\map \CC {K, \R}$. 
From the Weierstrass Approximation Theorem, there exists a sequence of polynomials $\sequence {p_n}_{n \mathop \in \N}$ such that:

$\norm {p_n - f}_\infty \to 0$ as $n \to \infty$.
We have:

$\map {p_n} 0 \to \map f 0 = 0$ as $n \to \infty$.
Take:

$\map {q_n} x = \map {p_n} x - \map {p_n} 0$
We then have $\map {q_n} 0 = 0$ for each $n \in \N$ and $q_n \to f$ in $\struct {\map \CC {\map {\sigma_A} x, \R}, \norm {\, \cdot \,}_\infty}$.
Since $I$ is an ideal, we have $x^n \in I$ for each $n \ge 1$. 
Since $I$ is a vector subspace, we have $\map {q_n} x \in I$ for each $n \in \N$.
Since the continuous functional calculus is an isometry, we have:

$\norm {\map {q_n} x - \map f x} = \norm {q_n - f}_\infty \to 0$ as $n \to \infty$
So $\map {q_n} x \to \map f x$ as $n \to \infty$. 
Hence since $I$ is closed, we have $\map f x \in I$ as $n \to \infty$. 
$\blacksquare$





