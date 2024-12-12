# 

Source: https://proofwiki.org/wiki/Derivative_of_x_to_the_x



Theorem
Let $x \in \R$ be a real variable whose domain is the set of (strictly) positive real numbers $\R_{>0}$.
Then:

$\dfrac \d {\d x} x^x = x^x \paren {\ln x + 1}$


Proof 1
Note that the Power Rule cannot be used because the index is not a constant.
Let $y := x^x$.
As $x$ was stipulated to be positive, we can take the natural logarithm of both sides:














\(\ds \ln y\)

\(=\)







\(\ds \ln x^x\)




















\(\ds \)

\(=\)







\(\ds x \ln x\)





Laws of Logarithms














\(\ds \map {\frac \d {\d x} } {\ln y}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {x \ln x}\)





differentiating both sides with respect to $x$














\(\ds \frac 1 y \frac {\d y} {\d x}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {x \ln x}\)





Chain Rule for Derivatives and Derivative of Natural Logarithm Function














\(\ds \)

\(=\)







\(\ds \map {\frac \d {\d x} } x \cdot \ln x + x \frac {\d} {\d x} \ln x\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds 1 \cdot \ln x + x \cdot \frac 1 x\)





Derivative of Identity Function and Derivative of Natural Logarithm Function














\(\ds \)

\(=\)







\(\ds \ln x + 1\)





simplification














\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds x^x \paren {\ln x + 1}\)





multiplying both sides by $y = x^x$



$\blacksquare$


Proof 2
Note that the Power Rule cannot be used because the index is not a constant.














\(\ds \frac \d {\d x} x^x\)

\(=\)







\(\ds \frac \d {\d x} \map \exp {x \ln x}\)





Definition 1 of Power (Algebra)














\(\ds \)

\(=\)







\(\ds \paren {\frac \d {\map \d {x \ln x} } \map \exp {x \ln x} } \paren {\map {\frac \d {\d x} } {x \ln x} }\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \map \exp {x \ln x} \paren {\map {\frac \d {\d x} } {x \ln x} }\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds \map \exp {x \ln x} \paren {\map {\frac \d {\d x} } x \cdot \ln x + x \frac \d {\d x} \ln x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \map \exp {x \ln x} \paren {1 \cdot \ln x + x \cdot \frac 1 x}\)





Derivative of Identity Function and Derivative of Natural Logarithm Function














\(\ds \)

\(=\)







\(\ds \map \exp {x \ln x} \paren {\ln x + 1}\)





Real Multiplication Identity is One and Inverse for Real Multiplication














\(\ds \)

\(=\)







\(\ds x^x \paren {\ln x + 1}\)





Definition 1 of Power (Algebra)



$\blacksquare$


Proof 3
From Derivative of $x^{a x}$ we have:

$\dfrac \d {\d x} x^{a x} = a x^{a x} \paren {\ln x + 1}$
The result follows on setting $a = 1$.
$\blacksquare$





