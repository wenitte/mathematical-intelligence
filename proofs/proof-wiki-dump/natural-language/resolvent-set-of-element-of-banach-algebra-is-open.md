# 

Source: https://proofwiki.org/wiki/Resolvent_Set_of_Element_of_Banach_Algebra_is_Open

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a Banach algebra over $\C$. 
Let $x \in A$.
Let $\map {\rho_A} x$ be the resolvent set of $x$ in $A$.


There is believed to be a mistake here, possibly a typo.In particular: The resolvent set is only defined for unital algebrasYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Then $\map {\rho_A} x$ is open.


Proof
Without loss of generality suppose that $A$ is unital, swapping $A$ for its unitization if necessary.
Let $\map G A$ be the group of units of $A$. 
Define $S : \C \to A$ by:

$\map S \lambda = \lambda {\mathbf 1}_A - x$
From Resolvent Mapping is Continuous: Continuous, $S$ is continuous.
From Group of Units in Unital Banach Algebra is Open, $\map G A$ is open. 
From the definition of the resolvent set, we have:

$\map {\rho_A} x = \set {\lambda \in \C : \lambda {\mathbf 1}_A - x \in \map G A}$
That is:

$\map {\rho_A} x = S^{-1} \sqbrk {\map G A}$
Since $S$ is continuous, and $\map G A$ is open, $S^{-1} \sqbrk {\map G A}$ is open.
We conclude that $\map {\rho_A} x$ is open.
$\blacksquare$





