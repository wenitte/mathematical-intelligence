# 

Source: https://proofwiki.org/wiki/Lam%C3%A9%27s_Theorem/Least_Absolute_Remainder



Theorem
Let $a, b \in \Z_{>0}$ be (strictly) positive integers.
Let $c$ and $d$ be the number of digits in $a$ and $b$ respectively when expressed in decimal notation.
Let the Euclidean Algorithm: Least Absolute Remainder variant be employed to find the GCD of $a$ and $b$.

Then it will in general take fewer integer divisions to find $\gcd \set {a, b}$ than it does to use the conventional form of the Euclidean Algorithm.
In fact, it will take fewer than $3 \times \min \set {c, d}$ integer divisions to find $\gcd \set {a, b}$.


Proof
Lemma
Suppose it takes $n$ cycles around the Euclidean Algorithm: Least Absolute Remainder variant to find $\gcd \set {a, b}$.
Then $\min \set {a, b} \ge P_{n + 1}$, where $P_n$ denotes the $n$-th Pell number.
$\Box$

Without loss of generality suppose $a \ge b$. 
Then $\min \set {c, d}$ is the number of digits in $b$.
By Number of Digits in Number, we have:

$\min \set {c, d} = \floor {\log b} + 1$
Aiming for a contradiction, suppose it takes at least $3 \paren {\floor {\log b} + 1}$ cycles around the Euclidean Algorithm: Least Absolute Remainder variant to find $\gcd \set {a, b}$.
Then we have:














\(\ds b\)

\(\ge\)







\(\ds P_{3 \paren {\floor {\log b} + 1} + 1}\)





Lemma














\(\ds \)

\(\ge\)







\(\ds 2 \paren {1 + \sqrt 2}^{3 \paren {\floor {\log b} + 1} - 1}\)





Lower Bound of Pell Number: $P_n \ge 2 \paren {1 + \sqrt 2}^{n - 2}$














\(\ds \)

\(=\)







\(\ds \frac 2 {1 + \sqrt 2} \paren {1 + \sqrt 2}^{3 \paren {\floor {\log b} + 1} }\)




















\(\ds \)

\(>\)







\(\ds 1 \cdot \paren {1 + \sqrt 2}^{3 \log b}\)





Definition of Floor Function



For $b = 1$, both sides are equal to $1$, giving $1 > 1$, which is a contradiction.
Hence we consider $b > 1$ and take $\log$ on both sides:








\(\ds \leadsto \ \ \)





\(\ds \log b\)

\(>\)







\(\ds \paren {3 \log b} \log \paren {1 + \sqrt 2}\)





Logarithm of Power








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\log \paren {1 + \sqrt 2} }\)

\(>\)







\(\ds 3\)









However, $\dfrac 1 {\log \paren {1 + \sqrt 2} } \approx 2.6125 < 3$.
This is a contradiction.
Hence the result by Proof by Contradiction.
$\blacksquare$


Source of Name
This entry was named for Gabriel Lamé.


Historical Note
This result was demonstrated by Gabriel Lamé in $1844$.


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm




