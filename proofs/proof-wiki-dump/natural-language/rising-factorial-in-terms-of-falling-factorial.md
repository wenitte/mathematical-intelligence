# 

Source: https://proofwiki.org/wiki/Rising_Factorial_in_terms_of_Falling_Factorial

Theorem
$x^{\overline n} = \paren {x + n - 1}^{\underline n}$
where:

$x^{\underline n}$ is the $n$th falling factorial power of $x$
$x^{\overline n}$ is the $n$th rising factorial power of $x$.


Proof













\(\ds x^{\overline n}\)

\(=\)







\(\ds \prod_{j \mathop = 0}^{n - 1} \paren {x + j}\)





Definition of Rising Factorial














\(\ds \)

\(=\)







\(\ds x \paren {x + 1} \cdots \paren {x + n - 1}\)





Definition of Continued Product














\(\ds \)

\(=\)







\(\ds \paren {x + n - 1} \paren {x + n - 2} \cdots \paren {x + 1} x\)





reversing the order














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{n - 1} \paren {\paren {x + n - 1} - j}\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \paren {x + n - 1}^{\underline n}\)





Definition of Continued Product



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: $(20)$




