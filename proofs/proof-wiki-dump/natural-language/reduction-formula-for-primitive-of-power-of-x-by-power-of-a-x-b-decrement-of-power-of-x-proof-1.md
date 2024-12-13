# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_Power_of_x_by_Power_of_a_x_%2B_b/Decrement_of_Power_of_x/Proof_1

Theorem
$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^m \paren {a x + b}^{n + 1} } {\paren {m + n + 1} a} - \frac {m b} {\paren {m + n + 1} a} \int x^{m - 1} \paren {a x + b}^n \rd x$


Proof
Let $s \in \Z$. 














\(\ds v\)

\(=\)







\(\ds \paren {a x + b}^s\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds a s \paren {a x + b}^{s - 1}\)





Power Rule for Derivatives and Derivatives of Function of $a x + b$




Let $u \dfrac {\d v} {\d x} = x^m \paren {a x + b}^n$.
Then:














\(\ds u\)

\(=\)







\(\ds \frac {x^m \paren {a x + b}^n} {a s \paren {a x + b}^{s - 1} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {x^m} {a s} \paren {a x + b}^{n - s + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {m x^{m - 1} } {a s} \paren {a x + b}^{n - s + 1} + \frac {x^m} {a s} a \paren {n - s + 1} \paren {a x + b}^{n - s}\)





above rules and Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {x^{m - 1} } {a s} \paren {a x + b}^{n - s} \paren {m \paren {a x + b} + a \paren {n - s + 1} x}\)





extracting $\dfrac {x^{m - 1} } {a s} \paren {a x + b}^{n - s}$ as a factor




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {x^{m - 1} } {a s} \paren {a x + b}^{n - s} \paren {m b + a \paren {m + n - s + 1} x}\)





rearranging




Let $s$ be selected such that $m + n + 1 - s = 0$.
Then $s = m + n + 1$.
Thus $(2)$ after rearrangement becomes:

$\dfrac {\d u} {\d x} = \dfrac {m b x^{m - 1} \paren {a x + b}^{n - s} } {\paren {m + n + 1} a}$

Then:














\(\ds u v\)

\(=\)







\(\ds \frac {x^m} {a s} \paren {a x + b}^{n - s + 1} \paren {a x + b}^s\)




















\(\ds \)

\(=\)







\(\ds \frac {x^m \paren {a x + b}^{n + 1} } {\paren {m + n + 1} a}\)









and:














\(\ds v \frac {\d u} {\d x}\)

\(=\)







\(\ds \paren {a x + b}^s \frac {m b x^{m - 1} \paren {a x + b}^{n - s} } {\paren {m + n + 1} a}\)




















\(\ds \)

\(=\)







\(\ds \frac {m b x^{m - 1} \paren {a x + b}^n} {\paren {m + n + 1} a}\)










Thus by Integration by Parts:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^m \paren {a x + b}^{n + 1} } {\paren {m + n + 1} a} - \frac {m b} {\paren {m + n + 1} a} \int x^{m - 1} \paren {a x + b}^n \rd x$
$\blacksquare$





