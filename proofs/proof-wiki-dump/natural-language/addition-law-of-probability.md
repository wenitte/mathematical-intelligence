# 

Source: https://proofwiki.org/wiki/Addition_Law_of_Probability



Theorem
Let $\Pr$ be a probability measure on an event space $\Sigma$.
Let $A, B \in \Sigma$.

Then:

$\map \Pr {A \cup B} = \map \Pr A + \map \Pr B - \map \Pr {A \cap B}$
That is, the probability of either event occurring equals the sum of their individual probabilities less the probability of them both occurring.

This is known as the addition law of probability.


Proof 1
By definition, a probability measure is a measure.
Hence, again by definition, it is a countably additive function.
By Measure is Finitely Additive Function, we have that $\Pr$ is an additive function.
So Additive Function is Strongly Additive can be applied directly.
$\blacksquare$


Proof 2
From Set Difference and Intersection form Partition:

$A$ is the union of the two disjoint sets $A \setminus B$ and $A \cap B$
$B$ is the union of the two disjoint sets $B \setminus A$ and $A \cap B$.

So, by the definition of probability measure:

$\map \Pr A = \map \Pr {A \setminus B} + \map \Pr {A \cap B}$
$\map \Pr B = \map \Pr {B \setminus A} + \map \Pr {A \cap B}$

From Set Difference is Disjoint with Reverse:

$\paren {A \setminus B} \cap \paren {B \setminus A} = \O$

Hence:














\(\ds \map \Pr A + \map \Pr B\)

\(=\)







\(\ds \map \Pr {A \setminus B} + 2 \map \Pr {A \cap B} + \map \Pr {B \setminus A}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {\paren {A \setminus B} \cup \paren {A \cap B} \cup \paren {B \setminus A} } + \map \Pr {A \cap B}\)





Set Differences and Intersection form Partition of Union














\(\ds \)

\(=\)







\(\ds \map \Pr {A \cup B} + \map \Pr {A \cap B}\)









Hence the result.
$\blacksquare$


Also presented as
Some sources present this result as:

$\map \Pr {A \cup B} + \map \Pr {A \cap B} = \map \Pr A + \map \Pr B$


Also known as
This result is also known as the sum rule, but then so are other results in mathematics.


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): addition law




