# 

Source: https://proofwiki.org/wiki/More_than_one_Right_Identity_then_no_Left_Identity

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
If $\struct {S, \circ}$ has more than one right identity, then it has no left identity.


Proof
Let $\struct {S, \circ}$ be an algebraic structure with more than one right identity.
Take any two of these, and call them $e_{R_1}$ and $e_{R_2}$, where $e_{R_1} \ne e_{R_2}$.
Suppose $\struct {S, \circ}$ has a left identity.
Call this left identity $e_L$.
Then, by the behaviour of $e_L$, $e_{R_1}$ and $e_{R_2}$:

$e_{R_1} = e_{R_1} \circ e_L = e_L$
$e_{R_2} = e_{R_2} \circ e_L = e_L$

So $e_{R_1} = e_L = e_{R_2}$, which contradicts the supposition that $e_{R_1}$ and $e_{R_2}$ are different.

Therefore, in an algebraic structure with more than one right identity, there can be no left identity.
$\blacksquare$


Also see
More than one Left Identity then no Right Identity




