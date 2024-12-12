# 

Source: https://proofwiki.org/wiki/Euler_Form_of_Gamma_Function_at_Positive_Integers

Theorem
The Euler form of the Gamma function:

$\ds \map \Gamma z := \lim_{m \mathop \to \infty} \frac {m^z m!} {z \paren {z + 1} \paren {z + 2} \cdots \paren {z + m} }$
converges to the factorial function at positive integers:

$\ds \lim_{m \mathop \to \infty} \frac {m^n m!} {\paren {n + 1} \paren {n + 2} \cdots \paren {n + m} } = n!$


Proof













\(\ds \lim_{m \mathop \to \infty} \frac {m^n m!} {\paren {n + 1} \paren {n + 2} \cdots \paren {n + m} }\)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \frac {m^n m!} {\frac {\paren {n + m}!} {n!} }\)




















\(\ds \)

\(=\)







\(\ds n! \lim_{m \mathop \to \infty} \frac {m^n} {\paren {m + 1} \paren {m + 2} \cdots \paren {m + n} }\)




















\(\ds \)

\(=\)







\(\ds n!\)










Now we have from Factorial of Integer plus Reciprocal of Integer that:

$\ds \lim_{m \mathop \to \infty} \dfrac {\paren {m + n}!} {m! m^n} = 1$

Now:














\(\ds \dfrac {n! \paren {n + 1} \paren {n + 2} \cdots \paren {n + m} } {m! m^n}\)

\(=\)







\(\ds \dfrac {\paren {m + n}!} {m! m^n}\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{m \mathop \to \infty} \dfrac {n! \paren {n + 1} \paren {n + 2} \cdots \paren {n + m} } {m! m^n}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{m \mathop \to \infty} \dfrac {m! m^n} {\paren {n + 1} \paren {n + 2} \cdots \paren {n + m} }\)

\(=\)







\(\ds n!\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $8$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $22$




