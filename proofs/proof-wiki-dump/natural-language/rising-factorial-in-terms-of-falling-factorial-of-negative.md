# 

Source: https://proofwiki.org/wiki/Rising_Factorial_in_terms_of_Falling_Factorial_of_Negative

Theorem
$x^{\overline k} = \paren {-1}^k \paren {-x}^{\underline k}$
where:

$x^{\underline k}$ is the $k$ to the $x$ falling
$x^{\overline k}$ is the $k$ to the $x$ rising.


Proof













\(\ds \paren {-x}^{\underline k}\)

\(=\)







\(\ds \prod_{j \mathop = 0}^{k - 1} \paren {-x - j}\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{k - 1} \paren {-1} \paren {x + j}\)




















\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{k - 1} \paren {-1} \prod_{j \mathop = 0}^{k - 1} \paren {x + j}\)





Product of Products














\(\ds \)

\(=\)







\(\ds \paren {-1}^k \prod_{j \mathop = 0}^{k - 1} \paren {x + j}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^k x^{\overline k}\)





Definition of Rising Factorial








\(\ds \leadsto \ \ \)





\(\ds \paren {-1}^k \paren {-x}^{\underline k}\)

\(=\)







\(\ds \paren {-1}^{2 k} x^{\overline k}\)





multiplying both sides by $\paren {-1}^k$














\(\ds \)

\(=\)







\(\ds x^{\overline k}\)





$-1$ to an even power is $1$



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: $(20)$




