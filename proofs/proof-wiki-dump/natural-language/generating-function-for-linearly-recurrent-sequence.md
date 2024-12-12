# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Linearly_Recurrent_Sequence



Theorem
Let $\sequence {a_n}$ be a linearly recurrent sequence defined as:

$a_n = \begin{cases} b_n & : 1 \le n \le m \\ c_1 a_{n - 1} + c_2 a_{n - 2} + \cdots + c_m a_{n - m} & : n > m \end{cases}$
where:

$m \in \Z_{>0}$ is a (strictly) positive integer
$b_1, \ldots, b_m$ are constants.

Then the generating function for $\sequence {a_n}$ is of the form:

$\map G z = \dfrac {\map P z} {1 - c_1 z - c_2 z^2 - \cdots - c_m z^m}$
where $\map P z$ is a polynomial  in $z$ given by $b_1 z + b_2 z^2 + \cdots + b_m z^m$.


Proof













\(\ds \map G z\)

\(=\)







\(\ds \sum_{n \mathop \ge 1} a_n z^n\)





Definition of Generating Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop > m} a_n z^n + \sum_{n \mathop = 1}^m a_n z^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop > m} \paren {\sum_{n \mathop = 1}^m c_k a_{n-k} } z^n + \sum_{n \mathop = 1}^m b_n z^n\)





from sequence definition














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^m c_k \paren {\sum_{n \mathop > m}a_{n-k} z^n} + \sum_{n \mathop = 1}^m b_n z^n\)





Exchange of Order of Summation














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^m c_k \paren {z^m \map G z} + \sum_{n \mathop = 1}^m b_n z^n\)





Generating Function by Power of Parameter














\(\ds \)

\(=\)







\(\ds \map G z \sum_{n \mathop = 1}^m c_k z^m + \sum_{n \mathop = 1}^m b_n z^n\)














\(\ds \leadsto \ \ \)





\(\ds \map G z \paren {1 - \sum_{n \mathop = 1}^m c_k z^m}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^m b_n z^n\)














\(\ds \leadsto \ \ \)





\(\ds \map G z\)

\(=\)







\(\ds \dfrac {\sum_{n \mathop = 1}^m b_n z^n} {1 - \sum_{n \mathop = 1}^m c_k z^m}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {b_1 z + b_2 z^2 + \cdots + b_m z^m} {1 - c_1 z - c_2 z^2 - \cdots - c_m z^m}\)









$\blacksquare$


Example
The Fibonacci numbers are a sequence $\sequence {F_n}$ of integers which is formally defined recursively as:

$F_n = \begin {cases} 0 & : n = 0 \\
1 & : n = 1 \\
F_{n - 1} + F_{n - 2} & : \text {otherwise} \end {cases}$ 
for all $n \in \Z_{\ge 0}$.

By this theorem, the generating function for $\sequence {F_n}$ is given by:

$\map G z = \dfrac 1 {1 - z - z^2}$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions




