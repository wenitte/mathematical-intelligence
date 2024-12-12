# 

Source: https://proofwiki.org/wiki/Discrete_Uniform_Distribution_gives_rise_to_Probability_Measure

Theorem
Let $\EE$ be an experiment.
Let the probability space $\struct {\Omega, \Sigma, \Pr}$ be defined as:

$\Omega = \set {\omega_1, \omega_2, \ldots, \omega_n}$
$\Sigma = \powerset \Omega$
$\forall A \in \Sigma: \map \Pr A = \dfrac 1 n \card A$
where:

$\powerset \Omega$ denotes the power set of $\Omega$
$\card A$ denotes the cardinality of $A$.

Then $\Pr$ is a probability measure on $\struct {\Omega, \Sigma}$.


Proof
From Power Set of Sample Space is Event Space we have that $\Sigma$ is an event space.
$\Box$

We check the axioms defining a probability measure:




\((\text I)\)  

$:$  





  \(\ds \forall A \in \Sigma:\)



   \(\ds \map \Pr A \)

  \(\ds \ge \)  

\(\ds  0 \)   

  


\((\text {II})\)  

$:$  









   \(\ds \map \Pr \Omega \)

  \(\ds = \)  

\(\ds  1 \)   

  


\((\text {III})\)  

$:$  





  \(\ds \forall A \in \Sigma:\)



   \(\ds \map \Pr A \)

  \(\ds = \)  

\(\ds  \sum_{\bigcup \set e \mathop = A} \map \Pr {\set e} \)   

  where $e$ denotes the elementary events of $\EE$


Axiom $\text I$ is seen to be satisfied by the observation that the cardinality of a set is never negative.
Hence $\map \Pr A \ge 0$.
$\Box$

Then we have:














\(\ds \map \Pr \Omega\)

\(=\)







\(\ds \dfrac 1 n \card \Omega\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 n \times n\)





Definition of $\Omega$: it has been defined as having $n$ elements














\(\ds \)

\(=\)







\(\ds 1\)









Axiom $\text {II}$ is thus seen to be satisfied.
$\Box$

Let $A = \set {\omega_{r_1}, \omega_{r_2}, \ldots, \omega_{r_k} }$ where $k = \card A$.
Then by Union of Set of Singletons:

$A = \set {\omega_{r_1} } \cup \set {\omega_{r_2} } \cup \cdots \cup \set {\omega_{r_k} }$

Hence:














\(\ds \map \Pr A\)

\(=\)







\(\ds \dfrac 1 n \card A\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 n \card {\set {\omega_{r_1}, \omega_{r_2}, \ldots, \omega_{r_k} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 n \card {\set {\omega_{r_1} } \cup \set {\omega_{r_2} } \cup \cdots \cup \set {\omega_{r_k} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 n \paren {\underbrace {1 + 1 + \cdots + 1}_{\text {$k$ times} } }\)




















\(\ds \)

\(=\)







\(\ds \underbrace {\dfrac 1 n + \dfrac 1 n + \cdots + \dfrac 1 n}_{\text {$k$ times} }\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {\set {\omega_{r_1} } } + \map \Pr {\set {\omega_{r_2} } } + \cdots + \map \Pr {\set {\omega_{r_k} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\bigcup \set e \mathop = A} \map \Pr {\set e}\)









Hence Axiom $\text {III}$ is thus seen to be satisfied.
$\Box$

All axioms are seen to be satisfied.
Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.3$: Probabilities: Example $11$




