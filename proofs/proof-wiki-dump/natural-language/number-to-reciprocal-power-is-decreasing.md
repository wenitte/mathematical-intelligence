# 

Source: https://proofwiki.org/wiki/Number_to_Reciprocal_Power_is_Decreasing

Theorem
The real sequence $\sequence {n^{1/n} }$ is decreasing for $n \ge 3$.


Proof
We want to show that $\paren {n + 1}^{1 / \paren {n + 1} } \le n^{1/n}$.
Thus:














\(\ds \paren {n + 1}^{1 / \paren {n + 1} }\)

\(\le\)







\(\ds n^{1/n}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {n + 1}^n\)

\(\le\)







\(\ds n^{n + 1}\)





raising both sides to the power of $n \paren {n + 1}$








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {n \paren {1 + \frac 1 n} }^n\)

\(\le\)







\(\ds n^{n + 1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {1 + \frac 1 n}^n\)

\(\le\)







\(\ds \frac {n^{n + 1} } {n^n} = n\)









But from One Plus Reciprocal to the Nth:

$\paren {1 + \dfrac 1 n}^n < 3$
Thus the reversible chain of implication can be invoked and we see that $\paren {n + 1}^{1 / \paren {n + 1} } \le n^{1/n}$ when $n \ge 3$.
So $\sequence {n^{1 / n} }$ is decreasing for $n \ge 3$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.20 \ (6)$




