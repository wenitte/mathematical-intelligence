# 

Source: https://proofwiki.org/wiki/Derivative_of_x_to_the_x/Proof_2

Theorem
$\dfrac \d {\d x} x^x = x^x \paren {\ln x + 1}$


Proof
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





