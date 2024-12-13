# 

Source: https://proofwiki.org/wiki/Multinomial_Theorem



Theorem
Let $x_1, x_2, \ldots, x_k \in F$, where $F$ is a field.

Then:

$\ds \paren {x_1 + x_2 + \cdots + x_m}^n = \sum_{k_1 \mathop + k_2 \mathop + \mathop \cdots \mathop + k_m \mathop = n} \binom n {k_1, k_2, \ldots, k_m} {x_1}^{k_1} {x_2}^{k_2} \cdots {x_m}^{k_m}$
where:

$m \in \Z_{> 0}$ is a positive integer
$n \in \Z_{\ge 0}$ is a non-negative integer
$\dbinom n {k_1, k_2, \ldots, k_m} = \dfrac {n!} {k_1! \, k_2! \, \cdots k_m!}$ denotes a multinomial coefficient.

The sum is taken for all non-negative integers $k_1, k_2, \ldots, k_m$ such that $k_1 + k_2 + \cdots + k_m = n$, and with the understanding that wherever $0^0$ may appear it shall be considered to have a value of $1$.


Proof
The proof proceeds by induction on $m$.
For each $m \in \N_{\ge 1}$, let $\map P m$ be the proposition:

$\ds \forall n \in \N: \paren {x_1 + x_2 + \cdots + x_m}^n = \sum_{k_1 \mathop + k_2 \mathop + \mathop \cdots \mathop + k_m \mathop = n} \binom n {k_1, k_2, \ldots, k_m} {x_1}^{k_1} {x_2}^{k_2} \cdots {x_m}^{k_m}$


Basis for the Induction
Trivially, for all $n \in \N$:














\(\ds \paren {x_1}^n\)

\(=\)







\(\ds \sum_{k_1 \mathop = n} \frac {n!} {k_1!} {x_1}^{k_1}\)




















\(\ds \)

\(=\)







\(\ds \frac {n!} {n!} {x_1}^n\)




















\(\ds \)

\(=\)







\(\ds {x_1}^n\)









and so it is seen that $\map P 1$ holds.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\ds \forall n \in \N: \paren {x_1 + x_2 + \cdots + x_r}^n = \sum_{k_1 \mathop + k_2 \mathop + \mathop \cdots \mathop + k_r \mathop = n} \binom n {k_1, k_2, \ldots, k_r} {x_1}^{k_1} {x_2}^{k_2} \cdots {x_r}^{k_r}$

from which it is to be shown that:

$\ds \forall n \in \N: \paren {x_1 + x_2 + \cdots + x_r + x_{r + 1} }^n = \sum_{k_1 \mathop + k_2 \mathop + \mathop \cdots \mathop + k_r \mathop + k_{r + 1} \mathop = n} \binom n {k_1, k_2, \ldots, k_r, k_{r + 1} } {x_1}^{k_1} {x_2}^{k_2} \cdots {x_r}^{k_r}  {x_{r + 1} }^{k_{r + 1} }$


Induction Step













\(\ds \)

\(\)







\(\ds \paren {x_1 + x_2  + \cdots + x_r + x_{r + 1} }^n\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {x_1 + x_2  + \cdots + x_r} + x_{r + 1} }^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^n \binom n j {x_{r + 1} }^j \paren {x_1 + x_2 + \cdots + x_r}^{n - j}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^n \binom n j {x_{r + 1} }^j \sum_{k_1 + k_2 + \cdots + k_r \mathop = n - j} \binom {n - j} {k_1, k_2, \ldots, k_r} {x_1}^{k_1} {x_2}^{k_2} \cdots {x_r}^{k_r}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^n \paren {\sum_{k_1 + k_2 + \cdots + k_r \mathop = n - j} \binom n j \binom {n - j} {k_1, k_2, \ldots, k_r} {x_1}^{k_1} {x_2}^{k_2} \cdots {x_r}^{k_r} {x_{r + 1} }^j}\)





Summation is Linear














\(\ds \)

\(=\)







\(\ds \sum_{k_{r + 1} \mathop = 0}^n \paren {\sum_{k_1 + k_2 + \cdots + k_r \mathop = n - k_{r + 1} } \binom n {k_{r + 1} } \binom {n - k_{r + 1} } {k_1, k_2, \ldots, k_r} {x_1}^{k_1} {x_2}^{k_2} \cdots {x_r}^{k_r} {x_{r + 1} }^{k_{r + 1} } }\)





renaming index variable














\(\ds \)

\(=\)







\(\ds \sum_{k_1 + k_2 + \cdots + k_r + k_{r + 1} \mathop = n} \binom n {k_{r + 1} } \binom {n - k_{r + 1} } {k_1, k_2, \ldots, k_r} {x_1}^{k_1} {x_2}^{k_2} \cdots {x_r}^{k_r} {x_{r + 1} }^{k_{r + 1} }\)





collapsing the double sum




Now:














\(\ds \binom n {k_{r + 1} } \binom {n - k_{r + 1} } {k_1, k_2, \ldots, k_r}\)

\(=\)







\(\ds \frac {n!} {k_{r + 1}! \paren {n - k_{r + 1} }!} \frac {\paren {n - k_{r + 1} }!} {k_1! \, k_2! \, \cdots k_r!}\)





Definition of Binomial Coefficient and Definition of Multinomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac {n!} {k_1! \, k_2! \, \cdots k_r! \, k_{r + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \binom n {k_1, k_2, \ldots, k_r, k_{r + 1} }\)





Definition of Multinomial Coefficient



So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Also see
Binomial Theorem: the multinomial theorem is a generalization


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 3$: The Binomial Formula and Binomial Coefficients: $3.16$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $(42)$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): multinomial theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): multinomial theorem




