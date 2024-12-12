# 

Source: https://proofwiki.org/wiki/Basel_Problem_as_Infinite_Product

Theorem
$\ds \dfrac {\pi^2} 6 = \prod_{p \mathop \in \mathbb P} \dfrac {p^2} {p^2 - 1}$


Proof
From Sum of Reciprocals of Powers as Euler Product:

$\ds \sum_{n \mathop \ge 1} \dfrac 1 {n^z} = \prod_p \frac 1 {1 - p^{-z} }$
for $z \in \C$ such that $\map \Re z > 1$.
Putting $z = 2$:














\(\ds \sum_{n \mathop \ge 1} \dfrac 1 {n^2}\)

\(=\)







\(\ds \prod_p \frac 1 {1 - p^{-2} }\)




















\(\ds \)

\(=\)







\(\ds \prod_p \frac {p^2} {p^2 - 1}\)





multiplying top and bottom by $p^2$



The result follows from Riemann Zeta Function of $2$.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41972 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41971 \ldots$




