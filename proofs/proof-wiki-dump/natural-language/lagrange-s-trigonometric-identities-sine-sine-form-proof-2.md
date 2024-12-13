# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Trigonometric_Identities/Sine/Sine_Form/Proof_2

Theorem













\(\ds \sum_{k \mathop = 0}^n \sin k x\)

\(=\)







\(\ds \sin 0 + \sin x + \sin 2 x + \sin 3 x + \cdots + \sin n x\)




















\(\ds \)

\(=\)







\(\ds \frac {\sin \frac {\paren {n + 1} x} 2 \sin \frac {n x} 2} {\sin \frac x 2}\)









where $x$ is not an integer multiple of $2 \pi$.


Proof
Let $x$ be a real number that is not a integer multiple of $2 \pi$.
Let $k$ be a non-negative integer.
We have, from Euler's Formula:

$\map \exp {i k x} = i \sin k x + \cos k x$
Summing from $k = 0$ to $k = n$, we have: 

$\ds \sum_{k \mathop = 0}^n \map \exp {i k x} = i \sum_{k \mathop = 0}^n \sin k x + \sum_{k \mathop = 0}^n \cos k x$
As $\sin k x$ and $\cos k x$ are both real for real $k, x$, we have: 














\(\ds \sum_{k \mathop = 0}^n \sin k x\)

\(=\)







\(\ds \map \Im {\sum_{k \mathop = 0}^n \map \exp {i k x} }\)




















\(\ds \)

\(=\)







\(\ds \map \Im {\paren {i \sin \frac {n x} 2 + \cos \frac {n x} 2} \frac {\map \sin {\frac {\paren {n + 1} x} 2} } {\sin \frac x 2} }\)





Sum of $\map \exp {i k x}$














\(\ds \)

\(=\)







\(\ds \frac {\sin \frac {\paren {n + 1} x} 2 \sin \frac {n x} 2} {\sin \frac x 2}\)









$\blacksquare$





