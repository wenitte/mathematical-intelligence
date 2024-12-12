# 

Source: https://proofwiki.org/wiki/Anomalous_Cancellation/Examples/143_185_over_17_018_560

Theorem
The fraction $\dfrac {143 \, 185} {17 \, 018 \, 560}$ exhibits the phenomenon of anomalous cancellation:

$\dfrac {143 \, 185} {17 \, 018 \, 560} = \dfrac {1435} {170 \, 560}$
as can be seen by deleting the $18$ from both numerator and denominator.

This is part of a longer pattern:

$\dfrac {1435} {170 \, 560} = \dfrac {143 \, 185} {17 \, 018 \, 560} = \dfrac {14 \, 318 \, 185} {1 \, 701 \, 818 \, 560} = \cdots$


Proof
Let $q = \dfrac r s = \dfrac {1431818 \cdots 185} {1701818 \cdots 18560}$.
Let the number of digits in $r$ be $n + 2$.
Then the number of digits in $s$ is $n + 4$.
By inspection, it is seen that $n$ is even.

Then it is seen that:














\(\ds r\)

\(=\)







\(\ds 5 + 18 \times 10 + 18 \times 1000 + \cdots + 18 \times 10^{n - 5} + 18 \times 10^{n - 3} + 143 \times 10^{n - 1}\)




















\(\ds \)

\(=\)







\(\ds 5 + 10 \times \paren {18 + 18 \times 10^2 + \cdots + 18 \times 10^{n - 6} + 18 \times 10^{n - 4} } + 143 \times 10^{n - 1}\)




















\(\ds \)

\(=\)







\(\ds 5 + 10 \times \paren {18 \times \paren{10^2}^0 + 18 \times \paren{10^2}^1 + \cdots + 18 \times \paren{10^2}^{n / 2 - 3} + 18 \times \paren{10^2}^{n / 2 - 2} } + 143 \times 10^{n - 1}\)




















\(\ds \)

\(=\)







\(\ds 5 + 10 \paren {\sum_{i \mathop = 0}^{n / 2 - 2} 18 \times 10^{2 i} } + 143 \times 10^{n - 1}\)




















\(\ds \)

\(=\)







\(\ds 5 + 10 \times 18 \paren {\frac {10^{n - 2} - 1} {10^2 - 1} } + 143 \times 10^{n - 1}\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds 5 \times \paren {10^2 - 1} + 10 \times 18 \paren {10^{n - 2} - 1} + 143 \times \paren {10^2 - 1} \times 10^{n - 1}\)




















\(\ds \)

\(=\)







\(\ds 5 \times 99 + 180 \times 10^{n - 2} - 180 + 143 \times 99 \times 10^{n - 1}\)




















\(\ds \)

\(=\)







\(\ds 5 \times 99 + 180 \times 10^{n - 2} - 180 + 143 \times 99 \times 10 \times 10^{n - 2}\)




















\(\ds \)

\(=\)







\(\ds 315 + 141750 \times 10^{n - 2}\)




















\(\ds \)

\(=\)







\(\ds 35 \times \paren {9 + 4050 \times 10^{n - 2} }\)










and similarly:














\(\ds s\)

\(=\)







\(\ds 560 + 18 \times 1000 + 18 \times 100 \, 000 + \cdots + 18 \times 10^{3 + \paren {n - 3} } + 18 \times 10^{3 + \paren {n - 1} } + 170 \times 10^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds 560 + 1000 \times \paren {18 + 18 \times 10^2 + \cdots + 18 \times 10^{n - 6} + 18 \times 10^{n - 4} } + 170 \times 10^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds 560 + 1000 \times \paren {18 \times \paren {10^2}^0 + 18 \times \paren {10^2}^1 + \cdots + 18 \times \paren {10^2}^{n / 2 - 3} + 18 \times \paren {10^2}^{n / 2 - 2} } + 170 \times 10^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds 560 + 1000 \paren {\sum_{i \mathop = 0}^{n / 2 - 2} 18 \times 10^{2 i} } + 170 \times 10^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds 560 + 1000 \times 18 \paren {\frac {10^{n - 2} - 1} {10^2 - 1} } + 170 \times 10^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds 560 \times \paren {10^2 - 1} + 1000 \times 18 \paren {10^{n - 2} - 1} + 170 \times \paren {10^2 - 1} \times 10^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds 560 \times 99 + 18000 \times 10^{n - 2} - 18000 + 170 \times 99 \times 10^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds 55440 + 18000 \times 10^{n - 2} - 18000 + 16830 \times 1000 \times 10^{n - 2}\)




















\(\ds \)

\(=\)







\(\ds 37440 + 16848000 \times 10^{n - 2}\)




















\(\ds \)

\(=\)







\(\ds 4160 \times \paren {9 + 4050 \times 10^{n - 2} }\)










Hence:














\(\ds q = \dfrac r s\)

\(=\)







\(\ds \dfrac {35 \times \paren {9 + 4050 \times 10^{n - 2} } } {4160 \times \paren {9 + 4050 \times 10^{n - 2} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {35 \times 41} {4160 \times 41}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1435} {170 \, 560}\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $16 / 64$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $16 / 64$




