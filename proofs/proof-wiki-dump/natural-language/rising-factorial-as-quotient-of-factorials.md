# 

Source: https://proofwiki.org/wiki/Rising_Factorial_as_Quotient_of_Factorials



Theorem
Let $x \in \Z_{\ge 0}$ be a positive integer.

Then:

$x^{\overline n} = \dfrac {\paren {x + n - 1}!} {\paren {x - 1}!} = \dfrac {\map \Gamma {x + n} } {\map \Gamma x}$
where:

$x^{\overline n}$ denotes the $n$th rising factorial power of $x$
$\map \Gamma x$ denotes the Gamma function of $x$.


Proof













\(\ds x^{\overline n}\)

\(=\)







\(\ds \prod_{j \mathop = 0}^{n - 1} \paren {x + j}\)





Definition of Rising Factorial














\(\ds \)

\(=\)







\(\ds x \paren {x + 1} \paren {x + 2} \dotsm \paren {x + n - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {x + n - 1}!} {\paren {x - 1}!}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n} } {\map \Gamma x}\)





Gamma Function Extends Factorial



$\blacksquare$


Also see
Falling Factorial as Quotient of Factorials


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: $(21)$




