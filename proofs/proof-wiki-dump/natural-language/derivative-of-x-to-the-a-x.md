# 

Source: https://proofwiki.org/wiki/Derivative_of_x_to_the_a_x

Theorem
Let $x \in \R$ be a real variable whose domain is the set of (strictly) positive real numbers $\R_{>0}$.
Let $c \in \R_{>0}$ be a (strictly) positive real constant.
Then:

$\dfrac \d {\d x} x^{a x} = a x^{a x} \paren {\ln x + 1}$


Proof
Let $y := x^{a x}$.
As $x > 0$, we can take the natural logarithm of both sides:














\(\ds \ln y\)

\(=\)







\(\ds \ln x^{a x}\)




















\(\ds \)

\(=\)







\(\ds a x \ln x\)





Laws of Logarithms














\(\ds \map {\frac \d {\d x} } {\ln y}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {a x \ln x}\)





differentiating both sides with respect to $x$














\(\ds \frac 1 y \frac {\d y} {\d x}\)

\(=\)







\(\ds a \map {\frac \d {\d x} } {x \ln x}\)





Chain Rule for Derivatives and Derivative of Natural Logarithm Function














\(\ds \)

\(=\)







\(\ds a \paren {\map {\frac \d {\d x} } x \cdot \ln x + x \frac {\d} {\d x} \ln x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds a \paren {1 \cdot \ln x + x \cdot \frac 1 x}\)





Derivative of Identity Function and Derivative of Natural Logarithm Function














\(\ds \)

\(=\)







\(\ds a \paren {\ln x + 1}\)





simplification














\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds a x^{a x} \paren {\ln x + 1}\)





multiplying both sides by $y = x^{a x}$



$\blacksquare$





