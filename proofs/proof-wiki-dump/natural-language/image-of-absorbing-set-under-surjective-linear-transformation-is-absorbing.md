# 

Source: https://proofwiki.org/wiki/Image_of_Absorbing_Set_under_Surjective_Linear_Transformation_is_Absorbing

Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ and $Y$ be vector spaces over $\GF$. 
Let $A \subseteq X$ be an absorbing set.
Let $T : X \to Y$ be a surjective linear transformation. 

Then $T \sqbrk A$ is an absorbing set.


Proof
Let $y \in Y$.
Since $T$ is surjective, there exists $x \in X$ such that $y = T x$.
Since $A$ is absorbing, there exists $t \in \R_{> 0}$ such that:

$x \in \alpha A$ for $\alpha \in \C$ with $\cmod \alpha \ge t$.
Then:

$y = T x \in T \sqbrk {\alpha A}$ for $\alpha \in \C$ with $\cmod \alpha \ge t$.
From Image of Dilation of Set under Linear Transformation is Dilation of Image, we have:

$y \in \alpha T \sqbrk A$ for $\alpha \in \C$ with $\cmod \alpha \ge t$.
So $T \sqbrk A$ is absorbing.
$\blacksquare$





