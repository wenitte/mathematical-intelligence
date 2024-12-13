# 

Source: https://proofwiki.org/wiki/Law_of_Sines/Proof_2

Theorem
Let $\triangle ABC$ be a triangle whose sides $a, b, c$ are such that $a$ is opposite $A$, $b$ is opposite $B$ and $c$ is opposite $C$.
Then:

$\dfrac a {\sin A} = \dfrac b {\sin B} = \dfrac c {\sin C} = 2 R$
where $R$ is the circumradius of $\triangle ABC$.


Proof
Construct the circumcircle of $\triangle ABC$, let $O$ be the circumcenter and $R$ be the circumradius.
Construct $\triangle AOB$ and let $E$ be the foot of the altitude of $\triangle AOB$ from $O$.


By the Inscribed Angle Theorem:

$\angle ACB = \dfrac {\angle AOB} 2$
From the definition of the circumcenter:

$AO = BO$
From the definition of altitude and the fact that all right angles are congruent:

$\angle AEO = \angle BEO$

Therefore from Pythagoras's Theorem:

$AE = BE$
and then from Triangle Side-Side-Side Congruence:

$\angle AOE = \angle BOE$
Thus:

$\angle AOE = \dfrac {\angle AOB} 2$
and so:

$\angle ACB = \angle AOE$
Then by the definition of sine:

$\sin C = \map \sin {\angle AOE} = \dfrac {c / 2} R$
and so:

$\dfrac c {\sin C} = 2 R$

The same argument holds for all three angles in the triangle, and so:

$\dfrac c {\sin C} = \dfrac b {\sin B} = \dfrac a {\sin A} = 2 R$
$\blacksquare$





