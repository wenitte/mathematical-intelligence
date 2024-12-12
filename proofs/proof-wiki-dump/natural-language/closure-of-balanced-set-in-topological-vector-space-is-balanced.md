# 

Source: https://proofwiki.org/wiki/Closure_of_Balanced_Set_in_Topological_Vector_Space_is_Balanced

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ be a topological vector space over $\Bbb F$.
Let $B \subseteq X$ be a balanced set.

Then the closure $B^-$ of $B$ is balanced.


Proof
Let $\lambda \in \Bbb F$ have $\cmod \lambda \le 1$. 
Then, we have: 

$\lambda B \subseteq B$
So, from Topological Closure of Subset is Subset of Topological Closure we have: 

$\paren {\lambda B}^- \subseteq B^-$
From Dilation of Closure of Set in Topological Vector Space is Closure of Dilation we have $\paren {\lambda B}^- = \lambda B^-$ and so: 

$\lambda B^- \subseteq B^-$
So $B^-$ is balanced.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.13$: Theorem




