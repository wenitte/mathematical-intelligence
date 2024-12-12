# 

Source: https://proofwiki.org/wiki/Generating_Fraction_for_Lucas_Numbers



Theorem
The fraction:

$\dfrac {199} {9899}$
has a decimal expansion which contains within it the start of the Lucas sequence:

$0 \cdotp 02010 \, 30407 \, 11 \ldots$


Corollary
The fraction:

$\dfrac {1999} {998 \, 999}$
has a decimal expansion which contains within it the start of the Lucas sequence:

$0 \cdotp 00200 \, 10030 \, 04007 \, 011 \ldots$
and in general, the fraction:

$\dfrac {2 \times 10^n - 1} {10^{2 n} - 10^n - 1}$
contains the Lucas sequence spread out with $n$ digits between each term.


Proof
By long division:

         0.0201030407111829
     ----------------------
9899 ) 199.0000000000000000
       197 98
       --- --
         1 0200
           9899
         - ----
            30100
            29697
            -----
              40300
              39596
              -----
                70400
                69293
                -----
                 11070
                  9899
                 -----
                  11710
                   9899
                  -----
                   18110
                    9899
                   -----
                    82110
                    79192
                    -----
                     29180
                     19798
                     -----
                      93820
                      89091
                      -----
                       4729


By Generating Function for Lucas Numbers:














\(\ds \sum_{k \mathop \ge 0} L_k 10^{-2 k - 2}\)

\(=\)







\(\ds \frac {2 - 10^{-2} } {1 - 10^{-2} - 10^{-4} } \times 10^{-2}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \times 10^2 - 1} {10^4 - 10^2 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {199} {9899}\)









The first few terms are contained in the decimal expansion, as long as $L_{k + 1} < 100$, where there is no carry.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $0 \cdotp 02010 \, 30407 \, 11 \ldots$




