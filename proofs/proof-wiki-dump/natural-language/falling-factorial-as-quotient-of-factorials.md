# 

Source: https://proofwiki.org/wiki/Falling_Factorial_as_Quotient_of_Factorials



Theorem
Let $x \in \Z_{\ge 0}$ be a positive integer.

Then:

$x^{\underline n} = \dfrac {x!} {\paren {x - n}!} = \dfrac {\map \Gamma {x + 1} } {\map \Gamma {x - n + 1} }$
where:

$x^{\underline n}$ denotes the $n$th falling factorial power of $x$.
$\map \Gamma x$ denotes the Gamma function of $x$.


Proof













\(\ds x^{\underline n}\)

\(=\)







\(\ds \prod_{j \mathop = 0}^{n - 1} \paren {x - j}\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds x \paren {x - 1} \paren {x - 2} \dotsm \paren {x - n + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x!} {\paren {x - n}!}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {x + 1} } {\map \Gamma {x - n + 1} }\)





Definition of Gamma Function



$\blacksquare$


Also see
Rising Factorial as Quotient of Factorials


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: $(21)$




