# 

Source: https://proofwiki.org/wiki/Highest_Power_of_2_Dividing_Numerator_of_Sum_of_Odd_Reciprocals



Theorem
Let:

$S = \dfrac p q = \ds \sum_{k \mathop = 1}^n \dfrac 1 {2 k - 1}$
where $\dfrac p q$ is the canonical form of $S$.
Let $n = 2^k m$ where $m$ is odd.

Then the largest power of $2$ that divides $p$ is $2^{2 k}$.


Proof
We have that:

$\ds \sum_{k \mathop = 1}^n \dfrac 1 {2 k - 1} = \sum_{i \mathop = 0}^{M - 1} \paren {\dfrac 1 {i \times 2^{r + 1} + 1} + \dfrac 1 {i \times 2^{r + 1} + 3} + \cdots + \dfrac 1 {\paren {i + 1} \times 2^{r + 1} - 1} }$
where $k = 2^r M$ where $M$ is odd.
Collect the $r$ terms in the parenthesis on the right hand side of the $i$th term under a single common denominator $P_i$.
Then the resulting numerators will each consist of $2^r$ terms, each of the form $\dfrac {P_i} {R_i}$, where $R_i$ is a distinct odd residue of $2^{r + 1}$.
These $\dfrac {P_i} {R_i}$ must themselves also be the distinct odd residue of $2^{r + 1}$, in some order.

The odd residues of $2^{r + 1}$ are:

$1, 3, 5, \dots, 2^{r + 1} - 1$
Their sum is:














\(\ds \)

\(\)







\(\ds 1 + 3 + \cdots + \paren {2^{r + 1} - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {1 + 2^{r + 1} - 1} 2^r} 2\)





Sum of Arithmetic Sequence














\(\ds \)

\(=\)







\(\ds 2^{2 r}\)










Thus each of the $M$ numerators is of the form $2^{2 r} M_i$, where $M_i$ is odd.
Thus the numerator of $S$ is in the form $2^{2 r} Q$ where $Q$ is the sum of an odd number of odd terms.
Therefore $Q$ is itself odd.
Hence, if $2^r$ is the largest power of $2$ which divides $k$, then $2^{2 r}$ is the largest power of $2$ dividing the numerator of $S$.
$\blacksquare$


Historical Note
This result was posed as an elementary problem by John Lewis Selfridge in March $1960$: Problems for Solution: E1406-E1410 (American Mathematical Monthly Vol. 67: p. 290)  www.jstor.org/stable/2309704.
He notes that H.S. Shapiro and D.L. Slotnick leave the problem unsolved in an article in a $1959$ commercial publication, where they suggest that:

an estimate [of this] power of $2$ ... seems in general to be a difficult number theoretic problem.

In the event, $7$ contributors are reported as having submitted a solution, of which that by D.L. Silverman was the one published.

Among the solvers was Donald E. Knuth, who included the problem as an exercise of difficulty level $M33$ in his The Art of Computer Programming: Volume 1: Fundamental Algorithms.


Sources
1960: J. Selfridge and D.L. Silverman: E1408: The Highest Power of $2$ in the Numerator of $\sum_{i \mathop = 1}^k 1 / \paren {2 i - 1}$ (Amer. Math. Monthly Vol. 67: pp. 924 – 925)  www.jstor.org/stable/2309478
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $18$




