# 

Source: https://proofwiki.org/wiki/Independent_Events_are_Independent_of_Complement



Theorem
Let $A$ and $B$ be events in a probability space $\struct {\Omega, \Sigma, \Pr}$.

Then $A$ and $B$ are independent if and only if $A$ and $\Omega \setminus B$ are independent.


Corollary
$A$ and $B$ are independent if and only if $\Omega \setminus A$ and $\Omega \setminus B$ are independent.


General Result
Let $A_1, A_2, \ldots, A_m$ be events in a probability space $\struct {\Omega, \Sigma, \Pr}$.
Then $A_1, A_2, \ldots, A_m$ are independent if and only if $\Omega \setminus A_1, \Omega \setminus A_2, \ldots, \Omega \setminus A_m$ are also independent.


Proof
For $A$ and $B$ to be independent:

$\map \Pr {A \cap B} = \map \Pr A \map \Pr B$
We need to show that:

$\map \Pr {A \cap \paren {\Omega \setminus B} } = \map \Pr A \map \Pr {\Omega \setminus B}$

First note that $\Omega \setminus B \equiv \relcomp \Omega B$ where $\complement_\Omega$ denotes the relative complement.
From Set Difference as Intersection with Relative Complement, we have then that $A \cap \paren {\Omega \setminus B} = A \setminus B$.
From Set Difference and Intersection form Partition, we have that:

$\paren {A \setminus B} \cup \paren {A \cap B} = A$
$\paren {A \setminus B} \cap \paren {A \cap B} = \O$
So from the Kolmogorov axioms, we have that:

$\map \Pr A = \map \Pr {A \setminus B} + \map \Pr {A \cap B}$
Hence:














\(\ds \map \Pr {A \setminus B}\)

\(=\)







\(\ds \map \Pr A - \map \Pr {A \cap B}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr A - \map \Pr A \map \Pr B\)





as $A$ and $B$ are independent














\(\ds \)

\(=\)







\(\ds \map \Pr A \paren {1 - \map \Pr B}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr A \map \Pr {\Omega \setminus B}\)





Elementary Properties of Probability Measure




But as $A \setminus B = A \cap \paren {\Omega \setminus B}$ we have:

$\map \Pr {A \cap \paren {\Omega \setminus B} } = \map \Pr A \map \Pr {\Omega \setminus B}$
which is what we wanted to show.

Now, suppose $A$ and $\Omega \setminus B$ are independent.
From the above, we have that $A$ and $\Omega \setminus \paren {\Omega \setminus B}$ are independent.
But $\Omega \setminus \paren {\Omega \setminus B} = B$ from Relative Complement of Relative Complement hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.7$: Independent Events: Exercise $22$




