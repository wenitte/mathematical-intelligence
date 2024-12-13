# 

Source: https://proofwiki.org/wiki/Number_of_Digits_in_Power_of_2



Theorem
Let $n$ be a positive integer.
Expressed in conventional decimal notation, the number of digits in the $n$th power of $2$:

$2^n$
is equal to:

$\ceiling {n \log_{10} 2}$
where $\ceiling x$ denotes the ceiling of $x$.


Proof
Let $2^n$ have $m$ digits when expressed in decimal notation.
By the Basis Representation Theorem and its implications, a positive integer $x$ has $m$ digits if and only if:

$10^{m - 1} \le x < 10^m$
Thus:














\(\ds 10^{m - 1}\)

\(\le\)

\(\, \ds 2^n \, \)

\(\, \ds < \, \)



\(\ds 10^m\)














\(\ds \leadsto \ \ \)





\(\ds m - 1\)

\(\le\)

\(\, \ds \log_{10} \paren {2^n} \, \)

\(\, \ds < \, \)



\(\ds m\)














\(\ds \leadsto \ \ \)





\(\ds m - 1\)

\(\le\)

\(\, \ds n \log_{10} 2 \, \)

\(\, \ds < \, \)



\(\ds m\)









Because a power of $2$ cannot equal a power of $10$, it will always be the case that:

$m - 1 < n \log_{10} 2 < m$
and so:

$m - 1 < n \log_{10} 2 \le m$
Hence from Integer equals Ceiling iff Number between Integer and One Less:

$m = \ceiling {n \log_{10} 2}$
$\blacksquare$


Examples
Mersenne Number $M_{127}$
When expressed in conventional decimal notation, the number of digits in the Mersenne number $M_{127}$ is $39$.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $0 \cdotp 301 \, 029 \, 995 \, 663 \, 981 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $0 \cdotp 30102 \, 99956 \, 63981 \ldots$




