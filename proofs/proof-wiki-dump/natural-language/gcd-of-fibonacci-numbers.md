# 

Source: https://proofwiki.org/wiki/GCD_of_Fibonacci_Numbers



Theorem
Let $F_k$ be the $k$th Fibonacci number.

Then:

$\forall m, n \in \Z_{> 2}: \gcd \set {F_m, F_n} = F_{\gcd \set {m, n} }$
where $\gcd \set {a, b}$ denotes the greatest common divisor of $a$ and $b$.


Proof
From the initial definition of Fibonacci numbers, we have:

$F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3$
Without loss of generality, let $m \le n$.
Let $h$ be $\gcd \set {m, n}$.
Let $a$ and $b$ be integers such that $m = h a$ and $n = \map h {a + b}$.
$a$ and $a + b$ are coprime by Integers Divided by GCD are Coprime.
Therefore, $a$ and $b$ are coprime by Integer Combination of Coprime Integers.














\(\ds \gcd \set {F_m, F_n}\)

\(=\)







\(\ds \gcd \set {F_{h a}, F_{h a - 1} F_{h b} + F_{h a} F_{h b + 1} }\)





Honsberger's Identity














\(\ds \)

\(=\)







\(\ds \gcd \set {F_{h a}, F_{h a - 1} F_{h b} }\)





GCD with Remainder



Let $u$ and $v$ be integers such that $F_{h a} = u F_h$ and $F_{h b} = v F_h$, whose existence is proved by Divisibility of Fibonacci Number.
We have that $F_{h a}$ and $F_{h a - 1}$ are coprime by Consecutive Fibonacci Numbers are Coprime.
Therefore, $u$ and $F_{h a - 1}$ are coprime by Divisor of One of Coprime Numbers is Coprime to Other.














\(\ds \gcd \set {F_{h a}, F_{h a - 1} F_{h b} }\)

\(=\)







\(\ds F_h \gcd \set {u, v F_{h a - 1} }\)





Honsberger's Identity














\(\ds \)

\(=\)







\(\ds F_h \gcd \set {u, v}\)





Solution of Linear Diophantine Equation














\(\ds \)

\(=\)







\(\ds \gcd \set {F_m, F_{n - m} }\)









Therefore:

$\forall m, n \in \Z_{>2} : \gcd \set {F_m, F_n} = \gcd \set {F_m, F_{n - m} }$
This can be done recurrently to produce the result, in a fashion similar to the Euclidean Algorithm. 
Since $a$ and $b$ are coprime, the result would be $\gcd \set {F_h, F_h}$.

Therefore:

$\forall m, n > 2 : \gcd \set {F_m, F_n} = F_{\gcd \set {m, n} }$
$\blacksquare$


Historical Note
This result was reported by François Édouard Anatole Lucas in $1876$, according to Donald E. Knuth in his The Art of Computer Programming: Volume 1: Fundamental Algorithms, 3rd ed..
The specific outlet in which he published this is being sought.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: $(7)$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




