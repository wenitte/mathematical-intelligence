# 

Source: https://proofwiki.org/wiki/Complex_Cosine_Function_is_Unbounded



Theorem
The complex cosine function is unbounded.


Proof 1
Let $K \in \R_{>0}$ be an arbitrary real number.
Let $p = \ln {2 K}$.
Let $z = i p$, where $i$ denotes the imaginary unit.

Then:














\(\ds \cos z\)

\(=\)







\(\ds \dfrac {\map \exp {i \paren {i p} } + \map \exp {-i \paren {i p} } } 2\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \dfrac {\exp p + \map \exp {-p} } 2\)





simplifying: $i^2 = -1$














\(\ds \)

\(>\)







\(\ds \dfrac {\exp p} 2\)





as $\map \exp {-p} > 0$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \exp {\ln {2 K} } } 2\)




















\(\ds \)

\(=\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds \cmod {\map \cos {i p} }\)

\(>\)







\(\ds K\)









Thus for any $K$ we can find $z \in \C$ such that $\cmod {\cos z} > K$.
Hence the result by definition of unbounded.
$\blacksquare$


Proof 2
By Complex Cosine Function is Entire, we have that $\cos$ is an entire function. 
Aiming for a contradiction, suppose that $\cos$ is a bounded function.
By Liouville's Theorem, we have that $\cos$ is a constant function.
However, by Cosine of Zero is One: 

$\cos 0 = 1$
and by Cosine of Right Angle: 

$\cos \dfrac \pi 2 = 0$
Therefore, $\cos$ is not a constant function.
This contradicts the statement that $\cos$ is a constant function.
We hence conclude, by Proof by Contradiction, that our assumption that $\cos$ is a bounded function is false.
Hence $\cos$ is unbounded.
$\blacksquare$


Also see
Complex Sine Function is Unbounded




