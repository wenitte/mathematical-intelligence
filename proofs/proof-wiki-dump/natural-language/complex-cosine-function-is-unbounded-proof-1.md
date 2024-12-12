# 

Source: https://proofwiki.org/wiki/Complex_Cosine_Function_is_Unbounded/Proof_1

Theorem
The complex cosine function is unbounded.


Proof
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


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.5$. The Functions $e^z$, $\cos z$, $\sin z$




