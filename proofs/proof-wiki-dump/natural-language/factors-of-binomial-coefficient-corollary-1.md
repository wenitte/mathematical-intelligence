# 

Source: https://proofwiki.org/wiki/Factors_of_Binomial_Coefficient/Corollary_1

Theorem
For all $r \in \R, k \in \Z$:

$\paren {r - k} \dbinom r k = r \dbinom {r - 1} k$
from which:

$\dbinom r k = \dfrac r {r - k} \dbinom {r - 1} k$ (if $r \ne k$)


Proof













\(\ds r \binom {r - 1} k\)

\(=\)







\(\ds r \frac {\paren {r - 1} \paren {\paren {r - 1} - 1} \cdots \paren {\paren {r - 1} - k + 2} \paren {\paren {r - 1} - k + 1} } {k \paren {k - 1} \paren {k - 2} \cdots 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {r \paren {r - 1} \paren {r - 2} \cdots \paren {r - k + 1} \paren {r - k} } {k \paren {k - 1} \paren {k - 2} \cdots 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {r - k} \frac {r \paren {r - 1} \paren {r - 2} \cdots \paren {r - k + 1} } {k \paren {k - 1} \paren {k - 2} \cdots 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {r - k} \binom r k\)









$\Box$

Then:

$\dbinom r k = \dfrac r {r - k} \dbinom {r - 1} k$
follows from the 

$\paren {r - k} \dbinom r k = r \dbinom {r - 1} k$
by dividing both sides by $r - k$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $\text{C}$




