# 

Source: https://proofwiki.org/wiki/Recurrence_Relation_for_Fibonomial_Coefficients

Theorem
$\dbinom n k_\FF = F_{k - 1} \dbinom {n - 1} k_\FF + F_{n - k + 1} \dbinom {n - 1} {k - 1}_\FF$
where:

$\dbinom n k_\FF$ denotes a Fibonomial coefficient
$F_{k - 1}$ etc. denote Fibonacci numbers.


Proof













\(\ds \)

\(\)







\(\ds F_{k - 1} \dbinom {n - 1} k_\FF + F_{n - k + 1} \dbinom {n - 1} {k - 1}_\FF\)




















\(\ds \)

\(=\)







\(\ds F_{k - 1} \dfrac {F_{n - 1} F_{n - 2} \cdots F_{n - k + 1} F_{n - k} } {F_k F_{k - 1} F_{k - 2} F_{k - 3} \cdots F_1} + F_{n - k + 1} \dfrac {F_{n - 1} F_{n - 2} \cdots F_{n - k + 1} } {F_{k - 1} F_{k - 2} F_{k - 3} \cdots F_1}\)





Definition of Fibonomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac {F_{k - 1} F_{n - 1} F_{n - 2} \cdots F_{n - k + 1} F_{n - k} + F_{n - k + 1} F_k F_{n - k + 1} F_{n - 1} F_{n - 2} \cdots F_{n - k + 1} } {F_k F_{k - 1} F_{k - 2} F_{k - 3} \cdots F_1}\)




















\(\ds \)

\(=\)







\(\ds F_{n - 1} F_{n - 2} \cdots F_{n - k + 1} \dfrac {F_{k - 1} F_{n - k} + F_{n - k + 1} F_k} {F_k F_{k - 1} F_{k - 2} F_{k - 3} \cdots F_1}\)




















\(\ds \)

\(=\)







\(\ds F_{n - 1} F_{n - 2} \cdots F_{n - k + 1} \dfrac {F_{\left({n - k}\right) + k} } {F_k F_{k - 1} F_{k - 2} F_{k - 3} \cdots F_1}\)





Honsberger's Identity: $F_{m + n} = F_{m - 1} F_n + F_m F_{n + 1}$














\(\ds \)

\(=\)







\(\ds \dfrac {F_n F_{n - 1} F_{n - 2} \cdots F_{n - k + 1} } {F_k F_{k - 1} F_{k - 2} F_{k - 3} \cdots F_1}\)




















\(\ds \)

\(=\)







\(\ds \dbinom n k_\FF\)





Definition of Fibonomial Coefficient



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $29 \ \text{(b)}$




