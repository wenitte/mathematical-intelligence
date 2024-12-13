# 

Source: https://proofwiki.org/wiki/Harmonic_Numbers/Examples/H10000

Example of Harmonic Number
To $15$ decimal places:

$H_{10000} \approx 9 \cdotp 78760 \, 60360 \, 44382 \, \ldots$
where $H_{10000}$ denotes the $10 \, 000$th harmonic number.


Proof













\(\ds H_{10000}\)

\(\approx\)







\(\ds \ln 10 \, 000 + \gamma + \dfrac 1 {2 \times 10000} - \dfrac 1 {12 \times \left({10000}\right)^2} + \dfrac 1 {12 \times \left({10000}\right)^4} + \epsilon\)





Approximate Size of Sum of Harmonic Series














\(\ds \)

\(=\)







\(\ds 4 \ln 10 + \gamma + \dfrac 1 {2 \times 10000} - \dfrac 1 {12 \times \left({10000}\right)^2} + \dfrac 1 {12 \times \left({10000}\right)^4} + \epsilon\)





Logarithm of Power



$\blacksquare$
We have:














\(\ds \ln 10\)

\(\approx\)







\(\ds 2 \cdotp 30258 \, 50929 \, 94045 \, 68401 \, 7991 \ldots\)





Natural Logarithm of 10














\(\ds \gamma\)

\(\approx\)







\(\ds 0 \cdotp 57721 \, 56649 \, 01532 \, 86060 \, 65120 \ldots\)





Definition of Euler-Mascheroni Constant














\(\ds \dfrac 1 {2 \times 10000}\)

\(=\)







\(\ds 0 \cdotp 00005\)





Definition of Euler-Mascheroni Constant














\(\ds \dfrac 1 {12 \times 10000^2}\)

\(\approx\)







\(\ds 0 \cdotp 00000 \, 00008 \, 33333 \, 33333\)




















\(\ds \dfrac 1 {120 \times 10000^4}\)

\(<\)







\(\ds 10^{-18}\)









Thus for an accuracy of $15$ decimal places it is unnecessary to consider $\dfrac 1 {120 \times 10000^4}$ and smaller terms.
Then:

  2.30258 50929 94045 68401
x                         4
  -------------------------
  9.21034 03719 76182 73604
+ 0.57721 56649 01532 86060
+ 0.00005
  -------------------------
  9.78760 50368 77715 59664
- 0.00000 00008 33333 33333
  -------------------------
  9.78760 50360 44382 26331

Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $5$




