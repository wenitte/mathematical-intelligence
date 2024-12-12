# 

Source: https://proofwiki.org/wiki/Generating_Function_for_mth_Terms_of_Sequence



Theorem
Let $G \left({z}\right)$ be the generating function for the sequence $\left\langle{a_n}\right\rangle$.
Let $m \in \Z_{>0}$ be a (strictly) positive integer.
Let $\omega = e^{2 i \pi / m} = \cos \dfrac {2 \pi} m + i \sin \dfrac {2 \pi} m$.

Then for $r \in \Z$ such that $0 \le r < m$:

$\displaystyle \sum_{n \bmod m \mathop = r} a_n z^n = \dfrac 1 m \sum_{0 \mathop \le k \mathop < m} \omega^{-k r} G \left({\omega^k z}\right)$


Proof













\(\ds \omega^{-k r} \map G {\omega^k z}\)

\(=\)







\(\ds \sum_{j \mathop \ge 0} a_j \omega^{k \paren {j - r} } z^j\)





Definition of Generating Function








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 m \sum_{0 \mathop \le k \mathop < m} \omega^{-k r} \map G {\omega^k z}\)

\(=\)







\(\ds \dfrac 1 m \sum_{0 \mathop \le k \mathop < m} \ \sum_{j \mathop \ge 0} a_j \omega^{k \paren {j - r} } z^j\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 m \sum_{j \mathop \ge 0} a_j z^j \ \sum_{0 \mathop \le k \mathop < m} \omega^{k \paren {j - r} }\)










By definition of $\omega$:

$\omega = \exp \dfrac {2 \pi i} m \implies \omega^m = 1$

and so:














\(\ds \sum_{0 \mathop \le k \mathop < m} \omega^{k \paren {j - r} }\)

\(=\)







\(\ds \begin {cases} \dfrac {1 - \omega^{m \paren {j - r} } } {1 - \omega^{j - r} } & : j - r \not \equiv 0 \pmod m \\ m & : j \equiv r \pmod m \end {cases}\)





Sum of Geometric Progression








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 m \sum_{0 \mathop \le k \mathop < m} \omega^{-k r} \map G {\omega^k z}\)

\(=\)







\(\ds \dfrac 1 m \sum_{j \mathop \ge 0} m a_j \sqbrk {j \equiv r \pmod m} z^j\)





where $\sqbrk \cdots$ is Iverson's convention














\(\ds \)

\(=\)







\(\ds \sum_{n \bmod m \mathop = r} a_n z^n\)









$\blacksquare$


Examples
Example: $m = 3, r = 1$
Let $\omega = e^{2 i \pi / 3} = -\dfrac 1 2 + \dfrac {\sqrt 3} 2 i$.
Then:

$a_1 z + a_4 z^4 + a_7 z^7 + \cdots = \dfrac 1 3 \paren {\map G z + \omega^{-1} \map G {\omega z} + \omega^{-2} \map G {\omega^2 z} }$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(13)$




