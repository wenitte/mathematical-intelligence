# 

Source: https://proofwiki.org/wiki/Dilation_of_Convex_Set_containing_Zero_Vector_by_Real_Number_between_0_and_1

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a vector space over $\GF$.
Let $C$ be a convex set with ${\mathbf 0}_X \in C$.
Let $t \in \closedint 0 1$.

Then:

$t C \subseteq C$


Proof
Let $x \in t C$.
Then we have $x \in t C + \paren {1 - t} {\mathbf 0}_X$.
Since ${\mathbf 0}_X \in C$, we have $x \in t C + \paren {1 - t} C$.
By definition 2 of a convex set, we have $t C + \paren {1 - t} C \subseteq C$.
So we have $x \in C$.
So $x \in t C$ implies that $x \in C$.
So $t C \subseteq C$.
$\blacksquare$





