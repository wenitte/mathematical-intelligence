# 

Source: https://proofwiki.org/wiki/Double_of_Antiperiod_is_Period

Theorem
Let $f: \R \to \R$ be a real antiperiodic function with an anti-period of $A$.

Then $f$ is also periodic with a period of $2A$.


Proof
Let $L_f$ be the set of all periodic elements of $f$.
By Periodic Element is Multiple of Antiperiod and Absolute Value of Real Number is not less than Divisors:

$\forall p \in L_f: A \divides p \land A \le p$

Suppose there is a $p \in L_f$ such that $p = A$. 
Then: 














\(\ds \map f x\)

\(=\)







\(\ds \map f {x + A}\)




















\(\ds \)

\(=\)







\(\ds -\map f x\)














\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(=\)







\(\ds 0\)









which contradicts Constant Function has no Period.
Therefore $\forall p \in L_f: A \divides p \land A < p$.

The smallest number $r$ such that $A < r \land A \divides r$ is $2A$.
But by Double of Antiperiodic Element is Periodic, this is a periodic element of $f$.
Hence the result.
$\blacksquare$





