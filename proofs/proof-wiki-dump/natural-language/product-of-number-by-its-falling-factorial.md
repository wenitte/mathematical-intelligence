# 

Source: https://proofwiki.org/wiki/Product_of_Number_by_its_Falling_Factorial

Theorem
Let $x^{\underline n}$ denote the $n$th falling factorial power of $x$.
Then:

$x x^{\underline n} = x^{\underline {n + 1} } + n x^{\underline n}$


Proof













\(\ds x x^{\underline n}\)

\(=\)







\(\ds \paren {x - n + n} x^{\underline n}\)




















\(\ds \)

\(=\)







\(\ds \paren {x - n} x^{\underline n} + n x^{\underline n}\)




















\(\ds \)

\(=\)







\(\ds \paren {x - n} \prod_{j \mathop = 0}^{n - 1} \paren {x - j} + n x^{\underline n}\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^n \paren {x - j} + n x^{\underline n}\)





Definition of Continued Product














\(\ds \)

\(=\)







\(\ds x^{\underline {n + 1} } + n x^{\underline n}\)





Definition of Falling Factorial



$\blacksquare$





