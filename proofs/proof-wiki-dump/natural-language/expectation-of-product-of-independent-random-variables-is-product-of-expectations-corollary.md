# 

Source: https://proofwiki.org/wiki/Expectation_of_Product_of_Independent_Random_Variables_is_Product_of_Expectations/Corollary

Corollary to Expectation of Product of Independent Random Variables is Product of Expectations
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space. 
Let $X$ and $Y$ be integrable random variables that are independent.

Then:

$\expect {X Y} = \expect X \expect Y$


Proof
We have: 














\(\ds \expect {X Y}\)

\(=\)







\(\ds \expect {\paren {X^+ - X^-} \paren {Y^+ - Y^-} }\)




















\(\ds \)

\(=\)







\(\ds \expect {X^+ Y^+ - X^+ Y^- - X^- Y^+ + X^- Y^-}\)




















\(\ds \)

\(=\)







\(\ds \expect {X^+ Y^+} - \expect {X^+ Y^-} - \expect {X^- Y^+} + \expect {X^- Y^-}\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \expect {X^+} \expect {Y^+} - \expect {X^+} \expect {Y^-} - \expect {X^-} \expect {Y^+} + \expect {X^- Y^-}\)





Expectation of Product of Independent Random Variables is Product of Expectations














\(\ds \)

\(=\)







\(\ds \expect {X^+} \paren {\expect {Y^+} - \expect {Y^-} } - \expect {X^-} \paren {\expect {Y^+} - \expect {Y^-} }\)




















\(\ds \)

\(=\)







\(\ds \expect {X^+} \expect {Y^+ - Y^-} - \expect {X^-} \expect {Y^+ - Y^-}\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \expect {X^+} \expect Y - \expect {X^-} \expect Y\)




















\(\ds \)

\(=\)







\(\ds \expect Y \expect {X^+ - X^-}\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \expect X \expect Y\)









$\blacksquare$





