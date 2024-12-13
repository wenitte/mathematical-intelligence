# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_%2B_b_by_Root_of_p_x_%2B_q/a_p_less_than_0/Proof_1

Theorem
Let $a, b, p, q \in \R$ such that $a p \ne b q$.
Let $a p < 0$.
Then:

$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \dfrac 2 {\sqrt {-a p} } \map \arctan {\sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } } } + C$
for all $x \in \R$ such that $\paren {a x + b} \paren {p x + q} > 0$.


Proof
Let us make the substitution:




\(\text {(1)}: \quad\)









\(\ds u\)

\(=\)







\(\ds \sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } }\)





This is valid, because as $a p < 0$ we have $\dfrac {-p} a > 0$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d u} {\d x}\)

\(=\)







\(\ds \sqrt {\dfrac {-p} a} \map {\dfrac \d {\d x} } {\sqrt {\dfrac {a x + b} {p x + q} } }\)





Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac {-p} a} \dfrac 1 {2 \sqrt {\dfrac {a x + b} {p x + q} } } \times \map {\dfrac \d {\d x} } {\dfrac {a x + b} {p x + q} }\)





Power Rule for Derivatives, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \sqrt {\dfrac {-p} a} \dfrac {\sqrt {p x + q} } {\sqrt {a x + b} } \times \dfrac {\paren {p x + q} \map {\dfrac \d {\d x} } {a x + b} - \paren {a x + b} \map {\dfrac \d {\d x} } {p x + q} } {\paren {p x + q}^2}\)





Quotient Rule for Derivatives, some simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \sqrt {\dfrac {-p} a} \dfrac {\sqrt {p x + q} } {\sqrt {a x + b} } \times \dfrac {a \paren {p x + q} - p \paren {a x + b} } {\paren {p x + q}^2}\)





Derivative of Identity Function, Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \sqrt {\dfrac {-p} a} \dfrac {\sqrt {p x + q} } {\sqrt {a x + b} } \times \dfrac {a p x + a q - p a x - p b} {\paren {p x + q}^2}\)





mulitplying out














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \sqrt {\dfrac {-p} a} \dfrac {\sqrt {p x + q} } {\sqrt {a x + b} } \times \dfrac {a q - b p} {\paren {p x + q}^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \sqrt {\dfrac {-p} a} \dfrac 1 {\sqrt {p x + q} \sqrt {a x + b} } \times \dfrac {a q - b p} {p x + q}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d u}\)

\(=\)







\(\ds 2 \sqrt {\dfrac {-a} p} \paren {\sqrt {p x + q} \sqrt {a x + b} } \times \dfrac {p x + q} {a q - b p}\)





Derivative of Inverse Function








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \int \frac {\d u} {\sqrt {\paren {a x + b} \paren {p x + q} } } 2 \sqrt {\dfrac {-a} p} \paren {\sqrt {p x + q} \sqrt {a x + b} } \times \dfrac {p x + q} {a q - b p}\)





Integration by Substitution




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds 2 \sqrt {\dfrac {-a} p} \int \dfrac {p x + q} {a q - b p} \rd u\)





simplifying




Then:














\(\ds u\)

\(=\)







\(\ds \sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } }\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds u^2\)

\(=\)







\(\ds \dfrac {-p \paren {a x + b} } {a \paren {p x + q} }\)














\(\ds \leadsto \ \ \)





\(\ds u^2 \paren {a \paren {p x + q} }\)

\(=\)







\(\ds -p \paren {a x + b}\)














\(\ds \leadsto \ \ \)





\(\ds u^2 a p x + u^2 a q\)

\(=\)







\(\ds -p a x - p b\)














\(\ds \leadsto \ \ \)





\(\ds u^2 a p x + p a x\)

\(=\)







\(\ds -u^2 a q - p b\)














\(\ds \leadsto \ \ \)





\(\ds a p x \paren {u^2 + 1}\)

\(=\)







\(\ds -u^2 a q - p b\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \dfrac 1 {-a p} \dfrac {a q u^2 + p b} {u^2 + 1}\)










Hence:














\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds 2 \sqrt {\dfrac {-a} p} \int \dfrac {p x + q} {a q - b p} \rd u\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 2 \sqrt {\dfrac {-a} p} \int \dfrac {p \paren {\frac 1 {-a p} \frac {a q u^2 + p b} {u^2 + 1} } + q} {a q - b p} \rd u\)





substituting for $x$ from $(3)$














\(\ds \)

\(=\)







\(\ds 2 \sqrt {\dfrac {-a} p} \int \dfrac {a q u^2 + p b - a q \paren {u^2 + 1} } {-a \paren {u^2 + 1} \paren {a q - b p} } \rd u\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {-a p} } \int \dfrac {a q u^2 + p b - a q u^2 - a q} {\paren {u^2 + 1} \paren {b p - a q} } \rd u\)





multiplying out and consolidating constants














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {-a p} } \int \dfrac {b p - a q} {\paren {u^2 + 1} \paren {b p - a q} } \rd u\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {-a p} } \int \dfrac {\d u} {u^2 + 1}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {-a p} } \arctan u + C\)





Primitive of Arctangent Function














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {-a p} } \map \arctan {\sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } } } + C\)





substituting for $u$ from $(1)$



$\blacksquare$





