# 

Source: https://proofwiki.org/wiki/Closure_of_Derivative_is_Derivative_in_T1_Space

Theorem
Let $T = \left({S, \tau}\right)$ be a $T_1$ topological space.
Let $A$ be a subset of $S$.

Then

$A'^- = A'$
where

$A'$ denotes the derivative of $A$
$A^-$ denotes the closure of $A$.


Proof













\(\ds A'^-\)

\(=\)







\(\ds A' \cup A' '\)





Closure Equals Union with Derivative














\(\ds \)

\(\subseteq\)







\(\ds A' \cup A'\)





$A' ' \subseteq A'$ by Derivative of Derivative is Subset of Derivative in T1 Space














\(\ds \)

\(=\)







\(\ds A'\)





Set Union is Idempotent



So:

$A'^- \subseteq A'$
Then by  definition of closure:

$A' \subseteq A'^-$
Hence the result by definition of set equality.
$\blacksquare$


Sources
1977: Ryszard Engelking: General Topology
Mizar article TOPGEN_1:33




