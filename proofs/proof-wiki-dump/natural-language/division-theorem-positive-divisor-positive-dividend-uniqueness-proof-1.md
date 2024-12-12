# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Positive_Dividend/Uniqueness/Proof_1

Theorem
For every pair of integers $a, b$ where $a \ge 0$ and $b > 0$, the integers $q, r$ such that $a = q b + r$ and $0 \le r < b$ are unique:

$\forall a, b \in \Z, a \ge 0, b > 0: \exists! q, r \in \Z: a = q b + r, 0 \le r < b$


Proof
It is given by Division Theorem: Positive Divisor: Positive Dividend: Existence that such $q$ and $r$ exist.

Suppose $q_1, r_1$ and $q_2, r_2$ are two pairs of $q, r$ that satisfy $a = q b + r, 0 \le r < b$.
That is:














\(\ds a\)

\(=\)







\(\ds q_1 b + r_1, 0 \le r_1 < b\)




















\(\ds a\)

\(=\)







\(\ds q_2 b + r_2, 0 \le r_2 < b\)










This gives:

$0 = b \paren {q_1 - q_2} + \paren {r_1 - r_2}$

Aiming for a contradiction, suppose that $q_1 \ne q_2$.
Without loss of generality, suppose that $q_1 > q_2$.
Then:














\(\ds q_1 - q_2\)

\(\ge\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds r_2 - r_1\)

\(=\)







\(\ds b \paren {q_1 - q_2}\)




















\(\ds \)

\(\ge\)







\(\ds b \times 1\)





as $b > 0$














\(\ds \)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds r_2\)

\(\ge\)







\(\ds r_1 + b\)




















\(\ds \)

\(\ge\)







\(\ds b\)









This contradicts the assumption that $r_2 < b$.
A similar contradiction follows from the assumption that $q_1 < q_2$.
Therefore $q_1 = q_2$ and so $r_1 = r_2$.
Thus it follows that $q$ and $r$ are unique.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 21$
1982: Martin Davis: Computability and Unsolvability (2nd ed.) ... (previous) ... (next): Appendix $1$: Some Results from the Elementary Theory of Numbers: Theorem $6$




