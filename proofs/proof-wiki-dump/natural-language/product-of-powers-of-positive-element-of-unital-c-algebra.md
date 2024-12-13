# 

Source: https://proofwiki.org/wiki/Product_of_Powers_of_Positive_Element_of_Unital_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $a \in A$ be positive elements.
Let $\alpha, \beta > 0$ be real numbers.
Let $a^\alpha$, $a^\beta$ and $a^{\alpha + \beta}$ be given by the continuous functional calculus.

Then:

$a^{\alpha + \beta} = a^\alpha a^\beta$


Proof
Let $\map {\sigma_A} a \subseteq \hointr 0 \infty$ be the spectrum of $a$.
Define $e_\alpha : \map {\sigma_A} a \to \hointr 0 \infty$, $e_\beta : \map {\sigma_A} a \to \hointr 0 \infty$ and $e_{\alpha + \beta} : \map {\sigma_A} a \to \hointr 0 \infty$ by:

$\map {e_\alpha} t = t^\alpha$
$\map {e_\beta} t = t^\beta$
$\map {e_{\alpha + \beta} } t = t^{\alpha + \beta}$
for each $t \in \map {\sigma_A} a$. 
For $t \in \map {\sigma_A} a$ we have:

$\map {e_\alpha} t \map {e_\beta} t = t^\alpha t^\beta = t^{\alpha + \beta} = \map {e_{\alpha + \beta} } t$
by Product of Powers.
Hence since the continuous functional calculus is an algebra homomorphism, we obtain:

$\map {e_\alpha} a \map {e_\beta} a = \map {e_{\alpha + \beta} } a$
That is:

$a^\alpha a^\beta = a^{\alpha + \beta}$
$\blacksquare$





