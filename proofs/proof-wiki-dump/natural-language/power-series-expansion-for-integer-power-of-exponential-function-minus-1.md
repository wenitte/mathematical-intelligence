# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Integer_Power_of_Exponential_Function_minus_1



Theorem
Let $e^z$ denote the exponential function.

Then:














\(\ds \paren {e^z - 1}^n\)

\(=\)







\(\ds z^n + \dfrac 1 {n + 1} {n + 1 \brace n} z^{n + 1} + \cdots\)




















\(\ds \)

\(=\)







\(\ds n! \sum_{k \mathop \in \Z} {k \brace n} \frac {z^k} {k!}\)









where $\ds {k \brace n}$ denotes a Stirling number of the second kind.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds \paren {e^z - 1}^n = n! \sum_{k \mathop \in \Z} {k \brace n} \frac {z^k} {k!}$

$\map P 0$ is the case:














\(\ds 0! \sum_{k \mathop \in \Z} {k \brace 0} \frac {z^k} {k!}\)

\(=\)







\(\ds \sum_{k \mathop \in \Z} {k \brace 0} \frac {z^k} {k!}\)





Definition of Factorial: $0! = 1$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in \Z} \delta_{k 0} \frac {z^k} {k!}\)





Definition 1 of Stirling Numbers of the Second Kind














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0} \frac {z^k} {k!}\)




















\(\ds \)

\(=\)







\(\ds \frac {z^0} {0!}\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \paren {e^z - 1}^0\)









Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds 1! \sum_{k \mathop \in \Z} {k \brace 1} \frac {z^k} {k!}\)

\(=\)







\(\ds \sum_{k \mathop \in \Z} {k \brace 1} \frac {z^k} {k!}\)





Definition of Factorial: $1! = 1$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \frac {z^k} {k!}\)





Stirling Number of the Second Kind of n+1 with 1














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \frac {z^k} {k!} - 1\)




















\(\ds \)

\(=\)







\(\ds e^z - 1\)





Power Series Expansion for Exponential Function














\(\ds \)

\(=\)







\(\ds \paren {e^z - 1}^1\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\ds \paren {e^z - 1}^r = r! \sum_{k \mathop \in \Z} {k \brace r} \frac {z^k} {k!}$

from which it is to be shown that:

$\ds \paren {e^z - 1}^{r + 1} = \paren {r + 1}! \sum_{k \mathop \in \Z} {k \brace r + 1} \frac {z^k} {k!}$


Induction Step
This is the induction step:














\(\ds \paren {e^z - 1}^{r + 1}\)

\(=\)







\(\ds \paren {e^z - 1}^r \paren {e^z - 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {r! \sum_{k \mathop \in \Z} {k \brace r} \frac {z^k} {k!} } \paren {e^z - 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {r! \sum_{k \mathop \in \Z} {k \brace r} \frac {z^k} {k!} } \paren {\sum_{k \mathop \ge 0} \frac {z^k} {k!} - 1}\)





Power Series Expansion for Exponential Function














\(\ds \)

\(=\)







\(\ds \paren {r! \sum_{k \mathop \ge 0} {k \brace r} \frac {z^k} {k!} } \paren {\sum_{k \mathop \ge 0} \frac {z^k} {k!} - 1}\)





$\ds {k \brace r} = 0$ for $k < 0$














\(\ds \)

\(=\)







\(\ds r! \sum_{k \mathop \ge 0} \binom r k {k \brace r} \frac {z^k} {k!} - r! \sum_{k \mathop \ge 0} {k \brace r} \frac {z^k} {k!}\)





Product of Exponential Generating Functions














\(\ds \)

\(=\)







\(\ds r! \sum_{k \mathop \ge 0} { {k + 1} \brace r + 1} \frac {z^k} {k!} - r! \sum_{k \mathop \ge 0} {k \brace r} \frac {z^k} {k!}\)





Sum over k of Stirling Numbers of the Second Kind of k with m by n choose k














\(\ds \)

\(=\)







\(\ds r! \sum_{k \mathop \ge 0} \paren {\paren {r + 1} {k \brace r + 1} + {k \brace r} - {k \brace r} } \frac {z^k} {k!}\)





Definition 1 of Stirling Numbers of the Second Kind














\(\ds \)

\(=\)







\(\ds \paren {r + 1}! \sum_{k \mathop \ge 0} {k \brace r + 1} \frac {z^k} {k!}\)




















\(\ds \)

\(=\)







\(\ds \paren {r + 1}! \sum_{k \mathop \in \Z} {k \brace r + 1} \frac {z^k} {k!}\)





$\ds {k \brace r} = 0$ for $k < 0$




So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: \ds \paren {e^z - 1}^n = n! \sum_{k \mathop \in \Z} {k \brace n} \frac {z^k} {k!}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(23)$




