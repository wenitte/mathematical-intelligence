# 

Source: https://proofwiki.org/wiki/Derivative_of_Function_of_Constant_Multiple/Corollary

Corollary to Derivative of Function of Constant Multiple
Let $f$ be a real function which is differentiable on $\R$.
Let $a, b \in \R$ be constants.

Then:

$\map {\dfrac \d {\d x} } {\map f {a x + b} } = a \, \map {\dfrac \d {\map \d {a x + b} } } {\map f {a x + b} }$


Proof
First it is shown that $\map {\dfrac \d {\d x} } {a x + b} = a$:




\(\text {(1)}: \quad\)









\(\ds \map {\dfrac \d {\d x} } {a x + b}\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {a x} + \map {\dfrac \d {\d x} } b\)





Sum Rule for Derivatives














\(\ds \)

\(=\)







\(\ds a + 0\)





Derivative of Function of Constant Multiple and Derivative of Constant














\(\ds \)

\(=\)







\(\ds a\)










Next:














\(\ds \map {\dfrac \d {\d x} } {\map f {a x + b} }\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {a x + b} \, \map {\dfrac \d {\map \d {a x + b} } } {\map f {a x + b} }\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds a \map {\dfrac \d {\map \d {a x + b} } } {\map f {a x + b} }\)





from $(1)$



$\blacksquare$





