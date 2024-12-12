# 

Source: https://proofwiki.org/wiki/Canonical_Preordering_of_C*-Algebra_of_Continuous_Functions_Vanishing_at_Infinity



Theorem
Let $X$ be a locally compact Hausdorff space. 
Let $A = \map {\CC_0} X$ be the set of continuous complex-valued functions vanishing at infinity.
Consider $A$ as a $\text C^\ast$-algebra with pointwise addition, pointwise scalar multiplication, pointwise multiplication and pointwise complex conjugation.
Let $\le_A$ be the canonical preordering of $A$.
Let $f, g \in \map {\CC_0} X$. 

We have $f \le_A g$ if and only if $\map g x - \map f x \in \R_{\ge 0}$ for each $x \in X$.


Proof
Sufficient Condition
Suppose that:

$\map g x - \map f x \in \R_{\ge 0}$ for each $x \in X$.
Then from Complex Number equals Conjugate iff Wholly Real we have:

$\overline {\map g x - \map f x} = \map g x - \map f x$
Hence $g - f$ is Hermitian in $A$.
From Spectrum of Element of Space of Continuous Functions Vanishing at Infinity, we have:

$\map {\sigma_A} {g - f} = \paren {g - f} \sqbrk X \cup \set 0 \subseteq \hointr 0 \infty$
So $g - f$ is positive. 
Hence $f \le_A g$. 
$\Box$

Necessary Condition
Suppose that $f \le_A g$.
Then $g - f$ is positive and:

$\map {\sigma_A} {g - f} \subseteq \hointr 0 \infty$
From Spectrum of Element of Space of Continuous Functions Vanishing at Infinity we have:

$\set {\map g x - \map f x : x \in X} \subseteq \map {\sigma_A} {g - f} \subseteq \hointr 0 \infty$
That is:

$\map g x - \map f x \in \R_{\ge 0}$ for each $x \in X$.
$\blacksquare$





