# 

Source: https://proofwiki.org/wiki/Boole%27s_Inequality



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $A_1, A_2, \ldots, A_n$ be events in $\Sigma$.

Then:

$\ds \map \Pr {\bigcup_{i \mathop = 1}^n A_i} \le \sum_{i \mathop = 1}^n \map \Pr {A_i}$


Proof
A direct consequence of the facts that:

a Probability Measure is Subadditive
the result Finite Union of Sets in Subadditive Function which gives:
$\ds \map f {\bigcup_{i \mathop = 1}^n A_i} \le \sum_{i \mathop = 1}^n \map f {A_i}$
for a subadditive function $f$.
$\blacksquare$


Also known as
This inequality is also known as union bound.


Source of Name
This entry was named for George Boole.


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.11$: Problems: $3$




