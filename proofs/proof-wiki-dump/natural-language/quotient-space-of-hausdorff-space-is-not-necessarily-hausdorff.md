# 

Source: https://proofwiki.org/wiki/Quotient_Space_of_Hausdorff_Space_is_not_necessarily_Hausdorff

Theorem
Let $T = \struct {S, \tau}$ be a Hausdorff space.
Let $\RR \subseteq S \times S$ be an equivalence relation on $S$.
Let $T_\RR := \struct {S / \RR, \tau_\RR}$ be the quotient space of $S$ by $\RR$.

Then $T_\RR$ is not necessarily also a Hausdorff space.


Proof
Consider the real number line with the Euclidean topology $\struct {\R, \tau}$.
By Real Number Line satisfies all Separation Axioms, $\struct {\R, \tau}$ is a Hausdorff space.
By Quotient Space of Real Line may not be Kolmogorov, there is a relation $\RR$ on $\R$ such that the quotient space $\struct {\R / \RR, \tau_\RR}$ is not a Kolmogorov space.
Thus the theorem holds by Sequence of Implications of Separation Axioms.
$\blacksquare$ 


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $4$: The Hausdorff condition: $4.2$: Separation axioms




