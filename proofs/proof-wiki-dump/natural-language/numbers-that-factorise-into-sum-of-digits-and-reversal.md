# 

Source: https://proofwiki.org/wiki/Numbers_that_Factorise_into_Sum_of_Digits_and_Reversal



Theorem
The following positive integers can each be expressed as the product of the sum of its digits and the reversal of the sum of its digits:

$1, 81, 1458, 1729$
This sequence is A110921 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof













\(\ds 1\)

\(=\)







\(\ds 1 \times 1\)
























\(\ds 81\)

\(=\)







\(\ds 9 \times 9\)




















\(\ds \)

\(=\)







\(\ds 9 \times \paren {8 + 1}\)
























\(\ds 1458\)

\(=\)







\(\ds 81 \times 18\)




















\(\ds \)

\(=\)







\(\ds 81 \times \paren {1 + 4 + 5 + 8}\)
























\(\ds 1729\)

\(=\)







\(\ds 91 \times 19\)




















\(\ds \)

\(=\)







\(\ds 91 \times \paren {1 + 7 + 2 + 9}\)










Let $n$ be a positive integer.
Let $S$ the sum of its digits and $S'$ be the reversal of the sum of its digits.
We wish to determine integers $n$ that satisfy:

$n = S S'$

From this we have:














\(\ds n\)

\(\equiv\)







\(\ds S S'\)

\(\ds \pmod 9\)



Equal Numbers are Congruent








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\equiv\)







\(\ds S^2\)

\(\ds \pmod 9\)



Congruence of Sum of Digits to Base Less 1








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\equiv\)







\(\ds 0 \text { or } 1\)

\(\ds \pmod 9\)







Suppose $n$ is a $d$-digit integer. 
Suppose $d \le 4$. Then $S \le 9 d \le 36$.
The values of $S S'$ are:














\(\ds 1 \times 1\)

\(=\)







\(\ds 1\)





and we have $1 = 1$














\(\ds 9 \times 9\)

\(=\)







\(\ds 81\)





and we have $8 + 1 = 9$














\(\ds 10 \times 01\)

\(=\)







\(\ds 10\)





and we have $1 + 0 \ne 10$














\(\ds 18 \times 81\)

\(=\)







\(\ds 1458\)





and we have $1 + 4 + 5 + 8 = 18$














\(\ds 19 \times 91\)

\(=\)







\(\ds 1729\)





and we have $1 + 7 + 2 + 9 = 19$














\(\ds 27 \times 72\)

\(=\)







\(\ds 1944\)





and we have $1 + 9 + 4 + 4 \ne 27$














\(\ds 28 \times 82\)

\(=\)







\(\ds 2296\)





and we have $2 + 2 + 9 + 6 \ne 28$














\(\ds 36 \times 63\)

\(=\)







\(\ds 2268\)





and we have $2 + 2 + 6 + 8 \ne 36$



Among these values, only $1, 81, 1458, 1729$ have the desired property.

We claim that there are no integers with more than $4$ digits with this property.
Aiming for a contradiction, suppose $d \ge 5$.
Suppose $d$ is a $k$-digit integer.
We have $k = 1 + \floor {\log d}$.

We show that $2 k + 2 \le d - 1$:


$d = 5,6$ are single-digit integers, so $k = 1$.
$d - 1 \ge 4 = 2 k + 2$


For $d \ge 7$, consider the function $\map f d = d - 2 \log d - 5$.
Then $\map f 7 > 7 - 2 - 5 = 0$.


We also have $\map {f'} d = 1 - \dfrac 2 {d \ln 10} > 1 - \dfrac 1 d$,
so $\map {f'} d > 0$ for all $d \ge 7$.
By Real Function with Strictly Positive Derivative is Strictly Increasing, $f$ is strictly increasing for all $d \ge 7$.
Then:













\(\ds d - 2 \log d - 5\)

\(>\)







\(\ds \map f 7\)





$f$ is strictly increasing for all $d \ge 7$.














\(\ds \)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds d - 1\)

\(>\)







\(\ds 2 \log d + 4\)




















\(\ds \)

\(\ge\)







\(\ds 2 \floor {\log d} + 4\)





Definition of Floor Function














\(\ds \)

\(=\)







\(\ds 2 k + 2\)





$k = 1 + \floor {\log d}$



So we have $2 k + 2 \le d - 1$ for all $d \ge 5$.

$9 d$ has not more than $k + 1$ digits.
Since $S \le 9 d$, $S$ cannot have more digits than $9 d$.
We also have that $S'$ cannot have more digits than $S$.
Therefore we have $S, S' < 10^{k + 1}$. 
Then $n = S S' < 10^{2 k + 2} \le 10^{d - 1} \le n$, which is a contradiction.
The result follows by Proof by Contradiction.
$\blacksquare$


Historical Note
David Wells reports in his Curious and Interesting Numbers, 2nd ed. of $1997$ that this result was discussed by Charles Wilderman Trigg in volume $9$ of Journal of Recreational Mathematics, page $44$, but it has not been possible to corroborate this.


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1729$




