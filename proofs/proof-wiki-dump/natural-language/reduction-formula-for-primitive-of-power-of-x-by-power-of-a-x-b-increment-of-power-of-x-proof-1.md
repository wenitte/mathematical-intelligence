# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_Power_of_x_by_Power_of_a_x_%2B_b/Increment_of_Power_of_x/Proof_1

Theorem
$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {m + 1} b} - \frac {\paren {m + n + 2} a} {\paren {m + 1} b} \int x^{m + 1} \paren {a x + b}^n \rd x$


Proof
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Decrement of Power of $x$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^m \paren {a x + b}^{n + 1} } {\paren {m + n + 1} a} - \frac {m b} {\paren {m + n + 1} a} \int x^{m - 1} \paren {a x + b}^n \rd x$

Substituting $m + 1$ for $m$:














\(\ds \int x^{m + 1} \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {m + n + 2} a} - \frac {\paren {m + 1} b} {\paren {m + n + 2} a} \int x^m \paren {a x + b}^n \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\paren {m + 1} b} {\paren {m + n + 2} a} \int x^m \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {m + n + 2} a} - \int x^{m + 1} \paren {a x + b}^n \rd x\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \int x^m \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac {\paren {m + n + 2} a} {\paren {m + 1} b} \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {m + n + 2} a} - \frac {\paren {m + n + 2} a} {\paren {m + 1} b} \int x^{m + 1} \paren {a x + b}^n \rd x\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {m + 1} b} - \frac {\paren {m + n + 2} a} {\paren {m + 1} b} \int x^{m + 1} \paren {a x + b}^n \rd x\)





rearranging



$\blacksquare$





