# 

Source: https://proofwiki.org/wiki/Image_of_Balanced_Set_under_Linear_Transformation_is_Balanced

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ and $Y$ be vector spaces over $\Bbb F$.
Let $E \subseteq X$ be balanced.
Let $T : X \to Y$ be a linear transformation.

Then $\map T E \subseteq Y$ is balanced.


Proof
We aim to show that for all $s \in \R$ with $\cmod s \le 1$, we have: 

$s \map T E \subseteq \map T E$
Let $y \in s \map T E$.
Then there exists $x \in E$ such that $y = s T x$.
From the linearity of $T$, we have: 

$y = \map T {s x}$
Since $x \in E$, we have $s x \in s E$ from the definition of dilation of $E$ by $s$.
Since $E$ is balanced, we have $s E \subseteq E$ and so: 

$s x \in E$
giving:

$y = \map T {s x} \in \map T E$
Since $y \in s \map T E$ was arbitrary, we have $s \map T E \subseteq \map T E$, giving that $\map T E$ is balanced.
$\blacksquare$





