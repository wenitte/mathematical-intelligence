# 

Source: https://proofwiki.org/wiki/Complex_Conjugate_of_Complex-Valued_Function_Vanishing_at_Infinity_Vanishes_at_Infinity

Theorem
Let $X$ be a locally compact Hausdorff space. 
Let $f : X \to \C$ be a complex-valued function vanishing at infinity.
Define $\overline f : X \to \C$ by:

$\map {\overline f} x = \overline {\map f x}$
for each $x \in X$. 

Then $\overline f$ is a complex-valued function vanishing at infinity.


Proof
Let $\epsilon > 0$.
Then since $f$ vanishes at infinity, there exists a compact set $K \subseteq X$ such that:

$\cmod {\map f x} < \epsilon$ for all $x \in X \setminus K$.
From Complex Modulus equals Complex Modulus of Conjugate, we then have:

$\cmod {\overline {\map f x} } < \epsilon$ for all $x \in X \setminus K$.
Since $\epsilon$ was arbitrary: 

$\overline f$ is a complex-valued function vanishing at infinity.
$\blacksquare$





