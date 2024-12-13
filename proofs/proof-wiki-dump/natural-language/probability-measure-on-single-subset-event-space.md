# 

Source: https://proofwiki.org/wiki/Probability_Measure_on_Single-Subset_Event_Space

Theorem
Let $\EE$ be an experiment whose sample space is $\Omega$.
Let $\O \subsetneqq A \subsetneqq \Omega$.
Let $\Sigma := \set {\O, A, \Omega \setminus A, \Omega}$ be the event space of $\EE$.

Let $\Pr: \Sigma \to \R$ be a probability measure on $\struct {\Omega, \Sigma}$.
Then $\Pr$ has the form:




\(\text {(Pr 1)}: \quad\)









\(\ds \map \Pr \O\)

\(=\)







\(\ds 0\)










\(\text {(Pr 2)}: \quad\)









\(\ds \map \Pr A\)

\(=\)







\(\ds p\)










\(\text {(Pr 3)}: \quad\)









\(\ds \map \Pr {\Omega \setminus A}\)

\(=\)







\(\ds 1 - p\)










\(\text {(Pr 4)}: \quad\)









\(\ds \map \Pr \Omega\)

\(=\)







\(\ds 1\)









for some $p \in \R$ satisfying $0 \le p \le 1$.


Proof
From Event Space from Single Subset of Sample Space, we have that $\Sigma$ is an event space.
Recall the Kolmogorov axioms:





\((1)\)  

$:$  





  \(\ds \forall A \in \Sigma:\)



   \(\ds 0 \)

  \(\ds \le \)  

\(\ds  \map \Pr A \le 1 \)   

  The probability of an event occurring is a real number between $0$ and $1$


\((2)\)  

$:$  









   \(\ds \map \Pr \Omega \)

  \(\ds = \)  

\(\ds  1 \)   

  The probability of some elementary event occurring in the sample space is $1$


\((3)\)  

$:$  









   \(\ds \map \Pr {\bigcup_{i \mathop \ge 1} A_i} \)

  \(\ds = \)  

\(\ds  \sum_{i \mathop \ge 1} \map \Pr {A_i} \)   

  where $\set {A_1, A_2, \ldots}$ is a countable (possibly countably infinite) set of pairwise disjoint events




















  That is, the probability of any one of countably many pairwise disjoint events occurring




















  is the sum of the probabilities of the occurrence of each of the individual events


First we determine that $\Pr$ as defined is actually a probability measure.
Axiom $(1)$ and axiom $(2)$ are fulfilled trivially by definition.

Then we note that, apart from $\O$, $\set {A, \Omega \setminus A}$ are the only pairwise disjoint events whose union is $\Omega$.
Hence by definition of $\Pr$ we see that axiom $(3)$ degenerates to:














\(\ds \map \Pr {A \cup \paren {\Omega \setminus A} }\)

\(=\)







\(\ds \map \Pr \Omega\)




















\(\ds \)

\(=\)







\(\ds 1\)





$\text {Pr 4}$














\(\ds \)

\(=\)







\(\ds p + \paren {1 - p}\)





Definition of $p$














\(\ds \)

\(=\)







\(\ds \map \Pr A + \map \Pr {\Omega \setminus A}\)





$\text {Pr 2}$ and $\text {Pr 3}$



and thus axiom $(3)$ is fulfilled.
Thus $\Pr$ is indeed a probability measure.
$\Box$

Now it is established that a probability measure on $\Sigma$ is of the form of $\Pr$ as defined.
First we note that from Probability of Empty Event is Zero:

$\map \Pr \O  = 0$
Hence $\text {Pr 1}$ is satisfied.

From Axiom $(2)$ we have that $\map \Pr \Omega = 1$
Hence $\text {Pr 4}$ is satisfied.

By definition of probability measure, $\map \Pr A$ is between $0$ and $1$ inclusive.
That is:

$\map \Pr A = p$
for some $p \in \R$ such that $0 \le p \le 1$.
This is exactly $\text {Pr 2}$, which is hence seen to be satisfied.

Then we note that from Probability of Event not Occurring:

$\map \Pr {\Omega \setminus A} = 1 - \map \Pr A$
That is:

$\map \Pr {\Omega \setminus A} = 1 - p$
Hence $\text {Pr 3}$ is satisfied.

Thus it has been proved that a probability measure on such an an event space $\Sigma$ has to be of the form $\Pr$ as defined.
$\blacksquare$


Proof
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.3$: Probabilities: Example $10$




