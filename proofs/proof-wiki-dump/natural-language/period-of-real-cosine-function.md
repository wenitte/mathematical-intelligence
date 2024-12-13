# 

Source: https://proofwiki.org/wiki/Period_of_Real_Cosine_Function

Theorem
The period of the real cosine function is $2 \pi$.

That is, $2 \pi$ is the smallest value $L \in \R_{>0}$ such that:

$\forall x \in \R: \cos x = \map \cos {x + L}$


Proof
From Sine and Cosine are Periodic on Reals, we have that $\cos$ is a periodic real function.
Let $L$ be that period.
From Cosine of Angle plus Full Angle:

$\map \cos {x + 2 \pi} = \cos x$
So $L = 2 \pi$ satisfies:

$\forall x \in \R: \cos x = \map \cos {x + L}$

It remains to be shown that $2 \pi$ is the smallest such $L \in \R_{>0}$ with this property.
We have that:














\(\ds \cos \dfrac \pi 2\)

\(=\)







\(\ds 0\)





Cosine of Right Angle














\(\ds \map \cos {\dfrac \pi 2 + \pi}\)

\(=\)







\(\ds 0\)





Cosine of Three Right Angles














\(\ds \map \cos {\dfrac \pi 2 + 2 \pi}\)

\(=\)







\(\ds 0\)





Cosine of Angle plus Full Angle



and for no other $x \in \closedint 0 {2 \pi}$ is $\cos x = 0$.
Hence if there is another smaller $L \in \R_{>0}$ with the property that classifies it as the period of the real cosine function, it can only be $\pi$.

But then we note:














\(\ds \cos 0\)

\(=\)







\(\ds 1\)





Cosine of Zero is One














\(\ds \map \cos {0 + \pi}\)

\(=\)







\(\ds -1\)





Cosine of Straight Angle














\(\ds \)

\(\ne\)







\(\ds \cos 0\)









Hence $\pi$ is not the period of the real cosine function.

Thus $2 \pi$ is the smallest value $L \in \R_{>0}$ such that:

$\forall x \in \R: \cos x = \map \cos {x + L}$
and the result follows.
$\blacksquare$





