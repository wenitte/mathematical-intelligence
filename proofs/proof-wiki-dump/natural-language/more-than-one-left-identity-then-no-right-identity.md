# 

Source: https://proofwiki.org/wiki/More_than_one_Left_Identity_then_no_Right_Identity



Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
If $\struct {S, \circ}$ has more than one left identity, then it has no right identity.


Proof
Let $\struct {S, \circ}$ be an algebraic structure with more than one left identity.
Take any two of these, and call them $e_{L_1}$ and $e_{L_2}$, where $e_{L_1} \ne e_{L_2}$.
Suppose $\struct {S, \circ}$ has a right identity.
Call this right identity $e_R$.
Then, by the behaviour of $e_R$, $e_{L_1}$ and $e_{L_2}$:

$e_{L_1} = e_{L_1} \circ e_R = e_R$
$e_{L_2} = e_{L_2} \circ e_R = e_R$

So $e_{L_1} = e_R = e_{L_2}$, which contradicts the supposition that $e_{L_1}$ and $e_{L_2}$ are different.

Therefore, in an algebraic structure with more than one left identity, there can be no right identity.
$\blacksquare$


Also see
More than one Right Identity then no Left Identity


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Semigroups: Exercise $3 \ \text{(ii)}$




