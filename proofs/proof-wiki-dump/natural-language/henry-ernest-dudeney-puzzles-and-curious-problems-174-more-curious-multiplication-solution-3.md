# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/174_-_More_Curious_Multiplication/Solution_3



Puzzles and Curious Problems by Henry Ernest Dudeney: $174$
More Curious Multiplication
What number is it that, when multiplied by $18$, $27$, $36$, $45$, $54$, $63$, $72$, $81$ or $99$,
gives a product in which the first and last figures are the same as those in the multiplier,
but which when multiplied by $90$ gives a product in which the last two figures are the same as those in the multiplier?


Solution
All $d$-digit numbers $n$ in the form of:

$n = \sqbrk {9 a_1 a_2 \dots a_{d - 2} 1}$
where $n \ge \dfrac 8 {81} \times 10^{d + 1}$ and $d \ge 3$.
The smallest solution of this form is $991$.


Proof
Let $\sqbrk {a b}$ be a $2$-digit integer that is not $91$.
We will show that $n$ satisfies more restrictions than those stated in the problem.

For the case $b \ne 0$, we will show that $n \sqbrk {a b}$ starts with $a$ and ends with $b$.

First we show that $\dfrac {\sqbrk {a b} } {\sqbrk {a 0} } \ge \dfrac {81}{80}$.
This is equivalent to showing $\dfrac b {10 a} \ge \dfrac 1 {80}$,
which in turn is equivalent to showing $\dfrac b a \ge \dfrac 1 8$.
For $a \le 8$:

$\dfrac b a \ge \dfrac 1 a \ge \dfrac 1 8$
For $a = 9$, we have $b \ge 2$.
Thus:

$\dfrac b a \ge \dfrac 2 9 > \dfrac 1 8$
and hence our inequality is proved.

Now we have:














\(\ds \paren {a + 1} \times 10^{d + 1}\)

\(\ge\)







\(\ds \sqbrk {a b} \times 10^d\)




















\(\ds \)

\(\ge\)







\(\ds \sqbrk {a b} \times n\)





$n$ has $d$ digits














\(\ds \)

\(\ge\)







\(\ds \sqbrk {a b} \times \frac 8 {81} \times 10^{d + 1}\)




















\(\ds \)

\(=\)







\(\ds a \times 10 \times \frac {\sqbrk {a b} } {\sqbrk {a 0} } \times \frac 8 {81} \times 10^{d + 1}\)




















\(\ds \)

\(\ge\)







\(\ds a \times 10 \times \frac {81} {80} \times \frac 8 {81} \times 10^{d + 1}\)





from above














\(\ds \)

\(=\)







\(\ds a \times 10^{d + 1}\)









therefore $n \sqbrk {a b}$ starts with $a$.

We also have $n \equiv 1 \pmod {10}$ and $\sqbrk {a b} \equiv b \pmod {10}$.
Thus $n \sqbrk {a b}$ ends with $b$.
$\Box$

For $b = 0$, we will show that $n \sqbrk {a 0}$ ends with $\sqbrk {a 0}$.
Both $\sqbrk {a 0}$ and $n \sqbrk {a 0}$ are multiples of $10$, so they end with $0$.
The second-last digit of $n \sqbrk {a 0}$ is the last digit of $n \sqbrk {a 0} \div 10 = n a$.
Since $n \equiv 1 \pmod {10}$, $n a \equiv a \pmod {10}$.
This implies that $n a$ ends with $a$, thus proving our claim.
$\Box$

Finally we show that $n$ starts with a $9$ and $d \ge 3$.
Aiming for a contradiction, suppose $n$ does not start with a $9$.
Then $n < 9 \times 10^{d - 1}$.
Thus:

$9 \times 10^{d - 1} > \dfrac 8 {81} \times 10^{d + 1}$
$9 > \dfrac {800} {81} \approx 9.87654 \ldots$
which is a contradiction.
Therefore $n$ must start with a $9$ and contain at least $2$ digits.
If $d = 2$, $n = 91$.
However $91 < \dfrac 8 {81} \times 10^3 \approx 98.7654 \ldots$.
Thus $d \ge 3$.
$\blacksquare$


Example
Solution 1: $987 \, 654 \, 321$, by noting that:
$987 \, 654 \, 321 > \dfrac 8 {81} \times 10^{11}$




