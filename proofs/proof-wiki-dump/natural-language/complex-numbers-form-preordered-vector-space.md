# 

Source: https://proofwiki.org/wiki/Complex_Numbers_form_Preordered_Vector_Space

Theorem
Consider the complex numbers $\C$ as a vector space over itself.
Define the relation $\ge^\C$ by:

$z \ge^\C w$
if and only if:

$z - w \in \hointr 0 \infty$
for each $z, w \in \C$.

Then $\struct {\C, \ge^\C}$ is a preordered vector space.


Proof
From Characterization of Preordered Vector Spaces, it is enough to show that $\hointr 0 \infty$ is a convex cone.
Let $x \in \hointr 0 \infty$ and $\alpha \in \R_{\ge 0}$. 
Then $\alpha x \ge 0$, so $\alpha x \in \hointr 0 \infty$.
So $\hointr 0 \infty$ is a cone.
Now let $x, y \in \hointr 0 \infty$. 
Then we have $x + y \ge 0$, so $x + y \in \hointr 0 \infty$.
So $\hointr 0 \infty$ is a convex cone.
$\blacksquare$





