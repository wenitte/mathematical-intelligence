# 

Source: https://proofwiki.org/wiki/Normed_Algebra_Embeds_into_Unitization_as_Closed_Ideal

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {A, \norm {\, \cdot \,} }$ be a normed algebra over $\GF$ that is not unital as an algebra. 
Let $\struct {A_+, \norm {\, \cdot \,}_{A_+} }$ be the normed unitization of $\struct {A, \norm {\, \cdot \,} }$.
Let:

$A_0 = \set {\tuple {x, 0} : x \in A} \subseteq A_+$

Then $A_0$ is a closed ideal of $A$.


Proof
From Algebra over Field Embeds into Unitization as Ideal, $A_0$ is an ideal of $A$.
From Norm on Unitization of Normed Algebra is Equivalent to Direct Product Norm, $\norm {\, \cdot \,}_{A_+}$ is equivalent to the direct product norm $\norm {\, \cdot \,}_{A \times \GF}$.
Let $\sequence {\tuple {x_n, 0} }_{n \in \N}$ be a convergent sequence in $\struct {A_+, \norm {\, \cdot \,}_{A_+} }$ with limit $\tuple {x, \lambda} \in A_+$.
From Convergence in Direct Product Norm and Convergent Sequences in Vector Spaces with Equivalent Norms Coincide, we have $x_n \to x$ and $\lambda = 0$.
So every convergent sequence in $A_0$ has a limit in $A_0$.
So by the definition of a closed set in a normed vector space, $A_0$ is closed.
$\blacksquare$





