# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Triangular_Numbers/Proof_by_Telescoping_Sum

Theorem
The closed-form expression for the $n$th triangular number is:

$\ds T_n = \sum_{i \mathop = 1}^n i = \frac {n \paren {n + 1} } 2$


Proof
Observe that:














\(\ds \sum_{i \mathop = 1}^n \paren {\paren {i + 1}^2 - i^2}\)

\(=\)







\(\ds -\sum_{i \mathop = 1}^n \paren {i^2 - \paren {i + 1} ^2}\)




















\(\ds \)

\(=\)







\(\ds -\paren {1 - \paren {n + 1}^2}\)





Telescoping Series














\(\ds \)

\(=\)







\(\ds \paren {n + 1}^2 - 1\)









Moreover, we have:

$\paren {i + 1}^2 - i^2 = 2 i + 1$
And also:

$\paren {n + 1}^2 - 1 = n^2 + 2 n$
Combining these results, we obtain:














\(\ds n + 2 \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds n^2 + 2 n\)














\(\ds \leadsto \ \ \)





\(\ds 2 \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds n \left({n + 1}\right)\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds \frac {n \paren {n + 1} } 2\)









This concludes the proof.
$\blacksquare$





