# 

Source: https://proofwiki.org/wiki/Continuous_Function_Vanishing_at_Zero_applied_to_Normal_Element_of_Closed_Ideal_of_Unital_C*-Algebra_is_contained_in_Ideal/Corollary

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $\struct {A_+, \ast, \norm {\, \cdot \,}_\ast}$ be the unitization of $\struct {A, \ast, \norm {\, \cdot \,} }$.
Let $A_0 = \set {\tuple {a, 0} : a \in A}$. 
Let $x \in I$ be normal.
Let $\map {\sigma_{A_+} } x \subseteq \R$ be the spectrum of $\tuple {x, 0}$ in $A_+$.
Let $f : \map {\sigma_{A_+} } x \to \R$ be a continuous function with $\map f 0 = 0$.
Let $\map f {\tuple {x, 0} }$ be obtained from the continuous functional calculus.

Then $\map f {\tuple {x, 0} } \in A_0$.
Hence there exists $u \in A$ such that $\map f {\tuple {x, 0} } = \tuple {u, 0}$.  


Proof
From Normed Algebra Embeds into Unitization as Closed Ideal, $A_0$ is a closed ideal of $A$.
We have that $\tuple {x, 0}$ is normal in $A_+$.
The result follows from Continuous Function Vanishing at Zero applied to Normal Element of Closed Ideal of Unital C*-Algebra is contained in Ideal.
$\blacksquare$





