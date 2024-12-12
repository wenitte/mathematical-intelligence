# 

Source: https://proofwiki.org/wiki/Addition_Law_of_Probability/Proof_2

Theorem
$\map \Pr {A \cup B} = \map \Pr A + \map \Pr B - \map \Pr {A \cap B}$


Proof
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


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.4$: Probability spaces: $(15)$




