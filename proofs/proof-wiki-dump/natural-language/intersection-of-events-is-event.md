# 

Source: https://proofwiki.org/wiki/Intersection_of_Events_is_Event



Theorem
Let $\EE$ be an experiment with a probability space $\struct {\Omega, \Sigma, \Pr}$.

The event space $\Sigma$ of $\EE$ has the property that:

$A, B \in \Sigma \implies A \cap B \in \Sigma$
That is, the intersection of two events is also an event in the event space.


Proof













\(\ds A, B\)

\(\in\)







\(\ds \Sigma\)














\(\ds \leadsto \ \ \)





\(\ds \Omega \setminus A, \ \Omega \setminus B\)

\(\in\)







\(\ds \Sigma\)





Definition of Event Space: Axiom $(\text {ES} 2)$








\(\ds \leadsto \ \ \)





\(\ds \paren {\Omega \setminus A} \cup \paren {\Omega \setminus A}\)

\(\in\)







\(\ds \Sigma\)





Definition of Event Space: Axiom $(\text {ES} 3)$








\(\ds \leadsto \ \ \)





\(\ds \Omega \setminus \paren {A \cap B}\)

\(\in\)







\(\ds \Sigma\)





De Morgan's Laws: Difference with Intersection








\(\ds \leadsto \ \ \)





\(\ds \Omega \setminus \paren {\Omega \setminus \paren {A \cap B} }\)

\(\in\)







\(\ds \Sigma\)





Definition of Event Space: Axiom $(\text {ES} 2)$








\(\ds \leadsto \ \ \)





\(\ds A \cap B\)

\(\in\)







\(\ds \Sigma\)





Relative Complement of Relative Complement



$\blacksquare$


Also see
Elementary Properties of Event Space


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.2$: Outcomes and events: Exercise $1$




