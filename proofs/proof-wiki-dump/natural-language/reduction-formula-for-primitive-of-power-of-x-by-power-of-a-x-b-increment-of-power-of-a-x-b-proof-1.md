# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_Power_of_x_by_Power_of_a_x_%2B_b/Increment_of_Power_of_a_x_%2B_b/Proof_1

Theorem
$\ds \int x^m \paren {a x + b}^n \rd x = \frac {-x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {n + 1} b} + \frac {m + n + 2} {\paren {n + 1} b} \int x^m \paren {a x + b}^{n + 1} \rd x$


Proof
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Decrement of Power of $x$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^n} {m + n + 1} + \frac {n b} {m + n + 1} \int x^m \paren {a x + b}^{n - 1} \rd x$

Substituting $n + 1$ for $n$:














\(\ds \int x^m \paren {a x + b}^{n + 1} \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {m + n + 2} + \frac {\paren {n + 1} b} {m + n + 2} \int x^m \paren {a x + b}^n \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\paren {n + 1} b} {m + n + 2} \int x^m \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac {-x^{m + 1} \paren {a x + b}^{n + 1} } {m + n + 2} + \int x^m \paren {a x + b}^{n + 1} \rd x\)





rearrangement








\(\ds \leadsto \ \ \)





\(\ds \int x^m \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac {m + n + 2} {\paren {n + 1} b} \frac {-x^{m + 1} \paren {a x + b}^{n + 1} } {m + n + 2} + \frac {m + n + 2} {\paren {n + 1} b} \int x^m \paren {a x + b}^{n + 1} \rd x\)





rearrangement








\(\ds \leadsto \ \ \)





\(\ds \int x^m \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac {-x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {n + 1} b} + \frac {m + n + 2} {\paren {n + 1} b} \int x^m \paren {a x + b}^{n + 1} \rd x\)





rearrangement



$\blacksquare$





