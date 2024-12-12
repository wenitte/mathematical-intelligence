# 

Source: https://proofwiki.org/wiki/Factors_of_Binomial_Coefficient



Theorem
For all $r \in \R, k \in \Z$:

$k \dbinom r k = r \dbinom {r - 1} {k - 1}$
where $\dbinom r k$ is a binomial coefficient.

Hence:

$\dbinom r k = \dfrac r k \dbinom {r - 1} {k - 1}$ (if $k \ne 0$)
and:

$\dfrac 1 r \dbinom r k = \dfrac 1 k \dbinom {r - 1} {k - 1}$ (if $k \ne 0$ and $r \ne 0$)


Corollary 1
For all $r \in \R, k \in \Z$:

$\paren {r - k} \dbinom r k = r \dbinom {r - 1} k$
from which:

$\dbinom r k = \dfrac r {r - k} \dbinom {r - 1} k$ (if $r \ne k$)


Corollary 2
For all $r \in \R, k \in \Z$:

$\paren {r - k + 1} \dbinom r {k - 1} = k \dbinom r k$


Complex Numbers
For all $z, w \in \C$ such that it is not the case that $z$ is a negative integer and $w$ an integer:

$\dbinom z w = \dfrac z w \dbinom {z - 1} {w - 1}$
where $\dbinom z w$ is a binomial coefficient.


Proof
If $k = 0$ then $\dbinom r k = r \dbinom {r - 1} {k - 1} = 0$ by definition.

Otherwise:














\(\ds k \binom r k\)

\(=\)







\(\ds k \frac {r^{\underline k} } {k!}\)




















\(\ds \)

\(=\)







\(\ds k \frac {r \paren {r - 1} \paren {r - 2} \dotsm \paren {r - k + 1} } {k \paren {k - 1} \paren {k - 2} \dotsm 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {r \paren {r - 1} \paren {r - 2} \dotsm \paren {r - k + 1} } {\paren {k - 1} \paren {k - 2} \dotsm 1}\)




















\(\ds \)

\(=\)







\(\ds r \frac {\paren {r - 1} \paren {r - 2} \dotsm \paren {\paren {r - 1} - \paren {k - 1} + 1} } {\paren {k - 1} \paren {k - 2} \dotsm 1}\)




















\(\ds \)

\(=\)







\(\ds r \binom {r - 1} {k - 1}\)









$\Box$

If $k \ne 0$, we can divide both sides of:

$k \dbinom r k = r \dbinom {r - 1} {k - 1}$
by $k$ to obtain:

$\dbinom r k = \dfrac r k \dbinom {r - 1} {k - 1}$
$\Box$

If $k \ne 0$ and $r \ne 0$, we can divide both sides of:

$\dbinom r k = \dfrac r k \dbinom {r - 1} {k - 1}$
by $r$ to obtain:

$\dfrac 1 r \dbinom r k = \dfrac 1 k \dbinom {r - 1} {k - 1}$
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.2$ The Binomial Theorem: Problems $1.2$: $3 \ \text{(c)}$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $\text{C}$




