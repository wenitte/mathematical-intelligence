# 

Source: https://proofwiki.org/wiki/More_than_One_Right_Zero_then_No_Left_Zero

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
If $\struct {S, \circ}$ has more than one left zero, then it has no right zero.
Likewise, if $\struct {S, \circ}$ has more than one right zero, then it has no left zero.


Proof
Let $\struct {S, \circ}$ be an algebraic structure with more than one left zero.
Take any two of these, and call them $z_{L_1}$ and $z_{L_2}$, where $z_{L_1} \ne z_{L_2}$.
Suppose $\struct {S, \circ}$ has a right zero.
Call it $z_R$.
Then, by the behaviour of $z_R$, $z_{L_1}$ and $z_{L_2}$:

$z_{L_1} = z_{L_1} \circ z_R = z_R$
$z_{L_2} = z_{L_2} \circ z_R = z_R$

So $z_{L_1} = z_R = z_{L_2}$, which contradicts the supposition that $z_{L_1}$ and $z_{L_2}$ are different.

Therefore, in an algebraic structure with more than one left zero, there can be no right zero.
$\blacksquare$

The same argument can be applied to an algebraic structure with more than one right zero.





