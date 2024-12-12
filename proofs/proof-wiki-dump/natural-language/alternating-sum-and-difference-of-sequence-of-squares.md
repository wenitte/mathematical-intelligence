# 

Source: https://proofwiki.org/wiki/Alternating_Sum_and_Difference_of_Sequence_of_Squares



Theorem













\(\ds \sum_{j \mathop = 1}^{2 n} \paren {-1}^{j - 1} j^2\)

\(=\)







\(\ds 1^2 - 2^2 + 3^2 - \cdots + \paren {2 n - 1} - \paren {2 n}^2\)




















\(\ds \)

\(=\)







\(\ds -n \paren {2 n + 1}\)









Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\ds \forall n \ge 1: \sum_{j \mathop = 1}^{2 n} \paren {-1}^{j - 1} j^2 = -n \paren {2 n + 1}$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \sum_{j \mathop = 1}^2 \paren {-1}^{j - 1} j^2\)

\(=\)







\(\ds 1^2 - 2^2\)




















\(\ds \)

\(=\)







\(\ds -3\)




















\(\ds \)

\(=\)







\(\ds -1 \paren {2 \times 1 + 1}\)









Thus $\map P 1$ is seen to be true.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \sum_{j \mathop = 1}^{2 k} \paren {-1}^{j - 1} j^2 = -k \paren {2 k + 1}$

Then we need to show:

$\ds \sum_{j \mathop = 1}^{2 \paren {k + 1} } \paren {-1}^{j - 1} j^2 = -\paren {k + 1} \paren {2 \paren {k + 1} + 1}$


Induction Step
This is our induction step:














\(\ds \sum_{j \mathop = 1}^{2 \paren {k + 1} } \paren {-1}^{j - 1} j^2\)

\(=\)







\(\ds \sum_{j \mathop = 1}^{2 k} \paren {-1}^{j - 1} j^2 + \paren {2 \paren {k + 1} - 1}^2 - \paren {2 \paren {k + 1} }^2\)




















\(\ds \)

\(=\)







\(\ds -k \paren {2 k + 1} + \paren {2 k + 1}^2 - \paren {2 k + 2}^2\)





Induction hypothesis and some simplification














\(\ds \)

\(=\)







\(\ds -2 k^2 - k + 4 k^2 + 4 k + 1 - 4 k^2 - 8 k - 4\)





multiplying out














\(\ds \)

\(=\)







\(\ds -2 k^2 - 5 k - 3\)




















\(\ds \)

\(=\)







\(\ds -\paren {k + 1} \paren {2 k + 3}\)




















\(\ds \)

\(=\)







\(\ds -\paren {k + 1} \paren {2 \paren {k + 1} + 1}\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \ge 1: \sum_{j \mathop = 1}^{2 n} \paren {-1}^{j - 1} j^2 = -n \paren {2 n + 1}$
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: The Method of Induction: Exercises $\text {II}$: $4$




