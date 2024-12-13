# 

Source: https://proofwiki.org/wiki/Real_and_Imaginary_Parts_of_Complex-Valued_Function_Vanishing_at_Infinity_Vanish_at_Infinity

Theorem
Let $X$ be a locally compact Hausdorff space.
Let $f : X \to \C$ be a complex-valued function vanishing at infinity.

Then $\map \Re f$ and $\map \Im f$ vanish at infinity.


Proof
Let $\epsilon > 0$. 
Since $f$ vanishes at infinity, there exists a compact $K \subseteq X$ such that:

$\cmod {\map f x}^2 < \epsilon^2$ for each $x \in X \setminus K$.
Then we have:

$\paren {\map \Re {\map f x} }^2 + \paren {\map \Im {\map f x} }^2 < \epsilon^2$
So that:

$\paren {\map \Re {\map f x} }^2 < \epsilon^2$
and:

$\paren {\map \Im {\map f x} }^2 < \epsilon^2$
for each $x \in X \setminus K$. 
Then:

$\cmod {\map \Re {\map f x} } < \epsilon$
and:

$\cmod {\map \Im {\map f x} } < \epsilon$
for each $x \in X \setminus K$. 
Hence both $\map \Re f$ and $\map \Im f$ vanish at infinity.
$\blacksquare$





