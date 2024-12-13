# 

Source: https://proofwiki.org/wiki/Multiplication_Property_of_Characteristic_Functions

Theorem
Let $X$ and $Y$ be independent random variables on a probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $\phi_X$ and $\phi_Y$ denote the characteristic functions of $X$ and $Y$ respectively.

Then:

$\phi_{X + Y} = \phi_X \phi_Y$


Proof
Let $i = \sqrt{-1}$.
Let $\expect X$ denote the expectation of $X$.














\(\ds \map {\phi_{X + Y} } t\)

\(=\)







\(\ds \expect {e^{i t \paren {X + Y} } }\)





Definition of Characteristic Function of Random Variable














\(\ds \)

\(=\)







\(\ds \expect {e^{i t X} e^{i t Y} }\)




















\(\ds \)

\(=\)







\(\ds \expect {e^{i t X} } \expect {e^{ i t Y} }\)





Functions of Independent Random Variables are Independent, Expected Value of Product is Product of Expected Value














\(\ds \)

\(=\)







\(\ds \map {\phi_X} t \map {\phi_Y} t\)









Hence: 

$\phi_{X + Y} = \phi_X \phi_Y$
$\blacksquare$


Sources
2005: Neil A. Weiss: A Course in Probability: $\S 11.1$




