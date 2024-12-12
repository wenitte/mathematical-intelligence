# 

Source: https://proofwiki.org/wiki/Congruence_by_Factors_of_Modulo/Warning

Theorem
Let $a, b, r, s \in \Z$.
Let $r$ not be coprime to $s$.

Then it is not necessarily the case that:

$a \equiv b \pmod {r s}$ if and only if $a \equiv b \pmod r$ and $a \equiv b \pmod s$
where $a \equiv b \pmod r$ denotes that $a$ is congruent modulo $r$ to $b$.


Proof
Proof by Counterexample:
Let $a = 30, b = 40, r = 2, s = 10$.
We have that:














\(\ds 30\)

\(\equiv\)







\(\ds 40\)

\(\ds \pmod 2\)


















\(\ds 30\)

\(\equiv\)







\(\ds 40\)

\(\ds \pmod {10}\)








But note that:












\(\ds 30\)

\(\not \equiv\)







\(\ds 40\)

\(\ds \pmod {20}\)







$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $23$




