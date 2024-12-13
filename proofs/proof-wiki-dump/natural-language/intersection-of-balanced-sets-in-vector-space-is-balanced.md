# 

Source: https://proofwiki.org/wiki/Intersection_of_Balanced_Sets_in_Vector_Space_is_Balanced

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ be a vector space over $\Bbb F$. 
Let $\sequence {E_\alpha}_{\alpha \mathop \in I}$ be an $I$-indexed family of balanced subsets of $X$.

Then:

$\ds E = \bigcap_{\alpha \mathop \in I} E_\alpha$ is balanced.


Proof
Let $x \in E$.
Then $x \in E_\alpha$ for all $\alpha \in I$. 
Let $\lambda \in \Bbb F$ have $\cmod \lambda \le 1$.
Since $E_\alpha$ is balanced for each $\alpha \in I$, we have $\lambda x \in E_\alpha$ for each $\alpha \in I$.
So $\lambda x \in E$.
$\blacksquare$





