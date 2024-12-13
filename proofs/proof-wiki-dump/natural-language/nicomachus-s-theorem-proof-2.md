# 

Source: https://proofwiki.org/wiki/Nicomachus%27s_Theorem/Proof_2

Theorem













\(\ds 1^3\)

\(=\)







\(\ds 1\)




















\(\ds 2^3\)

\(=\)







\(\ds 3 + 5\)




















\(\ds 3^3\)

\(=\)







\(\ds 7 + 9 + 11\)




















\(\ds 4^3\)

\(=\)







\(\ds 13 + 15 + 17 + 19\)




















\(\ds \vdots\)

\(\)







\(\ds \)










In general:

$\forall n \in \N_{>0}: n^3 = \paren {n^2 - n + 1} + \paren {n^2 - n + 3} + \dotsb + \paren {n^2 + n - 1}$

In particular, the first term for $\paren {n + 1}^3$ is $2$ greater than the last term for $n^3$.


Proof
From the definition:

$\paren {n^2 - n + 1} + \paren {n^2 - n + 3} + \ldots + \paren {n^2 + n - 1}$
can be written:

$\paren {n^2 - n + 1} + \paren {n^2 - n + 3} + \ldots + \paren {n^2 - n + 2 n - 1}$
Writing this in sum notation:














\(\ds \)

\(\)







\(\ds \paren {n^2 - n + 1} + \paren {n^2 - n + 3} + \ldots + \paren {n^2 - n + 2 n - 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {n^2 - n + 2 k - 1}\)




















\(\ds \)

\(=\)







\(\ds n \paren {n^2 - n} + \sum_{k \mathop = 1}^n \paren {2 k - 1}\)




















\(\ds \)

\(=\)







\(\ds n^3 - n^2 + n^2\)





Odd Number Theorem














\(\ds \)

\(=\)







\(\ds n^3\)









$\blacksquare$


Source of Name
This entry was named for Nicomachus of Gerasa.





