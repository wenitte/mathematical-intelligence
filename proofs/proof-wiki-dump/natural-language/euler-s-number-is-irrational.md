# 

Source: https://proofwiki.org/wiki/Euler%27s_Number_is_Irrational

  This article was Featured Proof between 20 December 2009 and 1 January 2010.




Theorem
Euler's number $e$ is irrational.


Proof
Aiming for a contradiction, suppose that $e$ is rational.
Then there exist coprime integers $m$ and $n$ (and we can choose $n$ to be positive) such that:

$\dfrac m n = e = \ds \sum_{i \mathop = 0}^\infty \frac 1 {i!}$ from the definition of Euler's number.

Multiplying both sides by $n!$, observe that:

$\dfrac m n n! = n! \ds \sum_{i \mathop = 0}^\infty \frac 1 {i!} = \paren {\dfrac {n!} {0!} + \dfrac {n!} {1!} + \dfrac {n!} {2!} + \cdots + \dfrac {n!} {n!} } + \paren {\frac {n!} {\paren {n + 1}!} + \dfrac {n!} {\paren {n + 2}!} + \dfrac {n!} {\paren {n + 3}!} + \cdots}$
Hence:














\(\ds m \paren {n - 1}! - \paren {\frac {n!} {0!} + \frac {n!} {1!} + \frac {n!} {2!} + \cdots + \frac {n!} {n!} }\)

\(=\)







\(\ds \frac 1 {\paren {n + 1} } + \frac 1 {\paren {n + 1} \paren {n + 2} } + \frac 1 {\paren {n + 1} \paren {n + 2} \paren {n + 3} } + \cdots\)




















\(\ds \)

\(<\)







\(\ds \frac 1 {\paren {n + 1} } + \frac 1 {\paren {n + 1} \paren {n + 1} } + \frac 1 {\paren {n + 1} \paren {n + 1} \paren {n + 1} } + \cdots\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^\infty \paren {\frac 1 {n + 1} }^{\paren {i + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\frac 1 {n + 1} } {1 - \frac 1 {n + 1} } = \frac 1 n \le 1\) from Sum of Infinite Geometric Sequence \(\)










Observe that the quantity on the left hand side must be an integer, as it is composed entirely of sums and differences of integer terms.
It must be strictly positive, as it is equal to:

$\dfrac 1 {\paren {n + 1} } + \dfrac 1 {\paren {n + 1} \paren {n + 2} } + \dfrac 1 {\paren {n + 1} \paren {n + 2} \paren {n + 3} } + \cdots$
which is strictly positive.
Thus:

$m \paren {n - 1}! - \paren {\dfrac {n!} {0!} + \dfrac {n!} {1!} + \dfrac {n!} {2!} + \cdots + \dfrac {n!} {n!} }$
must be a strictly positive integer less than $1$.
From this contradiction it follows that $e$ must be irrational.
$\blacksquare$


Historical Note
The proof that Euler's number $e$ is irrational was demonstrated by Leonhard Paul Euler in $1737$.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 1$: Real Numbers: $\S 1.2$: The set of real numbers
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $2 \cdotp 718 \, 281 \, 828 \, 459 \, 045 \, 235 \, 360 \, 287 \, 471 \, 352 \, 662 \, 497 \, 757 \, 247 \, 093 \, 699 \ldots$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.17$: More About Irrational Numbers. $\pi$ is Irrational: Appendix: A Proof that $e$ is Irrational
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2 \cdotp 71828 \, 18284 \, 59045 \, 23536 \, 02874 \, 71352 \, 66249 \, 77572 \, 47093 \, 69995 \ \ldots$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): irrational number




