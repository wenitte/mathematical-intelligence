# 

Source: https://proofwiki.org/wiki/Real-Valued_Continuous_Function_Vanishing_at_Zero_applied_to_Hermitian_Element_of_Closed_Ideal_of_Unital_C*-Algebra_is_contained_in_Ideal/Corollary

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
From Normed Algebra Embeds into Unitization as Closed Ideal, $A_0$ is a closed ideal of $A$.
Since $\tuple {x, 0}^\ast = \tuple {x^\ast, 0} = \tuple {x, 0}$, $\tuple {x, 0}$ is Hermitian in $A_+$.
The result then follows from Real-Valued Continuous Function Vanishing at Zero applied to Hermitian Element of Closed Ideal of Unital C*-Algebra is contained in Ideal.
$\blacksquare$





