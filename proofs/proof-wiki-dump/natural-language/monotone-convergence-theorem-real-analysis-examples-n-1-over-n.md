# 

Source: https://proofwiki.org/wiki/Monotone_Convergence_Theorem_(Real_Analysis)/Examples/n_-_1_over_n

Example of Use of Monotone Convergence Theorem (Real Analysis)
The sequence $\sequence {a_n}_{n \mathop \ge 1}$ defined as:

$a_n = \dfrac {n - 1} n$
is convergent to the limit $1$.


Proof
From Set of Numbers of form n - 1 over n is Bounded Above, $\sequence {a_n}$ is bounded above with supremum $1$.
Then we have that:










\(\ds \forall n \in \N_{\ge 2}: \, \)



\(\ds a_{n + 1} - a_n\)

\(=\)







\(\ds \dfrac {\paren {n + 1} - 1} {n + 1} - \dfrac {n - 1} n\)




















\(\ds \)

\(=\)







\(\ds \dfrac n {n + 1} - \dfrac {n - 1} n\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n^2 - \paren {n + 1} \paren {n - 1} } {\paren {n - 1} n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n^2 - \paren {n^2 - 1} } {\paren {n - 1} n}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {n - 1} n}\)





simplifying














\(\ds \)

\(>\)







\(\ds 0\)





as both $n > 0$ and $n - 1 > 0$




When $n = 1$ we have:














\(\ds a_{n + 1} - a_n\)

\(=\)







\(\ds \dfrac {\paren {1 + 1} - 1} {1 + 1} - \dfrac {1 - 1} 1\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 - \dfrac 0 1\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2\)




















\(\ds \)

\(>\)







\(\ds 0\)









So:

$\forall n \in \N_{>0}: a_{n + 1} - a_n > 0$
Thus $\sequence {a_n}$ is strictly increasing.
The result follows from the Monotone Convergence Theorem (Real Analysis).
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: $\S 4.18$: Examples: $\text{(i)}$




