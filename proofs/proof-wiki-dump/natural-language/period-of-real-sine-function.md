# 

Source: https://proofwiki.org/wiki/Period_of_Real_Sine_Function

Theorem
The period of the real sine function is $2 \pi$.

That is, $2 \pi$ is the smallest value $L \in \R_{>0}$ such that:

$\forall x \in \R: \sin x = \map \sin {x + L}$


Proof
From Sine and Cosine are Periodic on Reals, we have that $\sin$ is a periodic real function.
Let $L$ be that period.
From Sine of Angle plus Full Angle:

$\map \sin {x + 2 \pi} = \sin x$
So $L = 2 \pi$ satisfies:

$\forall x \in \R: \sin x = \map \sin {x + L}$

It remains to be shown that $2 \pi$ is the smallest such $L \in \R_{>0}$ with this property.
We have that:














\(\ds \sin 0\)

\(=\)







\(\ds 0\)





Sine of Zero is Zero














\(\ds \map \sin {0 + \pi}\)

\(=\)







\(\ds 0\)





Sine of Straight Angle














\(\ds \cos \map \cos {0 + 2 \pi}\)

\(=\)







\(\ds 0\)





Sine of Angle plus Full Angle



and for no other $x \in \closedint 0 {2 \pi}$ is $\sin x = 0$.
Hence if there is another smaller $L \in \R_{>0}$ with the property that classifies it as the period of the real sine function, it can only be $\pi$.

But then we note:














\(\ds \sin \dfrac \pi 2\)

\(=\)







\(\ds 1\)





Sine of Right Angle














\(\ds \map \sin {\dfrac \pi 2 + \pi}\)

\(=\)







\(\ds -1\)





Sine of Three Right Angles














\(\ds \)

\(\ne\)







\(\ds \sin \dfrac \pi 2\)









Hence $\pi$ is not the period of the real sine function.

Thus $2 \pi$ is the smallest value $L \in \R_{>0}$ such that:

$\forall x \in \R: \sin x = \map \sin {x + L}$
and the result follows.
$\blacksquare$


Sources
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $1$. Functions: $1.5$ Trigonometric or Circular Functions: $1.5.2$ Sine Function




