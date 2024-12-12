# 

Source: https://proofwiki.org/wiki/Arens-Fort_Space_is_Paracompact

Theorem
Let $T = \struct {S, \tau}$ be the Arens-Fort space.

Then $T$ is a paracompact space.


Proof 1
Let $\CC$ be any open cover of $T$.
Let $H \in \CC$ be any open set which contains $\tuple {0, 0}$.
For all $s \in S$ such that $s \ne \tuple {0, 0}$, we have that $\set s$ is open in $T$ by definition of the Arens-Fort space.
So the open cover of $T$ which consists of $H$ together with all the open sets $\set s$, where $s \in S \setminus H$ is a refinement of $T$ which is locally finite.
Hence the result, by definition of paracompact space.
$\blacksquare$


Proof 2
We have that:

The Arens-Fort Space is Completely Normal.
The Arens-Fort Space is Lindelöf.
From Sequence of Implications of Separation Axioms, it follows that $T$ is a $T_3$ space.
The result follows from Lindelöf $T_3$ Space is Paracompact.
$\blacksquare$





