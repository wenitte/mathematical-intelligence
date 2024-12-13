# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_Power_of_a_x_%2B_b_by_Power_of_p_x_%2B_q/Decrement_of_Power


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.
Theorem
$\ds \int \paren {a x + b}^m \paren {p x + q}^n \rd x = \frac {\paren {a x + b}^{m + 1} \paren {p x + q}^n} {\paren {m + n + 1} a} - \frac {n \paren {b p - a q} } {\paren {m + n + 1} a} \int \paren {a x + b}^m \paren {p x + q}^{n - 1} \rd x$


Proof
Aiming for an expression in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
in order to use the technique of Integration by Parts, let:














\(\ds v\)

\(=\)







\(\ds \paren {a x + b}^s\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds a s \paren {a x + b}^{s - 1}\)





Derivative of Power and Derivative of Function of Constant Multiple: Corollary




In order to make $u \dfrac {\d v} {\d x}$ equal to the integrand, let:














\(\ds u\)

\(=\)







\(\ds \frac {\paren {a x + b}^{m - s + 1} } {a s} \paren {p x + q}^n\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {a \paren {m - s + 1} \paren {a x + b}^{m - s} \paren {p x + q}^n + p n \paren {a x + b}^{m - s + 1} \paren {p x + q}^{n - 1} } {a s}\)





Product Rule for Derivatives and above














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^{m - s} \paren {p x + q}^{n - 1} } {a s} \paren {a \paren {m - s + 1} \paren {p x + q} + p n \paren {a x + b} }\)





extracting common factor














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^{m - s} \paren {p x + q}^{n - 1} } {a s} \paren {a p x \paren {m - s + 1 + n} + a q \paren {m - s + 1} + p b n}\)





separating out terms in $x$




Select $s$ such that $m - s + n + 1 = 0$, and so $s = m + n + 1$:














\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {\paren {a x + b}^{m - s} \paren {p x + q}^{n - 1} } {a \paren {m + n + 1} } \paren {a q \paren {m - \paren {m + n + 1} + 1} + p b n}\)





term in $x$ vanishes














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^{m - s} \paren {p x + q}^{n - 1} } {a \paren {m + n + 1} } \paren {n \paren {b p - a q} }\)





simplifying



Other instances of $s$ are left as they are, anticipating that they will cancel out later.

Thus:














\(\ds \)

\(\)







\(\ds \int \paren {a x + b}^m \paren {p x + q}^n \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {a x + b}^{m - s + 1} } {a s} \paren {p x + q}^n a s \paren {a x + b}^{s - 1} \rd x\)





in the form $\ds \int u \frac {\d v} {\d x} \rd x$














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^{m - s + 1} } {a s} \paren {p x + q}^n \paren {a x + b}^s\)





in the form $\ds u v - \int v \frac {\d u} {\d x} \rd x$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {a x + b}^s \frac {\paren {a x + b}^{m - s} \paren {p x + q}^{n - 1} } {a \paren {m + n + 1} } \paren {n \paren {p b - a q} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^{m + 1} \paren {p x + q}^n} {\paren {m + n + 1} a} - \frac {n \paren {b p - a q} } {\paren {m + n + 1} a} \int \paren {a x + b}^m \paren {p x + q}^{n - 1} \rd x\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also defined as
This can also be reported as:

$\ds \int \paren {a x + b}^m \paren {p x + q}^n \rd x = \frac {\paren {a x + b}^m \paren {p x + q}^{n + 1} } {\paren {m + n + 1} p} + \frac {m \paren {b p - a q} } {\paren {m + n + 1} p} \int \paren {a x + b}^{m - 1} \paren {p x + q}^n \rd x$
by interchanging the roles of $m$ and $n$.





