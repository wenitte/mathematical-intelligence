# 

Source: https://proofwiki.org/wiki/Number_of_Digits_in_Factorial

Theorem
Let $n!$ denote the factorial of $n$.
The number of digits in $n!$ is approximately:

$1 + \floor {\dfrac 1 2 \paren {\log_{10} 2 + \log_{10} \pi} + \dfrac 1 2 \log_{10} n + n \paren {\log_{10} n - \log_{10} e} }$
when $n!$ is shown in decimal notation.
This evaluates to:

$1 + \floor {\paren {n + \dfrac 1 2} \log_{10} n - 0.43429 \ 4481 \, n + 0.39908 \ 9934}$


Proof
From Stirling's Formula:

$n! \sim \sqrt {2 \pi n} \paren {\dfrac n e}^n$
from which the result can be calculated.
To count the number of digits:














\(\ds \log_{10} n!\)

\(\sim\)







\(\ds \log_{10} \paren {\sqrt {2 \pi n} \paren {\dfrac n e}^n}\)





Stirling's Formula














\(\ds \)

\(=\)







\(\ds \log_{10} \paren {\sqrt {2 \pi n} } + \log_{10} \paren {\paren {\dfrac n e}^n}\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \frac 1 2 \log_{10} 2 \pi n + n \log_{10} \paren {\dfrac n e}\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\log_{10} 2 + \log_{10} \pi} + \frac 1 2 \log_{10} n + n \paren {\log_{10} n - \log_{10} e}\)





Sum of Logarithms, Difference of Logarithms



We have:

Common Logarithm of $2$: $\log_{10} 2 \approx 0.30102 \ 9996$
Common Logarithm of $\pi$: $\log_{10} \pi \approx 0.49714 \ 9873$
Common Logarithm of $e$: $\log_{10} e \approx 0.43429 \ 4481$
Hence:














\(\ds \log_{10} n!\)

\(\sim\)







\(\ds \frac 1 2 \paren {0.30102 \ 9996 + 0.49714 \ 9873} + \frac 1 2 \log_{10} n + n \paren {\log_{10} n - 0.43429 \ 4481}\)




















\(\ds \)

\(=\)







\(\ds \paren {n + \frac 1 2} \log_{10} n - 0.43429 \ 4481 \, n + 0.39908 \ 9934\)









Hence the result from Number of Digits in Number.
$\blacksquare$





