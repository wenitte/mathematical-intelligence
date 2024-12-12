# 

Source: https://proofwiki.org/wiki/Covariance_of_Linear_Combination_of_Random_Variables_with_Another

Theorem
Let $X, Y, Z$ be random variables. 
Let $a, b$ be real numbers.

Then: 

$\cov {a X + b Y, Z} = a \cov {X, Z} + b \cov {Y, Z}$


Proof













\(\ds \cov {a X + b Y, Z}\)

\(=\)







\(\ds \expect {\paren {a X + b Y} Z} - \expect {a X + b Y} \expect Z\)





Covariance as Expectation of Product minus Product of Expectations














\(\ds \)

\(=\)







\(\ds a \expect {X Z} + b \expect {Y Z} - \paren {a \expect X + b \expect Y} \expect Z\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds a \paren {\expect {X Z} - \expect X \expect Z} + b \paren {\expect {Y Z} - \expect Y \expect Z}\)




















\(\ds \)

\(=\)







\(\ds a \cov {X, Z} + b \cov {Y, Z}\)





Covariance as Expectation of Product minus Product of Expectations



$\blacksquare$





