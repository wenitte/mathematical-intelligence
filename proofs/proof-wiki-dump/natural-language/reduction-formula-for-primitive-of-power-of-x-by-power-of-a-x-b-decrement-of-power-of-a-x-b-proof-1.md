# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_Power_of_x_by_Power_of_a_x_%2B_b/Decrement_of_Power_of_a_x_%2B_b/Proof_1

Theorem
$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^n} {m + n + 1} + \frac {n b} {m + n + 1} \int x^m \paren {a x + b}^{n - 1} \rd x$


Proof
Let $s \in \Z$. 














\(\ds v\)

\(=\)







\(\ds x^s\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds s x^{s - 1}\)





Power Rule for Derivatives




Let $u \dfrac {\d v} {\d x} = x^m \paren {a x + b}^n$.
Then:














\(\ds u\)

\(=\)







\(\ds \frac {x^m \paren {a x + b}^n} {s x^{s - 1} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {x^{m - s + 1} \paren {a x + b}^n} s\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {x^{m - s + 1} a n \paren {a x + b}^{n - 1} } s + \frac {\paren {m - s + 1} x^{m - s} \paren {a x + b}^n} s\)





Primitive of Power of $a x + b$ and Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {x^{m - s} } s \paren {a x + b}^{n - 1} \paren {a n x + \paren {m - s + 1} \paren {a x + b} }\)





extracting $\dfrac {x^{m - s} \paren {a x + b}^n} s$ as a factor














\(\ds \)

\(=\)







\(\ds \frac {x^{m - s} } s \paren {a x + b}^{n - 1} \paren {a n x + a m x - a s x + a x + m b - s b + b}\)





multiplying out




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {x^{m - s} } s \paren {a x + b}^{n - 1} \paren {\paren {m + n + 1 - s} a x + \paren {m - s + 1} b}\)





gathering terms




Let $s$ be selected such that $m + n + 1 - s = 0$.
Then $s = m + n + 1$.
Thus $(2)$ after rearrangement becomes:

$\dfrac {\d u} {\d x} = \dfrac {x^{m - s} } {m + n + 1} \paren {a x + b}^{n - 1} \paren {\paren {m - s + 1} b}$

Then:














\(\ds u v\)

\(=\)







\(\ds \frac {x^{m - s + 1} \paren {a x + b}^n} {m + n + 1} x^s\)




















\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} \paren {a x + b}^n} {m + n + 1}\)









and:














\(\ds v \frac {\d u} {\d x}\)

\(=\)







\(\ds x^s \dfrac {x^{m - s} } {m + n + 1} \paren {a x + b}^{n - 1} \paren {\paren {m - s + 1} b}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x^m} {m + n + 1} \paren {a x + b}^{n - 1} \paren {\paren {m - \paren {m + n + 1} + 1} b}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x^m} {m + n + 1} \paren {a x + b}^{n - 1} \paren {-n b}\)










Thus by Integration by Parts:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^n} {m + n + 1} + \frac {n b} {m + n + 1} \int x^m \paren {a x + b}^{n - 1} \rd x$
$\blacksquare$





