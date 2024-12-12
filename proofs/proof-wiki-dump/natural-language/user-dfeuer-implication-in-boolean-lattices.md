# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Implication_in_Boolean_Lattices

Theorem
Let $(L, \wedge, \vee, \preceq)$ be a Boolean lattice.
Let $a, b \in L$.

Then $a \preceq b \iff \neg a \vee b = \top$.


Proof
Suppose $a \preceq b$.
Then $a \wedge b = a$.
Thus $\neg a \vee \neg b = \neg a$.
So $\neg a \vee b = (\neg a \vee \neg b) \vee b = \top$.

Suppose $\neg a \vee b = \top$.
Then $a \wedge (\neg a \vee b) = (a \wedge \neg a) \vee (a \wedge b) = a \wedge b = a$.
Thus $a \preceq b$.
$\blacksquare$





