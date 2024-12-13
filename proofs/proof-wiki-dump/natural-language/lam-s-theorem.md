# 

Source: https://proofwiki.org/wiki/Lam%C3%A9%27s_Theorem


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $a, b \in \Z_{>0}$ be (strictly) positive integers.
Let $c$ and $d$ be the number of digits in $a$ and $b$ respectively when expressed in decimal notation.
Let the Euclidean Algorithm be employed to find the GCD of $a$ and $b$.

Then it will take fewer than $5 \times \min \set {c, d}$ integer divisions to find $\gcd \set {a, b}$.


Variant: Least Absolute Remainder
Let $a, b \in \Z_{>0}$ be (strictly) positive integers.
Let $c$ and $d$ be the number of digits in $a$ and $b$ respectively when expressed in decimal notation.
Let the Euclidean Algorithm: Least Absolute Remainder variant be employed to find the GCD of $a$ and $b$.

Then it will in general take fewer integer divisions to find $\gcd \set {a, b}$ than it does to use the conventional form of the Euclidean Algorithm.
In fact, it will take fewer than $3 \times \min \set {c, d}$ integer divisions to find $\gcd \set {a, b}$.


Proof
Lemma
Suppose it takes $n$ cycles around the Euclidean Algorithm to find $\gcd \set {a, b}$.
Then $\min \set {a, b} \ge F_{n + 2}$, where $F_n$ denotes the $n$th Fibonacci number.
$\Box$

Without loss of generality suppose $a \ge b$. 
Then $\min \set {c, d}$ is the number of digits in $b$.
By Number of Digits in Number, we have:

$\min \set {c, d} = \floor {\log b} + 1$
Aiming for a contradiction, suppose it takes at least $5 \paren {\floor {\log b} + 1}$ cycles around the Euclidean Algorithm to find $\gcd \set {a, b}$.
Then we have:














\(\ds b\)

\(\ge\)







\(\ds F_{5 \paren {\floor {\log b} + 1} + 2}\)





Lemma














\(\ds \)

\(\ge\)







\(\ds \phi^{5 \paren {\floor {\log b} + 1} }\)





Fibonacci Number greater than Golden Section to Power less Two














\(\ds \)

\(>\)







\(\ds \phi^{5 \log b}\)





Definition of Floor Function



For $b = 1$, both sides are equal to $1$, giving $1 > 1$, which is a contradiction.
Hence we consider $b > 1$ and take $\log$ on both sides:








\(\ds \leadsto \ \ \)





\(\ds \log b\)

\(>\)







\(\ds \paren {5 \log b} \log \phi\)





Logarithm of Power








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\log \phi}\)

\(>\)







\(\ds 5\)









However, $\dfrac 1 {\log \phi} \approx 4.785 < 5$.
This is a contradiction.
Hence the result by Proof by Contradiction.
$\blacksquare$


Examples
Example: $12378$ and $3054$
The Euclidean Algorithm, when employed to find the GCD of $12378$ and $3054$, will take no more than $20$ steps.


Source of Name
This entry was named for Gabriel Lamé.


Historical Note
This result was demonstrated by Gabriel Lamé in $1844$.


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euclidean algorithm
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Lamé's theorem




