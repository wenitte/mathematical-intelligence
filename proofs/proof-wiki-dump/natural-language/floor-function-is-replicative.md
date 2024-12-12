# 

Source: https://proofwiki.org/wiki/Floor_Function_is_Replicative



Theorem
The floor function is a replicative function in the sense that:

$\ds \forall n \in \Z_{> 0}: \sum_{k \mathop = 0}^{n - 1} \floor {x + \frac k n} = \floor {n x}$


Proof













\(\ds \sum_{k \mathop = 0}^{n - 1} \floor {x + \dfrac k n}\)

\(=\)







\(\ds \floor {x n + \floor {x + 1} \paren {\ceiling n - n} }\)





Summation over $k$ of $\floor {x + \dfrac k y}$, setting $y = n$














\(\ds \)

\(=\)







\(\ds \floor {x n + \floor {x + 1} \paren {n - n} }\)





Real Number is Integer iff equals Ceiling














\(\ds \)

\(=\)







\(\ds \floor {n x + \floor {x + 1} \times 0}\)




















\(\ds \)

\(=\)







\(\ds \floor {n x}\)









$\blacksquare$


Historical Note
The fact that the Floor Function is Replicative was discovered by  Charles Hermite, who published this result in $1884$.


Sources
1884: Charles Hermite: Sur quelques conséquences arithmétiques des Formules de la théorie des fonctions elliptiques (Acta Math. Vol. 5: pp. 297 – 330)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $38$




