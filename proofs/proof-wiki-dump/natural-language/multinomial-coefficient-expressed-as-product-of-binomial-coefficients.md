# 

Source: https://proofwiki.org/wiki/Multinomial_Coefficient_expressed_as_Product_of_Binomial_Coefficients



Theorem
$\dbinom {k_1 + k_2 + \cdots + k_m} {k_1, k_2, \ldots, k_m} = \dbinom {k_1 + k_2} {k_1} \dbinom {k_1 + k_2 + k_3} {k_1 + k_2} \cdots \dbinom {k_1 + k_2 + \cdots + k_m} {k_1 + k_2 + \cdots + k_{m - 1} }$
where:

$\dbinom {k_1 + k_2 + \cdots + k_m} {k_1, k_2, \ldots, k_m}$ denotes a multinomial coefficient
$\dbinom {k_1 + k_2} {k_1}$ etc. denotes binomial coefficients.


Proof
The proof proceeds by induction.
For all $m \in \Z_{> 1}$, let $\map P m$ be the proposition:

$\dbinom {k_1 + k_2 + \cdots + k_m} {k_1, k_2, \ldots, k_m} = \dbinom {k_1 + k_2} {k_1} \dbinom {k_1 + k_2 + k_3} {k_1 + k_2} \cdots \dbinom {k_1 + k_2 + \cdots + k_m} {k_1 + k_2 + \cdots + k_{m - 1} }$


Basis for the Induction
$\map P 2$ is the case:














\(\ds \dbinom {k_1 + k_2} {k_1, k_2}\)

\(=\)







\(\ds \frac {\paren {k_1 + k_2}!} {k_1! \, k_2!}\)





Definition of Multinomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac {\paren {k_1 + k_2}!} {k_1! \, \paren {\paren {k_1 + k_2} - k_1}!}\)




















\(\ds \)

\(=\)







\(\ds \dbinom {k_1 + k_2} {k_1}\)





Definition of Binomial Coefficient




This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 2$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\dbinom {k_1 + k_2 + \cdots + k_r} {k_1, k_2, \ldots, k_r} = \dbinom {k_1 + k_2} {k_1} \dbinom {k_1 + k_2 + k_3} {k_1 + k_2} \cdots \dbinom {k_1 + k_2 + \cdots + k_r} {k_1 + k_2 + \cdots + k_{r - 1} }$

from which it is to be shown that:

$\dbinom {k_1 + k_2 + \cdots + k_r + k_{r + 1} } {k_1, k_2, \ldots, k_r, k_{r + 1} } = \dbinom {k_1 + k_2} {k_1} \dbinom {k_1 + k_2 + k_3} {k_1 + k_2} \cdots \dbinom {k_1 + k_2 + \cdots + k_r + k_{r + 1} } {k_1 + k_2 + \cdots + k_r}$


Induction Step
This is the induction step:














\(\ds \)

\(\)







\(\ds \dbinom {k_1 + k_2 + \cdots + k_r + k_{r + 1} } {k_1, k_2, \ldots, k_r, k_{r + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {k_1 + k_2 + \cdots + k_r + k_{r + 1} }!} {k_1! \, k_2! \, \cdots k_r! \, k_{r + 1}!}\)





Definition of Multinomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac {\paren {k_1 + k_2 + \cdots + k_r}!} {k_1! \, k_2! \, \cdots k_r!} \frac {\paren {k_1 + k_2 + \cdots + k_r + k_{r + 1} }!} {\paren {k_1 + k_2 + \cdots + k_r}! k_{r + 1} }\)





multiplying top and bottom by $\paren {k_1 + k_2 + \cdots + k_r + k_{r + 1} }!$














\(\ds \)

\(=\)







\(\ds \dbinom {k_1 + k_2 + \cdots + k_r} {k_1, k_2, \ldots, k_r} \frac {\paren {k_1 + k_2 + \cdots + k_r + k_{r + 1} }!} {\paren {k_1 + k_2 + \cdots + k_r}! k_{r + 1} }\)





Definition of Multinomial Coefficient














\(\ds \)

\(=\)







\(\ds \dbinom {k_1 + k_2 + \cdots + k_r} {k_1, k_2, \ldots, k_r} \dbinom {k_1 + k_2 + \cdots + k_r + k_{r + 1} } {k_1 + k_2 + \cdots + k_r}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dbinom {k_1 + k_2} {k_1} \dbinom {k_1 + k_2 + k_3} {k_1 + k_2} \cdots \dbinom {k_1 + k_2 + \cdots + k_r} {k_1 + k_2 + \cdots + k_{r - 1} } \dbinom {k_1 + k_2 + \cdots + k_r + k_{r + 1} } {k_1 + k_2 + \cdots + k_r}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \dbinom {k_1 + k_2} {k_1} \dbinom {k_1 + k_2 + k_3} {k_1 + k_2} \cdots \dbinom {k_1 + k_2 + \cdots + k_r + k_{r + 1} } {k_1 + k_2 + \cdots + k_r}\)










So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m \in \Z_{>1}: \dbinom {k_1 + k_2 + \cdots + k_m} {k_1, k_2, \ldots, k_m} = \dbinom {k_1 + k_2} {k_1} \dbinom {k_1 + k_2 + k_3} {k_1 + k_2} \cdots \dbinom {k_1 + k_2 + \cdots + k_m} {k_1 + k_2 + \cdots + k_{m - 1} }$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $(43)$




