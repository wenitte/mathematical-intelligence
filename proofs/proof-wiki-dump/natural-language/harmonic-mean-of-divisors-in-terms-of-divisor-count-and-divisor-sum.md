# 

Source: https://proofwiki.org/wiki/Harmonic_Mean_of_Divisors_in_terms_of_Divisor_Count_and_Divisor_Sum

Theorem
Let $n \in \Z_{>0}$ be a positive integer.
The harmonic mean of the divisors of $n$ is given by:

$\map H n = \dfrac {n \, \map {\sigma_0} n} {\map {\sigma_1} n}$
where:

$\map {\sigma_0} n$ denotes the divisor count function: the number of divisors of $n$
$\map {\sigma_1} n$ denotes the divisor sum function: the sum of the divisors of $n$.


Proof













\(\ds \frac 1 {\map H n}\)

\(=\)







\(\ds \frac 1 {\map {\sigma_0} n} \paren {\sum_{d \mathop \divides n} \frac 1 d}\)





Definition of Harmonic Mean














\(\ds \sum_{d \mathop \divides n} \frac 1 d\)

\(=\)







\(\ds \frac {\map {\sigma_1} n} n\)





Sum of Reciprocals of Divisors equals Abundancy Index








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\map H n}\)

\(=\)







\(\ds \frac {\map {\sigma_1} n} {n \, \map {\sigma_0} n}\)














\(\ds \leadsto \ \ \)





\(\ds \map H n\)

\(=\)







\(\ds \frac {n \, \map {\sigma_0} n} {\map {\sigma_1} n}\)









$\blacksquare$


Sources
1948: Øystein Ore: On the averages of the divisors of a number (Amer. Math. Monthly Vol. 55, no. 10: pp. 615 – 619)  www.jstor.org/stable/2305616




