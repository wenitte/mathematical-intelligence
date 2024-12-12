# 

Source: https://proofwiki.org/wiki/Generating_Function_for_mth_Terms_of_Sequence/Examples/m_%3D_3,_r_%3D_1

Example of Generating Function for mth Terms of Sequence
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
Let $\omega = e^{2 i \pi / 3} = -\dfrac 1 2 + \dfrac {\sqrt 3} 2 i$.
Then:

$a_1 z + a_4 z^4 + a_7 z^7 + \cdots = \dfrac 1 3 \paren {\map G z + \omega^{-1} \map G {\omega z} + \omega^{-2} \map G {\omega^2 z} }$


Proof
From Generating Function for mth Terms of Sequence, for $r \in \Z$ such that $0 \le r < m$:

$\ds \sum_{n \bmod m \mathop = r} a_n z^n = \dfrac 1 m \sum_{0 \mathop \ge k \mathop < m} \omega^{-k r} \map G {\omega^k z}$

Setting $m = 3$ and $r - 1$:














\(\ds \sum_{n \bmod 3 \mathop = 1} a_n z^n\)

\(=\)







\(\ds \dfrac 1 3 \sum_{0 \mathop \ge k \mathop < 3} \omega^{-k} \map G {\omega^k z}\)














\(\ds \leadsto \ \ \)





\(\ds a_1 z + a_4 z^4 + a_7 z^7 + \cdots\)

\(=\)







\(\ds \dfrac 1 3 \paren {\omega^{-0} \map G {\omega^0 z} + \omega^{-1} \map G {\omega^1 z} + \omega^{-2} \map G {\omega^2 z} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 3 \paren {\map G z + \omega^{-1} \map G {\omega z} + \omega^{-2} \map G {\omega^2 z} }\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions




