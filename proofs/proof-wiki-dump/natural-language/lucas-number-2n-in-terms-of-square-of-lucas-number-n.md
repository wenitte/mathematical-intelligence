# 

Source: https://proofwiki.org/wiki/Lucas_Number_2n_in_terms_of_Square_of_Lucas_Number_n

Theorem
Let $L_n$ denote the $n$th Lucas number.

Then:

$L_{2 n} = {L_n}^2 + 2 \left({-1}\right)^n$


Proof
Let:

$\phi = \dfrac {1 + \sqrt 5} 2$
$\hat \phi = \dfrac {1 - \sqrt 5} 2$

Note that we have:














\(\ds \phi \hat \phi\)

\(=\)







\(\ds \dfrac {1 + \sqrt 5} 2 \dfrac {1 - \sqrt 5} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 - 5} 4\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds -1\)










Then:














\(\ds L_{2 n}\)

\(=\)







\(\ds \phi^{2 n} + \hat \phi^{2 n}\)





Closed Form for Lucas Numbers














\(\ds \)

\(=\)







\(\ds \phi^{2 n} + 2 \phi^n \hat \phi^n + \hat \phi^{2 n} - 2 \phi^n \hat \phi^n\)




















\(\ds \)

\(=\)







\(\ds \paren {\phi^n + \hat \phi^n}^2 - 2 \paren {-1}^n\)





simplifying, and from above: $\phi \hat \phi = -1$














\(\ds \)

\(=\)







\(\ds {L_n}^2 - 2 \paren {-1}^n\)





Closed Form for Lucas Numbers



Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $11$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $11$




