# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_fourth_plus_a_fourth/Partial_Fraction_Expansion

Lemma for Primitive of Reciprocal of $x^4 + a^4$
$\dfrac 1 {x^4 + a^4} = \dfrac {x + a \sqrt 2} {2 a^3 \sqrt 2 \paren {x^2 + a x \sqrt 2 + a^2} } - \dfrac {x - a \sqrt 2} {2 a^3 \sqrt 2 \paren {x^2 - a x \sqrt 2 + a^2} }$


Proof













\(\ds \frac 1 {x^4 + a^4}\)

\(\equiv\)







\(\ds \frac 1 {\paren {x^2 + a x \sqrt 2 + a^2} \paren {x^2 - a x \sqrt 2 + a^2} }\)





Sum of Two Fourth Powers














\(\ds \)

\(\equiv\)







\(\ds \frac {A x + B} {x^2 + a x \sqrt 2 + a^2} + \frac {C x + D} {x^2 - a x \sqrt 2 + a^2}\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds \paren {A x + B} \paren {x^2 - a x \sqrt 2 + a^2} + \paren {C x + D} \paren {x^2 + a x \sqrt 2 + a^2}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(\equiv\)







\(\ds A x^3 + B x^2 - A a x^2 \sqrt 2 - B a x \sqrt 2 + A x a^2 + B a^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds C x^3 + D x^2 + C a x^2 \sqrt 2 + D a x \sqrt 2 + C x a^2 + D a^2\)










Equating coefficients of $x^3$ in $(1)$:














\(\ds A + C\)

\(=\)







\(\ds 0\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds -A\)

\(=\)







\(\ds C\)










Equating coefficients of $x^2$ in $(1)$:














\(\ds -A a \sqrt 2 + B + C a \sqrt 2 + D\)

\(=\)







\(\ds 0\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 2 C a \sqrt 2 + B + D\)

\(=\)







\(\ds 0\)





substituting for $A$ from $(2)$




Equating coefficients of $x$ in $(1)$:














\(\ds -B a \sqrt 2 + A a^2 + D a \sqrt 2 + C a^2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -B a \sqrt 2 - C a^2 + D a \sqrt 2 + C a^2\)

\(=\)







\(\ds 0\)





substituting for $A$ from $(2)$








\(\ds \leadsto \ \ \)





\(\ds -B + D\)

\(=\)







\(\ds 0\)










\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds D\)










Setting $x = 0$ in $(1)$:














\(\ds B a^2 + D a^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds 2 D a^2\)

\(=\)







\(\ds 1\)





substituting for $B$ from $(4)$








\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds \frac 1 {2 a^2}\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac 1 {2 a^2}\)





from $(4)$








\(\ds \leadsto \ \ \)





\(\ds 2 C a \sqrt 2 + \frac 1 {a^2}\)

\(=\)







\(\ds 0\)





substituting for $B$ and $D$ in $(3)$








\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac {-1} {2 a^3 \sqrt 2}\)





substituting for $B$ and $D$ in $(3)$








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac 1 {2 a^3 \sqrt 2}\)





from $(2)$




Summarising:














\(\ds A\)

\(=\)







\(\ds \frac 1 {2 a^3 \sqrt 2}\)




















\(\ds B\)

\(=\)







\(\ds \frac 1 {2 a^2}\)




















\(\ds C\)

\(=\)







\(\ds \frac {-1} {2 a^3 \sqrt 2}\)




















\(\ds D\)

\(=\)







\(\ds \frac 1 {2 a^2}\)










Thus:














\(\ds \frac 1 {x^4 + a^4}\)

\(=\)







\(\ds \frac {\frac 1 {2 a^3 \sqrt 2} x + \frac 1 {2 a^2} } {x^2 + a x \sqrt 2 + a^2} + \frac {\frac {-1} {2 a^3 \sqrt 2} x + \frac 1 {2 a^2} } {x^2 - a x \sqrt 2 + a^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {x + a \sqrt 2} {2 a^3 \sqrt 2 \paren {x^2 + a x \sqrt 2 + a^2} } - \frac {x - a \sqrt 2} {2 a^3 \sqrt 2 \paren {x^2 - a x \sqrt 2 + a^2} }\)









$\blacksquare$





