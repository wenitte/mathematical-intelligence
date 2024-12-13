# 

Source: https://proofwiki.org/wiki/Second_Supplement_to_Law_of_Quadratic_Reciprocity



Theorem
$\quad \paren {\dfrac 2 p} = \paren {-1}^{\paren {p^2 - 1} / 8} = \begin {cases}
+1 & : p \equiv \pm 1 \pmod 8 \\
-1 & : p \equiv \pm 3 \pmod 8
\end {cases}$
where $\paren {\dfrac 2 p}$ is defined as the Legendre symbol.


Proof
Consider the numbers in the set $S = \set {2 \times 1, 2 \times 2, 2 \times 3, \dots, 2 \times \dfrac {p - 1} 2} = \set {2, 4, 6, \dots, p - 1}$.
From Gauss's Lemma:

$\paren {\dfrac 2 p} = \paren {-1}^n$
where $n$ is the number of elements in $S$ whose least positive residue modulo $p$ is greater than $\dfrac p 2$.
As they are, the elements of $S$ are already least positive residues of $p$ (as they are all less than $p$).
What we need to do is count how many are greater than $\dfrac p 2$.

We see that:

$2 k > \dfrac p 2 \iff k > \dfrac p 4$
So the first $\floor {\dfrac p 4}$ elements of $S$ are not greater than $\dfrac p 2$, where $\floor {\dfrac p 4} $ is the floor function of $\dfrac p 4$.
The rest of the elements of $S$ are greater than $\dfrac p 2$.

So we have:

$n = \dfrac {p - 1} 2 - \floor {\dfrac p 4}$
Consider the four possible residue classes modulo $8$ of the odd prime $p$.

$p = 8 k + 1$:














\(\ds p\)

\(=\)







\(\ds 8 k + 1\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(=\)







\(\ds 4 k - \floor {2 k + \frac 1 4}\)




















\(\ds \)

\(=\)







\(\ds 4 k - 2 k\)




















\(\ds \)

\(=\)







\(\ds 2k\)










$p = 8 k + 3$:














\(\ds p\)

\(=\)







\(\ds 8 k + 3\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(=\)







\(\ds 4 k + 1 - \floor {2 k + \frac 3 4}\)




















\(\ds \)

\(=\)







\(\ds 4 k + 1 - 2 k\)




















\(\ds \)

\(=\)







\(\ds 2 k + 1\)










$p = 8 k + 5$:














\(\ds p\)

\(=\)







\(\ds 8 k + 5\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(=\)







\(\ds 4 k + 2 - \floor {2 k + \frac 5 4}\)




















\(\ds \)

\(=\)







\(\ds 4 k + 2 - \paren {2 k + 1}\)




















\(\ds \)

\(=\)







\(\ds 2 k + 1\)










$p = 8 k + 7$:














\(\ds p\)

\(=\)







\(\ds 8 k + 7\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(=\)







\(\ds 4 k + 3 - \floor {2 k + \frac 7 4}\)




















\(\ds \)

\(=\)







\(\ds 4 k + 3 - \paren {2 k + 1}\)




















\(\ds \)

\(=\)







\(\ds 2 k + 2\)










We see that $n$ is even when $p = 8 k + 1$ or $p = 8 k + 7$ and odd in the other two cases.
So from Gauss's Lemma, we have:














\(\ds \paren {\dfrac 2 p}\)

\(=\)







\(\ds \paren {-1}^n = 1\)





when $p = 8 k + 1$ or $p = 8 k + 7$














\(\ds \paren {\dfrac 2 p}\)

\(=\)







\(\ds \paren {-1}^n = -1\)





when $p = 8 k + 3$ or $p = 8 k + 5$



As $7 \equiv -1 \pmod 8$ and $5 \equiv -3 \pmod 8$ the result follows.
$\blacksquare$


Also see
Law of Quadratic Reciprocity
First Supplement to Law of Quadratic Reciprocity


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $47 \ \text{b)}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): quadratic reciprocity, law of
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): quadratic reciprocity, law of




