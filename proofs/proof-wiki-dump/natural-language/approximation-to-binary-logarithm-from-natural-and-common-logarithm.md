# 

Source: https://proofwiki.org/wiki/Approximation_to_Binary_Logarithm_from_Natural_and_Common_Logarithm



Theorem
The binary logarithm $\lg x$ can be approximated, to within $1 \%$, by the expression:

$\lg x \approx \ln x + \log_{10} x$
That is, by the sum of the natural logarithm and common logarithm.


Proof













\(\ds \lg x\)

\(=\)







\(\ds \frac {\ln x} {\ln 2}\)





Change of Base of Logarithm














\(\ds \)

\(=\)







\(\ds \frac {\log_{10} x} {\log_{10} 2}\)





Change of Base of Logarithm








\(\ds \leadsto \ \ \)





\(\ds \lg x\)

\(=\)







\(\ds \frac {\ln x + \log_{10} x} {\ln 2 + \log_{10} 2}\)




















\(\ds \)

\(=\)







\(\ds \frac {\ln x + \log_{10} x} {\ln 2 + \frac {\ln 2} {\ln 10} }\)





Change of Base of Logarithm














\(\ds \)

\(=\)







\(\ds \frac {\ln x + \log_{10} x} {\ln 2 \left({1 + \frac 1 {\ln 10} }\right)}\)




















\(\ds \)

\(=\)







\(\ds \frac {\ln x + \log_{10} x} {\ln 2 \left({1 + \log_{10} e}\right)}\)





Reciprocal of Logarithm



We have that:

$\ln 2 = 0 \cdotp 69347 \ 1805 \ldots$
$\log_{10} e = 0 \cdotp 43429 \ 44819 \ldots$
Thus:














\(\ds \ln 2 \left({1 + \log_{10} e}\right)\)

\(=\)







\(\ds 0 \cdotp 69347 \ 1805 \ldots \left({1 + 0 \cdotp 43429 \ 44819 \ldots}\right)\)




















\(\ds \)

\(=\)







\(\ds 0 \cdotp 99462 \ldots\)









Hence:

$\lg x + \log_{10} x \approx 0 \cdotp 994 \ln x$
That is, the approximation is $99.4 \%$ accurate.
$\blacksquare$


Historical Note
The useful Approximation to Binary Logarithm from Natural and Common Logarithm was observed by Richard Wesley Hamming.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.2$: Numbers, Powers, and Logarithms: Exercise $22$




