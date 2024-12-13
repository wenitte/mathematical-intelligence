# 

Source: https://proofwiki.org/wiki/Number_of_Binary_Digits_in_Power_of_10



Theorem
Let $n$ be a positive integer.
Expressed in binary notation, the number of digits in the $n$th power of $10$:

$10^n$
is equal to:

$\ceiling {n \log_2 10}$
where $\ceiling x$ denotes the ceiling of $x$.


Examples
$1000$
When expressed in binary notation, the number of digits in $1000$ is $10$.


Proof
Let $10^n$ have $m$ digits when expressed in binary notation.
By the Basis Representation Theorem and its implications, a positive integer $x$ has $m$ digits if and only if:

$2^{m - 1} \le x < 2^m$
Thus:














\(\ds 2^{m - 1}\)

\(\le\)

\(\, \ds 10^n \, \)

\(\, \ds < \, \)



\(\ds 2^m\)














\(\ds \leadsto \ \ \)





\(\ds m - 1\)

\(\le\)

\(\, \ds \map {\log_2} {10^n} \, \)

\(\, \ds < \, \)



\(\ds m\)














\(\ds \leadsto \ \ \)





\(\ds m - 1\)

\(\le\)

\(\, \ds n \log_2 10 \, \)

\(\, \ds < \, \)



\(\ds m\)









Because a power of $10$ cannot equal a power of $2$, it will always be the case that:

$m - 1 < n \log_2 10 < m$
and so:

$m - 1 < n \log_2 10 \le m$
Hence from Integer equals Ceiling iff Number between Integer and One Less:

$m = \ceiling {n \log_2 10}$
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3 \cdotp 321 \, 928 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3 \cdotp 32192 \, 8 \ldots$




