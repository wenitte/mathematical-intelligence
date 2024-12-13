# 

Source: https://proofwiki.org/wiki/Reflexive_Closure_of_Antisymmetric_Relation_is_Antisymmetric

Theorem
Let $S$ be a set.
Let $RR$ be an antisymmetric relation on $S$.
Let $\RR^=$ be the reflexive closure of $\RR$.

Then $\RR^=$ is also antisymmetric.


Proof
Let $a, b \in S$.
Suppose that $a \mathrel {\RR^=} b$ and $b \mathrel {\RR^=} a$.
By definition of $\RR^=$, this means:

$a \mathrel \RR b$ or $a = b$
$b \mathrel \RR a$ or $b = a$
If $a = b$ or $b = a$ we are done, by definition of an antisymmetric relation.
So suppose $a \mathrel \RR b$ and $b \mathrel \RR a$.
Because $\RR$ is antisymmetric, it follows that $a = b$ in this case as well.

Hence $\RR^=$ is also antisymmetric.
$\blacksquare$





