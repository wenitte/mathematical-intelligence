# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Null_Set_is_A.E._Equal_to_Zero

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $N$ be a $\mu$-null set. 

Then: 

$\chi_N = 0$ $\mu$-almost everywhere.
where $\chi_N$ is the characteristic function of $N$. 


Corollary
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $N$ be a $\mu$-null set. 

Then: 

$\chi_{X \setminus N} = 1$ $\mu$-almost everywhere.
where $\chi_{X \setminus N}$ is the characteristic function of $X \setminus N$. 


Proof
Let $x \in X$ be such that: 

$\map {\chi_N} x \ne 0$
Then. since $\map {\chi_N} x \in \set {0, 1}$: 

$\map {\chi_N} x = 1$
which is equivalent to: 

$x \in N$
from the definition of a characteristic function.
So:

if $x \in X$ is such that $\map {\chi_N} x \ne 0$, then $x \in N$.
Since $N$ is a $\mu$-null set, we have: 

$\chi_N = 0$ $\mu$-almost everywhere.
$\blacksquare$





