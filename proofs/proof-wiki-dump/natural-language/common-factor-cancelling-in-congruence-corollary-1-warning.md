# 

Source: https://proofwiki.org/wiki/Common_Factor_Cancelling_in_Congruence/Corollary_1/Warning

Theorem
Let $a, b, x, y, m \in \Z$.
Let:

$a x \equiv b y \pmod m$ and $a \equiv b \pmod m$
where $a \equiv b \pmod m$ denotes that $a$ is congruent modulo $m$ to $b$.

Let $a$ not be coprime to $m$.
Then it is not necessarily the case that:

$x \equiv y \pmod m$


Proof
Proof by Counterexample:
Let $a = 6, b = 21, x = 7, y = 12, m = 15$.
We note that $\map \gcd {6, 15} = 3$ and so $6$ and $15$ are not coprime.

We have that:














\(\ds 6\)

\(\equiv\)







\(\ds 6\)

\(\ds \pmod {15}\)


















\(\ds 21\)

\(\equiv\)







\(\ds 6\)

\(\ds \pmod {15}\)












\(\ds \leadsto \ \ \)





\(\ds a\)

\(\equiv\)







\(\ds b\)

\(\ds \pmod {15}\)








Then:














\(\ds 6 \times 7\)

\(=\)







\(\ds 42\)




















\(\ds \)

\(\equiv\)







\(\ds 12\)

\(\ds \pmod {15}\)


















\(\ds 21 \times 12\)

\(=\)







\(\ds 252\)




















\(\ds \)

\(\equiv\)







\(\ds 12\)

\(\ds \pmod {15}\)












\(\ds \leadsto \ \ \)





\(\ds a x\)

\(\equiv\)







\(\ds b y\)

\(\ds \pmod {15}\)








But:














\(\ds 7\)

\(\equiv\)







\(\ds 7\)

\(\ds \pmod {15}\)


















\(\ds 12\)

\(\equiv\)







\(\ds 12\)

\(\ds \pmod {15}\)












\(\ds \leadsto \ \ \)





\(\ds x\)

\(\not \equiv\)







\(\ds y\)

\(\ds \pmod {15}\)







$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-1}$ Basic Properties of Congruences
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $22$




