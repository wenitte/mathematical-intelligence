# 

Source: https://proofwiki.org/wiki/Elements_of_Unital_C*-Subalgebra_of_C*-Algebra_is_Positive_in_Subalgebra_iff_Positive_in_whole_Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra with identity element ${\mathbf 1}_A$.
Let $B \subseteq A$ be a unital $\text C^\ast$-subalgebra of $A$. 
Let $x \in B$.

Then $x$ is positive in $B$ if and only if it is positive in $A$.


Proof
Since $\ast$ on $B$ is obtained by restriction, we have that $x$ is Hermitian in $B$ if and only if it is Hermitian in $A$.
From Spectrum of Element of Unital C*-Subalgebra of Unital C*-Algebra, we have:

$\map {\sigma_B} x = \map {\sigma_A} x$
Hence $\map {\sigma_B} x \subseteq \hointr 0 \infty$ if and only if $\map {\sigma_A} x \subseteq \hointr 0 \infty$.
Hence $x$ is positive in $B$ if and only if it is positive in $A$.
$\blacksquare$





