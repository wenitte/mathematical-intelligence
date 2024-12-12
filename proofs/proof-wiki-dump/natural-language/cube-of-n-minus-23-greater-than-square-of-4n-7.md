# 

Source: https://proofwiki.org/wiki/Cube_of_n_minus_23_Greater_than_Square_of_(4n-7)



Theorem
Let $n \in \Z$ such that $n \ge 12$.
Then:

$n^3 - 23 > \paren {4 n - 7}^2$


Proof
The proof proceeds by induction.
For all $n \in \Z$ such that $n \ge 12$, let $\map P n$ be the proposition:

$n^3 - 23 > \paren {4 n - 7}^2$


Basis for the Induction
$\map P {12}$ is the case:














\(\ds 12^3 - 23\)

\(=\)







\(\ds 1728 - 23\)




















\(\ds \)

\(=\)







\(\ds 1705\)




















\(\ds \paren {4 \times 12 - 7}^2\)

\(=\)







\(\ds 41^2\)




















\(\ds \)

\(=\)







\(\ds 1681\)














\(\ds \leadsto \ \ \)





\(\ds 12^3 - 23\)

\(>\)







\(\ds \paren {4 n - 7}^2\)









Thus $\map P {12}$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 12$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$k^3 - 23 > \paren {4 k - 7}^2$

from which it is to be shown that:

$\paren {k + 1}^3 - 23 > \paren {4 \paren {k + 1} - 7}^2$


Induction Step
This is the induction step:














\(\ds \paren {k + 1}^3 - 23\)

\(=\)







\(\ds k^3 + 3 k^2 + 3 k + 1 - 23\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren {k^3 - 23} + \paren {3 k^2 + 3 k + 1}\)




















\(\ds \paren {4 \paren {k + 1} - 7}^2\)

\(=\)







\(\ds \paren {\paren {4 k - 7} + 4}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {4 k - 7}^2 + 2 \times 4 \times \paren {4 k - 7} + 4^2\)





Square of Sum




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren {4 k - 7}^2 + 32 k - 40\)





simplifying




Then we calculate:














\(\ds \paren {3 k^2 + 3 k + 1} - \paren {32 k - 40}\)

\(=\)







\(\ds 3 k^2 - 29 k + 40\)




















\(\ds \)

\(\ge\)







\(\ds \paren {3 \times 12} k - 29 k + 40\)





as $k \ge 12$














\(\ds \)

\(=\)







\(\ds 7 k + 40\)





simplification














\(\ds \)

\(>\)







\(\ds 0\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \paren {3 k^2 + 3 k + 1}\)

\(>\)







\(\ds \paren {32 k - 40}\)









Thus we have:














\(\ds \paren {k^3 - 23}\)

\(>\)







\(\ds \paren {4 k - 7}^2\)





Induction Hypothesis














\(\ds \paren {3 k^2 + 3 k + 1}\)

\(>\)







\(\ds \paren {32 k - 40}\)





from $(3)$








\(\ds \leadsto \ \ \)





\(\ds \paren {k^3 - 23} + \paren {3 k^2 + 3 k + 1}\)

\(>\)







\(\ds \paren {4 k - 7}^2 + \paren {32 k - 40}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {k + 1}^3 - 23\)

\(>\)







\(\ds \paren {4 \paren {k + 1} - 7}^2\)





from $(1)$ and $(2)$



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 12}: n^3 - 23 > \paren {4 n - 7}^2$
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): induction: 1. (in mathematics)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): induction: 1. (in mathematics)




