# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Triangular_Numbers/Proof_by_Recursion

Theorem
The closed-form expression for the $n$th triangular number is:

$\ds T_n = \sum_{i \mathop = 1}^n i = \frac {n \paren {n + 1} } 2$


Proof
We have that:

$\ds \map T n = 1 + 2 + \dotsb + n = \sum_{i \mathop = 1}^n i$
Thus:














\(\ds \map T n\)

\(=\)







\(\ds n + \paren {n - 1} + \paren {n - 2} + \dotsb + 2 + 1\)




















\(\ds \)

\(=\)







\(\ds n + \paren {n - 1} + \paren {n - 2} + \dotsb + \paren {n - \paren {n - 2} } + \paren {n - \paren {n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \underbrace {n + n + \dotsb + n}_{n \text { times} }\)





extracting $n$ from each term














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1} + \paren {-2} + \dotsb + \paren {-\paren {n - 2} } + \paren {-\paren {n - 1} }\)




















\(\ds \)

\(=\)







\(\ds n^2 - \paren {1 + 2 + \dotsb + \paren {n - 1} }\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map T n\)

\(=\)







\(\ds n^2 - \map T {n - 1}\)










Then:




\(\text {(2)}: \quad\)









\(\ds \map T n\)

\(=\)







\(\ds n + \map T {n - 1}\)





Definition 1 of Triangular Number








\(\ds \leadsto \ \ \)





\(\ds 2 \, \map T n\)

\(=\)







\(\ds n^2 + n\)





$(1) + (2)$








\(\ds \leadsto \ \ \)





\(\ds \map T n\)

\(=\)







\(\ds \frac {n \paren {n + 1} } 2\)









$\blacksquare$





