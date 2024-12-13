# 

Source: https://proofwiki.org/wiki/Integral_Expression_of_Harmonic_Number

Theorem
Let $\sequence {H_n}_{n \mathop \in \N}$ be the harmonic numbers.

Then:

$\ds H_n = 1 + \int_1 ^n \dfrac {\floor u} {u^2} \rd u$
where $\floor u$ denotes the floor of $u$.


Proof
Observe that:

$\ds \forall x \in \R_{\ge 1} : \floor x = \sum_{1 \mathop \le k \mathop \le x} 1$

Let $f: \R_{\ge 1} \to \R$ be defined as:

$\ds \map f x := \dfrac 1 x$
Then:














\(\ds \sum_{k \mathop = 1}^n \frac 1 k\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n 1 \cdot \map f k\)




















\(\ds \)

\(=\)







\(\ds \floor n \map f n - \int_1^n \floor u \map {f'} u \rd u\)





Abel's Summation Formula














\(\ds \)

\(=\)







\(\ds 1 + \int_1 ^n \dfrac {\floor u} {u^2} \rd u\)





Derivative of Reciprocal



$\blacksquare$





