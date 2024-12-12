# 

Source: https://proofwiki.org/wiki/Element_of_C*-Algebra_is_Positive_iff_Positive_in_Unitization

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra. 
Let $A_+$ be the unitization of $A$.
Define:

$\tuple {x, \lambda}^\ast = \tuple {x^\ast, \overline \lambda}$
for each $\tuple {x, \lambda} \in A_+$.
Let $\norm {\, \cdot \,}_\ast$ be such that $\struct {A_+, \ast, \norm {\, \cdot \,}_\ast}$ is a unital $\text C^\ast$-algebra.
Let $a \in A$.

Then $a$ is positive in $A$ if and only if $\tuple {a, 0}$ is positive in $A_+$. 


Corollary
Let $\le_A$ be the canonical preordering of $A$.
Let $\le_+$ be the canonical preordering of $A_+$.
Let $a, b \in A$.

Then:

$a \le_A b$ if and only if $\tuple {a, 0} \le_+ \tuple {b, 0}$


Proof
The existence of $\norm {\, \cdot \,}_\ast$ follows from:

Existence of Unitization of C*-Algebra if $A$ is non-unital
Existence of Unique C* Norm on Unitization of Unital C*-Algebra if $A$ is unital
From Element of *-Algebra is Hermitian iff Hermitian in Unitization:

$a$ is Hermitian in $A$ if and only if $\tuple {a, 0}$ is Hermitian in $A_+$
From Spectrum of Element in Unitization of Unital Algebra and the definition of the spectrum in a non-unital algebra, we have:

$\map {\sigma_A} a \subseteq \map {\sigma_{A_+} } {\tuple {a, 0} } \subseteq \map {\sigma_A} a \cup \set 0$
Suppose that $a$ is positive in $A$, then:

$\map {\sigma_A} a \subseteq \hointr 0 \infty$
and so:

$\map {\sigma_{A_+} } {\tuple {a, 0} } \subseteq \hointr 0 \infty$
so $\tuple {a, 0}$ is positive in $A_+$.
Suppose that $\tuple {A, 0}$ is positive in $A_+$, then:

$\map {\sigma_{A_+} } {\tuple {a, 0} } \subseteq \hointr 0 \infty$
and so:

$\map {\sigma_A} a \subseteq \map {\sigma_{A_+} } {\tuple {a, 0} } \subseteq \hointr 0 \infty$
so $\map {\sigma_A} a$ and $a$ is positive in $A$.
$\blacksquare$





