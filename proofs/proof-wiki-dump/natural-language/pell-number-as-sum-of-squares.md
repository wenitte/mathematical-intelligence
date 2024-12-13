# 

Source: https://proofwiki.org/wiki/Pell_Number_as_Sum_of_Squares



Theorem
Let $P_n$ be a Pell Number:

$P_n = \begin{cases} 0 & : n = 0 \\  1 & : n = 1 \\  2 P_{n - 1} + P_{n - 2} & : \text {otherwise}\end{cases}$
Then:

$P_{2 n + 1} = P_{n + 1}^2 + P_n^2$


Proof
This proof proceeds by induction.


Basis for the Induction
$\map P 0$ is the case:














\(\ds P_{2 \times 0 + 1}\)

\(=\)







\(\ds P_{0 + 1}^2 + P_0^2\)




















\(\ds 1\)

\(=\)







\(\ds 1^2 + 0^2\)









So $\map P 0$ is seen to hold.

$\map P 1$ is the case:














\(\ds P_{2 \times 1 + 1}\)

\(=\)







\(\ds P_{1 + 1}^2 + P_1^2\)




















\(\ds 5\)

\(=\)







\(\ds 2^2 + 1^2\)









So $\map P 1$ is seen to hold.


Induction Hypothesis
Now we need to show that, if $\map P {n - 1}$ and $\map P n$ are true, where $n \ge 1$, then it logically follows that $\map P {n + 1}$ is true.

So this is our induction hypotheses:

$P_{2 n - 1} = P_n^2 + P_{n - 1}^2$
$P_{2 n + 1} = P_{n + 1}^2 + P_n^2$
from which we are to show:

$P_{2 n + 3} = P_{n + 2}^2 + P_{n + 1}^2$


Induction Step
This is our induction step:














\(\ds P_{2 n + 3}\)

\(=\)







\(\ds 2 P_{2 n + 2} + P_{2 n + 1}\)





Definition of Pell Numbers














\(\ds \)

\(=\)







\(\ds 2 \paren {2 P_{2 n + 1} + P_{2 n} } + P_{2 n + 1}\)





Definition of Pell Numbers














\(\ds \)

\(=\)







\(\ds 5 P_{2 n + 1} + 2 P_{2 n}\)




















\(\ds \)

\(=\)







\(\ds 5 \paren {P_{n + 1}^2 + P_n^2} + \paren {P_{2 n + 1} - P_{2 n - 1} }\)





induction hypothesis and Definition of Pell Numbers














\(\ds \)

\(=\)







\(\ds 5 \paren {P_{n + 1}^2 + P_n^2} + \paren {\paren {P_{n + 1}^2 + P_n^2 } - \paren {P_n^2 + P_{n - 1}^2 } }\)





induction hypothesis














\(\ds \)

\(=\)







\(\ds 5 \paren {P_{n + 1}^2 + P_n^2} + \paren {P_{n + 1}^2 - P_{n - 1}^2 }\)





simplifying














\(\ds \)

\(=\)







\(\ds 5 \paren {P_{n + 1}^2 + P_n^2} + \paren {P_{n + 1} + P_{n - 1} }\paren {P_{n + 1} - P_{n - 1} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 5 P_{n + 1}^2 + 5 P_n^2 + \paren {P_{n + 1} + P_{n + 1} - 2 P_n} 2 P_n\)





Definition of Pell Numbers














\(\ds \)

\(=\)







\(\ds 5 P_{n + 1}^2 + P_n^2 + 4 P_{n + 1} P_n\)




















\(\ds \)

\(=\)







\(\ds P_{n + 1}^2 + P_n^2 + 4 P_n P_{n + 1} + 4 P_{n + 1}^2\)




















\(\ds \)

\(=\)







\(\ds P_{n + 1}^2 + \paren {P_n + 2 P_{n + 1} }^2\)





Square of Sum














\(\ds \)

\(=\)







\(\ds P_{n + 1}^2 + P_{n + 2}^2\)





Definition of Pell Numbers




The result follows by induction.
$\blacksquare$





