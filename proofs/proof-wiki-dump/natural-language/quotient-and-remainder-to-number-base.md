# 

Source: https://proofwiki.org/wiki/Quotient_and_Remainder_to_Number_Base



Theorem
Let $n \in \Z: n > 0$ be an integer.
Let $n$ be expressed in base $b$:

$\ds n = \sum_{j \mathop = 0}^m {r_j b^j}$
that is:

$n = \sqbrk {r_m r_{m - 1} \ldots r_2 r_1 r_0}_b$

Then:

$\ds \floor {\frac n b} = \sqbrk {r_m r_{m - 1} \ldots r_2 r_1}_b$
$n \bmod b = r_0$
where:

$\floor {\, \cdot \,}$ denotes the floor function;
$n \bmod b$ denotes the modulo operation.


General Result
$\floor {\dfrac n {b^s} } = \sqbrk {r_m r_{m - 1} \ldots r_{s + 1} r_s}_b$
and:

$\ds n \mod {b^s} = \sum_{j \mathop = 0}^{s - 1} {r_j b^j} = \sqbrk {r_{s - 1} r_{s - 2} \ldots r_1 r_0}_b$


Proof
From the Quotient-Remainder Theorem, we have:

$\exists q, r \in \Z: n = q b + r$
where $0 \le b < r$.
We have that:














\(\ds n\)

\(=\)







\(\ds \sum_{j \mathop = 0}^m {r_j b^j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^m {r_j b^j} + r_0\)




















\(\ds \)

\(=\)







\(\ds b \sum_{j \mathop = 1}^m {r_j b^{j-1} } + r_0\)










Hence we can express $n = q b + r$ where:

$\ds q = \sum_{j \mathop = 1}^m {r_j b^{j - 1} }$
$r = r_0$
where:

$\ds \sum_{j \mathop = 1}^m {r_j b^{j - 1} } = \sqbrk {r_m r_{m - 1} \ldots r_2 r_1}_b$
The result follows from the definition of the modulo operation.
$\blacksquare$


Example
This result is often[1] used in computer algorithms for converting a date (in $yyyymmdd$ format) into a date object with separate day, month and year.
Performing the above "mod and div" operations on $20100209$, we get:














\(\ds 20100209 \bmod 100\)

\(=\)







\(\ds 09\)





which gives us the day














\(\ds \floor {\frac {20100209} {100} }\)

\(=\)







\(\ds 201002\)





which we use as input into the next pass














\(\ds 201002 \bmod 100\)

\(=\)







\(\ds 02\)





which gives us the month














\(\ds \floor {\frac {201002} {100} }\)

\(=\)







\(\ds 2010\)





which gives us the year.





Notes

↑ So often, in some business applications, that the author of this page is utterly sick of it, truth be told.






