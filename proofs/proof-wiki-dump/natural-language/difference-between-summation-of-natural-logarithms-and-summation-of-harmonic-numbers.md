# 

Source: https://proofwiki.org/wiki/Difference_between_Summation_of_Natural_Logarithms_and_Summation_of_Harmonic_Numbers

Theorem
$\ds \sum_{k \mathop = 1}^n H_k - \sum_{k \mathop = 1}^n \map \ln {n!} \approx \gamma n + \dfrac {\ln n} 2 + 0 \cdotp 158$
where:

$H_k$ denotes the $k$th harmonic number
$n!$ denotes the $n$th factorial
$\gamma$ denotes the Euler-Mascheroni constant.


Proof
From Summation over k to n of Natural Logarithm of k:

$\ds \sum_{k \mathop = 1}^n \ln k = \map \ln {n!}$

Then:














\(\ds \map \ln {n!}\)

\(\approx\)







\(\ds \map \ln {\sqrt {2 \pi n} \paren {\dfrac n e}^n}\)





Stirling's Formula














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {2 \pi} + \frac 1 2 \ln n + n \paren {\ln n - \ln e}\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\sqrt {2 \pi} } + \paren {n + \frac 1 2} \ln n - n\)










Then we have that:














\(\ds \sum_{k \mathop = 1}^n H_k\)

\(=\)







\(\ds \paren {n + 1} H_n - n\)





Sum of Sequence of Harmonic Numbers














\(\ds \)

\(\approx\)







\(\ds \paren {n + 1} \paren {\ln n + \gamma + \dfrac 1 {2 n} - \dfrac 1 {12 n^2} + \dfrac 1 {120 n^4} } - n\)





Approximate Size of Sum of Harmonic Series




Then:














\(\ds \)

\(\)







\(\ds \sum_{k \mathop = 1}^n H_k - \sum_{k \mathop = 1}^n \map \ln {n!}\)




















\(\ds \)

\(\approx\)







\(\ds \paren {\paren {n + 1} \paren {\ln n + \gamma + \dfrac 1 {2 n} - \dfrac 1 {12 n^2} + \dfrac 1 {120 n^4} } - n} - \paren {\ln \paren {\sqrt {2 \pi} } + \paren {n + \frac 1 2} \ln n - n}\)




















\(\ds \)

\(=\)







\(\ds n \ln n + n \gamma + \dfrac 1 2 - \dfrac 1 {12 n} + \dfrac 1 {120 n^3} + \ln n + \gamma + \dfrac 1 {2 n} - \dfrac 1 {12 n^2} + \dfrac 1 {120 n^4} - n - \map \ln {\sqrt {2 \pi} } - n \ln n - \frac 1 2 \ln n + n\)




















\(\ds \)

\(=\)







\(\ds \gamma n + \frac 1 2 \ln n + \dfrac 1 2 + \gamma - \map \ln {\sqrt {2 \pi} } + \dfrac 5 {12 n} - \dfrac 1 {12 n^2}  + \dfrac 1 {120 n^3} + \dfrac 1 {120 n^4}\)










The result follows by ignoring the lower order terms in $n$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $8$




