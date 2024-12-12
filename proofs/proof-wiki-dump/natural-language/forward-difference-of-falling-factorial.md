# 

Source: https://proofwiki.org/wiki/Forward_Difference_of_Falling_Factorial

Theorem
Let $f: \R \to \R$ be a real function.
Let $\Delta$ denote the forward difference operator.

Let $x^{\underline m}$ be the $m$th falling factorial of $x$

Then:

$\map \Delta {x^{\underline m} } = m x^{\underline {m - 1} }$


Proof
From the definitions:














\(\ds \map \Delta {x^{\underline m} }\)

\(=\)







\(\ds \paren {x + 1}^{\underline m} - x^{\underline m}\)





Definition of Forward Difference Operator














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 0}^{m - 1} \paren {x + 1 - k} - \prod_{k \mathop = 0}^{m - 1} \paren {x - k}\)





Definition of $m$th Falling Factorial














\(\ds \)

\(=\)







\(\ds \paren {x + 1} \prod_{k \mathop = 1}^{m - 1} \paren {x + 1 - k} - \paren {x - m + 1} \prod_{k \mathop = 0}^{m - 2} \paren {x - k}\)




















\(\ds \)

\(=\)







\(\ds \paren {x + 1} \prod_{k \mathop = 0}^{m - 2} \paren {x - k} - \paren {x - m + 1} \prod_{k \mathop = 0}^{m - 2} \paren {x - k}\)





Translation of Index Variable of Product














\(\ds \)

\(=\)







\(\ds \paren {\paren {x + 1} - \paren {x - m + 1} } \prod_{k \mathop = 0}^{m - 2} \paren {x - k}\)




















\(\ds \)

\(=\)







\(\ds m x^{\underline{m - 1} }\)





Definition of $m$th Falling Factorial



$\blacksquare$





