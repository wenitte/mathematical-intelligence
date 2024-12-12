# 

Source: https://proofwiki.org/wiki/Generating_Fraction_for_Lucas_Numbers/Corollary

Corollary to Generating Fraction for Lucas Numbers
The fraction:

$\dfrac {1999} {998 \, 999}$
has a decimal expansion which contains within it the start of the Lucas sequence:

$0 \cdotp 00200 \, 10030 \, 04007 \, 011 \ldots$
and in general, the fraction:

$\dfrac {2 \times 10^n - 1} {10^{2 n} - 10^n - 1}$
contains the Lucas sequence spread out with $n$ digits between each term.


Proof
By Generating Function for Lucas Numbers:














\(\ds \sum_{k \mathop \ge 0} L_k 10^{-n k - n}\)

\(=\)







\(\ds \frac {2 - 10^{-n} } {1 - 10^{-n} - 10^{-2 n} } \times 10^{-n}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \times 10^n - 1} {10^{2 n} - 10^n - 1}\)









The first few terms are contained in the decimal expansion, as long as $L_{k + 1} < 10^n$, where there is no carry.

For $n = 3$:














\(\ds \frac {2 \times 10^n - 1} {10^{2 n} - 10^n - 1}\)

\(=\)







\(\ds \frac {2000 - 1} {1000000 - 1000 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {1999} {998999}\)









$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $0 \cdotp 02010 \, 30407 \, 11 \ldots$




