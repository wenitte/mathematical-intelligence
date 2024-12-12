# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Null_Set_is_A.E._Equal_to_Zero/Corollary

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $N$ be a $\mu$-null set. 

Then: 

$\chi_{X \setminus N} = 1$ $\mu$-almost everywhere.
where $\chi_{X \setminus N}$ is the characteristic function of $X \setminus N$. 


Proof
From Characteristic Function of Set Difference, we have: 

$\chi_{X \setminus N} = \chi_X - \chi_{X \cap N}$
From Intersection with Subset is Subset, we therefore have: 

$\map {\chi_{X \setminus N} } x = 1 - \map {\chi_N} x$
for each $x \in X$.
From Characteristic Function of Null Set is A.E. Equal to Zero, we have: 

$\chi_N = 0$ $\mu$-almost everywhere.
So we have, from Pointwise Addition preserves A.E. Equality:

$1 - \chi_N = 1$ $\mu$-almost everywhere.
So:

$\chi_{X \setminus N} = 1$ $\mu$-almost everywhere.
$\blacksquare$





