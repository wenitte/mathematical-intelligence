# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Lucas_Numbers

Theorem
Let $\map G z$ be the function defined as:

$\map G z = \dfrac {2 - z} {1 - z - z^2}$

Then $\map G z$ is a generating function for the Lucas numbers.


Proof
Let the form of $\map G z$ be assumed as:














\(\ds \map G z\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} L_k z^k\)




















\(\ds \)

\(=\)







\(\ds L_0 + L_1 z + L_2 z^2 + L_3 z^3 + L_4 z^4 + \cdots\)




















\(\ds \)

\(=\)







\(\ds 2 + z + 3 z^2 + 4 z^3 + 7 z^4 + \cdots\)









where $L_n$ denotes the $n$th Lucas number.

Then:














\(\ds z \map G z\)

\(=\)







\(\ds L_0 z + L_1 z^2 + L_2 z^3 + L_3 z^4 + L_4 z^5 + \cdots\)




















\(\ds z^2 \map G z\)

\(=\)







\(\ds L_0 z^2 + L_1 z^3 + L_2 z^4 + L_3 z^5 + L_4 z^6 + \cdots\)










and so:














\(\ds \paren {1 - z - z^2} \map G z\)

\(=\)







\(\ds L_0 + \paren {L_1 - L_0} z + \paren {L_2 - L_1 - L_0} z^2 + \paren {L_3 - L_2 - L_1} z^3 + \cdots\)




















\(\ds \)

\(=\)







\(\ds L_0 + \paren {L_1 - L_0} z\)





Definition of Lucas Number: $L_n = L_{n - 1} + L_{n - 2}$














\(\ds \)

\(=\)







\(\ds 2 - z\)





Definition of Lucas Number: $L_0 = 2, L_1 = 1$



Hence the result:

$\map G z = \dfrac {2 - z} {1 - z - z^2}$
$\blacksquare$





