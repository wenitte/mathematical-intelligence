# 

Source: https://proofwiki.org/wiki/Falling_Factorial_of_Sum_of_Integers

Theorem
Let $r \in \R$ be a real number.
Let $a, b \in \Z$ be (positive) integers.
Then:

$r^{\underline {a + b} } = r^{\underline a} \paren {r - a}^{\underline b}$
where $r^{\underline a}$ denotes the $a$th falling factorial of $r$.


Proof













\(\ds r^{\underline {a + b} }\)

\(=\)







\(\ds \prod_{j \mathop = 0}^{a + b - 1} \paren {r - j}\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \paren {\prod_{j \mathop = 0}^{a - 1} \paren {r - j} } \paren {\prod_{j \mathop = a}^{a + b - 1} \paren {r - j} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{j \mathop = 0}^{a - 1} \paren {r - j} } \paren {\prod_{j \mathop = 0}^{b - 1} \paren {r - a - j} }\)





Translation of Index Variable of Product














\(\ds \)

\(=\)







\(\ds r^{\underline a} \paren {r - a}^{\underline b}\)





Definition of Falling Factorial



$\blacksquare$





